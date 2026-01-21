import { Card } from './ui/card';
import logo from "../assets/ce.png";

interface FounderMessageSectionProps {
  onNavigate?: (page: string) => void;
}

export const CenterDirectorSection = ({ onNavigate }: FounderMessageSectionProps) => {

  const quickLinks = [
    { name: "Founder Message", page: "Founder Message" },
    { name: "Center Director", page: "Center Director" },
    { name: "Head Administration", page: "Head Administration" },
    { name: "Our Faculty", page: "Our Faculty" }
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="founder">
        <div className="founderinner">
          <div className="founderleft">
            <div className="min-h-screen">
              <div className="max-w-7xl mx-auto py-0 px-4">
                

                {/* Message Content */}
                <Card className="bg-gray p-8 shadow-lg">
                  <div className="grid grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Director Image */}
                  <div className="overflow-hidden aspect-square rounded-lg flex justify-center items-center">
                    <img
                      src={logo}
                      alt="Centre Director"
                      className="w-[220px] h-[220px] object-contain mx-auto rounded-lg shadow-md"
                    />
                  </div>

                  {/* Right Column - Logo */}
                    <div className="flex justify-center items-center">
                    <h1 className='headingname'>Center Director</h1>
                    {/* <img src={logo} alt="Pranav Global School Logo" className="w-[250px] h-auto object-contain" /> */}
                  </div>
                </div>
                  <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                    <p>
                      Welcome to <strong>Pranav Global School – Early Years</strong>, where every child’s first steps into learning are filled with wonder, warmth, and discovery.
                    </p>

                    <p>
                      At our pre-primary centre, we believe that the early years form the foundation of a child’s lifelong learning journey. Our goal is to create a joyful, safe, and nurturing environment that encourages curiosity, creativity, and confidence. Through play-based and inquiry-driven experiences, children explore, imagine, question, and grow at their own pace – developing not only academic readiness but also emotional and social intelligence.
                    </p>

                    <p>
                      As a lifelong learner and educator passionate about early childhood development, I strongly believe that <em>learning happens best when children feel loved, heard, and inspired.</em> Our dedicated teachers focus on building strong relationships, fostering independence, and celebrating each child’s uniqueness.
                    </p>

                    <p>
                      At <strong>Pranav Global School</strong>, we view parents as our partners in this beautiful journey of growth. Together, we lay the foundation for children to become compassionate learners and confident individuals who embrace the joy of learning every day.
                    </p>
                  </div>

                  {/* Signature Section */}
                  <div className="mt-12 pt-8">
                    <p className="text-gray-600 mb-2">Warm regards,</p>
                    <div
                                           className="text-2xl text-teal-700 mb-1"

                      
                    >
<strong>
                      A. Ayesha
  </strong>                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Centre Director – Pranav Global School (Early Years)</strong>
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Quick Links Sidebar */}
          <div className="founderright">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.page)}
                className="block mb-3 text-sm text-teal-700"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterDirectorSection;
