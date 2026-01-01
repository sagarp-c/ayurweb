import { Shield, Droplets, FileCheck, UserCheck } from "lucide-react";

const SafetySection = () => {
  const safetyPoints = [
    {
      icon: UserCheck,
      title: "Verified Therapists",
      desc: "All therapists are background-verified with 5+ years of experience in traditional Ayurvedic practices",
    },
    {
      icon: Shield,
      title: "Hygiene First",
      desc: "Fresh linens, sanitized equipment, and strict hygiene protocols followed for every session",
    },
    {
      icon: Droplets,
      title: "Premium Oils",
      desc: "100% organic, cold-pressed oils sourced directly from Kerala for authentic therapeutic benefits",
    },
    {
      icon: FileCheck,
      title: "Fully Insured",
      desc: "Complete insurance coverage and professional liability protection for your peace of mind",
    },
  ];

  return (
    <section id="safety" className="py-20 lg:py-28 bg-sage-light">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-sage-dark text-sm font-medium rounded-full mb-4">
            Your Safety, Our Priority
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Safe & Professional Care
          </h2>
          <p className="text-lg text-muted-foreground">
            We maintain the highest standards of safety, hygiene, and professionalism in every session.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                <point.icon className="w-6 h-6 text-sage-dark" />
              </div>

              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {point.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border shadow-soft">
            <Shield className="w-5 h-5 text-sage" />
            <span className="text-sm font-medium text-foreground">
              100% Satisfaction Guaranteed or Full Refund
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
