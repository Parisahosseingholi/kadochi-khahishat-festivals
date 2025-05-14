
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-kadochi-navy py-16 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">تماس با ما</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                سوالی دارید؟ با تیم پشتیبانی کادوچی در ارتباط باشید. ما همیشه آماده کمک به شما هستیم.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Contact Information */}
                <div className="bg-kadochi-light-coral/30 p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-kadochi-navy mb-6">اطلاعات تماس</h2>
                  <p className="text-gray-600 mb-8">
                    برای ارتباط سریع‌تر با کادوچی، می‌توانید از اطلاعات تماس زیر استفاده کنید.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                        <Mail size={20} className="text-kadochi-coral" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-kadochi-navy mb-1">ایمیل</h3>
                        <p className="text-gray-600">info@kadochi.ir</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                        <Phone size={20} className="text-kadochi-coral" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-kadochi-navy mb-1">شماره تماس</h3>
                        <p className="text-gray-600">۰۲۱-۸۸۸۸۸۸۸۸</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                        <MapPin size={20} className="text-kadochi-coral" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-kadochi-navy mb-1">آدرس</h3>
                        <p className="text-gray-600">
                          تهران، خیابان ولیعصر، بالاتر از میدان ونک، ساختمان کادوچی
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="font-semibold text-kadochi-navy mb-4">ما را دنبال کنید</h3>
                    <div className="flex space-x-4 space-x-reverse">
                      <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:bg-kadochi-coral/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1A2A56" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:bg-kadochi-coral/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1A2A56" className="bi bi-telegram" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:bg-kadochi-coral/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1A2A56" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-kadochi-navy mb-6">پیام بگذارید</h2>
                  <p className="text-gray-600 mb-8">
                    برای هرگونه سوال، پیشنهاد یا همکاری، فرم زیر را تکمیل کنید. تیم ما در اسرع وقت پاسخگوی شما خواهد بود.
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-kadochi-navy font-medium mb-1">
                          نام و نام خانوادگی <span className="text-red-500">*</span>
                        </label>
                        <Input id="name" placeholder="نام و نام خانوادگی" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-kadochi-navy font-medium mb-1">
                          ایمیل <span className="text-red-500">*</span>
                        </label>
                        <Input id="email" type="email" placeholder="example@email.com" required dir="ltr" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-kadochi-navy font-medium mb-1">
                        موضوع <span className="text-red-500">*</span>
                      </label>
                      <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" required />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-kadochi-navy font-medium mb-1">
                        پیام <span className="text-red-500">*</span>
                      </label>
                      <Textarea id="message" placeholder="پیام خود را اینجا بنویسید..." rows={6} required />
                    </div>

                    <div>
                      <Button 
                        type="submit" 
                        className="w-full bg-kadochi-coral hover:bg-kadochi-coral/90 text-white py-6"
                      >
                        <MessageSquare size={18} className="ml-2" />
                        ارسال پیام
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">سوالات متداول</h2>
              <p className="section-subtitle">
                پاسخ به سوالات رایج درباره کادوچی و نحوه استفاده از آن
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-kadochi-navy mb-3">کادوچی چگونه کار می‌کند؟</h3>
                  <p className="text-gray-600">
                    کادوچی به شما امکان می‌دهد تا لیست هدایای مورد علاقه خود را برای مناسبت‌های مختلف ایجاد کنید. دوستان و خانواده می‌توانند با مشاهده این لیست، هدایا را مستقیماً از فروشگاه‌های آنلاین خریداری کنند.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-kadochi-navy mb-3">آیا استفاده از کادوچی رایگان است؟</h3>
                  <p className="text-gray-600">
                    بله، استفاده از خدمات پایه کادوچی برای همه کاربران کاملاً رایگان است. ما از طریق همکاری با فروشندگان و برنامه همکاری در فروش درآمدزایی می‌کنیم.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-kadochi-navy mb-3">چگونه می‌توانم یک لیست هدیه ایجاد کنم؟</h3>
                  <p className="text-gray-600">
                    برای ایجاد لیست هدیه، ابتدا در سایت ثبت‌نام کنید، سپس به صفحه "ساخت لیست هدیه" بروید و مراحل را دنبال کنید. می‌توانید محصولات را از فروشگاه‌های آنلاین ایرانی به لیست خود اضافه کنید.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-kadochi-navy mb-3">آیا کاربران خارج از ایران هم می‌توانند از کادوچی استفاده کنند؟</h3>
                  <p className="text-gray-600">
                    بله، کادوچی برای تمام ایرانیان سراسر جهان قابل استفاده است. کاربران خارج از ایران می‌توانند لیست‌ها را مشاهده کنند و هدایا را برای دوستان و خانواده خود در ایران خریداری نمایند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
