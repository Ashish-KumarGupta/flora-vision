import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingSection from "./components/TrendingSection";
import TopSellingSection from "./components/TopSellingSection";
import ReviewSection from "./components/ReviewSection";
import OxygenSection from "./components/OxygenSection";
import Footer from "./components/Footer";

import main1 from "./assets/main1.png";

function App() {
  return (
    <div className="bg-[#07140d] min-h-screen p-2 text-white">

      {/* MAIN WRAPPER */}
      <div
        className="relative max-w-[1320px] mx-auto rounded-[28px] overflow-hidden border border-white/5"
        style={{
          background:
            "radial-gradient(circle at center, rgba(35,65,40,0.22) 0%, rgba(7,20,13,1) 72%)",
        }}
      >

        {/* BACKGROUND PLANT */}
        <div className="absolute left-1/2 top-[180px] -translate-x-1/2 z-0 pointer-events-none">

          <img
            src={main1}
            alt="background plant"
            className="w-[320px] md:w-[430px] lg:w-[520px] opacity-75 object-contain"
          />

        </div>

        {/* SOFT GLOW */}
        <div className="absolute left-1/2 top-[280px] -translate-x-1/2 w-[420px] h-[420px] bg-green-500/10 blur-[120px] rounded-full z-0"></div>

        {/* PAGE CONTENT */}
        <div className="relative z-10">

          <Navbar />

          <HeroSection />

          <TrendingSection />

          <TopSellingSection />

          <ReviewSection />

          <OxygenSection />

          <Footer />

        </div>

      </div>

    </div>
  );
}

export default App;