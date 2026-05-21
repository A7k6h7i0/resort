
import SEO from '../../components/common/SEO';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import WhyDewDale from './components/WhyDewDale';
import ExperienceHighlights from './components/ExperienceHighlights';
import RoomsPreview from './components/RoomsPreview';
import ThemePackages from './components/ThemePackages';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
// import PolicySection from '../common/PolicySection';

const HomePage = () => {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Dew Dale Resorts",
    url: "https://dewdaleresorts.online/",
    image: "https://dewdaleresorts.online/images/AboutHeroImage.png",
    telephone: "+91 9434280628",
    email: "dewdale.resorts@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sundergarh Village, Baratang Island",
      addressLocality: "Port Blair",
      addressRegion: "Andaman and Nicobar Islands",
      addressCountry: "IN",
    },
    priceRange: "₹5,990 - ₹6,990",
    amenities: [
      "Eco-friendly accommodation",
      "Restaurant",
      "Wi-Fi",
      "Room service",
      "Hot water",
    ],
    areaServed: "Baratang Island, Andaman and Nicobar Islands",
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dew Dale Resorts | Best Eco Resort in Baratang Island" 
        description="Experience an eco-friendly stay at Dew Dale Resorts in Baratang Island. Enjoy limestone caves, serene nature walks, and exclusive luxury tourism packages in Andaman." 
        keywords="Dew Dale Resorts, Baratang Island, eco resort Andaman, luxury nature tourism, limestone caves" 
        canonical="/"
        image="https://dewdaleresorts.online/images/AboutHeroImage.png"
        type="hotel"
        schemas={[
          hotelSchema,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Dew Dale Resorts",
            url: "https://dewdaleresorts.online/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://dewdaleresorts.online/blog.html?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
        ]}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhyDewDale />
        <ExperienceHighlights />
        <RoomsPreview />
        <ThemePackages />
        <Testimonials />
        <FinalCTA />
      </main>
      {/* <PolicySection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
