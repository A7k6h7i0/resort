import { Suspense } from "react";
import SEO from "../../components/common/SEO";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import PackageGrid from "./components/PackageGrid";
import RoomTariff from "./components/RoomTariff";
import Facilities from "./components/Facilities";
import OtherIslandPackageGrid from "./components/OtherIslandPackageGrid";

const PackagesPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SEO 
        title="Best Tour Packages in Andaman | Dew Dale Resorts" 
        description="View our exclusive Andaman and Baratang Island tour packages. Discover Parrot Island, mud volcanoes, and majestic limestone caves with expert guides." 
        keywords="Andaman tour packages, Baratang Island tour, Dew Dale Resorts packages, limestone caves tour" 
        canonical="/packages"
        image="https://dewdaleresorts.online/images/8.jpeg"
        type="article"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Dew Dale Resorts",
            url: "https://dewdaleresorts.online/packages",
            image: "https://dewdaleresorts.online/images/8.jpeg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sundergarh Village, Baratang Island",
              addressLocality: "Port Blair",
              addressRegion: "Andaman and Nicobar Islands",
              addressCountry: "IN",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Dew Dale Resorts Packages",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Baratang island tours" },
              { "@type": "ListItem", position: 2, name: "Island packages" },
              { "@type": "ListItem", position: 3, name: "Room tariff" },
            ],
          },
        ]}
      />
      <Navbar />
      <HeroSection />

      <PackageGrid />
      <OtherIslandPackageGrid />
      <RoomTariff />
      <Facilities />
      <Footer />
    </Suspense>
  );
};

export default PackagesPage;
