import { useState, useRef, useEffect } from 'react';
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

export default function VideoPlayer({ 
  videoSrc,
  thumbnailSrc = "https://images.unsplash.com/photo-1654169364060-4ab129db6b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHBsYXllciUyMHRodW1ibmFpbCUyMG1vZGVybiUyMHRlY2h8ZW58MXx8fHwxNzU4MDM4NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  title = "Sample Video"
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeRef = useRef<number>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>(videoSrc || '');
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  // Fetch video from Firestore on component mount
  useEffect(() => {
    const loadVideo = async () => {
      try {
        setIsLoadingVideo(true);
        const videoData = await fetchHomePageVideo();
        if (videoData && videoData.url) {
          setVideoUrl(videoData.url);
        }
      } catch (error) {
        console.error('Error loading video:', error);
      } finally {
        setIsLoadingVideo(false);
      }
    };

    if (!videoSrc) {
      loadVideo();
    } else {
      setVideoUrl(videoSrc);
      setIsLoadingVideo(false);
    }
  }, [videoSrc]);

  // Autoplay video when it's loaded (only once, not on every pause)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl || isLoadingVideo || hasStarted) return;

    const playVideo = async () => {
      try {
        video.muted = true; // Mute for autoplay (browser requirement)
        await video.play();
        setHasStarted(true);
        setIsPlaying(true);
        setIsLoaded(true);
      } catch (error) {
        // Autoplay failed, user interaction required
        console.log('Autoplay prevented, waiting for user interaction');
      }
    };

    const handleCanPlay = () => {
      if (!hasStarted) {
        playVideo();
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    
    // If video is already loaded, try to play
    if (video.readyState >= 3 && !hasStarted) {
      playVideo();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoUrl, isLoadingVideo, hasStarted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };
    const handleLoadedData = () => {
      setIsLoaded(true);
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };
    const handlePlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [videoUrl]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (!hasStarted) {
        setHasStarted(true);
        video.muted = false; // Unmute when user clicks play
        await video.play();
        setIsPlaying(true);
        setIsMuted(false);
      } else {
        if (isPlaying) {
          video.pause();
          setIsPlaying(false);
        } else {
          await video.play();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error('Error toggling play/pause:', error);
    }
  };

  const handleProgressChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    
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

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const openYoutube = () => {
    window.open(youtubeUrl, '_blank');
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
     <div 
      className="h-auto p-4 md:p-8"
      style={{
        background: `linear-gradient(135deg, #E5EBEC 0%, #D1DCE0 25%, #BFD4DB 50%, #A8C5D1 75%, #95B8C4 100%)`
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800 mb-2 md:mb-4">
            Discover a Standard Day at Pranav Global School

          </h1>
          <p className="text-base md:text-xl text-slate-600">
          Step into the world of learning, creativity, and fun!
Take a quick tour of how our students spend their day filled with knowledge, activities, and joy.
   </p>
        </div>
        
       <div 
      className="relative w-[90%] max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl group"
      style={{ height: '500px' }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(isPlaying ? false : true)}
    >
      {/* Video Element */}
      {isLoadingVideo ? (
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
          style={{
            pointerEvents: 'auto'
          }}
          onPlay={(e) => {
            e.stopPropagation();
            setIsPlaying(true);
            setHasStarted(true);
          }}
          onPause={(e) => {
            e.stopPropagation();
            setIsPlaying(false);
          }}
          onLoadedData={() => {
            setIsLoaded(true);
            const video = videoRef.current;
            if (video && video.duration && !isNaN(video.duration)) {
              setDuration(video.duration);
            }
          }}
          onLoadedMetadata={() => {
            const video = videoRef.current;
            if (video && video.duration && !isNaN(video.duration)) {
              setDuration(video.duration);
            }
          }}
        />
      )}

      {/* Thumbnail Overlay (shown only if video hasn't started and we have a thumbnail) */}
      {!hasStarted && !isLoadingVideo && thumbnailSrc && (
        <div className="absolute inset-0 bg-black">
          <ImageWithFallback
            src={thumbnailSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* YouTube Button */}
      <div className="absolute top-8 right-8 md:top-4 md:right-4">
        <Button
          onClick={openYoutube}
          variant="outline"
          size="sm"
          className="bg-red-900 hover:bg-red-700 text-white border-red-600 hover:border-red-700 transition-all duration-300 text-xs md:text-sm px-2 py-1 md:px-3 md:py-2"
        >
          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
          Take a Video Tour

        </Button>
      </div>

      {/* Controls Bar */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-6 transition-all duration-300 ${
          showControls ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ zIndex: 10 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Bar */}
        <div className="mb-3 md:mb-4">
          <Slider
                  value={[progress]}
                  onValueChange={handleProgressChange}
                  max={100}
                  step={0.1}
                  className="w-full [&_[role=slider]]:bg-white [&_[role=slider]]:border-white [&_[data-orientation=horizontal]]:bg-white/30 [&_[role=slider]]:w-4 [&_[role=slider]]:w-5 [&_[role=slider]]:h-4 md:[&_[role=slider]]:h-5 cursor-pointer"
          />
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between flex-wrap gap-2 md:gap-0">
          <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
            {/* Play/Pause */}
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1 md:p-2"
            >
              {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5" />}
            </Button>

            {/* Volume - Hidden on mobile, shown on tablet+ */}
           

            {/* Time */}
            <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Mobile Volume Control */}
            <Button
              onClick={toggleMute}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1 md:p-2 sm:hidden"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            
            <Button
              onClick={toggleFullscreen}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1 md:p-2"
            >
              <Maximize className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      {hasStarted && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
      </div>
    </div>
   
  );
}