import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Itinerary } from "@/components/Itinerary";
import { DressCode } from "@/components/DressCode";
import { HotelRecommendations } from "@/components/HotelRecommendations";
import { RsvpForm } from "@/components/RsvpForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <DressCode />
      <Itinerary />
      <HotelRecommendations />
      <RsvpForm />
    </div>
  );
};

export default Index;
