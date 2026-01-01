import { Shield, Award, Clock, Users } from "lucide-react";

const TrustBar = () => {
  const trustIndicators = [
    {
      icon: Shield,
      label: "100% Verified Therapists",
    },
    {
      icon: Award,
      label: "Kerala Certified",
    },
    {
      icon: Clock,
      label: "Same-Day Booking",
    },
    {
      icon: Users,
      label: "2,000+ Happy Clients",
    },
  ];

  return (
    <section className="py-6 bg-sage-light border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustIndicators.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sage-dark justify-center text-center"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
