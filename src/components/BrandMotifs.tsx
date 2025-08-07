'use client';

import { motion } from 'framer-motion';

interface BrandMotifProps {
  type: 'ahodden' | 'asanka' | 'tapoli';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export default function BrandMotif({ type, size = 'md', className = '', animated = true }: BrandMotifProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const pebbleSize = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  const renderMotif = () => {
    switch (type) {
      case 'ahodden':
        return (
          <div className={`flex flex-col items-center space-y-1 ${sizeClasses[size]}`}>
            {/* Top single pebble */}
            <div className={`${pebbleSize[size]} bg-baobab-olive rounded-full`}></div>
            {/* Two pebbles */}
            <div className="flex space-x-1">
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
            </div>
            {/* Three pebbles */}
            <div className="flex space-x-1">
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
            </div>
          </div>
        );

      case 'asanka':
        return (
          <div className={`flex flex-col items-center space-y-1 ${sizeClasses[size]}`}>
            {/* Top single pebble */}
            <div className={`${pebbleSize[size]} bg-baobab-olive rounded-full`}></div>
            {/* Two pebbles */}
            <div className="flex space-x-1">
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
            </div>
            {/* Three pebbles */}
            <div className="flex space-x-1">
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
            </div>
            {/* Bottom two pebbles */}
            <div className="flex space-x-3">
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
            </div>
          </div>
        );

      case 'tapoli':
        return (
          <div className={`flex flex-col items-center space-y-1 ${sizeClasses[size]}`}>
            {/* Top three pebbles */}
            <div className="flex space-x-1">
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
            </div>
            {/* Two pebbles */}
            <div className="flex space-x-1">
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
            </div>
            {/* Center single pebble */}
            <div className={`${pebbleSize[size]} bg-baobab-olive rounded-full`}></div>
            {/* Two pebbles */}
            <div className="flex space-x-1">
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-yellow rounded-full`}></div>
            </div>
            {/* Bottom three pebbles */}
            <div className="flex space-x-1">
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
              <div className={`${pebbleSize[size]} bg-baobab-green rounded-full`}></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const Wrapper = animated ? motion.div : 'div';

  return (
    <Wrapper
      className={className}
      animate={animated ? { y: [0, -5, 0] } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {renderMotif()}
    </Wrapper>
  );
} 