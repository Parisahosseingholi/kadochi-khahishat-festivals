
import { Gift, Heart, Link, List } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const HowItWorks = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {language === 'fa' ? 'کادوچی چگونه کار می‌کند؟' : 'How does Kadochi work?'}
          </h2>
          <p className="section-subtitle">
            {language === 'fa' 
              ? 'در چهار مرحله ساده، لیست هدایای خود را بسازید و با دوستان و خانواده به اشتراک بگذارید.'
              : 'In four simple steps, create your gift list and share it with friends and family.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-kadochi-light-coral/30 p-6 rounded-full mb-6">
              <List size={32} className="text-kadochi-coral" />
            </div>
            <h3 className="text-xl font-bold text-kadochi-navy mb-3">
              {language === 'fa' ? 'ساخت لیست' : 'Create List'}
            </h3>
            <p className="text-gray-600">
              {language === 'fa'
                ? 'حساب کاربری خود را بسازید و یک لیست هدیه جدید برای مناسبت خود ایجاد کنید.'
                : 'Create your account and set up a new gift list for your occasion.'}
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-kadochi-light-coral/30 p-6 rounded-full mb-6">
              <Gift size={32} className="text-kadochi-coral" />
            </div>
            <h3 className="text-xl font-bold text-kadochi-navy mb-3">
              {language === 'fa' ? 'افزودن هدایا' : 'Add Gifts'}
            </h3>
            <p className="text-gray-600">
              {language === 'fa'
                ? 'محصولات دلخواه خود را از فروشگاه‌های آنلاین ایرانی پیدا و به لیست خود اضافه کنید.'
                : 'Find your favorite products from Iranian online stores and add them to your list.'}
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-kadochi-light-coral/30 p-6 rounded-full mb-6">
              <Link size={32} className="text-kadochi-coral" />
            </div>
            <h3 className="text-xl font-bold text-kadochi-navy mb-3">
              {language === 'fa' ? 'اشتراک‌گذاری' : 'Share'}
            </h3>
            <p className="text-gray-600">
              {language === 'fa'
                ? 'لیست خود را با دوستان و خانواده از طریق ایمیل، پیامک یا شبکه‌های اجتماعی به اشتراک بگذارید.'
                : 'Share your list with friends and family via email, text message, or social media.'}
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-kadochi-light-coral/30 p-6 rounded-full mb-6">
              <Heart size={32} className="text-kadochi-coral" />
            </div>
            <h3 className="text-xl font-bold text-kadochi-navy mb-3">
              {language === 'fa' ? 'دریافت هدایا' : 'Receive Gifts'}
            </h3>
            <p className="text-gray-600">
              {language === 'fa'
                ? 'دوستان شما هدایا را مستقیماً از فروشگاه‌ها خریداری می‌کنند و شما هدایای مورد علاقه خود را دریافت می‌کنید.'
                : 'Your friends purchase gifts directly from stores, and you receive the gifts you truly want.'}
            </p>
          </div>
        </div>

        <div className="mt-16 bg-kadochi-light-coral/20 p-8 md:p-12 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-kadochi-navy mb-4">
              {language === 'fa' ? 'مزایای استفاده از کادوچی' : 'Benefits of Using Kadochi'}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {language === 'fa'
                ? 'با کادوچی، دیگر نگران دریافت هدایای تکراری یا ناخواسته نباشید.'
                : 'With Kadochi, never worry about receiving duplicate or unwanted gifts again.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-kadochi-navy mb-3">
                {language === 'fa' ? 'دریافت هدایای دلخواه' : 'Receive Desired Gifts'}
              </h4>
              <p className="text-gray-600">
                {language === 'fa'
                  ? 'فقط هدایایی را دریافت کنید که واقعاً دوست دارید و نیاز دارید.'
                  : 'Only receive gifts you truly love and need.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-kadochi-navy mb-3">
                {language === 'fa' ? 'حمایت از فروشگاه‌های ایرانی' : 'Support Iranian Businesses'}
              </h4>
              <p className="text-gray-600">
                {language === 'fa'
                  ? 'با خرید از فروشگاه‌های ایرانی، از کسب و کارهای داخلی حمایت کنید.'
                  : 'Support local businesses by purchasing from Iranian stores.'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-kadochi-navy mb-3">
                {language === 'fa' ? 'سهولت در انتخاب هدیه' : 'Easy Gift Selection'}
              </h4>
              <p className="text-gray-600">
                {language === 'fa'
                  ? 'دوستان و خانواده دیگر برای انتخاب هدیه مناسب برای شما دچار سردرگمی نمی‌شوند.'
                  : 'Friends and family no longer struggle to find the perfect gift for you.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
