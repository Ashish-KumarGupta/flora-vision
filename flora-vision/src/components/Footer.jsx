function Footer() {
  return (
    <footer className="px-6 lg:px-12 pt-10 pb-8 border-t border-white/10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div>

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-[#1f3b2b] flex items-center justify-center">
              🌿
            </div>

            <h2 className="text-2xl font-semibold text-white">
              FloraVision
            </h2>

          </div>

          {/* TEXT */}
          <p className="text-gray-300 leading-7 mt-6 max-w-[320px]">
            Beautiful indoor plants that bring freshness,
            positivity and natural vibes into your home.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6">

            <button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
              📘
            </button>

            <button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
              📷
            </button>

            <button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
              🐦
            </button>

          </div>

        </div>

        {/* MIDDLE SECTION */}
        <div>

          <h3 className="text-white text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-4 mt-6 text-gray-300">

            <li className="hover:text-white cursor-pointer transition duration-300">
              Home
            </li>

            <li className="hover:text-white cursor-pointer transition duration-300">
              Plants Type
            </li>

            <li className="hover:text-white cursor-pointer transition duration-300">
              Reviews
            </li>

            <li className="hover:text-white cursor-pointer transition duration-300">
              Contact
            </li>

          </ul>

        </div>

        {/* RIGHT SECTION */}
        <div>

          <h3 className="text-white text-xl font-semibold">
            Newsletter
          </h3>

          <p className="text-gray-300 mt-6 leading-7">
            Subscribe to get updates about new plants and
            latest offers.
          </p>

          {/* INPUT */}
          <div className="flex items-center mt-6 bg-white/5 border border-white/10 rounded-full overflow-hidden">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-5 py-4 outline-none text-white w-full"
            />

            <button className="px-6 py-4 bg-white text-black font-medium hover:bg-gray-200 transition duration-300">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">

        © 2026 FloraVision. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;