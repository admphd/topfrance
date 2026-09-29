import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstagramFeedSection } from './components/InstagramFeedSection';
import { BrandPillars } from './components/BrandPillars';
import { ServicesSection } from './components/ServicesSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { SymptomChecker } from './components/SymptomChecker';
import { WhyTopFrance } from './components/WhyTopFrance';
import { LocationContact } from './components/LocationContact';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuickBookingModal } from './components/QuickBookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [selectedBrandForModal, setSelectedBrandForModal] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string, brandName?: string) => {
    setSelectedServiceForModal(serviceName);
    setSelectedBrandForModal(brandName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedServiceForModal(undefined);
    setSelectedBrandForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <BrandPillars onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <InstagramFeedSection />
        <GoogleReviewsSection />
        <SymptomChecker />
        <WhyTopFrance />
        <LocationContact onOpenBooking={() => handleOpenBooking()} />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive WhatsApp Booking / Quote Modal */}
      <QuickBookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForModal}
        initialBrand={selectedBrandForModal}
      />

      {/* Discrete Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
