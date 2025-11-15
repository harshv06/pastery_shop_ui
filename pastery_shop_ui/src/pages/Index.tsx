import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-patisserie.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import macarons from "@/assets/macarons.jpg";
import croissants from "@/assets/croissants.jpg";

const Index = () => {
  const featuredProducts = [
    {
      name: "Chocolate Symphony",
      description: "Layered dark chocolate cake with gold leaf",
      price: "₹6,500",
      image: chocolateCake,
    },
    {
      name: "Luxury Macarons",
      description: "Assorted premium macarons, box of 12",
      price: "₹3,500",
      image: macarons,
    },
    {
      name: "Golden Croissants",
      description: "Butter croissants with 24k gold dust",
      price: "₹950",
      image: croissants,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            The Art of
            <span className="block text-gradient-gold mt-2">
              Premium Patisserie
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Exquisite handcrafted cakes and pastries, where tradition meets
            luxury in every bite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
            >
              <Link to="/products">
                Explore Collections <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/5"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-4">
              Signature Creations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each masterpiece is handcrafted with the finest ingredients and
              uncompromising attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.name}
                className="group overflow-hidden border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center text-sm text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/5"
            >
              <Link to="/products">
                View All Collections <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold">
                Over a Decade of{" "}
                <span className="text-gradient-gold">Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Since 2010, Royal Delights Patisserie has been the pinnacle of
                pastry craftsmanship in Delhi. Our master patissiers bring
                together world-class techniques and innovative artistry to
                create confections that delight the most discerning palates.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every creation is a testament to our commitment to
                perfection—from sourcing the finest Belgian chocolate and
                Tahitian vanilla to the delicate hand-piping of each decoration.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
              >
                <Link to="/about">
                  Discover Our Heritage <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={heroImage}
                  alt="Our patisserie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
            Experience Luxury in Every Bite
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Visit our boutique in the heart of Delhi or place a custom order for
            your special occasion
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="shadow-elegant"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
