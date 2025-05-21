
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();
  
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kadochi-navy mb-6 leading-tight">
              {language === 'fa' 
                ? 'رویاهای خود را با <span className="text-kadochi-coral">کادوچی</span> به اشتراک بگذارید' 
                : 'Share your dreams with <span className="text-kadochi-coral">Kadochi</span>'}
            </h1>
            <p className="text-lg md:text-xl text-kadochi-navy/80 mb-8 leading-relaxed">
              {language === 'fa' 
                ? 'پلتفرم ساخت و اشتراک‌گذاری لیست هدایای تولد، عروسی، و سوغاتی برای ایرانیان سراسر جهان'
                : 'The platform for creating and sharing birthday, wedding, and souvenir gift lists for Iranians worldwide'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white px-8 py-6 text-lg font-medium w-full sm:w-auto">
                <Link to="/create-wishlist">
                  {language === 'fa' ? 'ساخت لیست هدیه' : 'Create Gift List'}
                </Link>
              </Button>
              <Button variant="outline" className="border-kadochi-navy text-kadochi-navy hover:bg-kadochi-navy/5 px-8 py-6 text-lg font-medium w-full sm:w-auto">
                <Link to="/browse-wishlists">
                  {language === 'fa' ? 'مرور لیست‌ها' : 'Browse Lists'}
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 max-w-lg mx-auto md:mx-0 flex justify-center">
            <img 
              src="/lovable-uploads/1d9f9b3c-041f-4e49-8bdc-8fee7bdbd9bf.png" 
              alt={language === 'fa' ? "کادوچی - هدایای با عشق" : "Kadochi - Gifts with Love"}
              className="rounded-lg shadow-xl animate-fade-in max-w-xs md:max-w-sm" 
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-kadochi-coral text-2xl mb-3">+10,000</div>
            <div className="text-kadochi-navy font-medium">
              {language === 'fa' ? 'کاربر فعال' : 'Active Users'}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-kadochi-coral text-2xl mb-3">+50,000</div>
            <div className="text-kadochi-navy font-medium">
              {language === 'fa' ? 'لیست‌های ساخته شده' : 'Created Lists'}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-kadochi-coral text-2xl mb-3">+200</div>
            <div className="text-kadochi-navy font-medium">
              {language === 'fa' ? 'فروشگاه همکار' : 'Partner Stores'}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-kadochi-coral text-2xl mb-3">+100,000</div>
            <div className="text-kadochi-navy font-medium">
              {language === 'fa' ? 'هدایای اشتراک‌گذاری شده' : 'Shared Gifts'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
