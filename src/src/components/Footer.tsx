import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'academic', label: 'Academics' },
    { id: 'admission', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const importantLinks = [
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact' },
    { label: 'Privacy Policy', external: true },
    { label: 'Terms & Conditions', external: true },
    { label: 'Fee Structure', external: true }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">PGS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pranav Global School</h3>
                <p className="text-white/90">Excellence in Education</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Pranav Global School is committed to providing quality education that nurtures young minds 
              and prepares them for a successful future. We foster creativity, critical thinking, and 
              character development in a supportive learning environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => onNavigate(link.id!)}
                      className="text-white/80 hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-full">
                <Phone size={16} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-white/80">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-full">
                <Mail size={16} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-white/80">info@pranavglobalschool.edu</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-full">
                <MapPin size={16} />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-white/80">123 Education Lane, City, State</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/70">
            © {currentYear} Pranav Global School. All rights reserved. | 
            <span className="ml-1">Designed with ❤️ for Excellence in Education</span>
          </p>
        </div>
      </div>
    </footer>
  );
}