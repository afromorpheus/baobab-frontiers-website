'use client';

import { motion } from 'framer-motion';
import { 
  Leaf, 
  Users, 
  TrendingUp, 
  Heart,
  Shield,
  Globe
} from 'lucide-react';

const impacts = [
  {
    icon: Leaf,
    title: "SUSTAINABLE FARMING",
    description: "We promote sustainable agricultural practices that protect the environment and ensure long-term productivity.",
    color: "bg-[#F3EE33]/20",
    iconColor: "text-[#756E33]"
  },
  {
    icon: Users,
    title: "FARMER EMPOWERMENT",
    description: "By connecting farmers directly to markets, we help them earn better prices and improve their livelihoods.",
    color: "bg-[#007628]/20",
    iconColor: "text-[#007628]"
  },
  {
    icon: TrendingUp,
    title: "MARKET ACCESS",
    description: "We bridge the gap between rural farmers and urban markets, creating opportunities for growth.",
    color: "bg-[#D09229]/20",
    iconColor: "text-[#D09229]"
  },
  {
    icon: Heart,
    title: "COMMUNITY DEVELOPMENT",
    description: "Our success is tied to the success of the farming communities we work with.",
    color: "bg-[#756E33]/20",
    iconColor: "text-[#756E33]"
  },
  {
    icon: Shield,
    title: "QUALITY STANDARDS",
    description: "We help farmers meet international quality standards, opening up new market opportunities.",
    color: "bg-[#A3B3B5]/20",
    iconColor: "text-[#A3B3B5]"
  },
  {
    icon: Globe,
    title: "GLOBAL REACH",
    description: "We connect Ghanaian farmers to global markets, showcasing the quality of local produce.",
    color: "bg-[#F3EE33]/20",
    iconColor: "text-[#756E33]"
  }
];

export default function SupportingLocalAgriculture() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              src="/Brand-Motif-Tapoli-Alt.svg"
              alt="Tapoli Brand Motif"
              className="h-24 w-auto"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-4">
            SUPPORTING LOCAL AGRICULTURE
          </h2>

          {/* Section Description */}
          <p className="text-lg text-[#525252] leading-relaxed font-nunito-light mb-8">
            We&apos;re committed to supporting Ghana&apos;s agricultural sector by connecting local farmers with global markets.
          </p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`p-8 rounded-3xl ${impact.color} h-full card-hover border border-gray-100`}>
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <impact.icon size={32} className={impact.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-kannada-regular text-[#222222] mb-4 leading-tight">
                  {impact.title}
                </h3>

                {/* Description */}
                <p className="text-[#525252] leading-relaxed font-nunito-light">
                  {impact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="text-center">
            <h3 className="text-2xl font-kannada-bold text-[#222222] mb-4">
              &ldquo;Quality from the Source&rdquo;
            </h3>
            <p className="text-lg text-[#525252] font-nunito-light">
              &ldquo;We believe in the power of local agriculture to feed the world&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-[#007628] font-nunito-light">Scroll</span>
            <div className="w-0.5 h-6 bg-[#007628]"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 