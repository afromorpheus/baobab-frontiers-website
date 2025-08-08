'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Shield, 
  Users,
  TrendingUp,
  Heart
} from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "PROVEN TRACK RECORD",
    description: "Years of experience connecting quality suppliers with reliable buyers across Ghana.",
    color: "bg-[#F3EE33]/20",
    iconColor: "text-[#756E33]"
  },
  {
    icon: Clock,
    title: "TIMELY DELIVERY",
    description: "We understand the importance of meeting deadlines in the agricultural supply chain.",
    color: "bg-[#007628]/20",
    iconColor: "text-[#007628]"
  },
  {
    icon: Shield,
    title: "QUALITY GUARANTEE",
    description: "Every batch is tested and verified to meet your specific quality requirements.",
    color: "bg-[#D09229]/20",
    iconColor: "text-[#D09229]"
  },
  {
    icon: Users,
    title: "TRUSTED NETWORK",
    description: "We work with carefully vetted farmers and aggregators who share our commitment to quality.",
    color: "bg-[#756E33]/20",
    iconColor: "text-[#756E33]"
  },
  {
    icon: TrendingUp,
    title: "COMPETITIVE PRICING",
    description: "Our efficient operations and strong supplier relationships help keep costs competitive.",
    color: "bg-[#A3B3B5]/20",
    iconColor: "text-[#A3B3B5]"
  },
  {
    icon: Heart,
    title: "COMMUNITY IMPACT",
    description: "We support local farmers and contribute to sustainable agricultural development in Ghana.",
    color: "bg-[#F3EE33]/20",
    iconColor: "text-[#756E33]"
  }
];

export default function WhyWorkWithUs() {
  return (
    <section id="why-work-with-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
              src="/Brand-Motif-Asanka-Alt.svg"
              alt="Asanka Brand Motif"
              className="h-36 w-auto"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-4">
            WHY WORK WITH US
          </h2>

          {/* Section Description */}
          <p className="max-w-3xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light">
            We're not just another supplier. We're your trusted partner in sourcing quality yellow maize, 
            with a commitment to excellence that goes beyond the transaction.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`p-8 rounded-3xl ${benefit.color} h-full card-hover border border-gray-100`}>
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <benefit.icon size={32} className={benefit.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-kannada-regular text-[#222222] mb-4 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[#525252] leading-relaxed font-nunito-light">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 