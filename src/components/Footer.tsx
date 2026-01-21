import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle, GraduationCap } from 'lucide-react'

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const exploreLinks = [
    { name: "Home", page: "home" },
    { name: "About Us", page: "about" },
    { name: "Infrastructure", page: "infrastructure" },
    { name: "Academic", page: "academic" },
    { name: "Gallery", page: "gallery" }
  ]

  const quickLinks = [
    { name: "Admission Enquiry", page: "contact" },
    { name: "Admission Form", page: "admission" },
    { name: "Careers", page: "career" },
    { name: "Contact Us", page: "contact" }
  ]

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <footer className="bg-muted">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-primary text-white rounded-xl p-3 mr-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Pranav Global School</h3>
                  <p className="text-muted-foreground text-sm">Excellence in Education</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Shaping future leaders through innovative education, character building, 
                and holistic development in a nurturing environment.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    Dharapuram Road, Kangayam<br />
                    A.P. Pudur, Tiruppur – 638701
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">+91 75400 61038 </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">info@pranavglobal.edu</span>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="text-muted-foreground hover:text-secondary transition-colors text-sm text-left font-medium"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Admissions</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="text-muted-foreground hover:text-secondary transition-colors text-sm text-left font-medium"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Connect With Us</h4>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                
                <a
                  href="https://wa.me/919760999555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </div>
              
              {/* Newsletter */}
              <div className="mt-8">
                <h5 className="font-semibold text-foreground mb-3">Newsletter</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with school news and events
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                  />
                  <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white text-sm">
                © 2025 Pranav Global School. All rights reserved.
              </p>
              <p className="text-white/80 text-xs mt-1">
                Affiliated to CBSE, New Delhi | Affiliation No. 1930347
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}