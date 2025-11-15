import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6">
            Visit <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience our creations at our Delhi boutique or place a custom
            order for your special occasion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-elegant animate-in fade-in slide-in-from-left duration-1000 delay-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-border/50 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-border/50 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="border-border/50 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occasion" className="text-foreground">
                    Occasion
                  </Label>
                  <Input
                    id="occasion"
                    placeholder="Wedding, Birthday, Anniversary, etc."
                    className="border-border/50 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your vision..."
                    className="min-h-[120px] border-border/50 focus:border-accent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                  size="lg"
                >
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <Card className="border-border/50 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      Our Boutique
                    </h3>
                    <p className="text-muted-foreground">
                      42 MG Road, Connaught Place
                      <br />
                      New Delhi, India 110001
                      <br />
                      Near Rajiv Chowk Metro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">
                      +91 11 4567 8900
                      <br />
                      Available during business hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      contact@royaldelights.in
                      <br />
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      Opening Hours
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>
                        <span className="font-medium text-foreground">
                          Monday - Friday:
                        </span>{" "}
                        8:00 AM - 8:00 PM
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          Saturday - Sunday:
                        </span>{" "}
                        9:00 AM - 9:00 PM
                      </p>
                      <p className="text-sm mt-2">Closed on public holidays</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Card className="border-border/50 shadow-elegant overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">
                  Map integration available
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
