import { Phone, Mail, MapPin, Users, Utensils, Clock, Award, ChefHat, Building2, Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import heroImage from "@assets/generated_images/hero_banana_leaf_meal.png";
import bananaLeafTexture from "@assets/generated_images/banana_leaf_texture_background.png";
import breakfastThali from "@assets/generated_images/traditional_breakfast_thali.png";
import weddingSetup from "@assets/generated_images/wedding_catering_setup.png";
import cateringStaff from "@assets/generated_images/catering_service_staff.png";
import desserts from "@assets/generated_images/traditional_desserts_display.png";
import outdoorEvent from "@assets/generated_images/outdoor_catering_event.png";
import foodServing from "@assets/generated_images/traditional_food_serving.png";
import chefIllustration from "@assets/generated_images/chef_character_illustration.png";
import corporateBuffet from "@assets/generated_images/corporate_catering_buffet.png";
import businessCardImage from "@assets/WhatsApp Image 2025-11-18 at 12.07.15_e5bf5313_1764174112296.jpg";
import { useState, useEffect } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  eventType: z.string().min(1, "Please select an event type"),
  guestCount: z.string().optional(),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your event")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function KYLogo({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "h-10 w-10 text-lg",
    md: "h-12 w-12 text-xl",
    lg: "h-20 w-20 text-3xl"
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center font-bold text-primary-foreground shadow-lg ${className}`}
      data-testid="logo-ky"
    >
      K.Y
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      eventType: "",
      guestCount: "",
      eventDate: "",
      message: ""
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const onSubmit = (data: ContactFormData) => {
    const message = `Hello! I would like to inquire about catering services.

Name: ${data.name}
Phone: ${data.phone}
Event Type: ${data.eventType}
${data.guestCount ? `Guest Count: ${data.guestCount}` : ''}
${data.eventDate ? `Event Date: ${data.eventDate}` : ''}

Message:
${data.message}`;

    const whatsappUrl = `https://wa.me/917448312744?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with our team shortly!",
    });
    
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <KYLogo size="md" className="animate-float-gentle" />
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-foreground">K.Y Catering</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">High Class Service</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid="nav-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid="nav-gallery"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                className="hidden sm:flex"
                onClick={() => window.open("https://wa.me/917448312744", "_blank")}
                data-testid="button-header-whatsapp"
              >
                <SiWhatsapp className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => window.open("tel:7448312744")}
                data-testid="button-header-call"
                className="hidden sm:flex"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              
              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="md:hidden"
                    data-testid="button-mobile-menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-8">
                    <button 
                      onClick={() => scrollToSection("services")}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                      data-testid="mobile-nav-services"
                    >
                      Services
                    </button>
                    <button 
                      onClick={() => scrollToSection("menu")}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                      data-testid="mobile-nav-menu"
                    >
                      Menu
                    </button>
                    <button 
                      onClick={() => scrollToSection("gallery")}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                      data-testid="mobile-nav-gallery"
                    >
                      Gallery
                    </button>
                    <button 
                      onClick={() => scrollToSection("contact")}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                      data-testid="mobile-nav-contact"
                    >
                      Contact
                    </button>
                    
                    <div className="pt-4 space-y-3">
                      <Button 
                        size="lg" 
                        className="w-full"
                        onClick={() => window.open("https://wa.me/917448312744", "_blank")}
                        data-testid="button-mobile-whatsapp"
                      >
                        <SiWhatsapp className="h-5 w-5 mr-2" />
                        WhatsApp
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open("tel:7448312744")}
                        data-testid="button-mobile-call"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Traditional South Indian Banana Leaf Meal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm text-sm px-4 py-1 animate-float-gentle">
              Since Years of Excellence
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              K.Y CATERING SERVICE
            </h1>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-foreground" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
              ஸ்ரீ செல்லியம்மன் துணை
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-lg">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-foreground" />
                <span className="font-medium">V. Kumar</span>
              </div>
              <div className="hidden sm:block text-primary-foreground/50">•</div>
              <div className="flex items-center gap-2">
                <SiWhatsapp className="h-5 w-5 text-primary-foreground" />
                <a href="https://wa.me/917448312744" className="hover:text-primary-foreground transition-colors" data-testid="link-hero-whatsapp">
                  74483 12744
                </a>
              </div>
              <div className="hidden sm:block text-primary-foreground/50">•</div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary-foreground" />
                <a href="tel:8925626963" className="hover:text-primary-foreground transition-colors" data-testid="link-hero-phone">
                  89256 26963
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                High Class Catering Service
              </h2>
              <p className="text-xl sm:text-2xl text-primary-foreground font-medium">
                Contract & Labour
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/917448312744?text=Hello, I'm interested in your catering services", "_blank")}
                data-testid="button-hero-book"
              >
                <SiWhatsapp className="h-5 w-5 mr-2" />
                Book Now on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 bg-background/20 border-white/30 text-white hover:bg-background/30 backdrop-blur-sm w-full sm:w-auto"
                onClick={() => scrollToSection("menu")}
                data-testid="button-hero-menu"
              >
                <Utensils className="h-5 w-5 mr-2" />
                View Our Menu
              </Button>
            </div>

            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-foreground" />
                <span className="text-sm">Authentic Taste</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary-foreground" />
                <span className="text-sm">Timely Service</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary-foreground" />
                <span className="text-sm">Expert Chefs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-24 relative"
        style={{
          backgroundImage: `url(${bananaLeafTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-background/95"></div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-services">Our Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium catering solutions for all your events and occasions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contract Catering */}
            <Card className="overflow-hidden hover-elevate animate-float-slow" data-testid="card-service-contract">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={weddingSetup} 
                  alt="Contract Catering" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Contract Catering</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Complete catering solutions for weddings, parties, corporate events, and special occasions. 
                  We provide traditional South Indian banana leaf meals with authentic taste and presentation.
                </p>
                <ul className="space-y-3">
                  {[
                    "Traditional wedding feasts",
                    "Corporate event catering",
                    "Birthday & anniversary parties",
                    "Festival celebrations",
                    "Community gatherings"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Labour Supply */}
            <Card className="overflow-hidden hover-elevate animate-float-delay-1" data-testid="card-service-labour">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={cateringStaff} 
                  alt="Labour Supply" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Labour Supply</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional and trained catering staff for your events. Our team ensures smooth 
                  operations and excellent service quality throughout your function.
                </p>
                <ul className="space-y-3">
                  {[
                    "Trained serving staff",
                    "Professional chefs & cooks",
                    "Kitchen helpers & assistants",
                    "Event setup crew",
                    "Cleaning & maintenance staff"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Showcase */}
      <section id="menu" className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-menu">Our Menu</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Traditional Delicacies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authentic South Indian cuisine served on banana leaves for an unforgettable dining experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: breakfastThali,
                title: "Traditional Breakfast",
                description: "Idli, Dosa, Vada with authentic chutneys and sambar",
                items: ["Soft Idlis", "Crispy Dosas", "Medu Vada", "Coconut Chutney", "Sambar"]
              },
              {
                image: heroImage,
                title: "Full Meals",
                description: "Complete banana leaf meals with variety of curries and sides",
                items: ["Rice & Sambar", "Rasam", "Variety Rice", "Multiple Curries", "Papadum"]
              },
              {
                image: desserts,
                title: "Traditional Desserts",
                description: "Sweet endings with authentic South Indian delicacies",
                items: ["Payasam", "Kesari", "Laddu", "Jalebi", "Mysore Pak"]
              },
              {
                image: corporateBuffet,
                title: "Corporate Buffet",
                description: "Professional catering for office events and meetings",
                items: ["Buffet Setup", "Continental Options", "Traditional Meals", "Snacks", "Beverages"]
              },
              {
                image: outdoorEvent,
                title: "Event Catering",
                description: "Large-scale catering for outdoor and indoor events",
                items: ["Bulk Serving", "Outdoor Setup", "Multiple Counters", "Live Stations", "Custom Menu"]
              },
              {
                image: foodServing,
                title: "Custom Packages",
                description: "Tailored menus to suit your specific requirements",
                items: ["Personalized Menu", "Dietary Options", "Festival Specials", "Regional Cuisine", "Fusion Dishes"]
              }
            ].map((menu, index) => (
              <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-menu-${index}`}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={menu.image} 
                    alt={menu.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{menu.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{menu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {menu.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-gallery">Our Work</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Event Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpses from our catering events and satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { image: weddingSetup, alt: "Wedding Catering Setup", tall: true },
              { image: outdoorEvent, alt: "Outdoor Event", tall: false },
              { image: breakfastThali, alt: "Traditional Breakfast", tall: false },
              { image: cateringStaff, alt: "Professional Staff", tall: true },
              { image: desserts, alt: "Traditional Desserts", tall: false },
              { image: foodServing, alt: "Food Serving", tall: false },
              { image: corporateBuffet, alt: "Corporate Buffet", tall: false },
              { image: heroImage, alt: "Banana Leaf Meal", tall: true }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.tall ? "md:row-span-2" : ""} relative overflow-hidden rounded-lg group cursor-pointer hover-elevate`}
                data-testid={`gallery-item-${index}`}
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" data-testid="badge-about">About Us</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Experience & Excellence
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={businessCardImage} 
                  alt="K.Y Catering Service Business Card" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-bold text-primary">K.Y Catering Service</span>, led by V. Kumar, 
                  has been serving authentic South Indian cuisine with dedication and passion. Under the 
                  blessings of <span style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }} className="font-semibold">ஸ்ரீ செல்லியம்மன்</span>, 
                  we bring traditional flavors and high-class service to your special occasions.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Award, text: "Years of catering excellence" },
                    { icon: Users, text: "Thousands of satisfied customers" },
                    { icon: ChefHat, text: "Expert team of professional chefs" },
                    { icon: Clock, text: "Always on-time, never disappointed" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Our Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Traditional Weddings",
                      "Corporate Events",
                      "Festival Catering",
                      "Banana Leaf Meals",
                      "Authentic Cuisine",
                      "Professional Service"
                    ].map((specialty, i) => (
                      <Badge key={i} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-contact">Get In Touch</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to make your event memorable? Reach out to us for bookings and inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your name" 
                              {...field}
                              data-testid="input-contact-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+91 12345 67890" 
                              {...field}
                              data-testid="input-contact-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-event-type">
                                <SelectValue placeholder="Select event type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="birthday">Birthday Party</SelectItem>
                              <SelectItem value="corporate">Corporate Event</SelectItem>
                              <SelectItem value="festival">Festival Celebration</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="guestCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Guest Count</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., 100" 
                                type="number"
                                {...field}
                                data-testid="input-guest-count"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Date</FormLabel>
                            <FormControl>
                              <Input 
                                type="date"
                                {...field}
                                data-testid="input-event-date"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your event requirements, menu preferences, and any special requests..." 
                              className="min-h-32"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={form.formState.isSubmitting}
                      data-testid="button-submit-contact-form"
                    >
                      <SiWhatsapp className="h-5 w-5 mr-2" />
                      {form.formState.isSubmitting ? "Sending..." : "Send via WhatsApp"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">V. Kumar</p>
                      <p className="text-sm text-muted-foreground">Proprietor</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <SiWhatsapp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">WhatsApp</p>
                      <a 
                        href="https://wa.me/917448312744" 
                        className="text-primary hover:underline"
                        data-testid="link-contact-whatsapp"
                      >
                        +91 74483 12744
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Phone</p>
                      <a 
                        href="tel:8925626963" 
                        className="text-primary hover:underline"
                        data-testid="link-contact-phone"
                      >
                        +91 89256 26963
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Address</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        No. 13/8, Pugazhendhi Street,<br />
                        MGR Nagar, K. K. Nagar,<br />
                        Chennai - 78
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a 
                        href="mailto:kycatering@gmail.com" 
                        className="text-primary hover:underline text-sm"
                        data-testid="link-contact-email"
                      >
                        kycatering@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground">
                <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold">8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <p className="text-xs opacity-90 pt-2">
                    * Available 24/7 for event bookings and emergencies
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <KYLogo size="md" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">K.Y Catering</h3>
                  <p className="text-xs text-muted-foreground">High Class Service</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Traditional South Indian catering with authentic taste and professional service.
              </p>
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
                ஸ்ரீ செல்லியம்மன் துணை
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToSection("services")} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("menu")} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("gallery")} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("contact")} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>No. 13/8, Pugazhendhi Street</li>
                <li>MGR Nagar, K.K. Nagar</li>
                <li>Chennai - 78</li>
                <li className="pt-2">
                  <a href="tel:7448312744" className="text-primary hover:underline">
                    +91 74483 12744
                  </a>
                </li>
                <li>
                  <a href="tel:8925626963" className="text-primary hover:underline">
                    +91 89256 26963
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} K.Y Catering Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-xl z-50 hover:scale-110 transition-transform animate-float animate-pulse-glow"
        onClick={() => window.open("https://wa.me/917448312744?text=Hello, I'm interested in your catering services", "_blank")}
        data-testid="button-floating-whatsapp"
      >
        <SiWhatsapp className="h-8 w-8" />
      </Button>
    </div>
  );
}
