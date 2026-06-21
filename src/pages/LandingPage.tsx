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

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Qoute/>
      <ProgramStr/>
      <ProgramOut/>
      <EcoSystem/>
      <TutionFee/>
      <Teams/>
      <ExcuteSchools/>
      <NoExcute/>
      <Footer/>
    </>
  );
};

export default LandingPage;