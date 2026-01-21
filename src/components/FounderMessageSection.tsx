import { Card } from './ui/card';
import logo from "../assets/sc.png";

interface FounderMessageSectionProps {
  onNavigate?: (page: string) => void;
}

export const FounderMessageSection = ({ onNavigate }: FounderMessageSectionProps) => {

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
                  {/* Left Column - Founder Image */}
                  <div className="overflow-hidden bg-gray-0 aspect-square rounded-lg flex justify-center items-center">
                    <img
                      src={logo}
                      alt="Founder"
                      className="w-[220px] h-[220px] object-contain mx-auto rounded-lg shadow-md"
                    />
                  </div>

                  {/* Right Column - Logo */}
                  <div className="flex justify-center items-center">
                    <h1 className='headingname'>Founder Message</h1>
                    {/* <img src={logo} alt="Pranav Global School Logo" className="w-[250px] h-auto object-contain" /> */}
                  </div>
                </div>
                  <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                    <p>
                      Welcome to <strong>Pranav Global School</strong> – a place where curiosity thrives, values shape character, and every child discovers their true potential.
                    </p>

                    <p>
                      Though my professional journey began in medicine, my passion for nurturing young minds inspired me to create a school that focuses on <em>whole-child development</em> – intellectual, emotional, social, and ethical. Medicine taught me empathy, discipline, and lifelong learning – principles that now guide our vision for education.
                    </p>

                    <p>
                      At Pranav Global School, we blend <strong>global best practices</strong> with <strong>local values</strong>, preparing learners to think critically, communicate confidently, and act compassionately. Our approach encourages inquiry, creativity, and resilience – equipping students not just for exams, but for life.
                    </p>

                    <p>
                      We believe that education is not merely about acquiring knowledge, but about <strong>shaping responsible, confident, and compassionate global citizens.</strong> Every child here is valued, supported, and challenged to achieve excellence while staying grounded in integrity and kindness.
                    </p>

                    <p>
                      Thank you for being part of our journey to build a community where learning is joyful, purposeful, and transformative.
                    </p>
                  </div>

                  {/* Signature Section */}
                  <div className="mt-12 pt-8">
                    <p className="text-gray-600 mb-2">Warm regards,</p>
                    <div
                      className="text-2xl text-teal-700 mb-1"
                      // style={{ fontFamily: 'Brush Script MT, cursive' }}
                    >
                      <strong>Dr. Jyothilakshmi, MBBS, MD (DVL)</strong>
                    </div>
                    <p className="text-1xl text-gray-600">
                     <strong>
                       Founder – Pranav Global School
                     </strong>
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

export default FounderMessageSection;
