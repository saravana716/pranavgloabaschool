import { Facebook, Instagram, Mail, Phone, MapPin, Play } from 'lucide-react'
import logoImage from '../assets/2.png'

interface NewFooterProps {
  onNavigate?: (page: string) => void;
}

export function NewFooter({ onNavigate }: NewFooterProps) {
  const exploreLinks = [
    { name: "Home", page: "home" },
    { name: "About Us", page: "about" },
    { name: "Infrastructure", page: "infrastructure" },
    { name: "Careers", page: "career" },
    { name: "Contact Us", page: "contact" }
  ]

  const quickLinks = [
    { name: "Admission Enquiry", page: "contact" },
    { name: "Admission Form", page: "admission" },
    { name: "Fee Structure", page: "admission" },
    { name: "Curriculum", page: "academic" }
  ]

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <footer className="bg-background relative">

      {/* Google Maps Section */}
      <div className="w-full h-80 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.828809401694!2d80.03127507803457!3d12.7896215866593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f9dca58cccc9%3A0x2ba1db60a5760e9a!2s3%2C%20Silapathykaram%20St%2C%20Maraimalai%20Nagar%2C%20Tamil%20Nadu%20603209!5e0!3m2!1sen!2sin!4v1768156570560!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pranav Global School Location"
          className="filter grayscale-0"
        />
        
        {/* Map Overlay with School Location */}
        <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-destructive" />
            <div>
              <p className="font-semibold text-sm text-foreground">Pranav Global School</p>
              <p className="text-xs text-muted-foreground">Maraimalai Nagar, Chennai</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white py-4">
        <div className="full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 rounded-lg">
            {/* Phone */}
            <div className="flex items-start md:items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                <Phone className="h-8 w-8" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">Call Us</p>
                <p className="font-semibold" style={{fontSize:20}}>84388 11038</p>
                <p className="font-semibold" style={{fontSize:20}}>75400 61038 </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start md:items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                <Mail className="h-8 w-8" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">Email Us</p>
                <p className="font-semibold break-all" style={{fontSize:20}}>pranavpreschool@gmail.com</p>
                <p className="font-semibold break-all" style={{fontSize:20}}>pranavglobalschool@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start md:items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">Address</p>
                <p className="font-semibold" style={{fontSize:20}}>NH-3,Silapathikaram Street,</p>
                <p className="font-semibold" style={{fontSize:20}}>Maraimalai Nagar,</p>
                <p className="text-sm text-white/80" style={{fontSize:20}}>Chennai - 603209</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="relative" style={{ marginTop: '-1px' }}>
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96 C240,128 360,128 540,96 C720,64 900,64 1080,96 C1260,128 1380,128 1440,96 L1440,160 L0,160 Z"
            fill="#0F4C5C"
            fillOpacity="1"
          />
          <path
            d="M0,112 C240,144 360,144 540,112 C720,80 900,80 1080,112 C1260,144 1380,144 1440,112 L1440,160 L0,160 Z"
            fill="#0F4C5C"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* Main Footer Content with Dark Blue Background */}
      <div 
        className="relative py-16"
        style={{
          background: 'linear-gradient(180deg, #0F4C5C 0%, #1d5b6aff 50%, #045569ff 100%)',
          marginTop: '-10px'
        }}
      >
        <div className="full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-3">
                  <img 
                    src={logoImage} 
                    alt="Pranav Global School Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base text-white">
                    Pranav Global School
                  </h3>
                  <p className="text-xs md:text-sm text-orange-400 font-semibold" style={{color:"orange"}}>
                    EDUCATE.EMPOWER.EXCEL
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 text-white">
                Pranav Global School in Chennai is committed to providing a holistic learning experience that blends academics, creativity, and values. With a focus on innovation, discipline, and excellence, we nurture young minds to become confident, responsible, and future-ready leaders.
              </p>
            </div>

            {/* Explore */}
            <div className='data'>
              <h4 className="font-bold text-white mb-6 text-white">Explore</h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="text-gray-300 hover:text-orange-400 transition-colors text-sm text-left text-white"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="text-gray-300 hover:text-orange-400 transition-colors text-sm text-left text-white"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-white mb-6 text-white">Social Media</h4>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/people/Pranav-Pre-School-Daycare/61579884035339/"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-white">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/pranavpreschoolanddaycare/"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-white">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FF0000" }}
                  >
                    <Play className="h-4 w-4 text-white fill-white" />
                  </div>
                  <span className="text-sm text-white">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright with Dark Background */}
      <div 
        className="text-white py-4"
        style={{ backgroundColor: '#0F4C5C' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">
              © 2026, Pranav Global School. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}