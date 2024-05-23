import AboutUs from "@/components/ui/homepage/AboutUs/AboutUs";
import HeroSection from "@/components/ui/homepage/HeroSection/HeroSection";
import SearchDonor from "@/components/ui/homepage/SearchDonor/SearchDonor";
import { Button } from "@mui/material";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <SearchDonor />
    </>
  );
}
