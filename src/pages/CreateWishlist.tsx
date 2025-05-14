
import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Plus, X } from "lucide-react";

const CreateWishlist = () => {
  const [wishlistName, setWishlistName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: '', link: '', price: '', priority: 'medium' }
  ]);

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: '',
      link: '',
      price: '',
      priority: 'medium'
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: number) => {
    if (items.length > 1) {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
    }
  };

  const handleItemChange = (id: number, field: string, value: string) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!wishlistName.trim()) {
      toast({
        title: "خطا",
        description: "لطفاً نام لیست خود را وارد کنید.",
        variant: "destructive",
      });
      return;
    }
    
    if (!occasion) {
      toast({
        title: "خطا",
        description: "لطفاً مناسبت لیست را انتخاب کنید.",
        variant: "destructive",
      });
      return;
    }
    
    // Check if at least one item has name and link
    const validItems = items.filter(item => item.name.trim() && item.link.trim());
    if (validItems.length === 0) {
      toast({
        title: "خطا",
        description: "لطفاً حداقل یک هدیه با نام و لینک معتبر به لیست خود اضافه کنید.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would save this data to a database
    toast({
      title: "لیست هدیه با موفقیت ایجاد شد",
      description: "اکنون می‌توانید لیست خود را با دوستان به اشتراک بگذارید.",
    });
    
    console.log({ wishlistName, occasion, description, items });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-kadochi-navy">ایجاد لیست هدیه جدید</h1>
              <p className="text-gray-600 mt-2">
                لیست هدایای مورد علاقه خود را ایجاد کنید و با دوستان و خانواده به اشتراک بگذارید.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Wishlist Basic Info */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="wishlist-name">نام لیست هدیه</Label>
                      <Input 
                        id="wishlist-name" 
                        placeholder="مثال: هدایای تولد سارا" 
                        value={wishlistName}
                        onChange={(e) => setWishlistName(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="occasion">مناسبت</Label>
                      <Select value={occasion} onValueChange={setOccasion}>
                        <SelectTrigger id="occasion" className="mt-1">
                          <SelectValue placeholder="انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="birthday">تولد</SelectItem>
                          <SelectItem value="wedding">عروسی</SelectItem>
                          <SelectItem value="newbaby">نوزاد</SelectItem>
                          <SelectItem value="housewarming">خانه جدید</SelectItem>
                          <SelectItem value="soghati">سوغاتی</SelectItem>
                          <SelectItem value="other">سایر</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">توضیحات (اختیاری)</Label>
                    <Textarea 
                      id="description" 
                      placeholder="توضیحاتی درباره این لیست هدیه..." 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Items Section */}
                <div>
                  <h3 className="text-xl font-semibold text-kadochi-navy mb-4">هدایای مورد نظر</h3>
                  
                  <div className="space-y-6">
                    {items.map((item, index) => (
                      <div key={item.id} className="p-4 border border-gray-200 rounded-lg relative">
                        <div className="absolute top-4 left-4">
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            disabled={items.length === 1}
                          >
                            <X size={18} />
                          </button>
                        </div>
                        
                        <div className="mb-3">
                          <span className="inline-block bg-kadochi-light-coral/50 text-kadochi-coral px-3 py-1 rounded-full text-sm">
                            هدیه {index + 1}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`item-name-${item.id}`}>نام هدیه</Label>
                            <Input 
                              id={`item-name-${item.id}`}
                              placeholder="مثال: ساعت مچی" 
                              value={item.name}
                              onChange={(e) => handleItemChange(item.id, 'name', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`item-link-${item.id}`}>لینک محصول</Label>
                            <Input 
                              id={`item-link-${item.id}`}
                              placeholder="https://digikala.com/..." 
                              value={item.link}
                              onChange={(e) => handleItemChange(item.id, 'link', e.target.value)}
                              className="mt-1"
                              dir="ltr"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`item-price-${item.id}`}>قیمت تقریبی (اختیاری)</Label>
                            <Input 
                              id={`item-price-${item.id}`}
                              placeholder="مثال: 2,000,000 تومان" 
                              value={item.price}
                              onChange={(e) => handleItemChange(item.id, 'price', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`item-priority-${item.id}`}>اولویت</Label>
                            <Select 
                              value={item.priority} 
                              onValueChange={(value) => handleItemChange(item.id, 'priority', value)}
                            >
                              <SelectTrigger id={`item-priority-${item.id}`} className="mt-1">
                                <SelectValue placeholder="انتخاب کنید" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">اولویت پایین</SelectItem>
                                <SelectItem value="medium">اولویت متوسط</SelectItem>
                                <SelectItem value="high">اولویت بالا</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAddItem}
                    className="mt-4 border-dashed border-gray-300 text-gray-500 hover:text-kadochi-coral hover:border-kadochi-coral w-full"
                  >
                    <Plus size={16} className="ml-2" />
                    افزودن هدیه جدید
                  </Button>
                </div>

                {/* Privacy Settings */}
                <div>
                  <h3 className="text-xl font-semibold text-kadochi-navy mb-4">تنظیمات حریم خصوصی</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="visibility-public" 
                        name="visibility" 
                        value="public"
                        defaultChecked
                        className="ml-2"
                      />
                      <Label htmlFor="visibility-public">عمومی - قابل مشاهده و جستجو برای همه</Label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="visibility-link" 
                        name="visibility" 
                        value="link"
                        className="ml-2"
                      />
                      <Label htmlFor="visibility-link">نیمه خصوصی - تنها با لینک قابل مشاهده است</Label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="visibility-private" 
                        name="visibility" 
                        value="private"
                        className="ml-2"
                      />
                      <Label htmlFor="visibility-private">خصوصی - فقط برای خودم</Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 text-center">
                  <Button 
                    type="submit" 
                    className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white py-6 px-10 text-lg w-full md:w-auto"
                  >
                    ایجاد لیست هدیه
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateWishlist;
