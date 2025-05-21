
import { useState } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    id: 1,
    nameFa: 'سارا احمدی',
    nameEn: 'Sara Ahmadi',
    roleFa: 'عروس',
    roleEn: 'Bride',
    textFa: 'کادوچی به من کمک کرد تا لیست هدایای عروسی‌ام را به راحتی با تمام مهمانان به اشتراک بگذارم. دیگر نگران دریافت هدایای تکراری نیستم!',
    textEn: 'Kadochi helped me easily share my wedding gift list with all my guests. I no longer worry about receiving duplicate gifts!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&w=256&h=256&dpr=2&q=80',
  },
  {
    id: 2,
    nameFa: 'امیر محمدی',
    nameEn: 'Amir Mohammadi',
    roleFa: 'خریدار هدیه',
    roleEn: 'Gift Buyer',
    textFa: 'با کادوچی، انتخاب هدیه برای دوستانم بسیار آسان شده است. دقیقاً می‌دانم چه چیزی دوست دارند و کجا باید آن را خریداری کنم.',
    textEn: 'With Kadochi, choosing gifts for my friends has become much easier. I know exactly what they like and where to buy it.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=256&h=256&dpr=2&q=80',
  },
  {
    id: 3,
    nameFa: 'مریم رضایی',
    nameEn: 'Maryam Rezaei',
    roleFa: 'کاربر لیست تولد',
    roleEn: 'Birthday List User',
    textFa: 'لیست تولدم در کادوچی را با دوستانم به اشتراک گذاشتم و همه هدایای مورد علاقه‌ام را دریافت کردم. واقعاً کاربردی و هوشمندانه است!',
    textEn: 'I shared my Kadochi birthday list with my friends and received all my favorite gifts. It\'s really practical and smart!',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=256&h=256&dpr=2&q=80',
  },
  {
    id: 4,
    nameFa: 'رضا حسینی',
    nameEn: 'Reza Hosseini',
    roleFa: 'فروشنده اینستاگرام',
    roleEn: 'Instagram Seller',
    textFa: 'به عنوان یک فروشنده اینستاگرام، همکاری با کادوچی به من کمک کرده مشتریان جدیدی پیدا کنم و فروشم را افزایش دهم.',
    textEn: 'As an Instagram seller, partnering with Kadochi has helped me find new customers and increase my sales.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1571868200127-522ca2392175?ixlib=rb-4.0.3&w=256&h=256&dpr=2&q=80',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {language === 'fa' ? 'نظرات کاربران' : 'User Testimonials'}
          </h2>
          <p className="section-subtitle">
            {language === 'fa' 
              ? 'ببینید کاربران ما در مورد تجربه خود با کادوچی چه می‌گویند.'
              : 'See what our users say about their experience with Kadochi.'}
          </p>
        </div>

        {/* Desktop Testimonial Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md transition-all hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                <img 
                  src={testimonial.image} 
                  alt={language === 'fa' ? testimonial.nameFa : testimonial.nameEn}
                  className="w-16 h-16 rounded-full object-cover border-2 border-kadochi-coral"
                />
                <div>
                  <h3 className="font-bold text-kadochi-navy text-lg">
                    {language === 'fa' ? testimonial.nameFa : testimonial.nameEn}
                  </h3>
                  <p className="text-gray-500">
                    {language === 'fa' ? testimonial.roleFa : testimonial.roleEn}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700">
                {language === 'fa' ? testimonial.textFa : testimonial.textEn}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Testimonial Slider */}
        <div className="md:hidden">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 space-x-reverse mb-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={language === 'fa' ? testimonials[currentIndex].nameFa : testimonials[currentIndex].nameEn}
                className="w-16 h-16 rounded-full object-cover border-2 border-kadochi-coral"
              />
              <div>
                <h3 className="font-bold text-kadochi-navy text-lg">
                  {language === 'fa' ? testimonials[currentIndex].nameFa : testimonials[currentIndex].nameEn}
                </h3>
                <p className="text-gray-500">
                  {language === 'fa' ? testimonials[currentIndex].roleFa : testimonials[currentIndex].roleEn}
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <p className="text-gray-700">
              {language === 'fa' ? testimonials[currentIndex].textFa : testimonials[currentIndex].textEn}
            </p>

            <div className="flex justify-between mt-6">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={20} className="text-kadochi-navy" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <span 
                    key={index} 
                    className={`block w-2 h-2 rounded-full ${
                      currentIndex === index ? 'bg-kadochi-coral' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={20} className="text-kadochi-navy" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-kadochi-navy mb-8">
            {language === 'fa' 
              ? 'مورد اعتماد هزاران ایرانی در سراسر جهان' 
              : 'Trusted by thousands of Iranians worldwide'}
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="w-32">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt={language === 'fa' ? 'همکار ۱' : 'Partner 1'} className="w-full h-auto grayscale" />
            </div>
            <div className="w-32">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt={language === 'fa' ? 'همکار ۲' : 'Partner 2'} className="w-full h-auto grayscale" />
            </div>
            <div className="w-32">
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" alt={language === 'fa' ? 'همکار ۳' : 'Partner 3'} className="w-full h-auto grayscale" />
            </div>
            <div className="w-32">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt={language === 'fa' ? 'همکار ۴' : 'Partner 4'} className="w-full h-auto grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
