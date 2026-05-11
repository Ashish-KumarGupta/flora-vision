import ReviewCard from "./ReviewCard";
import reviews from "../data/reviews";

function ReviewSection() {
  return (
    <section className="px-6 lg:px-12 pb-24">

      {/* SECTION TITLE */}
      <div className="text-center mb-14">

        <p className="text-gray-400 tracking-[3px] uppercase text-sm">
          Customer Review
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white mt-3">
          What Our Customers Say
        </h2>

      </div>

      {/* REVIEW GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {reviews.map((item) => (
          <ReviewCard
            key={item.id}
            image={item.image}
            name={item.name}
            review={item.review}
          />
        ))}

      </div>

    </section>
  );
}

export default ReviewSection;