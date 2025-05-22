import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Calendar, Clock, Users, X } from 'lucide-react';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests: string;
};

const Reservations: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservationDetails, setReservationDetails] = useState<FormValues | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormValues>();

  // Get today's date in YYYY-MM-DD format for the min date attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 20; hour++) {
      const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
      const ampm = hour < 12 ? 'AM' : 'PM';
      slots.push(`${hourFormatted}:00 ${ampm}`);
      if (hour !== 20) { // Don't add :30 for the last hour
        slots.push(`${hourFormatted}:30 ${ampm}`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setReservationDetails(data);
      setShowConfirmation(true);
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    toast.success('Reservation confirmed!', {
      icon: '🎉',
    });
  };

  return (
    <div>
      {/* Reservations Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-cream font-bold mb-4">Reserve a Table</h1>
          <p className="text-cream-light text-xl max-w-2xl mx-auto">
            Join us for a delightful dining experience in our cozy atmosphere
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="section-padding bg-cream">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <h2 className="mb-4">Make a Reservation</h2>
                <p className="text-brown mb-6">
                  Fill out the form to reserve your table at Brew Haven. We'll confirm your reservation as soon as possible.
                </p>
                
                <div className="bg-cream-dark/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Reservation Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock size={20} className="text-accent mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium">Hours of Operation</h4>
                        <p className="text-sm text-brown">
                          Monday - Friday: 8:00 AM - 9:00 PM<br />
                          Saturday - Sunday: 9:00 AM - 10:00 PM
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users size={20} className="text-accent mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium">Group Size</h4>
                        <p className="text-sm text-brown">
                          For groups larger than 8 people, please call us directly at (206) 555-1234.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar size={20} className="text-accent mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium">Advance Notice</h4>
                        <p className="text-sm text-brown">
                          Reservations can be made up to 30 days in advance. For same-day reservations, please call us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="label">Full Name*</label>
                    <input
                      id="name"
                      type="text"
                      className={`input ${errors.name ? 'border-error' : ''}`}
                      placeholder="Your full name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="label">Email Address*</label>
                    <input
                      id="email"
                      type="email"
                      className={`input ${errors.email ? 'border-error' : ''}`}
                      placeholder="your.email@example.com"
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
                  <label htmlFor="phone" className="label">Phone Number*</label>
                  <input
                    id="phone"
                    type="tel"
                    className={`input ${errors.phone ? 'border-error' : ''}`}
                    placeholder="(xxx) xxx-xxxx"
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                        message: "Invalid phone number"
                      }
                    })}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-error">{errors.phone.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="label">Date*</label>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      className={`input ${errors.date ? 'border-error' : ''}`}
                      {...register("date", { required: "Date is required" })}
                    />
                    {errors.date && <p className="mt-1 text-sm text-error">{errors.date.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="label">Time*</label>
                    <select
                      id="time"
                      className={`input ${errors.time ? 'border-error' : ''}`}
                      {...register("time", { required: "Time is required" })}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.time && <p className="mt-1 text-sm text-error">{errors.time.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="label">Number of Guests*</label>
                    <select
                      id="guests"
                      className={`input ${errors.guests ? 'border-error' : ''}`}
                      {...register("guests", { required: "Number of guests is required" })}
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                    {errors.guests && <p className="mt-1 text-sm text-error">{errors.guests.message}</p>}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="occasion" className="label">Occasion (Optional)</label>
                  <select
                    id="occasion"
                    className="input"
                    {...register("occasion")}
                  >
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business Meeting">Business Meeting</option>
                    <option value="Date">Date</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="specialRequests" className="label">Special Requests (Optional)</label>
                  <textarea
                    id="specialRequests"
                    rows={3}
                    className="input"
                    placeholder="Any special requirements or requests?"
                    {...register("specialRequests")}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Reserve Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events Section */}
      <section className="section-padding bg-cream-light">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="mb-4">Private Events</h2>
            <p className="max-w-2xl mx-auto">
              Looking to host a private event? Brew Haven offers a beautiful space for private parties, corporate events, and special celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Private event space" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Private Room</h3>
              <p className="mb-4">
                Our elegantly designed private room can accommodate up to 30 guests and features its own dedicated staff, custom menu options, and audio-visual equipment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Custom menu planning with our chef</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>AV equipment for presentations or entertainment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Flexible seating arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Dedicated service staff</span>
                </li>
              </ul>
              <a
                href="#"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Private event inquiry form would open here in a real application');
                }}
              >
                Inquire About Private Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && reservationDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4 animate-slideUp">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Reservation Confirmation</h3>
              <button 
                onClick={closeConfirmation}
                className="text-brown-dark hover:text-accent"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="mb-4">Thank you for your reservation! We've received the following details:</p>
              
              <div className="bg-cream-light p-4 rounded-md space-y-2">
                <p><strong>Name:</strong> {reservationDetails.name}</p>
                <p><strong>Date:</strong> {reservationDetails.date}</p>
                <p><strong>Time:</strong> {reservationDetails.time}</p>
                <p><strong>Party Size:</strong> {reservationDetails.guests} {parseInt(reservationDetails.guests.toString()) === 1 ? 'person' : 'people'}</p>
                {reservationDetails.occasion && (
                  <p><strong>Occasion:</strong> {reservationDetails.occasion}</p>
                )}
              </div>
            </div>
            
            <p className="text-sm text-brown mb-4">
              A confirmation email has been sent to {reservationDetails.email}. If you need to make any changes to your reservation, please call us at (206) 555-1234.
            </p>
            
            <button
              onClick={closeConfirmation}
              className="btn btn-primary w-full"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservations;