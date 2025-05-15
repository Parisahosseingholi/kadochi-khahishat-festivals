
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const WishlistSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      navigate(`/browse-wishlists?search=${encodeURIComponent(searchQuery)}`);
    } else {
      toast({
        title: "جستجوی خالی",
        description: "لطفاً نام یا اطلاعات مورد نظر خود را وارد کنید.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-kadochi-light-coral/20">
      <div className="container-custom max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-kadochi-navy mb-6">
          به دنبال کسی می‌گردید؟ لیست هدایای او را پیدا کنید
        </h2>
        <p className="text-kadochi-navy/80 mb-8">
          با جستجوی نام دوستان و عزیزان خود، لیست هدایای آنها را پیدا کنید و هدیه‌ای مطابق سلیقه‌شان انتخاب کنید.
        </p>
        
        <form onSubmit={handleSearch} className="relative">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                type="text"
                placeholder="نام شخص را وارد کنید..."
                className="py-6 pr-12 bg-white text-black w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="bg-kadochi-navy hover:bg-kadochi-navy/90 px-8 py-6 text-lg"
            >
              جستجو
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WishlistSearch;
