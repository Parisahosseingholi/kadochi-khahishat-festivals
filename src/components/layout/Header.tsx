
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            خانه
          </Link>
          <Link to="/create-wishlist" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            ساخت لیست هدیه
          </Link>
          <Link to="/browse-wishlists" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            مرور لیست‌ها
          </Link>
          <Link to="/seller-partnership" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            همکاری فروشندگان
          </Link>
          <Link to="/contact" className="text-kadochi-navy hover:text-kadochi-coral transition-colors">
            تماس با ما
          </Link>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
          <Button variant="outline" className="border-kadochi-coral text-kadochi-coral hover:bg-kadochi-light-coral/10">
            ورود
          </Button>
          <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white">
            ثبت نام
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-kadochi-navy" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              خانه
            </Link>
            <Link 
              to="/create-wishlist" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ساخت لیست هدیه
            </Link>
            <Link 
              to="/browse-wishlists" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              مرور لیست‌ها
            </Link>
            <Link 
              to="/seller-partnership" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              همکاری فروشندگان
            </Link>
            <Link 
              to="/contact" 
              className="text-kadochi-navy hover:text-kadochi-coral transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              تماس با ما
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Button variant="outline" className="border-kadochi-coral text-kadochi-coral hover:bg-kadochi-light-coral/10 w-full">
                ورود
              </Button>
              <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white w-full">
                ثبت نام
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
