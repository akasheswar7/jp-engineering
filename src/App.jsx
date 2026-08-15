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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold text-cyan-400">JP ENGINEERING</h1>
            <p className="text-slate-300 max-w-md text-sm">
              The application encountered a display glitch. Please reload to restore precision HVAC interface.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-cyan-400 text-slate-950 font-bold rounded-lg hover:bg-cyan-300 transition-colors uppercase tracking-wider text-xs"
            >
              RELOAD PAGE
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
