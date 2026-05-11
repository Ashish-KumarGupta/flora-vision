function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 py-6">

      {/* LEFT LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[#1f3b2b] flex items-center justify-center">
          🌿
        </div>

        <h1 className="text-2xl font-semibold text-white">
          FloraVision
        </h1>
      </div>

      {/* CENTER LINKS */}
      <ul className="hidden md:flex items-center gap-10 text-gray-300 text-sm">

        <li className="cursor-pointer hover:text-white transition duration-300">
          Home
        </li>

        <li className="cursor-pointer hover:text-white transition duration-300">
          Plants Type
        </li>

        <li className="cursor-pointer hover:text-white transition duration-300">
          More
        </li>

        <li className="cursor-pointer hover:text-white transition duration-300">
          Contact
        </li>

      </ul>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-4 text-white">

        {/* SEARCH */}
        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
          🔍
        </button>

        {/* CART */}
        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
          🛒
        </button>

        {/* MOBILE MENU */}
        <button className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;