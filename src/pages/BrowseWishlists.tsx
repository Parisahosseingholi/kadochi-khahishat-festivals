
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Gift, Heart, Calendar } from 'lucide-react';

// Sample data for wishlists
const wishlists = [
  {
    id: 1,
    title: "لیست عروسی سارا و امیر",
    occasion: "wedding",
    eventDate: "1402/03/25",
    itemCount: 24,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    user: "سارا احمدی",
  },
  {
    id: 2,
    title: "تولد ۳۰ سالگی مریم",
    occasion: "birthday",
    eventDate: "1402/04/12",
    itemCount: 12,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    user: "مریم رضایی",
  },
  {
    id: 3,
    title: "سوغاتی سفر مشهد",
    occasion: "soghati",
    eventDate: "1402/05/03",
    itemCount: 8,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    user: "حسین محمدی",
  },
  {
    id: 4,
    title: "هدایای تولد پسرم",
    occasion: "birthday",
    eventDate: "1402/05/18",
    itemCount: 15,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    user: "رضا حسینی",
  },
  {
    id: 5,
    title: "خانه جدید ما",
    occasion: "housewarming",
    eventDate: "1402/06/10",
    itemCount: 30,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    user: "نسیم و سامان",
  },
  {
    id: 6,
    title: "هدایای نوزادی",
    occasion: "newbaby",
    eventDate: "1402/07/14",
    itemCount: 18,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    user: "فاطمه صادقی",
  }
];

// Get occasion display name
const getOccasionName = (occasion: string) => {
  switch(occasion) {
    case 'birthday': return 'تولد';
    case 'wedding': return 'عروسی';
    case 'newbaby': return 'نوزاد';
    case 'housewarming': return 'خانه جدید';
    case 'soghati': return 'سوغاتی';
    default: return 'سایر';
  }
};

const BrowseWishlists = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQueryParam = queryParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(searchQueryParam);
  const [occasionFilter, setOccasionFilter] = useState('');

  useEffect(() => {
    // Update search term when URL changes
    setSearchTerm(searchQueryParam);
  }, [searchQueryParam]);

  const filteredWishlists = wishlists.filter(wishlist => {
    const matchesSearch = wishlist.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         wishlist.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOccasion = !occasionFilter || wishlist.occasion === occasionFilter;
    return matchesSearch && matchesOccasion;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-kadochi-navy py-12 md:py-16 text-white">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">مرور لیست‌های هدیه</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              لیست‌های هدیه دوستان و عزیزان خود را پیدا کنید و در انتخاب بهترین هدایا برای آنها سهیم باشید.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="جستجو در لیست‌های هدایا..."
                className="py-6 pr-12 bg-white text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Wishlists Section */}
        <section className="py-12">
          <div className="container-custom">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
                <TabsList>
                  <TabsTrigger value="all">همه</TabsTrigger>
                  <TabsTrigger value="upcoming">رویدادهای نزدیک</TabsTrigger>
                  <TabsTrigger value="popular">محبوب‌ترین</TabsTrigger>
                </TabsList>

                {/* Filter by Occasion */}
                <div className="w-full sm:w-auto">
                  <Select value={occasionFilter} onValueChange={setOccasionFilter}>
                    <SelectTrigger className="w-full sm:w-[200px]">
                      <SelectValue placeholder="فیلتر بر اساس مناسبت" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">همه مناسبت‌ها</SelectItem>
                      <SelectItem value="birthday">تولد</SelectItem>
                      <SelectItem value="wedding">عروسی</SelectItem>
                      <SelectItem value="newbaby">نوزاد</SelectItem>
                      <SelectItem value="housewarming">خانه جدید</SelectItem>
                      <SelectItem value="soghati">سوغاتی</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Wishlists Grid */}
              <TabsContent value="all" className="mt-0">
                {filteredWishlists.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredWishlists.map(wishlist => (
                      <div key={wishlist.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={wishlist.image} 
                            alt={wishlist.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                          <div className="absolute top-3 right-3">
                            <span className="bg-white/90 text-kadochi-navy px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                              {getOccasionName(wishlist.occasion)}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-kadochi-navy text-lg mb-2">{wishlist.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">ساخته شده توسط {wishlist.user}</p>
                          
                          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <Calendar size={14} className="ml-1" />
                              <span>{wishlist.eventDate}</span>
                            </div>
                            <div className="flex items-center">
                              <Gift size={14} className="ml-1" />
                              <span>{wishlist.itemCount} هدیه</span>
                            </div>
                          </div>
                          
                          <Button className="w-full bg-kadochi-navy hover:bg-kadochi-navy/90">
                            مشاهده لیست هدایا
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <div className="bg-gray-100 inline-flex rounded-full p-6 mb-4">
                      <Gift size={32} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-kadochi-navy mb-2">نتیجه‌ای یافت نشد</h3>
                    <p className="text-gray-500">
                      لیست هدیه‌ای با این مشخصات یافت نشد. لطفاً معیارهای جستجوی خود را تغییر دهید.
                    </p>
                  </div>
                )}
              </TabsContent>

              {/* Other tabs would have similar content with different filtering logic */}
              <TabsContent value="upcoming" className="mt-0">
                <div className="text-center py-10">
                  <div className="bg-gray-100 inline-flex rounded-full p-6 mb-4">
                    <Calendar size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-kadochi-navy mb-2">رویدادهای نزدیک</h3>
                  <p className="text-gray-500">
                    در حال بارگذاری رویدادهای نزدیک...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <div className="text-center py-10">
                  <div className="bg-gray-100 inline-flex rounded-full p-6 mb-4">
                    <Heart size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-kadochi-navy mb-2">محبوب‌ترین لیست‌ها</h3>
                  <p className="text-gray-500">
                    در حال بارگذاری محبوب‌ترین لیست‌ها...
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrowseWishlists;
