import { Button } from './ui/button'
import logoImage from '../assets/2.png'

interface TopHeaderProps {
  onNavigate: (page: string) => void;
}

export function TopHeader({ onNavigate }: TopHeaderProps) {
  return (
    <div className="bg-background border-b border-border py-4">
      <div className="full mx-auto px-4 sm:px-6 lg:px-7">
        <div className="flex justify-between items-center">
          {/* Left side - School Logo and Name */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="mr-4 flex-shrink-0">
              <img 
                src={logoImage} 
                alt="Pranav Global School Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-primary mdtext ">Pranav Global School</h1>
              <p className="text-sm  text-destructive font-semibold mdtext1">EDUCATE.EMPOWER.EXCEL</p>
            </div>
          </button>

          {/* Right side - Admission Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => onNavigate('admission')}
              className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Online Admission
            </Button>
                        <Button style={{marginLeft:"20px"}}
              onClick={() => onNavigate('admission')}
              className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Online Fees Payment
            </Button>

          </div>

          {/* Mobile Admission Button */}
          <div className="md:hidden">
            <Button 
              onClick={() => onNavigate('admission')}
              className="bg-destructive hover:bg-destructive/90 text-white px-4 py-2 text-sm font-semibold rounded-lg ko"
            >
              Admission
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}