import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Filter } from 'lucide-react';
import { eventsData } from '../data/eventsData';

// Define the types
type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
};

const Events: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'music', name: 'Music' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'tasting', name: 'Tastings' },
    { id: 'community', name: 'Community' },
  ];
  
  const filteredEvents = eventsData.filter((event) => 
    activeCategory === 'all' || event.category === activeCategory
  );

  return (
    <div>
      {/* Events Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-cream font-bold mb-4">Events & Happenings</h1>
          <p className="text-cream-light text-xl max-w-2xl mx-auto">
            Join us for special events, live music, workshops, and community gatherings
          </p>
        </div>
      </section>

      {/* Events Filter & Listing */}
      <section className="section-padding bg-cream">
        <div className="container">
          {/* Filter */}
          <div className="mb-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2>Upcoming Events</h2>
              
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-brown" />
                <span className="text-brown">Filter by:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                        activeCategory === category.id
                          ? 'bg-brown text-cream'
                          : 'bg-cream-dark text-brown hover:bg-brown-light hover:text-cream-light'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Events List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div key={event.id} className="card overflow-hidden flex flex-col md:flex-row group">
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 bg-cream-dark text-brown-dark rounded-full text-xs font-medium">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-brown">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-brown">
                        <Clock size={16} className="mr-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-brown">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-brown mb-4 line-clamp-2">{event.description}</p>
                    
                    <button
                      className="text-accent font-medium hover:text-accent-dark transition-colors duration-300"
                      onClick={() => alert(`In a real application, this would open details for: ${event.title}`)}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-lg text-brown">No events match your current filter. Please try a different category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Special Series Section */}
      <section className="section-padding bg-cream-light">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="mb-4">Event Series</h2>
            <p className="max-w-2xl mx-auto">
              Our recurring event series bring together our community for shared experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Coffee Masterclass",
                schedule: "First Saturday of Every Month",
                image: "https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Learn the art and science of brewing perfect coffee with our expert baristas. Each month features a different brewing method or coffee origin."
              },
              {
                title: "Acoustic Nights",
                schedule: "Every Friday, 7-9 PM",
                image: "https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Enjoy live acoustic performances from local musicians in our intimate café setting, creating the perfect end to your week."
              },
              {
                title: "Community Book Club",
                schedule: "Last Tuesday of Every Month",
                image: "https://images.pexels.com/photos/5834425/pexels-photo-5834425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Join fellow book lovers for thoughtful discussions, delicious coffee, and literary connections. New members always welcome!"
              }
            ].map((series, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={series.image} 
                    alt={series.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{series.title}</h3>
                  <p className="text-accent text-sm mb-3">{series.schedule}</p>
                  <p className="text-brown mb-4">{series.description}</p>
                  <button
                    className="text-accent font-medium hover:text-accent-dark transition-colors duration-300"
                    onClick={() => alert(`In a real application, this would show the schedule for: ${series.title}`)}
                  >
                    View Schedule →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Your Own Event */}
      <section className="section-padding bg-brown text-cream-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-cream mb-6">Host Your Own Event</h2>
              <p className="text-cream-dark mb-4">
                Looking for a unique venue for your next gathering? Brew Haven offers a warm, inviting space for private events of all kinds.
              </p>
              <p className="text-cream-dark mb-6">
                From birthday celebrations to corporate meetings, our team will work with you to create a memorable experience tailored to your needs.
              </p>
              <ul className="space-y-3 mb-8 text-cream-dark">
                <li className="flex items-start">
                  <span className="text-accent-light mr-2">✓</span>
                  <span>Private or semi-private space options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-light mr-2">✓</span>
                  <span>Custom food and beverage packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-light mr-2">✓</span>
                  <span>AV equipment available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-light mr-2">✓</span>
                  <span>Flexible setup options</span>
                </li>
              </ul>
              <button
                className="btn bg-cream text-brown hover:bg-cream-dark"
                onClick={() => alert('In a real application, this would open an event inquiry form')}
              >
                Inquire About Hosting
              </button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Private event space" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-cream">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-4">Stay Updated</h2>
          <p className="mb-8">
            Subscribe to our newsletter to be the first to know about upcoming events, special promotions, and café news.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to our newsletter!');
              e.currentTarget.reset();
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-grow"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Events;