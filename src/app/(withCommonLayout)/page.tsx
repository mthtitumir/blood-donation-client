import AboutUs from "@/components/ui/homepage/AboutUs/AboutUs";
import HeroSection from "@/components/ui/homepage/HeroSection/HeroSection";
import OurImpact from "@/components/ui/homepage/OurImpact/OurImpact";
import Query from "@/components/ui/homepage/Query/Query";
import SearchDonor from "@/components/ui/homepage/SearchDonor/SearchDonor";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Query />
      <SearchDonor />
      <OurImpact />
    </>
  );
}
