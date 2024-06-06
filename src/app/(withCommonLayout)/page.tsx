import AboutUs from "@/components/ui/homepage/AboutUs/AboutUs";
import Coverages from "@/components/ui/homepage/Coverages/Coverages";
import HeroSection from "@/components/ui/homepage/HeroSection/HeroSection";
import OurImpact from "@/components/ui/homepage/OurImpact/OurImpact";
import Query from "@/components/ui/homepage/Query/Query";
import SearchDonor from "@/components/ui/homepage/SearchDonor/SearchDonor";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Query />
      <AboutUs />
      <SearchDonor />
      <OurImpact />
      <Coverages />
    </>
  );
}

export default HomePage
