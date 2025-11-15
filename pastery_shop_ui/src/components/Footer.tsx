import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Royal Delights Patisserie
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting exquisite pastries and cakes with world-class artistry
              and premium ingredients since 2010.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <p>
                  42 MG Road, Connaught Place
                  <br />
                  New Delhi, India 110001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <p>+91 11 4567 8900</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <p>contact@royaldelights.in</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Monday - Friday</p>
                  <p>8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-foreground">
                    Saturday - Sunday
                  </p>
                  <p>9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Royal Delights Patisserie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
