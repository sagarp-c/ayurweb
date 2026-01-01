import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const whatsappLink = "https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20session";

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full mb-6">
            Limited Time Offer
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            Ready to Begin Your
            <span className="block">Wellness Journey?</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Book your first session today and get 20% off. Experience the healing touch of authentic Ayurveda at home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="secondary"
              size="lg"
              className="text-primary font-semibold sm:size-xl"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white sm:size-xl"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5" />
                Call +91 98765 43210
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <span>✓ No Advance Payment</span>
            <span>✓ Same-Day Booking</span>
            <span>✓ 100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
