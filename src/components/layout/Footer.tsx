
import { Link } from 'react-router-dom';
import { Instagram, Heart, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const isRtl = language === 'fa';
  
  return (
    <footer className="bg-kadochi-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-kadochi-coral mb-4">
              {isRtl ? 'کادوچی' : 'Kadochi'}
            </h2>
            <p className="text-gray-300 mb-4">
              {isRtl 
                ? 'پلتفرم لیست هدایای کادوچی - محلی برای ساخت و اشتراک‌گذاری لیست هدایای تولد، عروسی، و سوغاتی برای ایرانیان سراسر جهان.'
                : 'Kadochi Gift List Platform - A place to create and share birthday, wedding, and souvenir gift lists for Iranians worldwide.'}
            </p>
            <div className={`flex ${isRtl ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
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
            <h3 className="text-lg font-bold mb-4">
              {isRtl ? 'لینک‌های سریع' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  {isRtl ? 'خانه' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/create-wishlist" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  {isRtl ? 'ساخت لیست هدیه' : 'Create Gift List'}
                </Link>
              </li>
              <li>
                <Link to="/browse-wishlists" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  {isRtl ? 'مرور لیست‌ها' : 'Browse Lists'}
                </Link>
              </li>
              <li>
                <Link to="/seller-partnership" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  {isRtl ? 'همکاری فروشندگان' : 'Seller Partnership'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-kadochi-coral transition-colors">
                  {isRtl ? 'تماس با ما' : 'Contact Us'}
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {isRtl ? 'درباره ما' : 'About Us'}
            </h3>
            <p className="text-gray-300 mb-4">
              {isRtl
                ? 'کادوچی با هدف تسهیل فرآیند هدیه دادن و انتخاب هدیه برای عزیزان‌مان ایجاد شده است. با ما میتوانید آرزوهای خود را به اشتراک بگذارید و هدیه‌های مناسب دریافت کنید.'
                : 'Kadochi was created with the goal of facilitating the process of gift-giving and gift selection for our loved ones. With us, you can share your wishes and receive suitable gifts.'}
            </p>
            <div className="text-kadochi-coral flex items-center justify-end">
              <Heart size={16} className={isRtl ? 'ml-1' : 'mr-1'} />
              <span>{isRtl ? 'ساخته شده با عشق در ایران' : 'Made with love in Iran'}</span>
            </div>
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 pt-8 border-t border-gray-700">
          {/* Company Info */}
          <div>
            <h4 className="font-bold mb-3 text-kadochi-coral">
              {isRtl ? 'اطلاعات شرکت' : 'Company Info'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'درباره ما' : 'About Us'}</Link></li>
              <li><Link to="/wedding-guides" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'راهنمای عروسی' : 'Wedding Guides'}</Link></li>
              <li><Link to="/baby-guides" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'راهنمای نوزاد' : 'Baby Guides'}</Link></li>
              <li><Link to="/universal-gift-list" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'لیست هدایای جهانی چیست؟' : 'What Is a Universal Gift List?'}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'تماس با ما' : 'Contact Us'}</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'اخبار و انتشارات' : 'News and Press Releases'}</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'قوانین و شرایط' : 'Terms and Conditions'}</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'حریم خصوصی' : 'Privacy Statement'}</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'فرصت‌های شغلی' : 'Careers'}</Link></li>
            </ul>
          </div>

          {/* For Members */}
          <div>
            <h4 className="font-bold mb-3 text-kadochi-coral">
              {isRtl ? 'برای اعضا' : 'For Members'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'تجربه مشتری / سوالات متداول' : 'Customer Experience / FAQs'}</Link></li>
              <li><Link to="/mobile-apps" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'اپلیکیشن‌های موبایل ما' : 'Our Mobile Apps'}</Link></li>
              <li><Link to="/find-registry" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'یافتن یک رجیستری' : 'Find A Registry'}</Link></li>
              <li><Link to="/members-directory" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'دایرکتوری اعضا' : 'Members Directory'}</Link></li>
              <li><Link to="/stores" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'فروشگاه‌های مورد علاقه ما' : 'Stores We Like'}</Link></li>
              <li><Link to="/extension" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'افزونه مرورگر ما' : 'Our Browser Extension'}</Link></li>
              <li><Link to="/gift-exchange" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'تبادل هدیه' : 'Gift Exchange'}</Link></li>
            </ul>
          </div>

          {/* Nonprofits/Organizations */}
          <div>
            <h4 className="font-bold mb-3 text-kadochi-coral">
              {isRtl ? 'سازمان‌های غیرانتفاعی' : 'Nonprofits/Organizations'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/create-gift-list" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'ایجاد لیست هدیه' : 'Create a Gift List'}</Link></li>
              <li><Link to="/maximize-giving" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'به حداکثر رساندن اهدای غیرانتفاعی' : 'Maximize Nonprofit Giving'}</Link></li>
              <li><Link to="/cash-gift" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'سرویس هدیه نقدی' : 'Cash Gift Service'}</Link></li>
              <li><Link to="/retailers" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'فروشندگان تأیید شده' : 'Prescreened Retailers'}</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'سوالات متداول' : 'FAQs'}</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="font-bold mb-3 text-kadochi-coral">
              {isRtl ? 'برای شرکا' : 'For Partners'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/registry-software" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'نرم‌افزار رجیستری هدیه' : 'Gift Registry Software'}</Link></li>
              <li><Link to="/for-shopify" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'برای شاپیفای' : 'For Shopify'}</Link></li>
              <li><Link to="/partner-login" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'ورود شرکا' : 'Partner Login'}</Link></li>
              <li><Link to="/partner-blog" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'وبلاگ شرکا' : 'Partner Blog'}</Link></li>
              <li><Link to="/affiliate" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'برنامه وابسته' : 'Affiliate Program'}</Link></li>
              <li><Link to="/advertise" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'تبلیغات با ما' : 'Advertise with Us'}</Link></li>
            </ul>
          </div>

          {/* International */}
          <div>
            <h4 className="font-bold mb-3 text-kadochi-coral">
              {isRtl ? 'بین‌المللی' : 'International'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/australia-baby" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'نوزاد استرالیا' : 'Australia Baby'}</Link></li>
              <li><Link to="/australia-wedding" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'عروسی استرالیا' : 'Australia Wedding'}</Link></li>
              <li><Link to="/canada-baby" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'نوزاد کانادا' : 'Canada Baby'}</Link></li>
              <li><Link to="/canada-wedding" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'عروسی کانادا' : 'Canada Wedding'}</Link></li>
              <li><Link to="/india-wedding" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'عروسی هند' : 'India Wedding'}</Link></li>
              <li><Link to="/nz-baby" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'نوزاد نیوزیلند' : 'New Zealand Baby'}</Link></li>
              <li><Link to="/nz-wedding" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'عروسی نیوزیلند' : 'New Zealand Wedding'}</Link></li>
              <li><Link to="/sa-baby" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'نوزاد آفریقای جنوبی' : 'South Africa Baby'}</Link></li>
              <li><Link to="/sa-wedding" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'عروسی آفریقای جنوبی' : 'South Africa Wedding'}</Link></li>
              <li><Link to="/uk-baby" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'نوزاد انگلستان' : 'UK Baby'}</Link></li>
              <li><Link to="/uk-wedding" className="text-gray-300 hover:text-kadochi-coral transition-colors">{isRtl ? 'عروسی انگلستان' : 'UK Wedding'}</Link></li>
            </ul>
          </div>
        </div>

        {/* Mobile App Download */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="font-bold text-kadochi-coral mb-3">
              {isRtl ? 'اپلیکیشن کادوچی را دانلود کنید' : 'Download the Kadochi App'}
            </h4>
            <div className={`flex ${isRtl ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
              <a href="#" className="bg-black px-4 py-2 rounded text-white hover:bg-gray-800 transition-colors">
                {isRtl ? 'اپ استور' : 'App Store'}
              </a>
              <a href="#" className="bg-black px-4 py-2 rounded text-white hover:bg-gray-800 transition-colors">
                {isRtl ? 'گوگل پلی' : 'Google Play'}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-kadochi-coral mb-3 text-center md:text-right">
              {isRtl ? 'با ما در ارتباط باشید' : 'Connect with Us'}
            </h4>
            <div className={`flex ${isRtl ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
              <a href="#" className="text-white hover:text-kadochi-coral">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-kadochi-coral">
                <Mail size={24} />
              </a>
              <a href="#" className="text-white hover:text-kadochi-coral">
                <Globe size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <div className={`flex flex-col md:flex-row ${isRtl ? 'md:justify-between' : 'justify-between'} items-center`}>
            <p>© {new Date().getFullYear()} {isRtl ? 'کادوچی. تمام حقوق محفوظ است.' : 'Kadochi. All rights reserved.'}</p>
            <div className={`flex mt-4 md:mt-0 ${isRtl ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
              <Link to="/privacy" className={`${isRtl ? 'ml-4' : 'mr-4'} hover:text-kadochi-coral transition-colors`}>
                {isRtl ? 'حریم خصوصی' : 'Privacy'}
              </Link>
              <Link to="/terms" className="hover:text-kadochi-coral transition-colors">
                {isRtl ? 'قوانین و مقررات' : 'Terms'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
