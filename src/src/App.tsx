import { useState, useEffect } from 'react'
import { X, Calendar, MessageCircle } from 'lucide-react'
import { TopHeader } from '../components/TopHeader'
import { Header } from '../components/Header'
import { HomePage } from '../components/HomePage'
import logoImage from '../assets/2.png'
import { AboutSection } from '../components/AboutSection'
import { InfrastructureSection } from '../components/InfrastructureSection'
import { AcademicsSection } from '../components/AcademicsSection'
import { AdmissionFormSection } from '../components/AdmissionFormSection'
import { GallerySection } from '../components/GallerySection'
import { CareerSection } from '../components/CareerSection'
import { ContactFormSection } from '../components/ContactFormSection'
import { HeadAdministrationSection } from '../components/HeadAdministrationSection'
import { OurFacultySection } from '../components/OurFacultySection'
import { CenterDirectorSection } from '../components/CenterDirectorSection'
import { FounderMessageSection } from '../components/FounderMessageSection'
import { NewFooter } from '../components/NewFooter'
import { ScrollToTop } from '../components/ScrollToTop'

// Admission Modal Component
const AdmissionModal = ({ isOpen, onClose, onApplyNow }: {
  isOpen: boolean;
  onClose: () => void;
  onApplyNow: () => void;
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner Image */}
        <div className="relative h-0 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
          <div className="relative z-10 text-center">
          
<div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
            <img src={logoImage} alt="" style={{width:"150px",height:"150px",objectFit:"contain"}} />
  </div>            {/* School Name */}
            <div className="text-center">
             <div className="text-center">
              <h1 className="text-2xl font-bold text-primary mdtext ">Pranav Global School</h1>
              <p className="text-sm  text-destructive font-semibold mdtext1">EDUCATE.EMPOWER.EXCEL</p>
            </div>
            </div>
          </div>
          
          {/* Decorative elements */}
        
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              🌟 Join Pranav Global School Family 🌟
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6" style={{fontSize:"15px"}}>
              Applications are now open for admission to Pranav Global School. Join us for world-class education 
              that empowers students to excel in academics, character, and life skills.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🏆", text: "Excellence in Education" },
              { icon: "👨‍🏫", text: "Experienced Faculty" },
              { icon: "🌟", text: "Holistic Development" },
              { icon: "🏫", text: "Modern Infrastructure" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{benefit.icon}</span>
                <span className="font-medium text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl p-6 text-center border-2 border-orange-100">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-medium text-gray-600">Limited Seats Available - Apply Today!</span>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={onApplyNow}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-800 text-black py-4 px-8 rounded-full font-bold text-lg hover:from-teal-700 hover:to-teal-900 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply for Admission - Join Pranav Global School!
                {/* <ChevronRight className="w-5 h-5 ml-2 inline" /> */}
              </button>
              
              <button
                onClick={onClose}
                className="w-full text-gray-600 py-2 hover:text-gray-800 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showAdmissionModal, setShowAdmissionModal] = useState(false)

  // Show modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdmissionModal(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
  }

  const handleApplyNow = () => {
    setShowAdmissionModal(false)
    setCurrentPage('admission')
  }

  const handleCloseModal = () => {
    setShowAdmissionModal(false)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutSection />
      case 'infrastructure':
        return <InfrastructureSection />
      case 'academic':
        return <AcademicsSection />
      case 'admission':
        return <AdmissionFormSection />
      case 'gallery':
        return <GallerySection />
      case 'career':
        return <CareerSection />
      case 'contact':
        return <ContactFormSection />
       case 'Founder Message':
      return <FounderMessageSection onNavigate={handleNavigation} />   
    case 'Center Director':
      return <CenterDirectorSection onNavigate={handleNavigation}/> 
    case 'Head Administration':
      return <HeadAdministrationSection onNavigate={handleNavigation}/>
    case 'Our Faculty':
      return <OurFacultySection onNavigate={handleNavigation}/>   
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <TopHeader onNavigate={handleNavigation} />
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>
        {renderCurrentPage()}
      </main>
      <NewFooter onNavigate={handleNavigation} />
      <ScrollToTop />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8438811038"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg cursor-pointer hover:bg-[#20bd5a] transition-all hover:scale-110 flex"
        style={{ 
          animation: 'pulse 2s infinite',
          bottom: '6rem', 
          right: '2rem',
          zIndex: 9999,
          backgroundColor: '#25D366'
        }}
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
      
      {/* Admission Modal */}
      <AdmissionModal 
        isOpen={showAdmissionModal}
        onClose={handleCloseModal}
        onApplyNow={handleApplyNow}
      />
    </div>
  )
}