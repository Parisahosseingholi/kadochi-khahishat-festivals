
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WishlistSearch from "@/components/home/WishlistSearch";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WishlistSearch />
        <HowItWorks />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-kadochi-navy text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              امروز اولین لیست هدیه خود را بسازید
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              به هزاران ایرانی بپیوندید که با کادوچی، تجربه هدیه دادن و هدیه گرفتن را متحول کرده‌اند.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Button className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white px-8 py-6 text-lg font-medium">
                <Link to="/create-wishlist">ساخت لیست هدیه</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
                <Link to="/browse-wishlists">مرور لیست‌ها</Link>
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
