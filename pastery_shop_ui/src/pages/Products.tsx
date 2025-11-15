import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import macarons from "@/assets/macarons.jpg";
import croissants from "@/assets/croissants.jpg";

const Products = () => {
  const products = [
    {
      name: "Chocolate Symphony",
      category: "Signature Cakes",
      description:
        "Seven layers of dark Belgian chocolate with gold leaf garnish",
      price: "₹6,500",
      image: chocolateCake,
      bestseller: true,
    },
    {
      name: "Luxury Macarons",
      category: "Petit Fours",
      description: "Assorted premium macarons with gourmet fillings, box of 12",
      price: "₹3,500",
      image: macarons,
      bestseller: true,
    },
    {
      name: "Golden Croissants",
      category: "Pastries",
      description: "Hand-laminated butter croissants with 24k gold dust",
      price: "₹950",
      image: croissants,
      bestseller: false,
    },
    {
      name: "Rose Velvet",
      category: "Signature Cakes",
      description: "Delicate rose-infused sponge with champagne buttercream",
      price: "₹7,500",
      image: chocolateCake,
      bestseller: false,
    },
    {
      name: "Opera Royale",
      category: "Classic Cakes",
      description: "Traditional opera cake with coffee and chocolate layers",
      price: "₹5,200",
      image: macarons,
      bestseller: true,
    },
    {
      name: "Mille-Feuille Prestige",
      category: "Pastries",
      description: "Caramelised puff pastry with vanilla diplomat cream",
      price: "₹1,400",
      image: croissants,
      bestseller: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6">
            Our <span className="text-gradient-gold">Collections</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each creation is a work of art, meticulously handcrafted by our
            master patissiers using only the finest ingredients from around the
            world
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className="group overflow-hidden border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <Badge
                    variant="secondary"
                    className="bg-card/90 backdrop-blur-sm text-card-foreground border-border/50"
                  >
                    {product.category}
                  </Badge>
                  {product.bestseller && (
                    <Badge className="bg-accent/90 backdrop-blur-sm text-accent-foreground border-accent/50">
                      Bestseller
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-lg font-semibold shadow-elegant">
                  {product.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    Made to Order
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="mt-20 bg-gradient-luxury rounded-2xl p-12 text-center text-primary-foreground shadow-elegant">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
            Bespoke Creations
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Looking for something truly unique? Our master patissiers can create
            a custom masterpiece tailored to your vision and occasion
          </p>
          <a
            href="/contact"
            className="inline-block bg-background text-foreground hover:bg-background/90 px-8 py-3 rounded-full font-medium transition-colors shadow-soft"
          >
            Request Custom Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
