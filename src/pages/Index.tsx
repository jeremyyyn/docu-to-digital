import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { AboutUs } from "@/components/AboutUs";
import { Itinerary } from "@/components/Itinerary";
import { DressCode } from "@/components/DressCode";
import { HotelRecommendations } from "@/components/HotelRecommendations";
import { RsvpForm } from "@/components/RsvpForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs />
      <Itinerary />
      <DressCode />
      <HotelRecommendations />
      <RsvpForm />
    </div>
  );
};

export default Index;
