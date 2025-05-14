
import { Link } from 'react-router-dom';
import { Instagram, Heart, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kadochi-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-kadochi-coral mb-4">کادوچی</h2>
            <p className="text-gray-300 mb-4">
              پلتفرم لیست هدایای کادوچی - محلی برای ساخت و اشتراک‌گذاری لیست هدایای تولد، عروسی، و سوغاتی برای ایرانیان سراسر جهان.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-kadochi-coral" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-kadochi-coral" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/create-wishlist" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  ساخت لیست هدیه
                </Link>
              </li>
              <li>
                <Link to="/browse-wishlists" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  مرور لیست‌ها
                </Link>
              </li>
              <li>
                <Link to="/seller-partnership" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  همکاری فروشندگان
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">درباره ما</h3>
            <p className="text-gray-300 mb-4">
              کادوچی با هدف تسهیل فرآیند هدیه دادن و انتخاب هدیه برای عزیزان‌مان ایجاد شده است. با ما میتوانید آرزوهای خود را به اشتراک بگذارید و هدیه‌های مناسب دریافت کنید.
            </p>
            <div className="text-kadochi-coral flex items-center justify-end">
              <Heart size={16} className="ml-1" />
              <span>ساخته شده با عشق در ایران</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} کادوچی. تمام حقوق محفوظ است.</p>
            <div className="flex mt-4 md:mt-0">
              <Link to="/privacy" className="ml-4 hover:text-kadochi-coral transition-colors">
                حریم خصوصی
              </Link>
              <Link to="/terms" className="hover:text-kadochi-coral transition-colors">
                قوانین و مقررات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
