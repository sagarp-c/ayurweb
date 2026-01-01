import { Button } from "@/components/ui/button";
import { Phone, Check } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Single Session",
      desc: "Perfect for first-time clients",
      price: "₹1,499",
      priceNote: "per session",
      features: [
        "60-minute therapy session",
        "Organic oils included",
        "Certified therapist",
        "Post-session wellness tips",
      ],
      popular: false,
    },
    {
      name: "Wellness Pack",
      desc: "Best value for regular wellness",
      price: "₹3,999",
      priceNote: "for 3 sessions",
      savings: "Save 15%",
      features: [
        "3 x 60-minute sessions",
        "Mix & match any therapies",
        "Priority booking",
        "Free consultation call",
        "Valid for 60 days",
      ],
      popular: true,
    },
    {
      name: "Monthly Wellness",
      desc: "For committed self-care",
      price: "₹6,999",
      priceNote: "for 6 sessions",
      savings: "Save 20%",
      features: [
        "6 x 60-minute sessions",
        "Personalized wellness plan",
        "Dedicated therapist",
        "Premium oil upgrades",
        "Valid for 90 days",
      ],
      popular: false,
    },
  ];

  const whatsappBase = "https://wa.me/919876543210?text=";

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-terracotta-light text-terracotta text-sm font-medium rounded-full mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No advance payment. Pay only after your session.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? "bg-primary text-primary-foreground border-primary shadow-elevated scale-105"
                  : "bg-card text-card-foreground border-border shadow-card hover:shadow-elevated"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-terracotta text-white text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}

              {pkg.savings && (
                <span
                  className={`absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded ${
                    pkg.popular
                      ? "bg-white/20 text-white"
                      : "bg-sage-light text-sage-dark"
                  }`}
                >
                  {pkg.savings}
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-serif font-semibold mb-1">
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm ${
                    pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {pkg.desc}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-serif font-bold">{pkg.price}</span>
                <span
                  className={`block text-sm mt-1 ${
                    pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {pkg.priceNote}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        pkg.popular ? "text-white" : "text-sage"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "secondary" : "whatsapp"}
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href={`${whatsappBase}Hi%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4" />
                  Book Now
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All prices include organic oils and equipment. Pay via UPI, card, or cash after your session.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
