import { Card } from './ui/card';
import logo from "../assets/fac.png";

interface FounderMessageSectionProps {
  onNavigate?: (page: string) => void;
}

export const OurFacultySection = ({ onNavigate }: FounderMessageSectionProps) => {

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
               

                {/* Faculty Message Content */}
                <Card className="bg-gray p-8 shadow-lg">
                   <div className="grid grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Faculty Image */}
                  <div className="overflow-hidden aspect-square rounded-lg flex justify-center items-center">
                    <img
                      src={logo}
                      alt="Our Faculty"
                      className="w-[220px] h-[220px] object-cover mx-auto rounded-lg shadow-md"
                    />
                  </div>

                  {/* Right Column - Logo */}
                    <div className="flex justify-center items-center">
                    <h1 className='headingname'>Our Faculty</h1>
                    {/* <img src={logo} alt="Pranav Global School Logo" className="w-[250px] h-auto object-contain" /> */}
                  </div>
                </div>
                  <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                    <h2 className="text-xl font-bold text-teal-700">
                      Our Faculty
                    </h2>
                    <p className="italic text-gray-600">
                      The Heart of Pranav Global School (Early Years)
                    </p>

                    <p>
                      Our faculty members are not just educators; they are <em>nurturers, guides, and lifelong learners</em> dedicated to making every moment in the classroom meaningful.
                    </p>

                    <p>
                      All our teachers are <strong>ECCEed-trained (Early Childhood Care and Education)</strong> professionals, with additional certifications in <strong>Phonics</strong> and <strong>Pre-School Education</strong>. They are skilled in creating child-centered, play-based learning environments that encourage curiosity, exploration, and creativity.
                    </p>

                    <p>
                      Our educators embody qualities that matter most in the early years:
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Caring and Loving:</strong> They approach every child with warmth, compassion, and understanding.
                      </li>
                      <li>
                        <strong>Excellent Communicators:</strong> They connect with children, parents, and peers with empathy and clarity.
                      </li>
                      <li>
                        <strong>Child-Centric:</strong> Every activity, lesson, and interaction is thoughtfully designed to meet the developmental needs of each learner.
                      </li>
                      <li>
                        <strong>Keen Listeners:</strong> They listen to children’s voices — their ideas, emotions, and imaginations — making each child feel valued and heard.
                      </li>
                    </ul>

                    <p>
                      Through their dedication, our faculty transforms classrooms into joyful learning spaces where children feel safe to ask questions, express themselves freely, and develop confidence in their abilities.
                    </p>

                    <p>
                      At Pranav Global School, <strong>teaching is not just a profession – it’s a calling to inspire, nurture, and celebrate every child’s journey of discovery.</strong>
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

export default OurFacultySection;
