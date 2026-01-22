import { SchoolImageSwiper } from './SchoolImageSwiper';
import { AboutUsHomeSection } from './AboutUsHomeSection';
import { WhyChooseSection } from './WhyChooseSection';
import { RecentClicksSection } from './RecentClicksSection';
import OurPrograms  from './OurPrograms';
import VideoPlayer from './VideoPlayer';
import MySwipers from "../components/MySwipers"

// Set to true to enable render logging

export function HomePage() {
  console.log('🏠 [HomePage] RENDER')
  
  return (
    <div>
      {/* Fullscreen Image Swiper */}
      <MySwipers/>
      
      {/* About Us Section */}
      <AboutUsHomeSection />
      <OurPrograms />
      {/* Why Choose Section */}
      <WhyChooseSection />
      <VideoPlayer />
      {/* Recent Clicks Section */}
      <RecentClicksSection />
    </div>
  );
}