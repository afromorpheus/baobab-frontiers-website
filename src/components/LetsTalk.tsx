'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WHATSAPP",
    description: "Chat with us instantly",
    contact: "+233504688829",
    brandMotif: "/Brand-Motif-Card-Yellow-Contact-Alt.svg"
  },
  {
    icon: Phone,
    title: "PHONE",
    description: "Call us directly",
    contact: "+233554702390",
    brandMotif: "/Brand-Motif-Card-Yellow-Contact-Alt.svg"
  },
  {
    icon: Mail,
    title: "EMAIL",
    description: "Send us an email",
    contact: "trade@baobabfrontiers.com",
    brandMotif: "/Brand-Motif-Card-Yellow-Contact-Alt.svg"
  },
  {
    icon: MapPin,
    title: "OFFICE",
    description: "Visit our location",
    contact: "Digital Address: GE-207-7979\nAccra, Ghana",
    brandMotif: "/Brand-Motif-Card-Yellow-Contact-Alt.svg"
  }
];

export default function LetsTalk() {
  return (
    <section id="lets-talk" className="py-20 bg-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Section Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 flex justify-center"
          >
            <img
              src="/Brand-Motif-Ahoden-Alt.svg"
              alt="Ahoden Brand Motif"
              className="h-24 w-auto"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-6">
            LET&apos;S TALK
          </h2>

          {/* Section Description */}
          <p className="max-w-2xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light">
            Ready to source quality yellow maize for your business? 
            Get in touch and let&apos;s discuss how we can help meet your needs.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="flex justify-center">
          <div className="flex overflow-x-auto scrollbar-hide gap-0 py-10 px-8 mb-12 max-w-6xl">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex-shrink-0"
                style={{ width: '300px', marginRight: index < contactMethods.length - 1 ? '-30px' : '0' }}
              >
                {/* Brand Motif Background */}
                <div className="relative w-full h-96 md:h-80">
                  {/* Yellow Brand Motif Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/Brand-Motif-Card-Yellow-Contact-Alt.svg"
                      alt="Contact Card Motif"
                      className="w-full h-full object-contain scale-90"
                    />
                  </div>

                  {/* Content Container - Centered within motif */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-sm md:max-w-xs px-8 md:px-4">
                      {/* Icon Container - Left Side */}
                      <div className="flex-shrink-0">
                        <div 
                          className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto"
                          style={{ boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)' }}
                        >
                          <method.icon size={24} className="text-[#876E19]" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[20px] md:text-[18px] font-kannada-regular text-[#222222] mb-2">
                        {method.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[17px] md:text-[15px] text-[#525252] font-nunito-light mb-3">
                        {method.description}
                      </p>

                      {/* Contact Info */}
                      <p className="text-white font-nunito-light font-medium whitespace-pre-line text-[17px] md:text-[15px]">
                        {method.contact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#F5F5DC] p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-kannada-regular text-[#222222] mb-4 text-center">
              SOURCE MAIZE FROM US
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-nunito-light text-[#525252] mb-2">NAME</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-[#D09229]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-nunito-light text-[#525252] mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-[#D09229]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-nunito-light text-[#525252] mb-2">COMPANY</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-[#D09229]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light bg-white"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-nunito-light text-[#525252] mb-2">QUANTITY</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border border-[#D09229]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light bg-white"
                    placeholder="Enter quantity"
                  />
                </div>
                <div>
                  <label className="block text-sm font-nunito-light text-[#525252] mb-2">UNIT</label>
                  <select 
                    className="w-full px-4 py-3 border border-[#D09229]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light bg-white"
                  >
                    <option value="tonnes">Tonnes</option>
                    <option value="kg">Kilograms (kg)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-nunito-light text-[#525252] mb-2">MAIZE TYPE</label>
                <select 
                  className="w-full px-4 py-3 border border-[#D09229]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light bg-white"
                >
                  <option value="">Select maize type</option>
                  <option value="yellow">Yellow Maize</option>
                  <option value="white">White Maize</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-nunito-light text-[#525252] mb-2">MESSAGE</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-[#D09229]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light resize-none bg-white"
                  placeholder="Tell us about your maize sourcing needs..."
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="px-8 py-4 bg-[#F3EE33] text-[#222222] rounded-full hover:bg-[#D09229] transition-colors font-kannada-regular text-lg shadow-lg hover:shadow-xl"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 