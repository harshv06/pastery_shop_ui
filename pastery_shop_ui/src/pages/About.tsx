import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import heroImage from "@/assets/hero-patisserie.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Every creation is infused with love and dedication to the art of patisserie",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Over a decade of awards and recognition from culinary institutions worldwide",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Blending time-honoured techniques with contemporary artistry",
    },
    {
      icon: Users,
      title: "Heritage",
      description: "Family recipes and methods passed down through generations",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6">
            Our <span className="text-gradient-gold">Story</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A legacy of premium patisserie excellence spanning over a decade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000 delay-200">
            <h2 className="text-4xl font-serif font-semibold">Since 2010</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Royal Delights Patisserie was founded by Master Patissier Arjun
              Mehta, who trained at Le Cordon Bleu and apprenticed at the finest
              patisseries across Europe. His vision was to create a sanctuary
              where the art of premium pastry-making would be preserved and
              elevated to new heights in India.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, our atelier continues this legacy under the guidance of his
              daughter, Kavya Mehta, a celebrated patissier in her own right.
              Together with our team of skilled artisans, we craft each pastry
              with the same meticulous attention to detail that defined our
              founder's work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We source only the finest ingredients: single-origin chocolates
              from Ecuador, Madagascar vanilla, premium butter from Europe, and
              seasonal fruits from local markets. Every element is chosen for
              its exceptional quality and flavour.
            </p>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={craftsmanshipImage}
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The pillars that guide every creation we craft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={heroImage}
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-semibold">
                Master Artisans
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team comprises award-winning patissiers, each bringing years
                of experience and specialised expertise. From delicate sugar
                work to complex flavour profiles, every member of our atelier is
                a master of their craft.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe in continuous learning and innovation, regularly
                travelling to culinary capitals and collaborating with renowned
                chefs to bring new inspirations to our creations.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl font-serif font-bold text-accent">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-serif font-bold text-accent">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    International Awards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
