import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import CafeMap from '../components/CafeMap';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      toast.success('Your message has been sent! We\'ll get back to you soon.');
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-cream font-bold mb-4">Contact Us</h1>
          <p className="text-cream-light text-xl max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with questions, feedback, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="mb-6">Get In Touch</h2>
              <p className="mb-8">
                Have a question, suggestion, or just want to say hello? We're here to help and would love to hear from you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <address className="not-italic text-brown">
                      123 Coffee Street<br />
                      Seattle, WA 98101<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-brown">
                      <a href="tel:+12065551234" className="hover:text-accent transition-colors duration-300">
                        (206) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-brown">
                      <a href="mailto:info@brewhaven.com" className="hover:text-accent transition-colors duration-300">
                        info@brewhaven.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Hours</h3>
                    <div className="text-brown">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 9:00 PM</p>
                      <p>Sunday: 8:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-cream-dark/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <p className="mb-4">
                  Stay connected with us on social media for updates, events, and behind-the-scenes content.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-brown hover:text-accent transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-brown hover:text-accent transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-brown hover:text-accent transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="label">Name*</label>
                      <input
                        id="name"
                        type="text"
                        className={`input ${errors.name ? 'border-error' : ''}`}
                        placeholder="Your name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="label">Email*</label>
                      <input
                        id="email"
                        type="email"
                        className={`input ${errors.email ? 'border-error' : ''}`}
                        placeholder="Your email address"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="label">Subject*</label>
                    <input
                      id="subject"
                      type="text"
                      className={`input ${errors.subject ? 'border-error' : ''}`}
                      placeholder="Message subject"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-error">{errors.subject.message}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="label">Message*</label>
                    <textarea
                      id="message"
                      rows={6}
                      className={`input ${errors.message ? 'border-error' : ''}`}
                      placeholder="Your message"
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters long"
                        }
                      })}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-error">{errors.message.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary flex items-center justify-center gap-2 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <CafeMap />
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream-light">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p>Find answers to some of our most commonly asked questions</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "Do you offer Wi-Fi?",
                answer: "Yes, we offer complimentary high-speed Wi-Fi for all our customers. Simply ask our staff for the current password."
              },
              {
                question: "Can I bring my pet?",
                answer: "We welcome well-behaved pets in our outdoor seating area. Service animals are welcome throughout our café in accordance with ADA regulations."
              },
              {
                question: "Do you have gluten-free or vegan options?",
                answer: "Yes! We offer a variety of gluten-free and vegan food and beverage options. These items are clearly marked on our menu, but please inform our staff about any allergies or dietary restrictions."
              },
              {
                question: "Can I book the café for a private event?",
                answer: "Absolutely! We offer private event bookings for special occasions, meetings, or gatherings. Please contact us at events@brewhaven.com for more information about availability and pricing."
              },
              {
                question: "Do you sell your coffee beans?",
                answer: "Yes, we sell our freshly roasted coffee beans by the bag. You can purchase them in-store or order online for delivery."
              }
            ].map((faq, index) => (
              <details 
                key={index} 
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium text-lg flex justify-between items-center">
                  {faq.question}
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 py-4 border-t border-cream-dark">
                  <p className="text-brown">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="section-padding bg-brown text-cream-light">
        <div className="container max-w-3xl text-center">
          <h2 className="text-cream mb-6">Join Our Team</h2>
          <p className="mb-8 text-cream-dark">
            Passionate about coffee and community? We're always looking for talented individuals to join the Brew Haven family. Check out our current openings or send us your resume.
          </p>
          <a 
            href="#" 
            className="btn bg-cream text-brown hover:bg-cream-dark"
            onClick={(e) => {
              e.preventDefault();
              alert('In a real application, this would link to a careers page');
            }}
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;