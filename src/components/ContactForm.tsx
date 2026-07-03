import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Calendar, Users, Briefcase, FileSignature, CheckCircle2, Copy, Send } from 'lucide-react';
import { contactDetails, businessAddress } from '../data';
import { PureVegBadge } from './Navbar';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: 'Wedding',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter at least your Name and Phone Number.');
      return;
    }
    
    // Simulate successful client state submission
    setIsSubmitted(true);
  };

  const handleCopyPhone = (phone: string, index: number) => {
    navigator.clipboard.writeText(phone);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const primaryContact = contactDetails[0]; // Sandip Raval

  // Formulate a pre-filled WhatsApp message based on form fields so the client can submit directly to WhatsApp!
  const getWhatsAppLink = () => {
    const text = `Hi Punit Caterers, I'd like a catering quote. 
- Name: ${formData.name || 'N/A'}
- Phone: ${formData.phone || 'N/A'}
- Event Date: ${formData.eventDate || 'N/A'}
- Guest Count: ${formData.guestCount || 'N/A'}
- Event Type: ${formData.eventType}
- Custom Message: ${formData.message || 'None'}`;
    return `https://wa.me/91${primaryContact.phone}?text=${encodeURIComponent(text)}`;
  };

  // Formulate mailto link
  const getMailtoLink = () => {
    const subject = `Catering Quote Enquiry - ${formData.name}`;
    const body = `Hi Punit Caterers,

I would like to request a catering quote for my upcoming event. Here are the details:

- Name: ${formData.name}
- Phone: ${formData.phone}
- Event Date: ${formData.eventDate}
- Number of Guests: ${formData.guestCount}
- Event Type: ${formData.eventType}
- Message: ${formData.message}

Thank you.`;
    return `mailto:siddharthtrived7777@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-gold font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            SECURE YOUR DATE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 leading-tight">
            Let's Co-create Your Feast
          </h2>
          <p className="font-sans text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Reach out directly via phone or WhatsApp, or fill out the event planner form below to receive a personalized quote.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contacts & Map Embed */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-col">
            
            {/* Quick Contacts Card */}
            <div className="bg-gray-50 border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-xs space-y-6">
              <h3 className="font-display font-bold text-xl text-gray-950 flex items-center gap-2">
                <span>Our Contact Partners</span>
              </h3>
              
              <div className="space-y-4">
                {contactDetails.map((contact, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-gray-150 p-4 rounded-xl flex items-center justify-between hover:shadow-xs transition-shadow"
                    id={`contact-item-${idx}`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 bg-brand-red/5 rounded-lg text-brand-red">
                        <Phone className="w-4 h-4 fill-brand-red text-transparent" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono font-bold tracking-wider uppercase text-brand-gold">
                          {idx === 0 ? 'Founder / Coordinator' : idx === 1 ? 'Operations Head' : 'Marketing Executive'}
                        </p>
                        <h4 className="font-display font-semibold text-sm sm:text-base text-gray-950">{contact.name}</h4>
                        <a 
                          href={`tel:+91${contact.phone}`} 
                          className="text-xs sm:text-sm font-sans font-medium text-gray-600 hover:text-brand-red focus:outline-none"
                        >
                          +91 {contact.phoneDisplay}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1.5">
                      <button
                        onClick={() => handleCopyPhone(`+91${contact.phone}`, idx)}
                        className="p-1.5 bg-gray-50 text-gray-400 hover:text-brand-red hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                        title="Copy Number"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      
                      <a
                        href={`https://wa.me/91${contact.phone}?text=Hi,%20I'd%20like%20a%20catering%20quote`}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="p-1.5 bg-green-50 text-green-500 hover:bg-green-100 rounded-lg transition-colors"
                        title="WhatsApp Direct Chat"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-green-500 text-transparent" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Physical Address */}
              <div className="flex space-x-3.5 items-start pt-2 border-t border-gray-200/60">
                <div className="p-2.5 bg-brand-sage-light rounded-lg text-brand-sage shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-gray-950">Isanpur, Ahmedabad Office</h4>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    {businessAddress.line1}, {businessAddress.line2}, {businessAddress.city} - {businessAddress.pincode}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed container */}
            <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-4 space-y-3" id="map-embed-container">
              <div className="flex justify-between items-center px-1">
                <span className="text-xs font-mono font-bold tracking-wider text-brand-gold uppercase">OFFICE ROUTING MAP</span>
                <span className="text-[10px] text-green-700 bg-green-50 border border-green-100 rounded-md px-1.5 py-0.5 font-bold flex items-center gap-1">
                  <PureVegBadge className="w-2.5 h-2.5" /> Ahmedabad
                </span>
              </div>
              
              {/* Actual Google Map Embed targeting Paras Nagar, Isanpur, Ahmedabad */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                <iframe 
                  title="Punit Caterers Location Ahmedabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m3!1d3673.5358742218084!2d72.60232471500366!3d22.967332284981105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCbDU4JzAyLjQiTiA3MsKwMzYnMTYuMyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  id="google-maps-iframe"
                ></iframe>
              </div>
              
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(businessAddress.full)}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full text-center block bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2.5 rounded-xl transition-all"
                id="maps-redirect-btn"
              >
                Open in Google Maps Application
              </a>
            </div>

          </div>

          {/* Right Column: Enquiry Form Card */}
          <div className="lg:col-span-7" id="contact-form-col">
            
            <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-10 relative overflow-hidden">
              {/* Luxury Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-red via-brand-gold to-brand-sage"></div>

              {isSubmitted ? (
                /* Success Screen state */
                <div className="text-center py-12 px-4 space-y-6" id="form-success-card">
                  <div className="p-3 bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-[#388E3C] border border-green-200">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-gray-950">Thank you, {formData.name}!</h3>
                    <p className="font-sans text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Your event details have been successfully prepared. Founder <strong className="text-brand-red font-semibold">{primaryContact.name}</strong> and our planning experts will reach out to you within 24 hours to present a tailored quote.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 max-w-sm mx-auto space-y-3">
                    <p className="text-xs text-brand-gold font-mono font-bold uppercase tracking-wider">CHOOSE DIRECT SUBMISSION CHANNEL</p>
                    
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all"
                    >
                      <MessageSquare className="w-5 h-5 fill-white text-transparent" />
                      <span>Send via WhatsApp Direct</span>
                    </a>

                    <a
                      href={getMailtoLink()}
                      className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Send via Email Client</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          eventDate: '',
                          guestCount: '',
                          eventType: 'Wedding',
                          message: ''
                        });
                      }}
                      className="text-xs text-gray-400 hover:text-brand-red transition-colors pt-2 block mx-auto focus:outline-none"
                    >
                      Fill another planning enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5" id="enquiry-catering-form">
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-950">Event Catering Planner</h3>
                    <p className="text-xs text-gray-500 font-sans">Fill out details below to build your customized vegetarian layout.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="form-name" className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                        <FileSignature className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Your Full Name *</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        required
                        placeholder="e.g. Siddharth Patel"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold bg-gray-50/20"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label htmlFor="form-phone" className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        required
                        placeholder="e.g. 98765-XXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold bg-gray-50/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Date */}
                    <div className="space-y-1">
                      <label htmlFor="form-date" className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Event Date</span>
                      </label>
                      <input
                        type="date"
                        id="form-date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold bg-gray-50/20"
                      />
                    </div>

                    {/* Number of Guests */}
                    <div className="space-y-1">
                      <label htmlFor="form-guests" className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Number of Guests</span>
                      </label>
                      <input
                        type="number"
                        id="form-guests"
                        name="guestCount"
                        placeholder="e.g. 250"
                        min="20"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold bg-gray-50/20"
                      />
                    </div>
                  </div>

                  {/* Event Type Dropdown */}
                  <div className="space-y-1">
                    <label htmlFor="form-type" className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Event Type</span>
                    </label>
                    <select
                      id="form-type"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold bg-white"
                    >
                      <option value="Wedding">Wedding / Reception Ceremony</option>
                      <option value="Birthday">Birthday Celebration</option>
                      <option value="Corporate">Corporate Seminar & Banquet</option>
                      <option value="Religious">Religious Puja / Kathiyawadi Milan</option>
                      <option value="Other">Other Social Gathering</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="form-message" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                      Your Custom Menu Requests & Special Instructions
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      placeholder="List any special dishes from our explorer, Jain/Swaminarayan requests, or location specifications..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold bg-gray-50/20"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm flex items-center justify-center space-x-2"
                    id="enquiry-submit-btn"
                  >
                    <span>Proceed with Planning Quote</span>
                  </button>

                  <div className="text-center pt-2">
                    <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                      * By submitting, your quote details are prepared offline. Direct WhatsApp links or email options are unlocked next to safely forward your choices.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
