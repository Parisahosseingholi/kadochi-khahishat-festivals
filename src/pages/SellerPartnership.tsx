
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Globe, CheckCircle, User, Mail, Phone } from "lucide-react";

const SellerPartnership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-kadochi-navy py-16 text-white">
          <div className="container-custom">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="md:w-1/2 mt-10 md:mt-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  همکاری با <span className="text-kadochi-coral">کادوچی</span> و رشد کسب‌وکار شما
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                  به شبکه فروشندگان و برندهای ایرانی بپیوندید و به میلیون‌ها مشتری بالقوه دسترسی پیدا کنید.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white px-6 py-6 text-lg">
                    فرم همکاری
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg">
                    اطلاعات بیشتر
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="همکاری با کادوچی" 
                  className="rounded-lg shadow-xl max-w-full md:max-w-md" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">مزایای همکاری با کادوچی</h2>
              <p className="section-subtitle">
                با پیوستن به شبکه همکاران کادوچی، به مزایای ویژه‌ای دسترسی پیدا می‌کنید.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-kadochi-light-coral/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <User size={24} className="text-kadochi-coral" />
                </div>
                <h3 className="text-xl font-bold text-kadochi-navy mb-4">افزایش بازدیدکننده</h3>
                <p className="text-gray-600">
                  با قرار گرفتن محصولات شما در لیست‌های هدیه، بازدیدکنندگان بیشتری به فروشگاه شما هدایت می‌شوند.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-kadochi-light-coral/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Globe size={24} className="text-kadochi-coral" />
                </div>
                <h3 className="text-xl font-bold text-kadochi-navy mb-4">حضور قدرتمند در وب</h3>
                <p className="text-gray-600">
                  فروشگاه شما در میان صفحات کادوچی نمایش داده می‌شود و رتبه بهتری در موتورهای جستجو کسب می‌کند.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-kadochi-light-coral/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <CheckCircle size={24} className="text-kadochi-coral" />
                </div>
                <h3 className="text-xl font-bold text-kadochi-navy mb-4">اعتماد و اعتبار</h3>
                <p className="text-gray-600">
                  با نمایش برند شما به عنوان همکار رسمی کادوچی، اعتماد مشتریان به کسب‌وکار شما افزایش می‌یابد.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">روند همکاری چگونه است؟</h2>
              <p className="section-subtitle">
                در چند مرحله ساده، به شبکه همکاران کادوچی بپیوندید و کسب‌وکار خود را رشد دهید.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute top-0 bottom-0 right-[50%] w-0.5 bg-gray-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pl-8 pb-8 md:pb-0 flex justify-start md:justify-end order-2 md:order-1">
                    <div className="md:text-left text-center md:pl-8">
                      <h3 className="text-xl font-bold text-kadochi-navy mb-2">ثبت درخواست همکاری</h3>
                      <p className="text-gray-600">
                        فرم درخواست همکاری را تکمیل کنید و اطلاعات کسب‌وکار خود را با ما به اشتراک بگذارید.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pr-8 order-1 md:order-2 flex items-center justify-center md:justify-start">
                    <div className="w-10 h-10 bg-kadochi-coral rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                      <span className="text-white font-bold">۱</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 pb-8 md:pb-0 order-2 flex justify-end md:justify-start">
                    <div className="md:text-right text-center md:pr-8">
                      <h3 className="text-xl font-bold text-kadochi-navy mb-2">بررسی و تأیید</h3>
                      <p className="text-gray-600">
                        کارشناسان ما درخواست شما را بررسی می‌کنند و در صورت تأیید، با شما تماس خواهند گرفت.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 flex items-center justify-center md:justify-end">
                    <div className="w-10 h-10 bg-kadochi-coral rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                      <span className="text-white font-bold">۲</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pl-8 pb-8 md:pb-0 flex justify-start md:justify-end order-2 md:order-1">
                    <div className="md:text-left text-center md:pl-8">
                      <h3 className="text-xl font-bold text-kadochi-navy mb-2">عقد قرارداد</h3>
                      <p className="text-gray-600">
                        پس از تأیید نهایی، قرارداد همکاری بین کادوچی و کسب‌وکار شما منعقد می‌شود.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pr-8 order-1 md:order-2 flex items-center justify-center md:justify-start">
                    <div className="w-10 h-10 bg-kadochi-coral rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                      <span className="text-white font-bold">۳</span>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 order-2 flex justify-end md:justify-start">
                    <div className="md:text-right text-center md:pr-8">
                      <h3 className="text-xl font-bold text-kadochi-navy mb-2">آغاز همکاری</h3>
                      <p className="text-gray-600">
                        محصولات شما در کادوچی نمایش داده می‌شوند و کاربران می‌توانند آنها را به لیست‌های خود اضافه کنند.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 flex items-center justify-center md:justify-end">
                    <div className="w-10 h-10 bg-kadochi-coral rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                      <span className="text-white font-bold">۴</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">فرم درخواست همکاری</h2>
                <p className="section-subtitle">
                  برای شروع همکاری، لطفاً فرم زیر را با دقت تکمیل کنید.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="business-name" className="block text-kadochi-navy font-medium mb-1">
                        نام فروشگاه یا کسب‌وکار <span className="text-red-500">*</span>
                      </label>
                      <Input id="business-name" placeholder="نام فروشگاه خود را وارد کنید" required />
                    </div>
                    <div>
                      <label htmlFor="business-type" className="block text-kadochi-navy font-medium mb-1">
                        نوع کسب‌وکار <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="business-type"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-kadochi-coral"
                        required
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="digikala">فروشنده در دیجی‌کالا</option>
                        <option value="instagram">فروشنده اینستاگرام</option>
                        <option value="online-store">فروشگاه آنلاین مستقل</option>
                        <option value="physical-store">فروشگاه فیزیکی</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-kadochi-navy font-medium mb-1">
                      وب‌سایت یا پیج اینستاگرام <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md">
                        {
                          Math.random() > 0.5 ? 
                          <Globe size={16} className="text-gray-500" /> :
                          <Instagram size={16} className="text-gray-500" />
                        }
                      </span>
                      <Input 
                        id="website" 
                        placeholder="مثال: www.yourstore.com یا instagram.com/yourstore" 
                        required 
                        dir="ltr"
                        className="rounded-r-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-kadochi-navy font-medium mb-1">
                        نام و نام خانوادگی <span className="text-red-500">*</span>
                      </label>
                      <Input id="contact-name" placeholder="نام و نام خانوادگی" required />
                    </div>
                    <div>
                      <label htmlFor="contact-role" className="block text-kadochi-navy font-medium mb-1">
                        سمت در شرکت <span className="text-red-500">*</span>
                      </label>
                      <Input id="contact-role" placeholder="مثال: مدیر فروش" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-kadochi-navy font-medium mb-1">
                        ایمیل <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md">
                          <Mail size={16} className="text-gray-500" />
                        </span>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="example@email.com" 
                          required 
                          dir="ltr"
                          className="rounded-r-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-kadochi-navy font-medium mb-1">
                        شماره تماس <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md">
                          <Phone size={16} className="text-gray-500" />
                        </span>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="0912XXXXXXX" 
                          required 
                          dir="ltr"
                          className="rounded-r-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="products" className="block text-kadochi-navy font-medium mb-1">
                      توضیح مختصر در مورد محصولات
                    </label>
                    <Textarea 
                      id="products" 
                      placeholder="لطفاً توضیح مختصری در مورد محصولات خود ارائه دهید..." 
                      rows={4}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-kadochi-navy font-medium mb-1">
                      پیام یا توضیحات اضافی
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="هر گونه اطلاعات اضافی که می‌خواهید با ما در میان بگذارید..." 
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="ml-2" required />
                      <span className="text-gray-700">
                        من با <a href="#" className="text-kadochi-coral hover:underline">قوانین و مقررات</a> همکاری با کادوچی موافقم.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-kadochi-coral hover:bg-kadochi-coral/90 text-white py-6"
                    >
                      ارسال درخواست همکاری
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellerPartnership;
