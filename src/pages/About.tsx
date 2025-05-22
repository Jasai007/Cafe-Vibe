import React from 'react';
import { Coffee, Award, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* About Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-cream font-bold mb-4">Our Story</h1>
          <p className="text-cream-light text-xl max-w-2xl mx-auto">
            From passion to perfection, discover the journey behind Brew Haven
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">The Brew Haven Journey</h2>
              <p className="mb-4">
                Founded in 2018 by coffee enthusiasts Emily and Mark Johnson, Brew Haven began as a small corner café with a big dream: to create a space where quality coffee and community could thrive together.
              </p>
              <p className="mb-4">
                After years of traveling the world and exploring coffee cultures from Ethiopia to Colombia, the Johnsons returned to Seattle with a vision to create a café that would honor coffee's rich traditions while embracing modern techniques and local flavors.
              </p>
              <p>
                What started as a cozy 12-seat café has now grown into a beloved neighborhood destination, but our commitment to quality, sustainability, and community remains unchanged. Every cup we serve carries the same passion and care as our very first brew.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Café founders" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto">
              At Brew Haven, our core values guide everything we do, from sourcing our beans to serving our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <Coffee size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-brown">
                We never compromise on quality. From our carefully sourced beans to our precision brewing methods, excellence is our standard.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <Heart size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-brown">
                We're committed to environmentally responsible practices, from our compostable packaging to our direct relationships with eco-conscious producers.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <Users size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-brown">
                We believe coffee brings people together. Our café is designed to foster connection, conversation, and community engagement.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <Award size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-brown">
                While respecting tradition, we continuously explore new flavors, techniques, and experiences to delight our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto">
              The passionate people behind every cup and creation at Brew Haven
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Johnson",
                role: "Co-Founder & Head Roaster",
                image: "https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "With over 15 years of experience in specialty coffee, Emily oversees our roasting program and coffee sourcing relationships."
              },
              {
                name: "Mark Johnson",
                role: "Co-Founder & Operations Director",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Mark's background in hospitality management ensures that Brew Haven runs smoothly while maintaining our commitment to quality service."
              },
              {
                name: "Sofia Rodriguez",
                role: "Head Barista",
                image: "https://images.pexels.com/photos/32160350/pexels-photo-32160350/free-photo-of-elegant-portrait-of-a-young-woman-with-braided-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "A certified Q-grader with a passion for latte art, Sofia leads our barista team and training program."
              },
              {
                name: "James Chen",
                role: "Pastry Chef",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Trained in Paris, James creates our delicious pastries and desserts using local, seasonal ingredients."
              },
              {
                name: "Olivia Martinez",
                role: "Community Manager",
                image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Olivia coordinates our events, partnerships, and community initiatives, ensuring Brew Haven remains connected to our neighborhood."
              },
              {
                name: "David Wilson",
                role: "Sustainability Coordinator",
                image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "David leads our environmental initiatives, from waste reduction to working with sustainable suppliers."
              }
            ].map((member, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent text-sm mb-3">{member.role}</p>
                  <p className="text-brown">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="section-padding bg-cream-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/2090899/pexels-photo-2090899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Coffee sourcing" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">Our Coffee Sourcing</h2>
              <p className="mb-4">
                We believe great coffee starts at the source. That's why we maintain direct relationships with farmers in some of the world's finest coffee-growing regions, including Ethiopia, Colombia, Guatemala, and Costa Rica.
              </p>
              <p className="mb-4">
                By paying premium prices for exceptional beans and prioritizing environmentally responsible growing practices, we support both quality and sustainability in our supply chain.
              </p>
              <p className="mb-4">
                Our team travels to origin several times a year to cup new harvests, strengthen relationships, and ensure our coffee meets our exacting standards. We're proud to share the stories of the dedicated farmers behind every bean we roast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-brown text-cream-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-cream mb-4">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-cream-dark">
              The Brew Haven experience through the words of our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Brew Haven isn't just a café, it's my second home. The staff remembers my name and order, and the atmosphere is perfect for both work and relaxation.",
                author: "Sarah M.",
                role: "Freelance Designer"
              },
              {
                quote: "The attention to detail in every cup is remarkable. As a coffee enthusiast, I appreciate their commitment to quality and their willingness to discuss brewing techniques.",
                author: "Michael L.",
                role: "Coffee Blogger"
              },
              {
                quote: "Their community events brought me together with neighbors I might never have met otherwise. Brew Haven truly lives up to its name as a haven for connection.",
                author: "Priya K.",
                role: "Local Resident"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-brown-dark p-6 rounded-lg">
                <p className="italic mb-4 text-cream">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-cream">{testimonial.author}</p>
                  <p className="text-sm text-cream-dark">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-cream">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-6">Join Our Journey</h2>
          <p className="mb-8">
            Whether you're a coffee enthusiast, a community seeker, or simply in need of a cozy spot to enjoy a quality brew, we invite you to become part of the Brew Haven story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn btn-primary">Visit Us Today</a>
            <a href="#" className="btn btn-secondary">Follow Our Story</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;