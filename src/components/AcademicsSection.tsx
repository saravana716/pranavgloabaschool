// import { GraduationCap, Users, Clock, BookOpen, Beaker, Palette, Music, Trophy } from 'lucide-react'
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
// import { PageHeader } from './PageHeader'

// export function AcademicsSection() {
//   const programs = [
//     {
//       title: "Junior Toddler (Age 2–3 Years)",
//       subtitle: "Playgroup",
//       description: "The first steps in a child’s learning journey. Focused on building sensory, motor, and social skills, children explore their environment through guided play, interactive activities, and early language development.",
//       features: ["Play-based Learning", "STEAM Integration", "Character Development"],
//       icon: Users,
//       color: "bg-muted border-muted-foreground/20"
//     },
//     {
//       title: "Senior Toddler (Age 3–4 Years)", 
//       subtitle: "Pre-Kindergarten",
//       description: "The first steps in a child’s learning journey. Focused on building sensory, motor, and social skills, children explore their environment through guided play, interactive activities, and early language development.",
//       features: ["Advanced Curriculum", "Leadership Programs", "Peer Mentoring"],
//       icon: BookOpen,
//       color: "bg-secondary/10 border-secondary/20"
//     },
//     {
//       title: "Kindergarten (K1):",
//       subtitle: "LKG",
//       description: "K1 / LKG (Age 4–5 Years): Early literacy, numeracy, and creative expression form the core of K1, with activities designed to foster independent thinking, problem-solving, and social skills.",
//       features: ["AP Courses", "College Counseling", "Internship Programs"],
//       icon: GraduationCap,
//       color: "bg-card border-card-foreground/20"
//     },
//      {
//       title: "Kindergarten (K2)",
//       subtitle: "UKG",
//       description: "K2 / UKG (Age 5–6 Years): Preparing for formal schooling, K2 focuses on advanced literacy, numeracy, critical thinking, and life skills, nurturing well-rounded, confident learners ready for primary school.",
//       features: ["AP Courses", "College Counseling", "Internship Programs"],
//       icon: GraduationCap,
//       color: "bg-card border-card-foreground/20"
//     },
//      {
//       title: "Daycare (Age 2–12 Years | 9 AM – 6 PM)",
//       subtitle: "",
//       description: "Our extended daycare program ensures children are safely engaged throughout the day with a daily planner schedulethat includes play-based learning, creative arts, skill development, physical activity, and social-emotional growth. Every child experiences a balanced routine designed to stimulate mind, body, and imagination",
//       description1: "At Pranav Global School, our academic programs combine structured learning, play-based exploration, and skill-building activities to provide a strong foundation for lifelong learning and holistic growth.",
//       features: ["AP Courses", "College Counseling", "Internship Programs"],
//       icon: GraduationCap,
//       color: "bg-card border-card-foreground/20"
//     },
//     //  {
//     //   title: "After School",
//     //   subtitle: "",
//     //   description: "Comprehensive preparation for university and career success.",
//     //   features: ["AP Courses", "College Counseling", "Internship Programs"],
//     //   icon: GraduationCap,
//     //   color: "bg-card border-card-foreground/20"
//     // }
//   ]

//   const subjects = [
//     {
//       name: "Abacus & Vedic Math",
//       icon: Beaker,
//       description: "Enhance numerical skills, logical thinking, and mental calculation, building strong foundations in mathematics.",
//       color: "text-secondary bg-secondary/10"
//     },
//     {
//       name: "Phonics & Handwriting",
//       icon: Palette,
//       description: "Strengthen early literacy, language development, and fine motor skills for confident communication and expression.",
//       color: "text-purple-600 bg-purple-50"
//     },
//     {
//       name: "Art & Craft, Drawing",
//       icon: Music,
//       description: "Foster creativity, imagination, and self-expression, encouraging children to explore new ideas through visual arts.",
//       color: "text-green-600 bg-green-50"
//     },
//     {
//       name: "Public Speaking & Communication",
//       icon: Trophy,
//       description: "Build confidence, clarity, and effective communication skills, helping children express themselves confidently in any setting.",
//       color: "text-orange-600 bg-orange-50"
//     }
//   ]

//   const stats = [
//     { number: "25:1", label: "Student-Teacher Ratio" },
//     { number: "45+", label: "Subjects Offered" },
//     { number: "12", label: "Sports Programs" },
//     { number: "30+", label: "Clubs & Activities" }
//   ]

//   return (
//     <div>
//       {/* Page Header */}
//       <PageHeader title="Academic" currentPage="Academic" />
      
//       <section className="py-20 bg-muted/30">
//         <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Introduction */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-foreground mb-4">
//               Academic Excellence
//             </h2>
//             <h3 className='mb-4'>Tailored Learning for Every Stage of Childhood</h3>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// At <strong>Pranav Global School – Early Years,</strong> we offer a structured, age-appropriate curriculum designed to nurture curiosity, creativity, and holistic development from <strong>toddlerhood to pre-primary.</strong> Every program is thoughtfully planned to meet the unique developmental needs of each age group, ensuring that children grow with confidence, independence, and joy.
//             </p>
//           </div>

