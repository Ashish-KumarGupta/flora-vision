import ProductCard from "./ProductCard";
import products from "../data/products";

function TopSellingSection() {
  return (
    <section className="px-6 lg:px-12 pb-24">

      {/* SECTION TITLE */}
      <div className="text-center mb-14">

        <p className="text-gray-400 tracking-[3px] uppercase text-sm">
          Top Selling
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white mt-3">
          Top Selling Plants
        </h2>

      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}

      </div>

    </section>
  );
}

export default TopSellingSection;