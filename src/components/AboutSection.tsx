import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  BookOpen,
  Star,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import logo from "../assets/about-us.jpg";
import { AboutUsHomeSection } from "./AboutUsHomeSection";
import { PageHeader } from "../components/PageHeader";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const coreValues = [
    {
      number: "1",
      title: "Excellence",
      description: "Delivering high-quality education and care.",
    },
    {
      number: "2",
      title: "Integrity",
      description: "Acting with honesty, fairness, and responsibility.",
    },
    {
      number: "3",
      title: "Respect",
      description: "Embracing diversity and promoting mutual understanding.",
    },
    {
      number: "4",
      title: "Innovation",
      description: "Fostering creativity, curiosity, and exploration.",
    },
    {
      number: "5",
      title: "Collaboration",
      description:
        "Building strong partnerships with families and the community.",
    },
  ];

  const whyChooseReasons = [
    {
      icon: Heart,
      title: "Nurturing Environment",
      description:
        "PGS aims to create a secure, inclusive, and stimulating setting for holistic development.",
    },
    {
      icon: Award,
      title: "High-Quality Education",
      description:
        "The school focuses on delivering high-quality early childhood education that nurtures physical, emotional, social, and intellectual growth.",
    },
    {
      icon: Users,
      title: "Core Values",
      description:
        "PGS emphasizes Excellence, Integrity, Respect, Innovation, and Collaboration to shape well-rounded individuals.",
    },
    {
      icon: Globe,
      title: "Partnerships",
      description:
        "The school partners with families and the community to ensure holistic development.",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning Foundation",
      description:
        "PGS strives to lay the foundation for lifelong learning, creativity, and holistic development.",
    },
    {
      icon: Star,
      title: "Holistic Education",
      description:
        "Pranav Global School is committed to delivering holistic education that meets global standards.",
    },
  ];

  return (
    <div>
      <PageHeader title="About Us" currentPage="About Us" backgroundImage={logo}  />

      {/* About Us View Bar */}

      {/* About Us Section - Same as Home Page */}
      <AboutUsHomeSection />

      {/* Our Mission Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none h-64 md:h-80 lg:h-96 rounded-full overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NjgzMzg4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students in classroom learning"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl">
                    <p className="font-bold text-primary">Our Mission</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Target className="h-8 w-8 md:h-12 md:w-12 text-white" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                MISSION STATEMENT
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
               To empower every child to reach their full potential in a safe, inclusive, and inspiring setting, laying the foundation for lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <Badge className="bg-secondary/10 text-secondary border-0 mb-4">
                VISION STATEMENT
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Our Vision
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              To provide high-quality early childhood education that nurtures growth, instills core values of respect, responsibility, and empathy, and partners with families to support every child’s journey.    </p>
            </div>

            <div className="relative group">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none h-64 md:h-80 lg:h-96 rounded-full overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606660956148-5291deb68185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc1NjgzMzg4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students graduation success"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-10 group-hover:translate-x-0">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl">
                    <p className="font-bold text-secondary">Our Vision</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                <Eye className="h-8 w-8 md:h-12 md:w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="w-full mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-0 mb-4">
              CORE VALUES
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Core Values
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
             Pranav Preschool and Daycare, we celebrate every child’s uniqueness and aim to make learning a joyful and meaningful experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 group bg-white core-value-card"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors icon-container">
                    <span className="text-2xl font-bold text-primary">
                      {value.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-4 text-xl">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-destructive/10 text-destructive border-0 mb-4">
              WHY CHOOSE US
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why PGS (Pranav Global School)?
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
              Pranav Global School (PGS) is committed to providing a nurturing
              environment for children to grow into confident, compassionate,
              and responsible individuals. Here's why PGS stands out:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {whyChooseReasons.map((reason, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white core-value-card"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors icon-container">
                    <reason.icon className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-4 text-xl">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                KEY HIGHLIGHTS
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Key Highlights of PGS
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-primary to-secondary text-white shadow-xl">
                <CardContent className="p-12 text-center">
                  <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-8">
                    <Star className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    Holistic Education
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Pranav Global School is committed to delivering holistic
                    education that meets global standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Preview with Figma Image */}
    </div>
  );
}
