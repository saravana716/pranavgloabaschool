import { Button } from './ui/button'
import { Play, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-muted to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Established 1985
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Shaping
                <span className="text-secondary"> Future </span>
                Leaders
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Branov School, we provide world-class education that nurtures creativity, 
                critical thinking, and character development. Join our community of learners 
                dedicated to excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">2000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">150+</div>
                <div className="text-sm text-muted-foreground">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 text-lg">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-muted px-8 py-3 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Video Tour
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699347914988-c61ec13c99c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTY3ODMzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Branov School Campus"
                className="w-full h-auto"
              />
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold text-xl">A+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Top Rated</div>
                    <div className="text-sm text-muted-foreground">Educational Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </section>
  )
}