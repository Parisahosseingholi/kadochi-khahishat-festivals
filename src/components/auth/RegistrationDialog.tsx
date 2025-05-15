
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Gift, Heart, Baby, HandHeart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "@/components/ui/use-toast";

interface RegistryOption {
  id: string;
  icon: React.ReactNode;
  titleEn: string;
  titleFa: string;
  descriptionEn: string;
  descriptionFa: string;
}

export interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationDialog({ open, onOpenChange }: RegistrationDialogProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const registryOptions: RegistryOption[] = [
    {
      id: "gift-list",
      icon: <Gift className="h-5 w-5" />,
      titleEn: "Create a gift list",
      titleFa: "ساخت لیست هدیه",
      descriptionEn: "Create a personal gift list for birthdays, holidays, or any occasion",
      descriptionFa: "ایجاد لیست هدیه شخصی برای تولد، تعطیلات، یا هر مناسبت دیگر",
    },
    {
      id: "wedding-registry",
      icon: <Heart className="h-5 w-5" />,
      titleEn: "Create a wedding registry",
      titleFa: "ساخت لیست هدیه عروسی",
      descriptionEn: "Start your new chapter with gifts you'll love",
      descriptionFa: "فصل جدید زندگی خود را با هدایایی که دوست دارید آغاز کنید",
    },
    {
      id: "baby-registry",
      icon: <Baby className="h-5 w-5" />,
      titleEn: "Create a baby registry",
      titleFa: "ساخت لیست هدیه نوزاد",
      descriptionEn: "Prepare for your little one with essential items",
      descriptionFa: "با وسایل ضروری برای نوزاد کوچک خود آماده شوید",
    },
    {
      id: "nonprofit-registry",
      icon: <HandHeart className="h-5 w-5" />,
      titleEn: "Create a non-profit gift list",
      titleFa: "ساخت لیست هدیه برای خیریه",
      descriptionEn: "Raise donations and support causes you care about",
      descriptionFa: "جمع‌آوری کمک مالی و حمایت از اهداف خیرخواهانه",
    },
  ];

  const handleContinue = () => {
    if (!selectedOption) {
      toast({
        title: language === 'fa' ? 'لطفاً یک گزینه انتخاب کنید' : 'Please select an option',
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would store the choice and direct to specific registration flow
    // For now, we'll just navigate to the create-wishlist page
    navigate('/create-wishlist', { state: { registryType: selectedOption } });
    onOpenChange(false); // Close the dialog
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-md ${language === 'fa' ? 'rtl' : 'ltr'}`}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            {language === 'fa' 
              ? 'چه نوع لیستی می‌خواهید ایجاد کنید؟' 
              : 'What would you like to create?'}
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            {language === 'fa'
              ? 'نوع لیست هدیه خود را انتخاب کنید'
              : 'Select the type of registry you want to create'}
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <RadioGroup
            value={selectedOption}
            onValueChange={setSelectedOption}
            className="space-y-3"
          >
            {registryOptions.map((option) => (
              <div
                key={option.id}
                className={`flex items-center space-x-3 ${language === 'fa' ? 'space-x-reverse' : ''} rounded-lg border p-4 cursor-pointer hover:bg-muted transition-colors ${
                  selectedOption === option.id ? "border-kadochi-coral bg-kadochi-light-coral/10" : ""
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                <RadioGroupItem value={option.id} id={option.id} className={language === 'fa' ? 'order-last' : 'order-first'} />
                <div className={`${language === 'fa' ? 'order-first ml-3' : 'order-last ml-0'} flex items-center space-x-3 ${language === 'fa' ? 'space-x-reverse' : ''}`}>
                  <span className={`flex items-center justify-center w-10 h-10 rounded-full bg-kadochi-light-coral/30 text-kadochi-coral`}>
                    {option.icon}
                  </span>
                  <div>
                    <Label
                      htmlFor={option.id}
                      className="text-base font-medium"
                    >
                      {language === 'fa' ? option.titleFa : option.titleEn}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {language === 'fa' ? option.descriptionFa : option.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className={`flex ${language === 'fa' ? 'flex-row-reverse' : ''} justify-between mt-4`}>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            {language === 'fa' ? 'لغو' : 'Cancel'}
          </Button>
          <Button
            type="button"
            className="bg-kadochi-coral hover:bg-kadochi-coral/90 text-white"
            onClick={handleContinue}
          >
            {language === 'fa' ? 'ادامه' : 'Continue'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
