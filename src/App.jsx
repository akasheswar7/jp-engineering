import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Process from './components/Process';
import HVACCalculator from './components/HVACCalculator';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleOpenConsultation = (category = '') => {
    setSelectedCategory(category);
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Page Layout Sections */}
      <main>
        <Hero onOpenConsultation={() => handleOpenConsultation('General Hero Consultation')} />
        <TrustBar />
        <About onOpenConsultation={() => handleOpenConsultation('About Page Story')} />
        <Solutions onOpenConsultation={(cat) => handleOpenConsultation(cat)} />
        <Industries onOpenConsultation={(cat) => handleOpenConsultation(cat)} />
        <Process onOpenConsultation={(step) => handleOpenConsultation(step)} />
        <HVACCalculator onOpenConsultation={(calcData) => handleOpenConsultation(calcData)} />
        <WhyUs />
        <Reviews />
        <Projects onOpenConsultation={(proj) => handleOpenConsultation(proj)} />
        <CTA onOpenConsultation={(source) => handleOpenConsultation(source)} />
        <Contact defaultSubject={selectedCategory} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation('Footer Quote')} />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        initialCategory={selectedCategory}
      />
    </div>
  );
}
