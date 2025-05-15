
import { Smartphone, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileAppFeature = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-kadochi-light-blue to-kadochi-light-coral/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Mobile App Image */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="bg-white p-3 rounded-3xl shadow-xl max-w-xs mx-auto">
              <img 
                src="/lovable-uploads/1d9f9b3c-041f-4e49-8bdc-8fee7bdbd9bf.png" 
                alt="اپلیکیشن موبایل کادوچی" 
                className="rounded-2xl h-auto w-full"
              />
            </div>
          </div>
          
          {/* Feature Text */}
          <div className="md:w-1/2 text-center md:text-right order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kadochi-navy">
              مدیریت لیست هدایای خود در هر کجا با تلفن همراه
            </h2>
            <p className="text-lg text-kadochi-navy/80 mb-8 leading-relaxed">
              هدایا را اضافه کنید، نمای بازدیدکنندگان را سفارشی کنید، یادداشت‌های تشکر را پیگیری کنید و بسیاری امکانات دیگر.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center md:justify-end">
                <Check className="text-kadochi-coral ml-2" />
                <span className="text-kadochi-navy">افزودن آسان هدایا به لیست</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Check className="text-kadochi-coral ml-2" />
                <span className="text-kadochi-navy">دریافت اعلان برای هدایای رزرو شده</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Check className="text-kadochi-coral ml-2" />
                <span className="text-kadochi-navy">ارسال یادداشت تشکر به دهنده هدیه</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Button className="bg-black text-white hover:bg-black/90 px-6 py-2 rounded-lg flex items-center space-x-2 space-x-reverse">
                <Download size={20} className="ml-2" />
                <div className="text-right">
                  <div className="text-xs">دانلود از</div>
                  <div className="font-bold">اپ استور</div>
                </div>
              </Button>
              <Button className="bg-black text-white hover:bg-black/90 px-6 py-2 rounded-lg flex items-center space-x-2 space-x-reverse">
                <Smartphone size={20} className="ml-2" />
                <div className="text-right">
                  <div className="text-xs">دریافت در</div>
                  <div className="font-bold">گوگل پلی</div>
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
