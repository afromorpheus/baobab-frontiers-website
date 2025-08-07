'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Handshake, 
  Truck, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "SOURCING & VETTING",
    description: "We identify and vet reliable farmers and aggregators in Ghana's top maize-growing regions.",
    color: "bg-[#F3EE33]/20",
    iconColor: "text-[#756E33]"
  },
  {
    icon: Handshake,
    title: "QUALITY ASSURANCE",
    description: "Every batch is tested for moisture content and aflatoxin levels before acceptance.",
    color: "bg-[#007628]/20",
    iconColor: "text-[#007628]"
  },
  {
    icon: Truck,
    title: "AGGREGATION & DELIVERY",
    description: "We coordinate pickups, storage, and timely delivery to your specified location.",
    color: "bg-[#D09229]/20",
    iconColor: "text-[#D09229]"
  },
  {
    icon: CheckCircle,
    title: "ONGOING SUPPORT",
    description: "We maintain relationships with suppliers to ensure consistent quality and supply.",
    color: "bg-[#756E33]/20",
    iconColor: "text-[#756E33]"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
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
            className="mx-auto w-24 h-24 bg-[#D09229]/20 rounded-3xl flex items-center justify-center mb-4"
          >
            <div className="w-12 h-12 bg-[#007628] rounded-2xl flex items-center justify-center">
              <div className="w-6 h-6 bg-[#F3EE33] rounded-xl"></div>
            </div>
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-4">
            HOW IT WORKS
          </h2>

          {/* Section Description */}
          <p className="max-w-3xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light">
            Our streamlined process ensures you get quality yellow maize when you need it, 
            with full transparency at every step.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#007628] text-white rounded-2xl flex items-center justify-center font-kannada-bold text-sm">
                {index + 1}
              </div>

              <div className={`p-8 rounded-3xl ${step.color} h-full card-hover border border-gray-100`}>
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <step.icon size={32} className={step.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-kannada-regular text-[#222222] mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#525252] leading-relaxed font-nunito-light">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight size={24} className="text-[#007628]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#525252] font-nunito-light mb-4">
            Ready to experience our streamlined sourcing process?
          </p>
          <button className="px-8 py-4 bg-[#F3EE33] text-[#222222] rounded-full hover:bg-[#D09229] transition-colors font-kannada-regular text-lg">
            START SOURCING NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
} 