//         {/* Programs Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-20">
//           {programs.map((program, index) => (
//             <Card key={index} className={`${program.color} hover:shadow-lg transition-all duration-300`}>
//               <CardHeader className="text-center">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm">
//                   <program.icon className="h-8 w-8 text-secondary" />
//                 </div>
//                 <CardTitle className="text-2xl  text-foreground">{program.title}</CardTitle>
//                 <p className="text-secondary font-medium">{program.subtitle}</p>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <p className="text-muted-foreground text-center">{program.description}</p>
//                 <div className="space-y-2">
//                   {program.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center space-x-2">
//                       <div className="w-2 h-2 bg-secondary rounded-full"></div>
//                       <span className="text-sm text-muted-foreground">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Subject Areas */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center text-foreground mb-3">
// Enrichment & Skill Development         </h3>
// <h4 className='mb-6 text-center text-foreground'>Unlocking Potential Beyond the Classroom</h4>
// <p className='mb-15 text-center text-foreground'>At <strong>Pranav Global School – Early Years</strong>, we believe that education goes beyond academics. Our <strong>enrichment programsare</strong> carefully designed to nurture <strong>creativity, critical thinking, confidence, and holistic development</strong>, helping children discover their talents and passions from an early age.</p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-10">
//             {subjects.map((subject, index) => (
//               <div key={index} className="text-center group">
//                 <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${subject.color} group-hover:scale-110 transition-transform duration-300`}>
//                   <subject.icon className="h-10 w-10" />
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">{subject.name}</h4>
//                 <p className="text-gray-600 text-sm">{subject.description}</p>
//               </div>
//             ))}
//           </div>
//                </div>
//                <p className='mt-10 text-center text-foreground'>Through these programs, every child is encouraged to <strong>explore, experiment, and excel</strong>, while developing <strong>critical life skills, creativity, and confidence.</strong></p>
//           <p className='mb-4 text-center text-foreground'>At Pranav Global School,<strong>enrichment is an integral part of our holistic approach</strong>, ensuring that children are not just academically prepared but also equipped with skills for lifelong success.</p>
   

//         {/* Academic Stats */}
//         {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
//           <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
//             By the Numbers
//           </h3>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Schedule Info */}
//         <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
//           <div className="grid md:grid-cols-3 gap-8 items-center">
//             <div className="text-center">
//               <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
//               <h4 className="font-semibold mb-2">School Hours</h4>
//               <p className="opacity-90">8:00 AM - 3:30 PM</p>
//             </div>
//             <div className="text-center">
//               <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-90" />
//               <h4 className="font-semibold mb-2">Extended Learning</h4>
//               <p className="opacity-90">After-school programs available</p>
//             </div>
//             <div className="text-center">
//               <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
//               <h4 className="font-semibold mb-2">Small Classes</h4>
//               <p className="opacity-90">Personalized attention guaranteed</p>
//             </div>
//           </div>
//         </div>
//         </div>
//       </section>
//     </div>
//   )
// }



