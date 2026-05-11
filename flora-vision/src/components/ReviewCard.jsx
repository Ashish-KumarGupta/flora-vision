function ReviewCard({
  image,
  name,
  review,
}) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-6 hover:bg-white/10 transition duration-300">

      {/* TOP */}
      <div className="flex items-center gap-4">

        {/* USER IMAGE */}
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />

        {/* USER INFO */}
        <div>

          <h3 className="text-white text-lg font-semibold">
            {name}
          </h3>

          <p className="text-yellow-400 text-sm">
            ★★★★★
          </p>

        </div>

      </div>

      {/* REVIEW TEXT */}
      <p className="text-gray-300 leading-7 mt-6 text-sm">
        {review}
      </p>

    </div>
  );
}

export default ReviewCard;