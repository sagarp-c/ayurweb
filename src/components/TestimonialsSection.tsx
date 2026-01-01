import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      text: "The Abhyanga massage was exactly what I needed. The therapist was professional, punctual, and the organic oils left my skin feeling amazing. Highly recommend!",
      service: "Abhyanga",
    },
    {
      name: "Anand Krishnan",
      location: "Mumbai",
      rating: 5,
      text: "After months of back pain, the Potli massage worked wonders. The therapist understood my pain points and customized the treatment perfectly.",
      service: "Potli Massage",
    },
    {
      name: "Dr. Meera Iyer",
      location: "Chennai",
      rating: 5,
      text: "As a doctor, I appreciate the authentic Ayurvedic approach. The Shirodhara session was deeply relaxing and helped with my insomnia. Excellent service!",
      service: "Shirodhara",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-warm">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who transformed their wellness journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sage-light" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-terracotta text-terracotta"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
                <span className="px-3 py-1 bg-sage-light text-sage-dark text-xs font-medium rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-serif font-bold text-foreground">4.9★</p>
            <p className="text-sm text-muted-foreground">Google Rating</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div>
            <p className="text-3xl font-serif font-bold text-foreground">500+</p>
            <p className="text-sm text-muted-foreground">5-Star Reviews</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div>
            <p className="text-3xl font-serif font-bold text-foreground">2,000+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
