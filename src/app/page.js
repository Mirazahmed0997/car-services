import Image from "next/image";
import ServicesSection from "./Components/ServicesSection";
import HeroBanner from "./Components/HeroBanner";
import Banner from "./Components/Banner";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
    </div>
  );
}
