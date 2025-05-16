
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";

interface RegistrationFormProps {
  registryType: string;
  onBack: () => void;
}

export function RegistrationForm({ registryType, onBack }: RegistrationFormProps) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  // Define the form schema with Zod
  const formSchema = z.object({
    firstName: z.string().min(1, {
      message: language === 'fa' ? 'نام الزامی است' : 'First name is required',
    }),
    lastName: z.string().min(1, {
      message: language === 'fa' ? 'نام خانوادگی الزامی است' : 'Last name is required',
    }),
    email: z.string().email({
      message: language === 'fa' ? 'ایمیل نامعتبر است' : 'Invalid email address',
    }),
    password: z.string().min(6, {
      message: language === 'fa' ? 'رمز عبور باید حداقل ۶ کاراکتر باشد' : 'Password must be at least 6 characters',
    }).max(20, {
      message: language === 'fa' ? 'رمز عبور نباید بیشتر از ۲۰ کاراکتر باشد' : 'Password must be at most 20 characters',
    }).regex(/^[a-zA-Z0-9@!#]+$/, {
      message: language === 'fa' 
        ? 'رمز عبور باید شامل حروف، اعداد و کاراکترهای خاص (@، !، #) باشد' 
        : 'Password must include alphanumeric and special characters (@, !, #)',
    }),
    terms: z.boolean().refine(val => val === true, {
      message: language === 'fa' 
        ? 'شما باید با شرایط و قوانین موافقت کنید' 
        : 'You must accept the terms and conditions',
    }),
  });

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, this would send data to an API
    console.log("Form submitted:", values, "Registry type:", registryType);
    
    // Show success message
    toast({
      title: language === 'fa' 
        ? 'ثبت نام با موفقیت انجام شد!' 
        : 'Registration successful!',
      description: language === 'fa'
        ? 'لیست هدیه شما ایجاد شد.'
        : 'Your gift list has been created.',
    });
    
    // Navigate to the wishlist page (or wherever appropriate)
    navigate('/create-wishlist', { state: { registryType } });
  };

  // Get registry type title based on selected option and language
  const getRegistryTypeTitle = () => {
    switch(registryType) {
      case 'gift-list':
        return language === 'fa' ? 'لیست هدیه' : 'Gift List';
      case 'wedding-registry':
        return language === 'fa' ? 'لیست هدیه عروسی' : 'Wedding Registry';
      case 'baby-registry':
        return language === 'fa' ? 'لیست هدیه نوزاد' : 'Baby Registry';
      case 'nonprofit-registry':
        return language === 'fa' ? 'لیست هدیه خیریه' : 'Non-profit Gift List';
      default:
        return language === 'fa' ? 'لیست هدیه' : 'Gift List';
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto ${language === 'fa' ? 'rtl' : 'ltr'}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-kadochi-coral">
          {language === 'fa' 
            ? 'به دوستان و خانواده بگویید چه چیزی می‌خواهید!'
            : 'Tell Friends and Family What You Want!'}
        </h2>
        <p className="text-muted-foreground mt-2">
          {language === 'fa'
            ? 'با لیست هدیه شما، هدیه دادن برای همه آسان‌تر می‌شود و شما آنچه می‌خواهید دریافت می‌کنید.'
            : 'With your Gift List, gifting gets easier for everyone, and you get what you want.'}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {language === 'fa' ? 'نام (اجباری)' : 'First Name (Required)'}*
                </FormLabel>
                <FormControl>
                  <Input placeholder={language === 'fa' ? 'نام شما' : 'Your first name'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {language === 'fa' ? 'نام خانوادگی (اجباری)' : 'Last Name (Required)'}*
                </FormLabel>
                <FormControl>
                  <Input placeholder={language === 'fa' ? 'نام خانوادگی شما' : 'Your last name'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {language === 'fa' ? 'آدرس ایمیل (اجباری)' : 'Email Address (Required)'}*
                </FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder={language === 'fa' ? 'ایمیل شما' : 'Your email'} 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  {language === 'fa' ? 'رمز عبور (اجباری)' : 'Password (Required)'}*
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={language === 'fa' ? 'رمز عبور شما' : 'Your password'}
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </FormControl>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'fa'
                    ? 'از ۶ تا ۲۰ کاراکتر شامل حروف، اعداد و کاراکترهای خاص (@، !، #) استفاده کنید'
                    : 'Use 6-20 alphanumeric and special characters (@, !, #)'}
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="terms"
                    className={language === 'fa' ? 'ml-3' : 'mr-3'}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel htmlFor="terms" className="text-sm font-normal">
                    {language === 'fa'
                      ? 'من شرایط و قوانین وبسایت و سیاست حفظ حریم خصوصی را می‌پذیرم'
                      : 'I accept the website\'s Terms & Conditions and Privacy Policy'}
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button 
              type="submit"
              className="w-full bg-kadochi-coral hover:bg-kadochi-coral/90 text-white"
            >
              {language === 'fa' 
                ? `ایجاد ${getRegistryTypeTitle()}`
                : `Create ${getRegistryTypeTitle()}`}
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-2">
              {language === 'fa'
                ? 'بدون نیاز به کارت اعتباری. برای همیشه رایگان!'
                : 'No credit card required. Free forever!'}
            </p>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {language === 'fa' ? 'یا' : 'OR'}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              type="button"
              variant="outline"
              className="w-full"
            >
              {language === 'fa' ? 'گزینه‌های بیشتر ثبت نام' : 'More Sign Up Options'}
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              onClick={onBack}
              className="w-full"
            >
              {language === 'fa' ? 'بازگشت' : 'Back'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
