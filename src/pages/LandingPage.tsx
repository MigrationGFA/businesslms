import { useState } from "react";
import HeroSection from "../componenets/HeroSection";
import Qoute from "../componenets/Qoute";
import ProgramStr from "../componenets/ProgramStr";
import ProgramOut from "../componenets/ProgramOut";
import EcoSystem from "../componenets/EcoSystem";
import TutionFee from "../componenets/TutionFee";
import Teams from "../componenets/Teams";
import ExcuteSchools from "../componenets/ExcuteSchools";
import NoExcute from "../componenets/NoExcute";
import Footer from "../componenets/Footer";
import BrochureModal from "../componenets/BrochureModal";
import ApplicationModal from "../componenets/ApplicationModal";

const LandingPage = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  return (
    <>
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />
      <HeroSection
        onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
        onOpenApplicationModal={() => {
          console.log("Apply clicked from somewhere, opening modal");
          setIsApplicationModalOpen(true);
        }}
      />
      <Qoute />
      <ProgramStr />
      <ProgramOut />
      <EcoSystem />
      <TutionFee
        onOpenApplicationModal={() => setIsApplicationModalOpen(true)}
      />
      <Teams />
      <ExcuteSchools />
      <NoExcute />
      <Footer />
    </>
  );
};

export default LandingPage;
