import { useState } from "react";
import AboutHero from "../componenets/AboutHero";
import OurJourney from "../componenets/OurJourney";
import RemsanaDifference from "../componenets/RemsanaDifference";
import AboutFooter from "../componenets/AboutFooter";
import ApplicationModal from "../componenets/ApplicationModal";

const AboutPage = () => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F6FF] flex flex-col justify-between">
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />
      <div>
        {/* Sections */}
           {/* Sections */}
        <main>
          <AboutHero onOpenApplicationModal={() => setIsApplicationModalOpen(true)} />
          <OurJourney />
          <RemsanaDifference />
        </main>
      </div>

      {/* Footer */}
      <AboutFooter />

    </div>
  );
};

export default AboutPage;