import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Coffee, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would handle the newsletter signup here
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-brown-dark text-cream-light">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Coffee size={24} />
              <span className="font-serif font-bold text-xl">Brew Haven</span>
            </Link>
            <p className="text-cream-dark mb-4 text-sm">
              A cozy spot where coffee meets community. We serve handcrafted beverages and delicious treats in a warm, welcoming atmosphere.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-cream hover:text-accent-light transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream hover:text-accent-light transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream hover:text-accent-light transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@brewhaven.com" className="text-cream hover:text-accent-light transition-colors duration-300" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'Reservations', 'About', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : item.toLowerCase()} 
                    className="text-cream-dark hover:text-accent-light transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-cream">Contact Us</h4>
            <address className="not-italic text-cream-dark">
              <p className="mb-2">123 Coffee Street</p>
              <p className="mb-2">Seattle, WA 98101</p>
              <p className="mb-2">
                <a href="tel:+12065551234" className="hover:text-accent-light transition-colors duration-300">
                  (206) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@brewhaven.com" className="hover:text-accent-light transition-colors duration-300">
                  info@brewhaven.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-cream">Newsletter</h4>
            <p className="text-cream-dark mb-4 text-sm">
              Subscribe to our newsletter for updates on events, new menu items, and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-brown text-cream-light border border-cream-dark rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent-light w-full"
                required
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white px-3 py-2 rounded-r-md transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream-dark mt-8 pt-6 text-center text-cream-dark">
          <p>&copy; {currentYear} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;