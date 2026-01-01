import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import oilsImage from "@/assets/ayurveda-oils.jpg";

const ServicesSection = () => {
  const services = [
    {
      name: "Abhyanga",
      duration: "60-90 minutes",
      desc: "Traditional full-body warm oil massage using long, flowing strokes. Nourishes the skin, improves circulation, and promotes deep relaxation.",
      benefits: ["Stress Relief", "Better Sleep", "Skin Nourishment"],
    },
    {
      name: "Shirodhara",
      duration: "45-60 minutes",
      desc: "Continuous stream of warm herbal oil poured on the forehead. Deeply calms the mind and nervous system for profound relaxation.",
      benefits: ["Mental Clarity", "Anxiety Relief", "Headache Relief"],
    },
    {
      name: "Potli Massage",
      duration: "60-75 minutes",
      desc: "Heated herbal pouches pressed and massaged into the body. Perfect for muscle pain, joint stiffness, and inflammation.",
      benefits: ["Pain Relief", "Inflammation", "Muscle Recovery"],
    },
    {
      name: "Panchakarma Prep",
      duration: "90-120 minutes",
      desc: "Comprehensive detox preparation combining multiple therapies. Ideal for deep cleansing and rejuvenation programs.",
      benefits: ["Detoxification", "Rejuvenation", "Immunity Boost"],
    },
  ];

  const whatsappBase = "https://wa.me/919876543210?text=";

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-warm">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image & Info */}
          <div className="lg:sticky lg:top-8">
            <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
              Our Therapies
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
              Traditional Healing,
              <span className="block text-primary">Modern Convenience</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Each therapy is customized to your body type (Prakriti) and current imbalances using authentic Kerala techniques.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-card mb-8">
              <img
                src={oilsImage}
                alt="Premium Ayurvedic herbal oils and traditional ingredients"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="font-serif font-semibold text-foreground mb-2">
                Not sure which therapy?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Our experts can recommend the perfect treatment based on your needs and health goals.
              </p>
              <Button variant="soft" size="sm" asChild>
                <a 
                  href={`${whatsappBase}Hi%2C%20I%20need%20help%20choosing%20the%20right%20treatment`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Consultation
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                      {service.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {service.duration}
                    </span>
                  </div>
                  <Button variant="whatsapp" size="sm" asChild>
                    <a
                      href={`${whatsappBase}Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(service.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4" />
                      Book
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-sage-light text-sage-dark text-xs font-medium rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
