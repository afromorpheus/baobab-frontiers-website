'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Send,
  ArrowRight
} from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WHATSAPP",
    description: "Quick responses for urgent inquiries",
    contact: "+233 XX XXX XXXX",
    color: "bg-[#F3EE33]/20",
    iconColor: "text-[#756E33]"
  },
  {
    icon: Phone,
    title: "PHONE",
    description: "Direct conversation for complex discussions",
    contact: "+233 XX XXX XXXX",
    color: "bg-[#007628]/20",
    iconColor: "text-[#007628]"
  },
  {
    icon: Mail,
    title: "EMAIL",
    description: "Detailed proposals and documentation",
    contact: "hello@baobabfrontiers.com",
    color: "bg-[#D09229]/20",
    iconColor: "text-[#D09229]"
  },
  {
    icon: MapPin,
    title: "OFFICE",
    description: "Visit us for face-to-face meetings",
    contact: "Accra, Ghana",
    color: "bg-[#756E33]/20",
    iconColor: "text-[#756E33]"
  }
];

export default function LetsTalk() {
  return (
    <section id="lets-talk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 flex justify-center"
          >
            <img
              src="/Brand-Motif-Ahoden-Alt.svg"
              alt="Ahoden Brand Motif"
              className="h-36 w-auto"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-4">
            LET'S TALK
          </h2>

          {/* Section Description */}
          <p className="max-w-3xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light">
            Ready to source quality yellow maize for your business? 
            Get in touch and let's discuss how we can help meet your needs.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`p-6 rounded-3xl ${method.color} h-full card-hover border border-gray-100 text-center`}>
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow mx-auto">
                  <method.icon size={24} className={method.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-kannada-regular text-[#222222] mb-2">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#525252] font-nunito-light mb-3">
                  {method.description}
                </p>

                {/* Contact Info */}
                <p className="text-[#007628] font-nunito-light font-medium">
                  {method.contact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#F3EE33]/10 to-[#007628]/10 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-kannada-regular text-[#222222] mb-4 text-center">
              SEND US A MESSAGE
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-nunito-light text-[#525252] mb-2">NAME</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-nunito-light text-[#525252] mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-nunito-light text-[#525252] mb-2">COMPANY</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-nunito-light text-[#525252] mb-2">MESSAGE</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#007628] focus:border-transparent font-nunito-light resize-none"
                  placeholder="Tell us about your maize sourcing needs..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="group flex items-center justify-center space-x-2 px-8 py-4 bg-[#007628] text-white rounded-full hover:bg-[#756E33] transition-all duration-300 font-kannada-regular text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>SEND MESSAGE</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 