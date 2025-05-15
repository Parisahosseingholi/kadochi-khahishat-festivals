
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WishlistSearch from "@/components/home/WishlistSearch";
import MobileAppFeature from "@/components/home/MobileAppFeature";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className={`min-h-screen flex flex-col ${language === 'fa' ? 'rtl' : 'ltr'}`}>
      <Header />
      <main className="flex-grow">
        <Hero />
        <WishlistSearch />
        <HowItWorks />
        <Testimonials />
        <MobileAppFeature />
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-kadochi-navy text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fa' 
                ? 'امروز اولین لیست هدیه خود را بسازید'
                : 'Create your first gift list today'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {language === 'fa' 
                ? 'به هزاران ایرانی بپیوندید که با کادوچی، تجربه هدیه دادن و هدیه گرفتن را متحول کرده‌اند.'
                : 'Join thousands of Iranians who have revolutionized the gift-giving and receiving experience with Kadochi.'}
            </p>
            <div className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 ${language === 'fa' ? 'sm:space-x-reverse' : ''}`}>
              <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white px-8 py-6 text-lg font-medium">
                <Link to="/create-wishlist">
                  {language === 'fa' ? 'ساخت لیست هدیه' : 'Create Gift List'}
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
                <Link to="/browse-wishlists">
                  {language === 'fa' ? 'مرور لیست‌ها' : 'Browse Lists'}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
