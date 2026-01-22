import React, { useEffect, useRef, useState, memo } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { fetchHomePageVideo } from '../utils/homePageService';

interface VideoPlayerProps {
  videoSrc?: string;
  thumbnailSrc?: string;
  youtubeUrl?: string;
  title?: string;
}

const VideoPlayer = ({
  videoSrc,
  thumbnailSrc = "https://images.unsplash.com/photo-1654169364060-4ab129db6b8b",
  youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  title = "Sample Video"
}: VideoPlayerProps) => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeRef = useRef(1);
  const autoPlayDone = useRef(false);
  const lastTimeUpdateRef = useRef(0);
  
   console.log('🎥 [VideoPlayer] RENDER')

  const [videoUrl, setVideoUrl] = useState(videoSrc || '');
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /* ------------------ Load video URL ------------------ */

  useEffect(() => {
    let mounted = true;

    const loadVideo = async () => {
      try {
        setIsLoadingVideo(true);
        const videoData = await fetchHomePageVideo();
        if (mounted && videoData?.url) {
          setVideoUrl(videoData.url);
        }
      } catch (err) {
        console.error("Video load error:", err);
      } finally {
        if (mounted) setIsLoadingVideo(false);
      }
    };

    if (!videoSrc) loadVideo();
    else {
      setVideoUrl(videoSrc);
      setIsLoadingVideo(false);
    }

    return () => { mounted = false; };
  }, [videoSrc]);

  /* ------------------ Autoplay once ------------------ */

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl || isLoadingVideo || autoPlayDone.current) return;

    const tryAutoPlay = async () => {
      try {
        video.muted = true;
        await video.play();
        autoPlayDone.current = true;
        setIsPlaying(true);
        setHasStarted(true);
        setIsLoaded(true);
      } catch {
        // Autoplay blocked – user interaction needed
      }
    };

    video.addEventListener('canplay', tryAutoPlay);

    return () => {
      video.removeEventListener('canplay', tryAutoPlay);
    };
  }, [videoUrl, isLoadingVideo]);

  /* ------------------ Video listeners ------------------ */

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      const now = Date.now();
      if (now - lastTimeUpdateRef.current > 250) {
        setCurrentTime(video.currentTime);
        lastTimeUpdateRef.current = now;
      }
    };

    const updateDuration = () => {
      if (!isNaN(video.duration)) setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  /* ------------------ Controls ------------------ */

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (!hasStarted) {
        video.muted = false;
        await video.play();
        setHasStarted(true);
        setIsMuted(false);
      } else {
        isPlaying ? video.pause() : await video.play();
      }
    } catch (err) {
      console.error("Play error:", err);
    }
  };

  const handleProgressChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const newTime = (value[0] / 100) * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volumeRef.current;
      setIsMuted(false);
    } else {
      volumeRef.current = video.volume || 1;
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    document.fullscreenElement ? document.exitFullscreen() : video.requestFullscreen();
  };

  const openYoutube = () => window.open(youtubeUrl, '_blank');

  const formatTime = (time: number) =>
    `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, '0')}`;

  const progress = duration ? (currentTime / duration) * 100 : 0;

  /* ------------------ UI ------------------ */

  return (
    <div className="h-auto p-4 md:p-8" style={{
      background: 'linear-gradient(135deg, #E5EBEC, #95B8C4)'
    }}>
      <div className="max-w-6xl mx-auto">

        <div
          className="relative w-[90%] max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl"
          style={{ height: 500 }}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(isPlaying ? false : true)}
        >

          {isLoadingVideo ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              controls={false}
            />
          )}

          {!hasStarted && !isLoadingVideo && (
            <div className="absolute inset-0">
              <ImageWithFallback src={thumbnailSrc} alt={title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="absolute top-4 right-4">
            <Button onClick={openYoutube} size="sm" className="bg-red-700 text-white">
              <ExternalLink className="w-4 h-4 mr-1" /> Video Tour
            </Button>
          </div>

          {/* Controls */}
          <div className={`absolute bottom-0 left-0 right-0 bg-black/70 p-4 transition-all ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <Slider value={[progress]} onValueChange={handleProgressChange} max={100} step={0.1} />

            <div className="flex justify-between items-center mt-2 text-white">
              <div className="flex items-center gap-2">
                <Button onClick={togglePlay} size="sm" variant="ghost">
                  {isPlaying ? <Pause /> : <Play />}
                </Button>

                <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
              </div>

              <div className="flex items-center gap-2">
                <Button onClick={toggleMute} size="sm" variant="ghost">
                  {isMuted ? <VolumeX /> : <Volume2 />}
                </Button>

                <Button onClick={toggleFullscreen} size="sm" variant="ghost">
                  <Maximize />
                </Button>
              </div>
            </div>
          </div>

          {hasStarted && !isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default memo(VideoPlayer);
