import React from 'react';
import { Award, Users, GraduationCap, Globe, BookOpen, Trophy } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: "Child-Centric Learning",
      description: (
        <>
          Our curriculum is designed around each child's needs, interests, and developmental milestones. Learning is inquiry-based, hands-on, and joyful, fostering curiosity and a love for exploration.
        </>
      ),
    },
    {
      icon: Users,
      title: "Qualified & Caring Faculty",
      description: (
        <>
          All our teachers are <strong>ECCEd-trained</strong>, with additional training in <strong>Phonics and Pre-School Education</strong>. They are attentive, loving, and skilled at creating environments where children feel safe, heard, and inspired.
        </>
      ),
    },
    {
      icon: Trophy,
      title: "Holistic Development",
      description: (
        <>
          We focus on the <strong>physical, cognitive, social, emotional, and creative growth</strong> of each child. From indoor and outdoor play to music, art, and dance, we nurture multiple intelligences and talents.
        </>
      ),
    },
    {
      icon: GraduationCap,
      title: "Safe & World-Class Infrastructure",
      description: (
        <>
          Our campus features <strong>spacious, air-conditioned classrooms, anti-skid flooring, safety doors, themed learning spaces, an indoor play area, dance studio, swimming pool</strong>, and thoughtfully designed dining and recreational areas. Every facility prioritizes safety, comfort, and enrichment.
        </>
      ),
    },
    {
      icon: Globe,
      title: "Strong Values & Community Partnership",
      description: (
        <>
          We instill <strong>respect, empathy, responsibility, and collaboration</strong> from the earliest years, and actively involve parents as partners in their child's learning journey.
        </>
      ),
    },
    {
      icon: BookOpen,
      title: "Early Foundation for Lifelong Learning",
      description: (
        <>
          At Pranav Global School, we don't just prepare children for the next grade — we cultivate <strong>confidence, creativity, resilience, and a love for learning</strong> that lasts a lifetime.
        </>
      ),
    },
  ];

  return (
    <section className="py-0 bg-background relative overflow-hidden">
      {/* Animated Floating Elements - Left Side */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10">
        {/* Balloon 1 */}
        <div 
          className="absolute w-20 h-20"
          style={{
            top: '10%',
            left: '200px',
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-900 to-pink-900 shadow-lg" style={{
          background: 'linear-gradient(180deg, #0F4C5C 36%, #2e8da4ff 50%, #045569ff 100%)',

          }}/>
        </div>
 <div 
          className="absolute w-12 h-12"
          style={{
            top: '5%',
            left: '105px',
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-900 to-pink-900 shadow-lg" style={{
          background: 'linear-gradient(180deg, #0F4C5C 36%, #2e8da4ff 50%, #045569ff 100%)',

          }}/>
        </div>
        {/* Star */}
       

        {/* Balloon 2 */}
      
         
        {/* Kite */}
      
      </div>

      {/* Animated Floating Elements - Right Side */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10">
        {/* Balloon 3 */}
        <div 
          className="absolute w-20 h-20"
          style={{
            top: '10%',
            right: '200px',
            animation: 'float 6.5s ease-in-out infinite 0.5s',
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg" 
          style={{
          background: 'linear-gradient(180deg, #0F4C5C 36%, #2e8da4ff 50%, #045569ff 100%)',

          }}/>
        </div>

        {/* Circle */}
        <div 
          className="absolute w-12 h-12"
          style={{
            top: '5%',
            right: '105px',
            animation: 'float 7.5s ease-in-out infinite 1.5s',
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg"
          style={{
          background: 'linear-gradient(180deg, #0F4C5C 36%, #2e8da4ff 50%, #045569ff 100%)',

          }} />
        </div>

        {/* Heart */}
    

        {/* Star */}
      
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-6" style={{fontWeight:"bold"}}>
            Why Choose Pranav Global School?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choosing the right early learning environment is one of the most important decisions for your child's development. At Pranav Global School – Early Years, we provide a nurturing, safe, and stimulating environment where every child is encouraged to explore, create, and grow at their own pace.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-1" 
            style={{
              background: "#ffe8d9",
              borderRadius: "16px",
              boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",  
              border: "1px solid rgba(255, 255, 255, 1)",
            }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-foreground mb-3" style={{fontWeight:700,fontSize:"20px"}}>{reason.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final Paragraph */}
        <div className="text-center mt-12 mb-16">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choosing Pranav Global School – Early Years means giving your child a <strong>safe, inspiring, and enriching start</strong> to their educational journey, where every day is an opportunity to discover, grow, and flourish.
          </p>
        </div>
      </div>
    </section>
  );
}