
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const WishlistSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      navigate(`/browse-wishlists?search=${encodeURIComponent(searchQuery)}`);
    } else {
      toast({
        title: language === 'fa' ? "جستجوی خالی" : "Empty Search",
        description: language === 'fa' 
          ? "لطفاً نام یا اطلاعات مورد نظر خود را وارد کنید."
          : "Please enter a name or search information.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-kadochi-light-coral/20">
      <div className="container-custom max-w-3xl mx-auto text-center">
        <h2 className={`text-2xl md:text-3xl font-bold text-kadochi-navy mb-6 ${language === 'en' ? '' : 'rtl'}`}>
          {language === 'fa' 
            ? 'به دنبال کسی می‌گردید؟ لیست هدایای او را پیدا کنید'
            : 'Looking for someone? Find their gift list'}
        </h2>
        <p className={`text-kadochi-navy/80 mb-8 ${language === 'en' ? '' : 'rtl'}`}>
          {language === 'fa' 
            ? 'با جستجوی نام دوستان و عزیزان خود، لیست هدایای آنها را پیدا کنید و هدیه‌ای مطابق سلیقه‌شان انتخاب کنید.'
            : 'Search for your friends and loved ones by name to find their gift lists and choose a gift that matches their taste.'}
        </p>
        
        <form onSubmit={handleSearch} className="relative">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className={`absolute ${language === 'fa' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400`} size={20} />
              <Input 
                type="text"
                placeholder={language === 'fa' ? "نام شخص را وارد کنید..." : "Enter person's name..."}
                className={`py-6 ${language === 'fa' ? 'pr-12' : 'pl-12'} bg-white text-black w-full ${language === 'en' ? 'text-left' : 'text-right'}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                dir={language === 'fa' ? 'rtl' : 'ltr'}
              />
            </div>
            <Button 
              type="submit" 
              className="bg-kadochi-navy hover:bg-kadochi-navy/90 px-8 py-6 text-lg"
            >
              {language === 'fa' ? 'جستجو' : 'Search'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WishlistSearch;
