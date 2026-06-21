import AboutHero from "../componenets/AboutHero";
import OurJourney from "../componenets/OurJourney";
import RemsanaDifference from "../componenets/RemsanaDifference";
import Footer from "../componenets/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F0F6FF] flex flex-col justify-between">
      <div>
        {/* Sections */}
        <main>
          <AboutHero />
          <OurJourney />
          <RemsanaDifference />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;