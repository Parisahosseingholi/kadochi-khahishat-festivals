
import { Smartphone, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const MobileAppFeature = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-kadochi-light-blue to-kadochi-light-coral/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Mobile App Image */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="bg-white p-3 rounded-3xl shadow-xl max-w-xs mx-auto">
              <img 
                src="/lovable-uploads/1d9f9b3c-041f-4e49-8bdc-8fee7bdbd9bf.png" 
                alt={language === 'fa' ? "اپلیکیشن موبایل کادوچی" : "Kadochi Mobile App"}
                className="rounded-2xl h-auto w-full"
              />
            </div>
          </div>
          
          {/* Feature Text */}
          <div className={`md:w-1/2 text-center ${language === 'fa' ? 'md:text-right' : 'md:text-left'} order-1 md:order-2`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kadochi-navy">
              {language === 'fa' 
                ? 'مدیریت لیست هدایای خود در هر کجا با تلفن همراه'
                : 'Manage your registry and gift lists on the go with your smartphone'}
            </h2>
            <p className="text-lg text-kadochi-navy/80 mb-8 leading-relaxed">
              {language === 'fa' 
                ? 'هدایا را اضافه کنید، نمای بازدیدکنندگان را سفارشی کنید، یادداشت‌های تشکر را پیگیری کنید و بسیاری امکانات دیگر.'
                : 'Add gifts, customize visitor view, track thank you notes, and more.'}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className={`flex items-center justify-center ${language === 'fa' ? 'md:justify-end' : 'md:justify-start'}`}>
                <Check className={`text-kadochi-coral ${language === 'fa' ? 'ml-2' : 'mr-2'}`} />
                <span className="text-kadochi-navy">
                  {language === 'fa' ? 'افزودن آسان هدایا به لیست' : 'Easily add gifts to your list'}
                </span>
              </div>
              <div className={`flex items-center justify-center ${language === 'fa' ? 'md:justify-end' : 'md:justify-start'}`}>
                <Check className={`text-kadochi-coral ${language === 'fa' ? 'ml-2' : 'mr-2'}`} />
                <span className="text-kadochi-navy">
                  {language === 'fa' ? 'دریافت اعلان برای هدایای رزرو شده' : 'Get notifications for reserved gifts'}
                </span>
              </div>
              <div className={`flex items-center justify-center ${language === 'fa' ? 'md:justify-end' : 'md:justify-start'}`}>
                <Check className={`text-kadochi-coral ${language === 'fa' ? 'ml-2' : 'mr-2'}`} />
                <span className="text-kadochi-navy">
                  {language === 'fa' ? 'ارسال یادداشت تشکر به دهنده هدیه' : 'Send thank you notes to gift givers'}
                </span>
              </div>
            </div>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center ${language === 'fa' ? 'md:justify-end sm:space-x-reverse' : 'md:justify-start'} space-y-4 sm:space-y-0 sm:space-x-4`}>
              <Button className="bg-black text-white hover:bg-black/90 px-6 py-2 rounded-lg flex items-center space-x-2 space-x-reverse">
                <Download size={20} className={language === 'fa' ? 'ml-2' : 'mr-2'} />
                <div className={language === 'fa' ? 'text-right' : 'text-left'}>
                  <div className="text-xs">{language === 'fa' ? 'دانلود از' : 'Download from'}</div>
                  <div className="font-bold">{language === 'fa' ? 'اپ استور' : 'App Store'}</div>
                </div>
              </Button>
              <Button className="bg-black text-white hover:bg-black/90 px-6 py-2 rounded-lg flex items-center space-x-2 space-x-reverse">
                <Smartphone size={20} className={language === 'fa' ? 'ml-2' : 'mr-2'} />
                <div className={language === 'fa' ? 'text-right' : 'text-left'}>
                  <div className="text-xs">{language === 'fa' ? 'دریافت در' : 'Get it on'}</div>
                  <div className="font-bold">{language === 'fa' ? 'گوگل پلی' : 'Google Play'}</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppFeature;
