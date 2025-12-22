import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { GallerySection } from '@/components/GallerySection';
import { VideoSection } from '@/components/VideoSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { EventsSection } from '@/components/EventsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <GallerySection />
      <VideoSection />
      <ReviewsSection />
      <EventsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
