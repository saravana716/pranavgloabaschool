import { Card } from './ui/card';
import logo from "../assets/head.png";

interface FounderMessageSectionProps {
  onNavigate?: (page: string) => void;
}

export const HeadAdministrationSection = ({ onNavigate }: FounderMessageSectionProps) => {

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
                  {/* Left Column - Head of Admin Image */}
                  <div className="overflow-hidden aspect-square rounded-lg flex justify-center items-center">
                    <img
                      src={logo}
                      alt="Head of Administration"
                      className="w-[220px] h-[220px] object-contain mx-auto rounded-lg shadow-md"
                    />
                  </div>

                  {/* Right Column - Logo */}
                 <div className="flex justify-center items-center">
                    <h1 className='headingname'>Head Administration</h1>
                    {/* <img src={logo} alt="Pranav Global School Logo" className="w-[250px] h-auto object-contain" /> */}
                  </div>
                </div>
                  <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                    <p>
                      At <strong>Pranav Global School</strong>, we believe that a great learning experience begins with a well-organized, safe, and inspiring environment. My journey began in the field of <strong>Mechanical Engineering</strong>, and over the years, I had the privilege of working in several countries, gaining valuable experience in management, systems, and operations. Yet, my passion for contributing to the growth of young minds and building meaningful institutions led me to the field of <strong>education</strong>.
                    </p>

                    <p>
                      As the <strong>Head of Administration and Operations</strong>, my focus is on ensuring that every aspect of the school’s infrastructure, facilities, and daily operations runs seamlessly to support our students’ and teachers’ needs. Behind every classroom experience lies a foundation of careful planning, efficiency, and attention to detail – and that’s where my team and I dedicate our efforts every day.
                    </p>

                    <p>
                      At Pranav Global School, we strive to create a <strong>secure, sustainable, and enriching environment</strong> that enables our children to explore, learn, and grow with confidence.
                    </p>
                  </div>

                  {/* Signature Section */}
                  <div className="mt-12 pt-8">
                    <p className="text-gray-600 mb-2">Warm regards,</p>
                    <div
                      className="text-2xl text-teal-700 mb-1"
                    >
                      <strong>
                        Mr. Kuzhanthaivelu
                      </strong>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Head of Administration & Operations Manager </strong><br />
                      <span className="italic">Pranav Global School</span>
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

export default HeadAdministrationSection;
