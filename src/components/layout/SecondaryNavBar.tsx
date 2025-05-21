
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "@/context/LanguageContext";
import { Gift, Heart, Baby, Building2, HelpCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const SecondaryNavBar = () => {
  const { language } = useLanguage();
  
  const isRtl = language === 'fa';
  
  return (
    <div className={`bg-kadochi-light-coral/10 py-2 shadow-sm ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="container-custom">
        <NavigationMenu>
          <NavigationMenuList className={`flex ${isRtl ? 'space-x-reverse' : ''} space-x-4`}>
            {/* Gift List */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center bg-transparent hover:bg-kadochi-light-coral/20 focus:bg-kadochi-light-coral/20 data-[state=open]:bg-kadochi-light-coral/20">
                <Gift className="mr-2 h-4 w-4 text-kadochi-coral" />
                <span className="text-kadochi-navy">
                  {language === 'fa' ? 'لیست هدیه' : 'Gift List'}
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <ListItem
                    title={language === 'fa' ? 'ساخت لیست هدیه جدید' : 'Create New Gift List'}
                    href="/create-wishlist"
                  >
                    {language === 'fa' 
                      ? 'لیست هدیه‌ای برای مناسبت خاص خود بسازید'
                      : 'Create a gift list for your special occasion'}
                  </ListItem>
                  <ListItem
                    title={language === 'fa' ? 'مرور لیست‌های هدیه' : 'Browse Gift Lists'}
                    href="/browse-wishlists"
                  >
                    {language === 'fa' 
                      ? 'مرور لیست‌های هدیه دوستان و خانواده' 
                      : 'Browse gift lists from friends and family'}
                  </ListItem>
                  <ListItem
                    title={language === 'fa' ? 'لیست‌های محبوب' : 'Popular Lists'}
                    href="/popular-wishlists"
                  >
                    {language === 'fa' 
                      ? 'محبوب‌ترین لیست‌های هدیه را ببینید' 
                      : 'See the most popular gift lists'}
                  </ListItem>
                  <ListItem
                    title={language === 'fa' ? 'راهنمای ساخت لیست' : 'List Creation Guide'}
                    href="/gift-list-guide"
                  >
                    {language === 'fa' 
                      ? 'راهنمای گام به گام برای ساخت لیست هدیه کامل' 
                      : 'Step-by-step guide to create a perfect gift list'}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Wedding Registry */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center bg-transparent hover:bg-kadochi-light-coral/20 focus:bg-kadochi-light-coral/20 data-[state=open]:bg-kadochi-light-coral/20">
                <Heart className="mr-2 h-4 w-4 text-kadochi-coral" />
                <span className="text-kadochi-navy">
                  {language === 'fa' ? 'لیست عروسی' : 'Wedding Registry'}
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <ListItem
                    title={language === 'fa' ? 'ساخت لیست عروسی' : 'Create Wedding Registry'}
                    href="/create-wedding-registry"
                  >
                    {language === 'fa' 
                      ? 'لیست هدیه برای جشن عروسی خود بسازید' 
                      : 'Create a registry for your wedding celebration'}
                  </ListItem>
                  <ListItem
                    title={language === 'fa' ? 'ایده‌های هدیه عروسی' : 'Wedding Gift Ideas'}
                    href="/wedding-gift-ideas"
                  >
                    {language === 'fa' 
                      ? 'ایده‌های محبوب برای لیست عروسی' 
                      : 'Popular ideas for wedding registries'}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Baby Registry */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center bg-transparent hover:bg-kadochi-light-coral/20 focus:bg-kadochi-light-coral/20 data-[state=open]:bg-kadochi-light-coral/20">
                <Baby className="mr-2 h-4 w-4 text-kadochi-coral" />
                <span className="text-kadochi-navy">
                  {language === 'fa' ? 'لیست نوزاد' : 'Baby Registry'}
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <ListItem
                    title={language === 'fa' ? 'ساخت لیست نوزاد' : 'Create Baby Registry'}
                    href="/create-baby-registry"
                  >
                    {language === 'fa' 
                      ? 'لیست هدیه برای نوزاد خود بسازید' 
                      : 'Create a registry for your new baby'}
                  </ListItem>
                  <ListItem
                    title={language === 'fa' ? 'ملزومات ضروری نوزاد' : 'Baby Essentials'}
                    href="/baby-essentials"
                  >
                    {language === 'fa' 
                      ? 'لیست ملزومات ضروری برای نوزاد' 
                      : 'Essential items for your baby registry'}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Why Kadochi */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center bg-transparent hover:bg-kadochi-light-coral/20 focus:bg-kadochi-light-coral/20 data-[state=open]:bg-kadochi-light-coral/20">
                <HelpCircle className="mr-2 h-4 w-4 text-kadochi-coral" />
                <span className="text-kadochi-navy">
                  {language === 'fa' ? 'چرا کادوچی؟' : 'Why Kadochi?'}
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <ListItem
                    title={language === 'fa' ? 'درباره ما' : 'About Us'}
                    href="/about"
                  >
                    {language === 'fa' 
                      ? 'با کادوچی و چشم‌انداز ما آشنا شوید' 
                      : 'Learn about Kadochi and our vision'}
                  </ListItem>
                  <ListItem
                    title={language === 'fa' ? 'مزایای کادوچی' : 'Benefits of Kadochi'}
                    href="/benefits"
                  >
                    {language === 'fa' 
                      ? 'چرا کادوچی بهترین انتخاب برای شماست' 
                      : 'Why Kadochi is the best choice for you'}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Kadochi for Business */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center bg-transparent hover:bg-kadochi-light-coral/20 focus:bg-kadochi-light-coral/20 data-[state=open]:bg-kadochi-light-coral/20">
                <Building2 className="mr-2 h-4 w-4 text-kadochi-coral" />
                <span className="text-kadochi-navy">
                  {language === 'fa' ? 'کادوچی برای کسب‌وکارها' : 'Kadochi for Business'}
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <ListItem
                    title={language === 'fa' ? 'فروشگاه‌ها' : 'For Retailers'}
                    href="/retailer-partnership"
                  >
                    {language === 'fa' 
                      ? 'چگونه به عنوان فروشگاه با ما همکاری کنید' 
                      : 'How to partner with us as a retailer'}
                  </ListItem>
                  <ListItem
                    title={language === 'fa' ? 'سازمان‌های خیریه' : 'Non-Profits'}
                    href="/non-profit-registry"
                  >
                    {language === 'fa' 
                      ? 'خدمات ویژه برای سازمان‌های خیریه' 
                      : 'Special services for non-profit organizations'}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default SecondaryNavBar;
