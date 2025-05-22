import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock, MapPin, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brown-dark/70"></div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-cream font-bold mb-4 animate-slideUp">
            Welcome to Brew Haven
          </h1>
          <p className="text-cream-light text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-slideUp">
            Where every cup tells a story and every visit feels like home
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slideUp">
            <Link to="/menu" className="btn btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/reservations" className="btn btn-secondary">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <Coffee size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Coffee</h3>
              <p className="text-brown">
                We source and roast the finest beans from around the world, ensuring every cup is a perfect blend of flavor and aroma.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <Clock size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fresh Daily</h3>
              <p className="text-brown">
                Our pastries and food items are made fresh every morning, using locally sourced ingredients and traditional recipes.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <MapPin size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cozy Atmosphere</h3>
              <p className="text-brown">
                Enjoy your coffee in our warm, inviting space designed for comfort whether you're working, meeting friends, or relaxing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-cream-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barista preparing coffee" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4">Our Story</h2>
              <p className="mb-6">
                Founded in 2018, Brew Haven began with a simple mission: to create a space where quality coffee and community could thrive together. What started as a small corner café has grown into a beloved neighborhood destination.
              </p>
              <p className="mb-6">
                Our team of passionate baristas takes pride in crafting the perfect cup, while our chefs create delicious food pairings that complement our coffee selection.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section-padding bg-menu-pattern bg-fixed bg-cover bg-center">
        <div className="container text-center">
          <div className="bg-cream-light/90 p-8 md:p-12 rounded-lg max-w-3xl mx-auto">
            <h2 className="mb-6">Our Specialties</h2>
            <p className="mb-8">
              From signature espresso drinks to seasonal specialties and house-made pastries, our menu offers something for every taste and occasion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-2 text-accent">Coffee Favorites</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>House Blend</span>
                    <span>$3.50</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cappuccino</span>
                    <span>$4.25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vanilla Latte</span>
                    <span>$4.75</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cold Brew</span>
                    <span>$4.50</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-2 text-accent">Fresh Pastries</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Butter Croissant</span>
                    <span>$3.25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Blueberry Muffin</span>
                    <span>$3.50</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cinnamon Roll</span>
                    <span>$4.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Chocolate Cookie</span>
                    <span>$2.75</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/menu" className="btn btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Upcoming Events</h2>
            <p className="max-w-2xl mx-auto">
              Join us for special events, from live music nights to coffee tasting workshops and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Live Jazz Night",
                date: "June 15, 2025",
                image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Enjoy the smooth sounds of local jazz artists while sipping on your favorite brew."
              },
              {
                title: "Coffee Tasting Workshop",
                date: "June 22, 2025",
                image: "https://images.pexels.com/photos/6400/coffee-smartphone-desk-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Learn about different coffee origins, brewing methods, and flavor profiles with our expert baristas."
              },
              {
                title: "Poetry Reading",
                date: "June 29, 2025",
                image: "https://images.pexels.com/photos/2608495/pexels-photo-2608495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "An evening of words and expression featuring local poets and open mic opportunities."
              }
            ].map((event, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-accent mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-brown mb-4">{event.description}</p>
                  <Link to="/events" className="text-accent font-medium hover:text-accent-dark transition-colors duration-300">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brown text-cream-light text-center">
        <div className="container max-w-3xl">
          <h2 className="text-cream mb-6">Experience Brew Haven Today</h2>
          <p className="mb-8 text-cream-dark">
            Whether you're looking for your morning coffee fix, a cozy spot to work, or a place to gather with friends, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/menu" className="btn bg-cream text-brown hover:bg-cream-dark">
              Explore Our Menu
            </Link>
            <Link to="/reservations" className="btn border-2 border-cream text-cream hover:bg-brown-dark">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;