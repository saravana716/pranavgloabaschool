import { Star, Award, Users, BookOpen } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function FacultySection() {
  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal",
      education: "PhD in Educational Leadership",
      experience: "15 years",
      specialization: "Curriculum Development",
      image: "https://images.unsplash.com/photo-1724256278294-02f9557d4e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGVkdWNhdG9yc3xlbnwxfHx8fDE3NTY3ODMzNjF8MA&ixlib=rb-4.1.0&q=80&w=300&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Prof. Michael Chen",
      role: "Science Department Head",
      education: "MS in Physics, MEd",
      experience: "12 years",
      specialization: "STEM Education",
      image: "https://images.unsplash.com/photo-1724256278294-02f9557d4e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGVkdWNhdG9yc3xlbnwxfHx8fDE3NTY3ODMzNjF8MA&ixlib=rb-4.1.0&q=80&w=300&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Ms. Emily Rodriguez",
      role: "English Teacher",
      education: "MA in English Literature",
      experience: "8 years",
      specialization: "Creative Writing",
      image: "https://images.unsplash.com/photo-1724256278294-02f9557d4e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGVkdWNhdG9yc3xlbnwxfHx8fDE3NTY3ODMzNjF8MA&ixlib=rb-4.1.0&q=80&w=300&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Mr. David Thompson",
      role: "Mathematics Teacher",
      education: "MS in Mathematics",
      experience: "10 years",
      specialization: "Advanced Calculus",
      image: "https://images.unsplash.com/photo-1724256278294-02f9557d4e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGVkdWNhdG9yc3xlbnwxfHx8fDE3NTY3ODMzNjF8MA&ixlib=rb-4.1.0&q=80&w=300&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Ms. Lisa Park",
      role: "Art Teacher",
      education: "MFA in Fine Arts",
      experience: "7 years",
      specialization: "Digital Arts",
      image: "https://images.unsplash.com/photo-1724256278294-02f9557d4e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGVkdWNhdG9yc3xlbnwxfHx8fDE3NTY3ODMzNjF8MA&ixlib=rb-4.1.0&q=80&w=300&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Mr. James Wilson",
      role: "Physical Education",
      education: "BS in Kinesiology",
      experience: "9 years",
      specialization: "Athletic Training",
      image: "https://images.unsplash.com/photo-1724256278294-02f9557d4e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGVkdWNhdG9yc3xlbnwxfHx8fDE3NTY3ODMzNjF8MA&ixlib=rb-4.1.0&q=80&w=300&utm_source=figma&utm_medium=referral"
    }
  ]

  const facultyStats = [
    {
      icon: Award,
      number: "95%",
      label: "Masters or PhD Holders",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Teacher Rating",
      color: "text-yellow-600 bg-yellow-50"
    },
    {
      icon: Users,
      number: "150+",
      label: "Dedicated Educators",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: BookOpen,
      number: "12",
      label: "Average Years Experience",
      color: "text-purple-600 bg-purple-50"
    }
  ]

  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passionate and experienced educators are committed to inspiring 
            and nurturing every student to reach their full potential.
          </p>
        </div>

        {/* Faculty Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facultyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Faculty */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Educators
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200">
                        <ImageWithFallback
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white fill-current" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h4>
                    <p className="text-blue-600 font-medium mb-3">{faculty.role}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Education:</span> {faculty.education}
                      </div>
                      <div>
                        <span className="font-medium">Experience:</span> {faculty.experience}
                      </div>
                      <div>
                        <span className="font-medium">Specialization:</span> {faculty.specialization}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you passionate about education and looking to make a difference? 
            We're always seeking dedicated professionals to join our faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Open Positions
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Submit Your Resume
            </button>
          </div>
        </div>

        {/* Professional Development */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Continuous Professional Development
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Training Workshops</h4>
                  <p className="text-gray-600">Monthly professional development sessions on latest teaching methodologies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Conference Participation</h4>
                  <p className="text-gray-600">Annual attendance at national and international education conferences</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Collaborative Learning</h4>
                  <p className="text-gray-600">Regular peer observation and feedback sessions for continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Why Teach at Branov?</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Star className="h-5 w-5 flex-shrink-0" />
                <span>Competitive compensation package</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="h-5 w-5 flex-shrink-0" />
                <span>Comprehensive health benefits</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="h-5 w-5 flex-shrink-0" />
                <span>Professional development opportunities</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="h-5 w-5 flex-shrink-0" />
                <span>Collaborative work environment</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="h-5 w-5 flex-shrink-0" />
                <span>Modern teaching facilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}