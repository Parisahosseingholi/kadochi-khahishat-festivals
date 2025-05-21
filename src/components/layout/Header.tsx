
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RegistrationDialog } from "@/components/auth/RegistrationDialog";
import SecondaryNavBar from './SecondaryNavBar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white shadow-sm py-4">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-kadochi-coral">
              کادوچی
            </Link>
          </div>

          {/* Auth Buttons and Language Selector - Desktop */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center ml-4">
              <Select
                value={language}
                onValueChange={(value) => setLanguage(value as 'fa' | 'en')}
              >
                <SelectTrigger className="w-[80px] h-9">
                  <div className="flex items-center">
                    <Globe size={18} className="mr-1" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fa">فارسی</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              variant="outline" 
              className="border-kadochi-coral text-kadochi-coral hover:bg-kadochi-light-coral/10"
            >
              {language === 'fa' ? 'ورود' : 'Login'}
            </Button>
            <Button 
              className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white"
              onClick={() => setIsRegistrationOpen(true)}
            >
              {language === 'fa' ? 'ثبت نام' : 'Sign Up'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <div className="mr-4">
              <Select
                value={language}
                onValueChange={(value) => setLanguage(value as 'fa' | 'en')}
              >
                <SelectTrigger className="w-[70px] h-9 px-2">
                  <div className="flex items-center">
                    <Globe size={16} />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fa">فارسی</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button className="text-kadochi-navy" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Secondary Navigation Bar */}
      <SecondaryNavBar />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-md animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-kadochi-coral text-kadochi-coral hover:bg-kadochi-light-coral/10 w-full">
                {language === 'fa' ? 'ورود' : 'Login'}
              </Button>
              <Button 
                className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsRegistrationOpen(true);
                }}
              >
                {language === 'fa' ? 'ثبت نام' : 'Sign Up'}
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Registration Dialog */}
      <RegistrationDialog 
        open={isRegistrationOpen} 
        onOpenChange={setIsRegistrationOpen} 
      />
    </div>
  );
};

export default Header;
