import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";

const TherapistsSection = () => {
  const therapists = [
    {
      name: "Dr. Lakshmi Nair",
      image: therapist1,
      title: "Senior Ayurvedic Therapist",
      exp: "12+ Years Experience",
      spec: "Abhyanga, Shirodhara, Women's Wellness",
      cert: "BAMS, Kerala Ayurveda Academy",
    },
    {
      name: "Rajesh Kumar",
      image: therapist2,
      title: "Traditional Massage Expert",
      exp: "8+ Years Experience",
      spec: "Deep Tissue, Sports Recovery, Potli",
      cert: "Certified from Kottakkal Arya Vaidya Sala",
    },
  ];

  return (
    <section id="therapists" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Expert Therapists
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Meet Your Healing
            <span className="block text-primary">Practitioners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our therapists are trained in authentic Kerala Ayurvedic traditions with years of hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {therapists.map((therapist, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={therapist.image}
                  alt={`${therapist.name} - ${therapist.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-sage text-white text-xs font-medium rounded-full mb-2">
                    {therapist.exp}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                  {therapist.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {therapist.title}
                </p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Specialization:</span>{" "}
                    {therapist.spec}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Certification:</span>{" "}
                    {therapist.cert}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          + 10 more certified therapists available across cities
        </p>
      </div>
    </section>
  );
};

export default TherapistsSection;
