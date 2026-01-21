import { HeroSection } from './HeroSection';
import { AboutUsHomeSection } from './AboutUsHomeSection';
import { WhyChooseSection } from './WhyChooseSection';
import { RecentActivitiesSlider } from './RecentActivitiesSlider';
import { RecentClicksSection } from './RecentClicksSection';

export function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutUsHomeSection />
      <WhyChooseSection />
      <RecentActivitiesSlider />
      <RecentClicksSection />
    </div>
  );
}