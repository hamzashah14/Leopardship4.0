import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeatureSection';
import PastEvents from '../components/PastEvents';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <PastEvents />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;
