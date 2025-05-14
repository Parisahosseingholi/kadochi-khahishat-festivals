
import { useState } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'سارا احمدی',
    role: 'عروس',
    text: 'کادوچی به من کمک کرد تا لیست هدایای عروسی‌ام را به راحتی با تمام مهمانان به اشتراک بگذارم. دیگر نگران دریافت هدایای تکراری نیستم!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&w=256&h=256&dpr=2&q=80',
  },
  {
    id: 2,
    name: 'امیر محمدی',
    role: 'خریدار هدیه',
    text: 'با کادوچی، انتخاب هدیه برای دوستانم بسیار آسان شده است. دقیقاً می‌دانم چه چیزی دوست دارند و کجا باید آن را خریداری کنم.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=256&h=256&dpr=2&q=80',
  },
  {
    id: 3,
    name: 'مریم رضایی',
    role: 'کاربر لیست تولد',
    text: 'لیست تولدم در کادوچی را با دوستانم به اشتراک گذاشتم و همه هدایای مورد علاقه‌ام را دریافت کردم. واقعاً کاربردی و هوشمندانه است!',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=256&h=256&dpr=2&q=80',
  },
  {
    id: 4,
    name: 'رضا حسینی',
    role: 'فروشنده اینستاگرام',
    text: 'به عنوان یک فروشنده اینستاگرام، همکاری با کادوچی به من کمک کرده مشتریان جدیدی پیدا کنم و فروشم را افزایش دهم.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1571868200127-522ca2392175?ixlib=rb-4.0.3&w=256&h=256&dpr=2&q=80',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <h2 className="section-title">نظرات کاربران</h2>
          <p className="section-subtitle">
            ببینید کاربران ما در مورد تجربه خود با کادوچی چه می‌گویند.
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
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-kadochi-coral"
                />
                <div>
                  <h3 className="font-bold text-kadochi-navy text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
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
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile Testimonial Slider */}
        <div className="md:hidden">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 space-x-reverse mb-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-kadochi-coral"
              />
              <div>
                <h3 className="font-bold text-kadochi-navy text-lg">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
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
            <p className="text-gray-700">{testimonials[currentIndex].text}</p>

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
          <h3 className="text-2xl font-bold text-kadochi-navy mb-8">مورد اعتماد هزاران ایرانی در سراسر جهان</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="w-32">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="همکار ۱" className="w-full h-auto grayscale" />
            </div>
            <div className="w-32">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="همکار ۲" className="w-full h-auto grayscale" />
            </div>
            <div className="w-32">
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" alt="همکار ۳" className="w-full h-auto grayscale" />
            </div>
            <div className="w-32">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="همکار ۴" className="w-full h-auto grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
