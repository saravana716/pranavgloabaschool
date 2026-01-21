import { MapPin, Wifi, Building, Users, Book, Activity, Shield, Bus, Utensils, Snowflake, HeartPulse, Video, School } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PageHeader } from "./PageHeader";
import n1 from "../assets/in1.jpg";
import n2 from "../assets/in2.jpg";
import n3 from "../assets/in3.jpg";
import n4 from "../assets/in4.jpg";
import n5 from "../assets/in5.jpg";
import n7 from "../assets/in6.jpg";
import n8 from "../assets/in8.jpg";
import n9 from "../assets/in9.jpg";
import ni10 from "../assets/ni10.jpg";
import logo from "../assets/Infra banner.jpg"
export function InfrastructureSection() {
  const infrastructureFeatures = [
    {
      icon: School,
      title: "Classrooms & Learning Spaces",
      description: "Spacious, air-conditioned classrooms with modern facilities",
      detailedDescription:
        "Our classrooms are thoughtfully designed to provide a comfortable, safe, and inspiring learning environment for every child.",
      image: n1,
      features: [
        "Spacious, Air-Conditioned Classrooms with natural ventilation ensure comfort and a healthy learning environment.",
        "Themed Classrooms designed to inspire curiosity and exploration.",
        "Well-Equipped Study Areas with age-appropriate learning materials to support inquiry and creativity.",
        "Anti-Skid Flooring and safety doors (Barton blocks) provide a secure environment for every child.",
        "Bright lighting, fans, and accessibility features including lifts ensure comfort and ease of movement",
      ],
    },
    {
      icon: Activity,
      title: "Play, Recreation & Creative Arts",
      description: "Dedicated spaces for physical and creative development",
      detailedDescription:
        "We provide diverse spaces that encourage physical activity, creative expression, and holistic development.",
      image: n2,
      features: [
        "Exclusive Indoor Play Area and outdoor activity spaces to encourage physical development, teamwork, and fun",
        "Safe, child-friendly toys and play equipment designed for exploratory learning",
        "A swimming pool for water-based activities and skill development.",
        "Dance Studio and creative arts spaces to nurture expression, rhythm, and confidence.",
      ],
    },
    // {
    //   icon: Utensils,
    //   title: "Dining & Community Spaces",
    //   description: "Hygienic dining areas and collaborative spaces",
    //   detailedDescription:
    //     "Our community spaces are designed to promote healthy habits, social interaction, and collaborative learning.",
    //   image: n3,
    //   features: [
    //     "Comfortable, hygienic dining areas to promote healthy eating habits.",
    //     "Communal spaces that foster collaboration, creativity, and social learning.",
    //     "Every aspect of our infrastructure - from safety features to themed learning environments - is designed with a single goal in mind: to create a nurturing, secure, and inspiring space where children can thrive academically, socially, and emotionally.",
    //     "At Pranav Global School, we combine modern facilities, thoughtful design, and child-centric planning to make every day a joyful and enriching experience for our students",
    //   ],
    // },
     {
      icon: Utensils,
      title: "Healthy Meals",
      description: "Nutritious and hygienic food services",
      detailedDescription:
        "Our in-house kitchen prepares fresh, nutritious meals that cater to the dietary needs of growing children with emphasis on balanced nutrition and hygiene.",
      image: n8,
      features: [
        "Fresh, in-house prepared meals",
        "Nutrition-expert planned menus",
        "Hygienic food preparation",
        "Balanced meals for healthy development",
      ],
    },
    {
      icon: HeartPulse,
      title: "Medical Support",
      description: "On-campus healthcare facilities for student wellbeing",
      detailedDescription:
        "The health and safety of our students is paramount. Our medical support team includes trained healthcare professionals who provide immediate care and maintain student wellness.",
      image: n9,
      features: [
        "Trained healthcare professionals available on campus",
        "Well-equipped medical room for immediate care",
        "Regular health check-ups and monitoring",
        "Coordination with parents for student wellbeing",
      ],
    },
    {
      icon: Users,
      title: "Playground Area",
      description: "Safe outdoor spaces for physical activities",
      detailedDescription:
        "Our playground is designed with safety as the top priority while encouraging active exploration, physical development, and social interaction among children.",
      image: n4,
      features: [
        "Age-appropriate play equipment",
        "Open spaces for group activities",
        "Shaded areas for comfort",
        "Safety-focused design for worry-free play",
      ],
    },
    {
      icon: Snowflake,
      title: "AC Classrooms",
      description: "Climate-controlled learning environments",
      detailedDescription:
        "All our classrooms are air-conditioned to maintain an optimal learning environment throughout the year, helping students stay focused and engaged.",
      image: ni10,
      features: [
        "Year-round climate control",
        "Proper ventilation systems",
        "Natural lighting integration",
        "Comfortable learning atmosphere",
      ],
    },
    {
      icon: Video,
      title: "CCTV Surveillance",
      description: "Comprehensive security monitoring",
      detailedDescription:
        "Security is a top priority. We have installed CCTV cameras throughout the campus to ensure comprehensive monitoring and provide parents with peace of mind.",
      image: n7,
      features: [
        "24/7 surveillance coverage",
        "Strategic camera placement",
        "Safe and secure environment",
        "Regular monitoring and maintenance",
      ],
    },
    {
      icon: Bus,
      title: "Transport Facilities",
      description: "Safe and reliable transportation services",
      detailedDescription:
        "We offer dependable transport services with GPS-enabled vehicles, trained drivers, and designated routes covering major residential areas.",
      image: n5,
      features: [
        "GPS-enabled vehicles",
        "Trained and experienced drivers",
        "Supervised by attendants",
        "Designated routes with timely service",
      ],
    },
    
  ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Infrastructure" currentPage="Infrastructure" backgroundImage={logo} />

      <div className="py-20 bg-background">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-0 mb-6">
              OUR FACILITIES
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Designed for Safety, Comfort, and Holistic Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Pranav Global School, we believe that a child's environment is central to their learning and development. Our campus is thoughtfully designed to provide safe, spacious, and stimulating spaces that nurture curiosity, creativity, and well-being.
            </p>
          </div>

          {/* Campus Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {infrastructureFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-muted to-card rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300 shadow-lg">
                  <feature.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Infrastructure Features */}
          <div className="space-y-24">
            {infrastructureFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? "" : "lg:col-start-2"
                  }`}
                >
                  <div className="relative">
                    {/* Decorative elements */}
                    <div
                      className={`absolute -top-8 ${
                        index % 2 === 0 ? "-right-8" : "-left-8"
                      } w-16 h-16 bg-secondary/20 rounded-full`}
                    ></div>
                    <div
                      className={`absolute bottom-8 ${
                        index % 2 === 0 ? "-left-8" : "-right-8"
                      } w-24 h-24 bg-primary/10 rounded-lg rotate-45`}
                    ></div>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

                      {/* Floating Icon */}
                      <div
                        className={`absolute top-6 ${
                          index % 2 === 0 ? "left-6" : "right-6"
                        } w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 0 ? "" : "lg:col-start-1"}`}>
                  <Badge className="bg-secondary/10 text-secondary border-0 mb-4">
                    INFRASTRUCTURE
                  </Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {feature.detailedDescription}
                  </p>

                  {/* Features List with Simple Bullets */}
                  <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }} className="space-y-3 text-muted-foreground">
                    {feature.features.map((featureItem, featureIndex) => (
                      <li key={featureIndex} className="leading-relaxed">
                        {featureItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}