import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatWeOffer from '@/components/WhatWeOffer';
import WhoWeServe from '@/components/WhoWeServe';
import HowItWorks from '@/components/HowItWorks';
import WhyWorkWithUs from '@/components/WhyWorkWithUs';
import SupportingLocalAgriculture from '@/components/SupportingLocalAgriculture';
import LetsTalk from '@/components/LetsTalk';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeOffer />
      <WhoWeServe />
      <HowItWorks />
      <WhyWorkWithUs />
      <SupportingLocalAgriculture />
      <LetsTalk />
      <Footer />
    </main>
  );
}
