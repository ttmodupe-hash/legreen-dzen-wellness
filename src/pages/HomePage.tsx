import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Licences from '../components/Licences';
import BookingForm from '../components/BookingForm';
import ReorderForm from '../components/ReorderForm';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AgeGate from '../components/AgeGate';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AgeGate />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Licences />
      <BookingForm />
      <ReorderForm />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
