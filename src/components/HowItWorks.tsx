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
    <section id="how-it-works" className="py-20 bg-[#D9EAD3]">
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
              src="/Brand-Motif-Ahoden-New.svg"
              alt="Ahoden Brand Motif"
              className="h-24 w-auto"
            />
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

        {/* Horizontal Slider Container */}
        <div className="relative w-full overflow-x-auto scrollbar-hide py-16">
          {/* Cards Container */}
          <div className="flex gap-2 pl-4 pr-4" style={{ minHeight: '450px' }}>
            {/* Spacer to prevent first card truncation */}
            <div className="flex-shrink-0 w-8"></div>
            
            {/* Step 1: SOURCING & VETTING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative flex-shrink-0"
              style={{ width: '320px' }}
            >
              <div className="relative w-full h-80">
                {/* Yellow Brand Motif Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/Brand-Motif-Card-Yellow-Organic.svg"
                    alt="Card background motif"
                    className="w-full h-full object-contain scale-125"
                  />
                </div>

                {/* Content Container - Centered within motif */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 max-w-xs">
                    {/* Icon Container - Left Side */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 bg-white rounded-lg flex items-center justify-center"
                        style={{ boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)' }}
                      >
                        <Search size={32} className="text-[#756E33]" />
                      </div>
                    </div>

                    {/* Text Content - Right Side */}
                    <div className="flex-1">
                      <h3 className="text-xl font-kannada-regular text-[#222222] mb-4 leading-tight whitespace-pre-line">
                        SOURCING & VETTING
                      </h3>
                      <p className="text-[#525252] leading-relaxed font-nunito-light">
                        We identify and vet reliable farmers and aggregators in Ghana's top maize-growing regions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2: QUALITY ASSURANCE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative flex-shrink-0"
              style={{ width: '320px' }}
            >
              <div className="relative w-full h-80">
                {/* Yellow Brand Motif Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/Brand-Motif-Card-Yellow-Organic.svg"
                    alt="Card background motif"
                    className="w-full h-full object-contain scale-125"
                  />
                </div>

                {/* Content Container - Centered within motif */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 max-w-xs">
                    {/* Icon Container - Left Side */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 bg-white rounded-lg flex items-center justify-center"
                        style={{ boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)' }}
                      >
                        <Handshake size={32} className="text-[#007628]" />
                      </div>
                    </div>

                    {/* Text Content - Right Side */}
                    <div className="flex-1">
                      <h3 className="text-xl font-kannada-regular text-[#222222] mb-4 leading-tight whitespace-pre-line">
                        QUALITY ASSURANCE
                      </h3>
                      <p className="text-[#525252] leading-relaxed font-nunito-light">
                        Every batch is tested for moisture content and aflatoxin levels before acceptance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: AGGREGATION & DELIVERY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative flex-shrink-0"
              style={{ width: '320px' }}
            >
              <div className="relative w-full h-80">
                {/* Yellow Brand Motif Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/Brand-Motif-Card-Yellow-Organic.svg"
                    alt="Card background motif"
                    className="w-full h-full object-contain scale-125"
                  />
                </div>

                {/* Content Container - Centered within motif */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 max-w-xs">
                    {/* Icon Container - Left Side */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 bg-white rounded-lg flex items-center justify-center"
                        style={{ boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)' }}
                      >
                        <Truck size={32} className="text-[#D09229]" />
                      </div>
                    </div>

                    {/* Text Content - Right Side */}
                    <div className="flex-1">
                      <h3 className="text-xl font-kannada-regular text-[#222222] mb-4 leading-tight whitespace-pre-line">
                        AGGREGATION & DELIVERY
                      </h3>
                      <p className="text-[#525252] leading-relaxed font-nunito-light">
                        We coordinate pickups, storage, and timely delivery to your specified location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4: ONGOING SUPPORT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative flex-shrink-0"
              style={{ width: '320px' }}
            >
              <div className="relative w-full h-80">
                {/* Yellow Brand Motif Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/Brand-Motif-Card-Yellow-Organic.svg"
                    alt="Card background motif"
                    className="w-full h-full object-contain scale-125"
                  />
                </div>

                {/* Content Container - Centered within motif */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 max-w-xs">
                    {/* Icon Container - Left Side */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 bg-white rounded-lg flex items-center justify-center"
                        style={{ boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)' }}
                      >
                        <CheckCircle size={32} className="text-[#756E33]" />
                      </div>
                    </div>

                    {/* Text Content - Right Side */}
                    <div className="flex-1">
                      <h3 className="text-xl font-kannada-regular text-[#222222] mb-4 leading-tight whitespace-pre-line">
                        ONGOING SUPPORT
                      </h3>
                      <p className="text-[#525252] leading-relaxed font-nunito-light">
                        We maintain relationships with suppliers to ensure consistent quality and supply.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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