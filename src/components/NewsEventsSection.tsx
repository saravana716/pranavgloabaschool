import { Calendar, Clock, ArrowRight, Users, Trophy, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function NewsEventsSection() {
  const newsItems = [
    {
      title: "Science Fair Winners Announced",
      date: "January 15, 2025",
      category: "Academic",
      excerpt: "Congratulations to our students who excelled in the annual science fair, showcasing innovative projects...",
      image: "https://images.unsplash.com/photo-1686213011698-8e70cb7ed011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTY3NzQ4Mzl8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "New STEM Lab Opens This Fall",
      date: "January 10, 2025",
      category: "Facilities",
      excerpt: "We're excited to announce the opening of our state-of-the-art STEM laboratory equipped with the latest technology...",
      image: "https://images.unsplash.com/photo-1641683521844-700c456379bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1NjcyNDk4NHww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Basketball Team Wins Regional Championship",
      date: "January 5, 2025",
      category: "Sports",
      excerpt: "Our varsity basketball team has made us proud by winning the regional championship for the third consecutive year...",
      image: "https://images.unsplash.com/photo-1724256278294-02f9557d4e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGVkdWNhdG9yc3xlbnwxfHx8fDE3NTY3ODMzNjF8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      color: "bg-yellow-50 border-yellow-200"
    }
  ]

  const upcomingEvents = [
    {
      title: "Parent-Teacher Conference",
      date: "Feb 15, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "School Auditorium",
      icon: Users,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Spring Musical Performance",
      date: "Mar 10, 2025", 
      time: "7:00 PM",
      location: "Main Theater",
      icon: BookOpen,
      color: "text-purple-600 bg-purple-50"
    },
    {
      title: "Annual Sports Day",
      date: "Mar 25, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Athletic Fields",
      icon: Trophy,
      color: "text-green-600 bg-green-50"
    },
    {
      title: "Career Fair",
      date: "Apr 8, 2025",
      time: "10:00 AM - 3:00 PM", 
      location: "Gymnasium",
      icon: Users,
      color: "text-orange-600 bg-orange-50"
    }
  ]

  const categories = [
    { name: "All", count: 25, active: true },
    { name: "Academic", count: 8, active: false },
    { name: "Sports", count: 6, active: false },
    { name: "Events", count: 7, active: false },
    { name: "Facilities", count: 4, active: false }
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at Branov School. From academic 
            achievements to upcoming events, discover what makes our community special.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* News Articles */}
            <div className="space-y-8">
              {newsItems.map((news, index) => (
                <Card key={index} className={`${news.color} hover:shadow-lg transition-all duration-300`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white text-gray-900 text-xs font-medium rounded-full">
                            {news.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{news.date}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{news.title}</h3>
                      <p className="text-gray-600 mb-4">{news.excerpt}</p>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card className="sticky top-8">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${event.color}`}>
                        <event.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{event.time}</span>
                          </div>
                          <div>
                            <span className="font-medium">Location:</span> {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Stay Connected</h3>
                <p className="text-blue-100 mb-6">
                  Subscribe to our newsletter for the latest updates and announcements.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Academic Calendar",
                  "Parent Portal",
                  "Student Handbook",
                  "Library Resources",
                  "Lunch Menu",
                  "Transportation"
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}