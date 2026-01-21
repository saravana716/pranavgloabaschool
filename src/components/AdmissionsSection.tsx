import { CheckCircle, Calendar, FileText, Users, DollarSign, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function AdmissionsSection() {
  const admissionSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form with required documents",
      icon: FileText
    },
    {
      step: "2", 
      title: "Assessment & Interview",
      description: "Attend entrance assessment and parent-student interview",
      icon: Users
    },
    {
      step: "3",
      title: "Admission Decision",
      description: "Receive admission decision within 2 weeks of assessment",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Enrollment",
      description: "Complete enrollment process and begin your journey",
      icon: Calendar
    }
  ]

  const requirements = [
    "Completed application form",
    "Birth certificate",
    "Previous school transcripts",
    "Immunization records",
    "Two passport-sized photographs",
    "Parent/Guardian identification"
  ]

  const importantDates = [
    { event: "Application Opens", date: "November 1, 2024" },
    { event: "Application Deadline", date: "March 15, 2025" },
    { event: "Assessment Period", date: "March 20 - April 10, 2025" },
    { event: "Admission Results", date: "April 15, 2025" },
    { event: "Enrollment Deadline", date: "May 1, 2025" },
    { event: "Academic Year Begins", date: "August 15, 2025" }
  ]

  const tuitionFees = [
    { grade: "Kindergarten - Grade 2", fee: "$8,500", description: "Includes meals and materials" },
    { grade: "Grade 3 - Grade 5", fee: "$9,200", description: "Includes meals and materials" },
    { grade: "Grade 6 - Grade 8", fee: "$10,800", description: "Includes meals and lab fees" },
    { grade: "Grade 9 - Grade 12", fee: "$12,500", description: "Includes meals and lab fees" }
  ]

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We welcome students who are eager to learn, grow, and contribute to our 
            vibrant school community. Start your application journey today.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Admission Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold">{step.step}</span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <step.icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Application Requirements
            </h3>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Download Application Form
              </Button>
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Important Dates
            </h3>
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{item.event}</span>
                  <span className="text-blue-600 font-medium">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tuition Fees */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tuition & Fees
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tuitionFees.map((tuition, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <CardTitle className="text-lg">{tuition.grade}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{tuition.fee}</div>
                  <p className="text-sm text-gray-600">{tuition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Financial aid and scholarship opportunities available for qualified families.
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Learn About Financial Aid
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-xl opacity-90 mb-8">
            Take the first step towards an exceptional education at Branov School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Application
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Schedule Campus Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}