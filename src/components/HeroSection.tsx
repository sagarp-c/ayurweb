import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20session";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sage blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-terracotta blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-light rounded-full text-sage-dark text-sm font-medium animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              Trusted by 2,000+ Happy Clients
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-foreground animate-fade-up [animation-delay:100ms]">
              Authentic Ayurvedic Healing,
              <span className="block text-primary">At Your Doorstep</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:200ms]">
              Experience traditional Kerala Ayurvedic therapies in the comfort of your home. Certified therapists, premium organic oils, and personalized wellness journeys.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up [animation-delay:300ms]">
              <Button variant="whatsapp" size="lg" className="sm:size-xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Book on WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="sm:size-xl" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified Therapists
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Same-Day Booking
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Professional Ayurvedic therapist providing relaxing massage treatment at home"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">4.9 Rating</p>
                  <p className="text-sm text-muted-foreground">500+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
