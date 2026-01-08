import { cars } from "@/data/cars";
import { CarCard } from "./CarCard";

export function CarGrid() {
  return (
    <section id="inventory" className="bg-white py-20 border-y-4 border-[#18181B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="badge mb-4">Current Stock</span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mt-4">
              Available Vehicles
            </h2>
            <p className="text-[#52525B] mt-2 max-w-xl">
              Hand-picked selection of quality Japanese imports. All vehicles
              inspected and verified.
            </p>
          </div>
          <a
            href="#auction"
            className="btn-outline mt-6 md:mt-0 text-center"
          >
            Request Specific Car
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Load More Vehicles</button>
        </div>
      </div>
    </section>
  );
}
