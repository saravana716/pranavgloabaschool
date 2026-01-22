import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isTeamSubmenuOpen, setIsTeamSubmenuOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isMobileTeamOpen, setIsMobileTeamOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const submenuRef = useRef<HTMLDivElement>(null)
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const teamTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        submenuRef.current && !submenuRef.current.contains(event.target as Node)
      ) {
        setIsAboutDropdownOpen(false)
        setIsTeamSubmenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about', hasDropdown: true },
    { name: 'Infrastructure', href: 'infrastructure' },
    { name: 'Academic', href: 'academic' },
    { name: 'Admission', href: 'admission' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Career', href: 'career' },
    { name: 'Contact', href: 'contact' }
  ]

  const aboutDropdownItems = [
    { name: 'Founder Message', href: 'Founder Message' },
    { name: 'Our Team', href: 'our-team', hasSubmenu: true }
  ]

  const teamSubmenuItems = [
    { name: 'Center Director', href: 'Center Director' },
    { name: 'Head of Administration', href: 'Head Administration' },
    { name: 'Our Faculty', href: 'Our Faculty' }
  ]

  const handleNavigation = (href: string) => {
    console.log(`Navigating to ${href} from ${currentPage}`);
    
    onNavigate(href)
    setIsAboutDropdownOpen(false)
    setIsTeamSubmenuOpen(false)
    setIsMenuOpen(false)
    setIsMobileAboutOpen(false)
    setIsMobileTeamOpen(false)
  }

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current)
    }
    setIsAboutDropdownOpen(true)
  }

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false)
      setIsTeamSubmenuOpen(false)
    }, 300)
  }

  const handleTeamMouseEnter = () => {
    if (teamTimeoutRef.current) {
      clearTimeout(teamTimeoutRef.current)
    }
    setIsTeamSubmenuOpen(true)
  }

  const handleTeamMouseLeave = () => {
    teamTimeoutRef.current = setTimeout(() => {
      setIsTeamSubmenuOpen(false)
    }, 300)
  }

  const toggleMobileAbout = () => {
    setIsMobileAboutOpen(!isMobileAboutOpen)
    if (!isMobileAboutOpen) {
      setIsMobileTeamOpen(false)
    }
  }

  const toggleMobileTeam = () => {
    setIsMobileTeamOpen(!isMobileTeamOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-sm border-b">
      <div className="full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* react-hook-form Animation Button */}
          {/* <div className="flex items-center">
            <button
              // onClick={() => setIsModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 animate-pulse"
            >
              PGS
            </button>
          </div> */}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 justify-center flex-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative" 
                ref={item.name === 'About' ? dropdownRef : null}
              >
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`flex items-center text-white hover:text-accent font-medium transition-colors ${
                        currentPage === item.href ? 'text-accent' : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {/* About Dropdown */}
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                        {aboutDropdownItems.map((dropdownItem) => (
                          <div key={dropdownItem.name} className="relative">
                            {dropdownItem.hasSubmenu ? (
                              <div
                                onMouseEnter={handleTeamMouseEnter}
                                onMouseLeave={handleTeamMouseLeave}
                              >
                                <button
                                  onClick={() => handleNavigation(dropdownItem.href)}
                                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                  {dropdownItem.name}
                                  <ChevronRight className="h-4 w-4" />
                                </button>

                                {/* Team Submenu */}
                                {isTeamSubmenuOpen && (
                                  <div
                                    ref={submenuRef}
                                    className="absolute left-full top-0 ml-2 w-48 bg-white rounded-lg shadow-lg border z-50"
                                  >
                                    {teamSubmenuItems.map((teamItem) => (
                                      <button
                                        key={teamItem.name}
                                        onClick={() => handleNavigation(teamItem.href)}
                                        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                      >
                                        {teamItem.name}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <button
                                onClick={() => handleNavigation(dropdownItem.href)}
                                className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg"
                              >
                                {dropdownItem.name}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`text-white hover:text-accent font-medium transition-colors ${
                      currentPage === item.href ? 'text-accent' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Fixed Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Sidebar Menu */}
            <div className="fixed top-0 left-0 h-screen w-64 bg-primary z-50 lg:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out shadow-2xl">
              {/* Close button */}
              <div className="flex justify-end p-4 border-b border-white/20">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              <nav className="flex flex-col space-y-2 p-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={toggleMobileAbout}
                          className={`w-full flex items-center justify-between text-white hover:text-accent font-medium px-2 py-2 text-left ${
                            currentPage === item.href ? 'text-accent' : ''
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {/* Mobile About Dropdown */}
                        {isMobileAboutOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {/* Direct link to About page */}
                            <button
                              onClick={() => handleNavigation('about')}
                              className="block w-full text-white/80 hover:text-accent font-medium px-2 py-2 text-left border-b border-white/20"
                            >
                              About Us
                            </button>
                            
                            {aboutDropdownItems.map((dropdownItem) => (
                              <div key={dropdownItem.name}>
                                {dropdownItem.hasSubmenu ? (
                                  <div>
                                    <button
                                      onClick={toggleMobileTeam}
                                      className="w-full flex items-center justify-between text-white/80 hover:text-accent font-medium px-2 py-2 text-left"
                                    >
                                      {dropdownItem.name}
                                      <ChevronDown
                                        className={`h-4 w-4 transition-transform ${isMobileTeamOpen ? 'rotate-180' : ''}`}
                                      />
                                    </button>

                                    {/* Mobile Team Submenu */}
                                    {isMobileTeamOpen && (
                                      <div className="ml-4 mt-2 space-y-2">
                                        {teamSubmenuItems.map((teamItem) => (
                                          <button
                                            key={teamItem.name}
                                            onClick={() => handleNavigation(teamItem.href)}
                                            className="block w-full text-white/70 hover:text-accent font-medium px-2 py-1 text-left"
                                          >
                                            {teamItem.name}
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => handleNavigation(dropdownItem.href)}
                                    className="block w-full text-white/80 hover:text-accent font-medium px-2 py-2 text-left"
                                  >
                                    {dropdownItem.name}
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`w-full text-white hover:text-accent font-medium px-2 py-2 text-left ${
                          currentPage === item.href ? 'text-accent' : ''
                        }`}
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => handleNavigation('admission')}
                  className="bg-red-600 hover:bg-red-700 text-white mt-4 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Apply Now
                </button>
              </nav>
            </div>
          </>
        )}

        {/* react-hook-form Animation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900">
                      Pranav Global School - Excellence in Education
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Discover our commitment to educating, empowering, and helping students excel in their academic journey.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Animated School Values */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-2xl">
                      <div className="w-16 h-16 bg-blue-900 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold">E</span>
                      </div>
                      <h3 className="font-bold text-blue-900 mb-2">EDUCATE</h3>
                      <p className="text-sm text-gray-600">Providing world-class education with innovative teaching methods</p>
                    </div>

                    <div className="text-center p-6 bg-green-50 rounded-2xl">
                      <div className="w-16 h-16 bg-green-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold">E</span>
                      </div>
                      <h3 className="font-bold text-green-600 mb-2">EMPOWER</h3>
                      <p className="text-sm text-gray-600">Empowering students to become confident leaders of tomorrow</p>
                    </div>

                    <div className="text-center p-6 bg-red-50 rounded-2xl">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold">E</span>
                      </div>
                      <h3 className="font-bold text-red-600 mb-2">EXCEL</h3>
                      <p className="text-sm text-gray-600">Achieving excellence in academics, sports, and character building</p>
                    </div>
                  </div>

                  {/* Animated Statistics */}
                  <div className="bg-blue-900 text-white rounded-2xl p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      <div className="animate-bounce">
                        <div className="text-3xl font-bold mb-2">25+</div>
                        <div className="text-blue-100 text-sm">Years of Excellence</div>
                      </div>
                      <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
                        <div className="text-3xl font-bold mb-2">5,000+</div>
                        <div className="text-blue-100 text-sm">Happy Students</div>
                      </div>
                      <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
                        <div className="text-3xl font-bold mb-2">150+</div>
                        <div className="text-blue-100 text-sm">Expert Teachers</div>
                      </div>
                      <div className="animate-bounce" style={{ animationDelay: '0.6s' }}>
                        <div className="text-3xl font-bold mb-2">98%</div>
                        <div className="text-blue-100 text-sm">Success Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center">
                    <button
                      onClick={() => {
                        setIsModalOpen(false)
                        onNavigate('admission')
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors"
                    >
                      Join Our School Family
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
