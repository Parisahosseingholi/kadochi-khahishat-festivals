
import { Gift, Heart, Link, List } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">کادوچی چگونه کار می‌کند؟</h2>
          <p className="section-subtitle">
            در چهار مرحله ساده، لیست هدایای خود را بسازید و با دوستان و خانواده به اشتراک بگذارید.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-kadochi-light-coral/30 p-6 rounded-full mb-6">
              <List size={32} className="text-kadochi-coral" />
            </div>
            <h3 className="text-xl font-bold text-kadochi-navy mb-3">ساخت لیست</h3>
            <p className="text-gray-600">
              حساب کاربری خود را بسازید و یک لیست هدیه جدید برای مناسبت خود ایجاد کنید.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-kadochi-light-coral/30 p-6 rounded-full mb-6">
              <Gift size={32} className="text-kadochi-coral" />
            </div>
            <h3 className="text-xl font-bold text-kadochi-navy mb-3">افزودن هدایا</h3>
            <p className="text-gray-600">
              محصولات دلخواه خود را از فروشگاه‌های آنلاین ایرانی پیدا و به لیست خود اضافه کنید.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-kadochi-light-coral/30 p-6 rounded-full mb-6">
              <Link size={32} className="text-kadochi-coral" />
            </div>
            <h3 className="text-xl font-bold text-kadochi-navy mb-3">اشتراک‌گذاری</h3>
            <p className="text-gray-600">
              لیست خود را با دوستان و خانواده از طریق ایمیل، پیامک یا شبکه‌های اجتماعی به اشتراک بگذارید.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-kadochi-light-coral/30 p-6 rounded-full mb-6">
              <Heart size={32} className="text-kadochi-coral" />
            </div>
            <h3 className="text-xl font-bold text-kadochi-navy mb-3">دریافت هدایا</h3>
            <p className="text-gray-600">
              دوستان شما هدایا را مستقیماً از فروشگاه‌ها خریداری می‌کنند و شما هدایای مورد علاقه خود را دریافت می‌کنید.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-kadochi-light-coral/20 p-8 md:p-12 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-kadochi-navy mb-4">مزایای استفاده از کادوچی</h3>
            <p className="text-lg text-gray-700 mb-8">
              با کادوچی، دیگر نگران دریافت هدایای تکراری یا ناخواسته نباشید.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-kadochi-navy mb-3">دریافت هدایای دلخواه</h4>
              <p className="text-gray-600">
                فقط هدایایی را دریافت کنید که واقعاً دوست دارید و نیاز دارید.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-kadochi-navy mb-3">حمایت از فروشگاه‌های ایرانی</h4>
              <p className="text-gray-600">
                با خرید از فروشگاه‌های ایرانی، از کسب و کارهای داخلی حمایت کنید.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-kadochi-navy mb-3">سهولت در انتخاب هدیه</h4>
              <p className="text-gray-600">
                دوستان و خانواده دیگر برای انتخاب هدیه مناسب برای شما دچار سردرگمی نمی‌شوند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
