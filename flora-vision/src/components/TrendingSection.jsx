import call from "../assets/call.png";
import feminine from "../assets/feminine.png";

function TrendingSection() {
  return (
    <section className="px-6 lg:px-12 pb-24">

      {/* SECTION TITLE */}
      <div className="text-center mb-14">

        <p className="text-gray-400 tracking-[3px] uppercase text-sm">
          Trending
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white mt-3">
          Our Trendy Plants
        </h2>

      </div>

      {/* ALL CARDS */}
      <div className="space-y-10">

        {/* FIRST CARD */}
        <div className="grid md:grid-cols-2 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-[35px] overflow-hidden">

          {/* IMAGE */}
          <div className="flex justify-center p-8 md:p-12">

            <img
              src={call}
              alt="trending plant"
              className="w-[250px] md:w-[320px]"
            />

          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-12">

            <h3 className="text-3xl md:text-4xl text-white font-semibold leading-tight">
              For Small
              <br />
              Decs Ai Plat
            </h3>

            <p className="text-gray-300 mt-6 leading-7">
              Beautiful indoor plants designed perfectly for
              your workspace and home decoration.
            </p>

            {/* PRICE */}
            <h4 className="text-3xl text-white font-semibold mt-8">
              Rs. 599/-
            </h4>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 mt-8">

              <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
                Explore
              </button>

              <button className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
                🛒
              </button>

            </div>

          </div>

        </div>

        {/* SECOND CARD */}
        <div className="grid md:grid-cols-2 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-[35px] overflow-hidden">

          {/* CONTENT */}
          <div className="p-8 md:p-12 order-2 md:order-1">

            <h3 className="text-3xl md:text-4xl text-white font-semibold leading-tight">
              Fresh Natural
              <br />
              Greeny Plant
            </h3>

            <p className="text-gray-300 mt-6 leading-7">
              Bring nature into your room with calming,
              refreshing and stylish greenery plants.
            </p>

            {/* PRICE */}
            <h4 className="text-3xl text-white font-semibold mt-8">
              Rs. 899/-
            </h4>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 mt-8">

              <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
                Explore
              </button>

              <button className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
                🛒
              </button>

            </div>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center p-8 md:p-12 order-1 md:order-2">

            <img
              src={feminine}
              alt="trending plant"
              className="w-[240px] md:w-[300px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default TrendingSection;