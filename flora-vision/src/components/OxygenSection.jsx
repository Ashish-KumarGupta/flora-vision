import calligi from "../assets/calligi.png";

function OxygenSection() {
  return (
    <section className="px-6 lg:px-12 pb-24">

      {/* MAIN CARD */}
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[35px] overflow-hidden">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center p-8 lg:p-12">

            {/* GLOW */}
            <div className="absolute w-[300px] h-[300px] bg-green-500/20 blur-[100px] rounded-full"></div>

            <img
              src={calligi}
              alt="oxygen plant"
              className="relative z-10 w-[280px] md:w-[400px]"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="p-8 lg:p-12">

            <p className="text-gray-400 tracking-[3px] uppercase text-sm">
              O₂ Plants
            </p>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-semibold text-white mt-4 leading-tight">
              We Have Small
              <br />
              And Best O₂ Plants
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-300 leading-7 mt-6 max-w-[500px]">
              Enhance your indoor environment with fresh and
              healthy oxygen plants designed beautifully for
              your workspace and home.
            </p>

            {/* BUTTON */}
            <button className="mt-8 px-7 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              Explore
            </button>

            {/* SLIDER DOTS */}
            <div className="flex items-center gap-3 mt-10">

              <div className="w-3 h-3 rounded-full bg-white"></div>

              <div className="w-3 h-3 rounded-full bg-white/30"></div>

              <div className="w-3 h-3 rounded-full bg-white/30"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OxygenSection;