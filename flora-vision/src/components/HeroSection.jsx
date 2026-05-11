import calligi from "../assets/calligi.png";
import ima from "../assets/ima.png";

function HeroSection() {
  return (
    <section className="relative h-[620px] overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="relative z-20 px-6 lg:px-12 pt-14">

        {/* LABEL */}
        <p className="text-gray-300 text-[13px] tracking-[5px] uppercase">
          Plant Collection
        </p>

        {/* TITLE */}
        <h1 className="text-[62px] md:text-[82px] lg:text-[92px] font-semibold leading-[0.9] text-white mt-5 max-w-[500px]">
          Earth’s
          <br />
          Exhale
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 leading-7 text-[15px] md:text-[17px] mt-5 max-w-[520px]">
          “Earth Exhale” symbolizes the purity and vitality
          of the Earth’s natural environment and its essential
          role in sustaining life.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 mt-8">

          {/* BUY BUTTON */}
          <button className="px-8 py-3 border border-white/70 rounded-xl hover:bg-white hover:text-black transition duration-300">
            Buy Now
          </button>

          {/* DEMO BUTTON */}
          <button className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full border border-white/70 flex items-center justify-center text-sm">
              ▶
            </div>

            <span className="text-[15px]">
              Live Demo...
            </span>

          </button>

        </div>

      </div>

      {/* REVIEW CARD */}
<div className="absolute left-[60px] top-[470px] z-30 w-[260px] bg-white/[0.04] backdrop-blur-xl border border-white/5 rounded-[28px] p-4">
        {/* TOP */}
        <div className="flex items-center gap-3">

          <img
            src={ima}
            alt="review"
            className="w-11 h-11 rounded-full object-cover"
          />

          <div>

            <h3 className="text-white text-[16px] font-medium">
              Ronnie Hamill
            </h3>

            <p className="text-yellow-400 text-xs">
              ★★★★★
            </p>

          </div>

        </div>

        {/* REVIEW TEXT */}
        <p className="text-[13px] text-gray-300 leading-6 mt-4">
          I can’t express how thrilled I am with my new
          natural plant. It completely transformed my room.
        </p>

      </div>

      {/* RIGHT PRODUCT CARD */}
      <div className="absolute right-[55px] top-[80px] z-30 bg-white/[0.04] backdrop-blur-xl border border-white/5 rounded-[34px] p-5 w-[260px]">

        {/* IMAGE */}
        <img
          src={calligi}
          alt="small plant"
          className="w-[170px] mx-auto"
        />

        {/* TEXT */}
        <p className="text-gray-300 text-sm mt-4">
          Indoor Plant
        </p>

        <h2 className="text-white text-[30px] leading-[1.15] mt-2 font-medium">
          Aglaonema
          <br />
          plant
        </h2>

        {/* BUTTON */}
        <button className="mt-5 px-6 py-2 border border-white/70 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Buy Now
        </button>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-5">

          <div className="w-2 h-2 rounded-full bg-white"></div>

          <div className="w-2 h-2 rounded-full bg-white/40"></div>

          <div className="w-2 h-2 rounded-full bg-white/40"></div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;