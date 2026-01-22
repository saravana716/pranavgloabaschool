import React, { useEffect, useRef, useState, memo } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { fetchGalleryImages, type GalleryImage } from '../utils/galleryService';
import { toast } from 'sonner';

const AUTO_SCROLL_DELAY = 3000;
const CARDS_PER_VIEW = 4;

function RecentClicksSectionComponent() {
  console.log('📸 Rendered ONLY once (unless images load)');

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const desktopIndexRef = useRef(0);
  const mobileIndexRef = useRef(0);

  const desktopTimerRef = useRef<NodeJS.Timeout | null>(null);
  const mobileTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalDesktopSets = Math.ceil(images.length / CARDS_PER_VIEW);

  /* ---------------- Fetch once ---------------- */

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await fetchGalleryImages();
        if (mounted) setImages(data);
      } catch (e) {
        toast.error('Failed to load gallery images');
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  /* ---------------- Desktop auto scroll (NO STATE) ---------------- */

  useEffect(() => {
    if (!desktopTrackRef.current || totalDesktopSets <= 1) return;

    desktopTimerRef.current = setInterval(() => {
      desktopIndexRef.current =
        (desktopIndexRef.current + 1) % totalDesktopSets;

      desktopTrackRef.current!.style.transform =
        `translateX(-${desktopIndexRef.current * 100}%)`;
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (desktopTimerRef.current) clearInterval(desktopTimerRef.current);
    };
  }, [totalDesktopSets]);

  /* ---------------- Mobile auto scroll (NO STATE) ---------------- */

  useEffect(() => {
    if (!mobileTrackRef.current || images.length === 0) return;

    mobileTimerRef.current = setInterval(() => {
      mobileIndexRef.current =
        (mobileIndexRef.current + 1) % images.length;

      mobileTrackRef.current!.style.transform =
        `translateX(-${mobileIndexRef.current * 100}%)`;
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (mobileTimerRef.current) clearInterval(mobileTimerRef.current);
    };
  }, [images.length]);

  /* ---------------- Manual controls ---------------- */

  const nextDesktop = () => {
    if (!desktopTrackRef.current) return;
    desktopIndexRef.current =
      (desktopIndexRef.current + 1) % totalDesktopSets;
    desktopTrackRef.current.style.transform =
      `translateX(-${desktopIndexRef.current * 100}%)`;
  };

  const prevDesktop = () => {
    if (!desktopTrackRef.current) return;
    desktopIndexRef.current =
      (desktopIndexRef.current - 1 + totalDesktopSets) % totalDesktopSets;
    desktopTrackRef.current.style.transform =
      `translateX(-${desktopIndexRef.current * 100}%)`;
  };

  const nextMobile = () => {
    if (!mobileTrackRef.current) return;
    mobileIndexRef.current =
      (mobileIndexRef.current + 1) % images.length;
    mobileTrackRef.current.style.transform =
      `translateX(-${mobileIndexRef.current * 100}%)`;
  };

  const prevMobile = () => {
    if (!mobileTrackRef.current) return;
    mobileIndexRef.current =
      (mobileIndexRef.current - 1 + images.length) % images.length;
    mobileTrackRef.current.style.transform =
      `translateX(-${mobileIndexRef.current * 100}%)`;
  };

  /* ---------------- UI ---------------- */

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto px-4">

        <div className="flex justify-between mb-10">
          <h2 className="text-4xl font-bold">Recent Clicks</h2>

          {images.length > 0 && (
            <div className="hidden md:flex gap-2">
              <button onClick={prevDesktop}><ChevronLeft /></button>
              <button onClick={nextDesktop}><ChevronRight /></button>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">No images</div>
        ) : (
          <>
            {/* Desktop */}
            <div className="hidden md:block overflow-hidden">
              <div
                ref={desktopTrackRef}
                className="flex transition-transform duration-500"
              >
                {Array.from({ length: totalDesktopSets }).map((_, setIndex) => (
                  <div key={setIndex} className="w-full flex gap-6 flex-shrink-0">
                    {images
                      .slice(setIndex * CARDS_PER_VIEW, setIndex * CARDS_PER_VIEW + CARDS_PER_VIEW)
                      .map((img) => (
                        <div key={img.id} className="flex-1 h-80">
                          <ImageWithFallback
                            src={img.url}
                            alt={img.title || 'Gallery'}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden overflow-hidden">
              <div
                ref={mobileTrackRef}
                className="flex transition-transform duration-500"
              >
                {images.map((img) => (
                  <div key={img.id} className="w-full flex-shrink-0 h-64">
                    <ImageWithFallback
                      src={img.url}
                      alt={img.title || 'Gallery'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {!isLoading && images.length > 0 && (
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button onClick={prevMobile}><ChevronLeft /></button>
            <button onClick={nextMobile}><ChevronRight /></button>
          </div>
        )}
      </div>
    </section>
  );
}

export const RecentClicksSection = memo(RecentClicksSectionComponent);
