function ProductCard({
  image,
  title,
  description,
  price,
}) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-6 hover:bg-white/10 transition duration-300">

      {/* IMAGE */}
      <div className="flex justify-center">

        <img
          src={image}
          alt={title}
          className="w-[180px] h-[220px] object-contain"
        />

      </div>

      {/* CONTENT */}
      <div className="mt-6">

        {/* TITLE */}
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm leading-6 mt-3">
          {description}
        </p>

        {/* BOTTOM */}
        <div className="flex items-center justify-between mt-6">

          {/* PRICE */}
          <h4 className="text-2xl font-semibold text-white">
            Rs. {price}/-
          </h4>

          {/* CART BUTTON */}
          <button className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
            🛒
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;