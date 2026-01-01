import { Calendar, UserCheck, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      step: "01",
      title: "Book via WhatsApp",
      desc: "Send us a message with your preferred date, time, and therapy type. We'll confirm within 30 minutes.",
    },
    {
      icon: UserCheck,
      step: "02",
      title: "Therapist Arrives",
      desc: "Our verified therapist arrives at your doorstep with fresh linens, organic oils, and all equipment.",
    },
    {
      icon: Sparkles,
      step: "03",
      title: "Relax & Rejuvenate",
      desc: "Enjoy your personalized Ayurvedic treatment in the comfort of your home. Pay after the session.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Booking your home Ayurvedic session is easy. Just 3 simple steps to wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-card transition-all duration-300 group-hover:-translate-y-1">
                {/* Step Number */}
                <span className="absolute -top-4 right-6 text-5xl font-serif font-bold text-sage-light">
                  {item.step}
                </span>

                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-sage-dark" />
                </div>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