import { GraduationCap, Users, Clock, BookOpen, Beaker, Palette, Music, Trophy, Brain, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { PageHeader } from './PageHeader';
import logo from "../assets/Academic.jpg"
export function AcademicsSection() {
  const programs = [
    {
      title: "Junior Toddler (Age 2–3 Years)",
      subtitle: "Playgroup",
      description: "The first steps in a child’s learning journey. Focused on building sensory, motor, and social skills, children explore their environment through guided play, interactive activities, and early language development.",
      features: [],
      icon: Users,
      color: "bg-muted border-muted-foreground/20"
    },
    {
      title: "Senior Toddler (Age 3–4 Years)",
      subtitle: "Pre-Kindergarten",
      description: "Building foundational skills through structured play and early literacy. Children develop independence, social awareness, and curiosity through thematic units and hands-on exploration.",
      features: [],
      icon: Brain,
      color: "bg-secondary/10 border-secondary/20"
    },
    {
      title: "Kindergarten (K1)",
      subtitle: "LKG (Age 4–5 Years)",
      description: "Early literacy, numeracy, and creative expression form the core of K1, with activities designed to foster independent thinking, problem-solving, and social skills.",
      features: [],
      icon: BookOpen,
      color: "bg-card border-card-foreground/20"
    },
    {
      title: "Kindergarten (K2)",
      subtitle: "UKG (Age 5–6 Years)",
      description: "Preparing for formal schooling, K2 focuses on advanced literacy, numeracy, critical thinking, and life skills, nurturing well-rounded, confident learners ready for primary school.",
      features: [],
      icon: GraduationCap,
      color: "bg-card border-card-foreground/20"
    },
    {
      title: "Daycare (Age 2–12 Years | 9 AM – 6 PM)",
      subtitle: "",
      description: "Our extended daycare program ensures children are safely engaged throughout the day with a daily planner schedule that includes play-based learning, creative arts, skill development, physical activity, and social-emotional growth. Every child experiences a balanced routine designed to stimulate mind, body, and imagination.",
      description1: "At Pranav Global School, our academic programs combine structured learning, play-based exploration, and skill-building activities to provide a strong foundation for lifelong learning and holistic growth.",
      features: [],
      icon: Sun,
      color: "bg-card border-card-foreground/20"
    },
  ];

  const subjects = [
    {
      name: "Abacus & Vedic Math",
      icon: Beaker,
      description: "Enhance <strong>numerical skills, logical thinking, and mental calculation</strong>, building strong foundations in mathematics.",
      color: "text-secondary bg-secondary/10"
    },
    {
      name: "Phonics & Handwriting",
      icon: Palette,
      description: "Strengthen <strong>early literacy, language development, and fine motor skills</strong> for confident communication and expression.",
      color: "text-purple-600 bg-purple-50"
    },
     {
      name: "Brain Gym Activities",
      icon: Brain,
      description: "Improve <strong>creativity, imagination, and self-expression</strong>, encouraging children to explore new ideas through visual arts.",
      color: "text-purple-600 bg-purple-50"
    },
    {
      name: "Art & Craft, Drawing",
      icon: Music,
      description: "Foster <strong>creativity, imagination, and self-expression</strong>, encouraging children to explore new ideas through visual arts.",
      color: "text-green-600 bg-green-50"
    },
    {
      name: "Public Speaking & Communication",
      icon: Trophy,
      description: "Build <strong>confidence, clarity, and effective communication skills</strong>, helping children express themselves confidently in any setting.",
      color: "text-orange-600 bg-orange-50"
    }
  ];

  // const stats = [
  //   { number: "25:1", label: "Student-Teacher Ratio" },
  //   { number: "45+", label: "Subjects Offered" },
  //   { number: "12", label: "Sports Programs" },
  //   { number: "30+", label: "Clubs & Activities" }
  // ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Academic" currentPage="Academic" backgroundImage={logo}/>

      <section className="py-2 bg-muted/30" style={{marginTop:45}}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Academic Excellence
            </h2>
            <h3 className='mb-4'>Tailored Learning for Every Stage of Childhood</h3>
            <p className="text-xl text-muted-foreground max-w-6xl mx-auto px-4">
              At <strong>Pranav Global School – Early Years,</strong> we offer a structured, age-appropriate curriculum designed to nurture curiosity, creativity, and holistic development from <strong>toddlerhood to pre-primary.</strong> Every program is thoughtfully planned to meet the unique developmental needs of each age group, ensuring that children grow with confidence, independence, and joy.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {programs.map((program, index) => (
              <Card key={index} className={`${program.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <program.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground" style={{fontWeight:700,fontSize:"19px"}}>{program.title}</CardTitle>
                  <p className="text-secondary font-medium">{program.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{program.description}</p>
                  <div className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subject Areas */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-foreground mb-3">
              Enrichment Programs
            </h3>
            <h4 className='mb-6 text-center text-foreground'>Unlocking Potential Beyond the Classroom</h4>
            <p className='mb-0 text-center text-foreground'>
              At <strong>Pranav Global School – Early Years</strong>, we believe that education goes beyond academics. Our 
              <strong>enrichment programs are</strong> carefully designed to nurture

            </p>
            <p style={{textAlign:"center",marginBottom:40}}><strong>creativity, critical thinking, confidence, and holistic development</strong>,
              helping children discover their talents and passions from an early age.
</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-10">
              {subjects.map((subject, index) => (
                <Card key={index} className="text-center border-0 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white core-value-card">
                  <CardContent className="p-6">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${subject.color} transition-all duration-300 icon-container`}>
                      <subject.icon className="h-10 w-10" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-xl">{subject.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: subject.description }}></p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className='mb-4 text-foreground'>
                Through these programs, every child is encouraged to <strong>explore, experiment, and excel</strong>, while developing <strong>critical life skills, creativity, and confidence.</strong>
              </p>
              <p className='mb-4 text-foreground'>
                At Pranav Global School, <strong>enrichment is an integral part of our holistic approach</strong>, ensuring that children are not just academically prepared but also equipped with skills for lifelong success.
              </p>
            </div>
          </div>

          {/* Schedule Info */}
          {/* <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h4 className="font-semibold mb-2">School Hours</h4>
                <p className="opacity-90">8:00 AM - 3:30 PM</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h4 className="font-semibold mb-2">Extended Learning</h4>
                <p className="opacity-90">After-school programs available</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h4 className="font-semibold mb-2">Small Classes</h4>
                <p className="opacity-90">Personalized attention guaranteed</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}