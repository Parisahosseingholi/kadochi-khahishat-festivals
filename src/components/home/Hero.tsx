
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kadochi-navy mb-6 leading-tight">
              رویاهای خود را با <span className="text-kadochi-coral">کادوچی</span> به اشتراک بگذارید
            </h1>
            <p className="text-lg md:text-xl text-kadochi-navy/80 mb-8 leading-relaxed">
              پلتفرم ساخت و اشتراک‌گذاری لیست هدایای تولد، عروسی، و سوغاتی برای ایرانیان سراسر جهان
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white px-8 py-6 text-lg font-medium w-full sm:w-auto">
                ساخت لیست هدیه
              </Button>
              <Button variant="outline" className="border-kadochi-navy text-kadochi-navy hover:bg-kadochi-navy/5 px-8 py-6 text-lg font-medium w-full sm:w-auto">
                مرور لیست‌ها
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 max-w-lg mx-auto md:mx-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="کادوچی - پلتفرم لیست هدایا" 
              className="rounded-lg shadow-xl animate-fade-in" 
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-kadochi-coral text-2xl mb-3">+۱۰,۰۰۰</div>
            <div className="text-kadochi-navy font-medium">کاربر فعال</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-kadochi-coral text-2xl mb-3">+۵۰,۰۰۰</div>
            <div className="text-kadochi-navy font-medium">لیست‌های ساخته شده</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-kadochi-coral text-2xl mb-3">+۲۰۰</div>
            <div className="text-kadochi-navy font-medium">فروشگاه همکار</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-kadochi-coral text-2xl mb-3">+۱۰۰,۰۰۰</div>
            <div className="text-kadochi-navy font-medium">هدایای اشتراک‌گذاری شده</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
