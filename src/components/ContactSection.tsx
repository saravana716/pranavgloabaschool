import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "123 Education Drive, Academic City, AC 12345",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "84388 11038 | 75400 61038",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@branovschool.edu",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Monday - Friday: 8:00 AM - 5:00 PM",
      color: "text-orange-600 bg-orange-50"
    }
  ]

  const departments = [
    { name: "Admissions Office", email: "admissions@branovschool.edu", phone: "(555) 123-4567" },
    { name: "Academic Affairs", email: "academics@branovschool.edu", phone: "(555) 123-4568" },
    { name: "Student Services", email: "students@branovschool.edu", phone: "(555) 123-4569" },
    { name: "Finance Office", email: "finance@branovschool.edu", phone: "(555) 123-4570" }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {/* Get In Touch */}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about admissions, academics, or our programs? 
            We're here to help. Reach out to us and we'll get back to you promptly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${contact.color}`}>
                  <contact.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600 text-sm">{contact.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input type="email" placeholder="Enter your email address" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="academics">Academic Information</option>
                  <option value="facilities">Facilities Tour</option>
                  <option value="enrollment">Enrollment Process</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us how we can help you..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Department Contacts & Map */}
          <div className="space-y-8">
            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Department Contacts</CardTitle>
                <p className="text-gray-600">
                  Connect directly with the right department for faster assistance.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 mb-1">{dept.name}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3" />
                        <a href={`mailto:${dept.email}`} className="hover:text-blue-600">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3" />
                        <a href={`tel:${dept.phone}`} className="hover:text-blue-600">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our Campus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">View directions to our campus</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> 123 Education Drive, Academic City, AC 12345</p>
                  <p><strong>Parking:</strong> Free visitor parking available</p>
                  <p><strong>Public Transit:</strong> Bus routes 15, 22, and 45 stop nearby</p>
                </div>
                <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                <hr className="my-4 border-blue-400" />
                <p className="text-sm text-blue-100">
                  For emergencies outside office hours, please call our main number 
                  and follow the prompts for urgent matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}