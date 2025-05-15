
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-kadochi-coral">
            کادوچی
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          <Link to="/" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            {language === 'fa' ? 'خانه' : 'Home'}
          </Link>
          <Link to="/create-wishlist" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            {language === 'fa' ? 'ساخت لیست هدیه' : 'Create Wishlist'}
          </Link>
          <Link to="/browse-wishlists" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            {language === 'fa' ? 'مرور لیست‌ها' : 'Browse Wishlists'}
          </Link>
          <Link to="/seller-partnership" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            {language === 'fa' ? 'همکاری فروشندگان' : 'Seller Partnership'}
          </Link>
          <Link to="/contact" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
          </Link>
        </nav>

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
          <Button variant="outline" className="border-kadochi-coral text-kadochi-coral hover:bg-kadochi-light-coral/10">
            {language === 'fa' ? 'ورود' : 'Login'}
          </Button>
          <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-md animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'fa' ? 'خانه' : 'Home'}
            </Link>
            <Link 
              to="/create-wishlist" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'fa' ? 'ساخت لیست هدیه' : 'Create Wishlist'}
            </Link>
            <Link 
              to="/browse-wishlists" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'fa' ? 'مرور لیست‌ها' : 'Browse Wishlists'}
            </Link>
            <Link 
              to="/seller-partnership" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'fa' ? 'همکاری فروشندگان' : 'Seller Partnership'}
            </Link>
            <Link 
              to="/contact" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Button variant="outline" className="border-kadochi-coral text-kadochi-coral hover:bg-kadochi-light-coral/10 w-full">
                {language === 'fa' ? 'ورود' : 'Login'}
              </Button>
              <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white w-full">
                {language === 'fa' ? 'ثبت نام' : 'Sign Up'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
