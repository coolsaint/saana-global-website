import Image from "next/image";
import { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-BD").format(price);
  };

  return (
    <div className="card group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Status Badge */}
        {car.status !== "Available" && (
          <div className="absolute top-3 right-3">
            <span
              className={`badge ${car.status === "Sold" ? "bg-[#18181B] text-white" : "bg-[#FACC15]"}`}
            >
              {car.status}
            </span>
          </div>
        )}
        {/* Grade Badge */}
        <div className="absolute top-3 left-3">
          <span className="badge">Grade {car.grade}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 border-t-4 border-[#18181B]">
        {/* Title */}
        <h3 className="text-lg font-black uppercase tracking-tight">
          {car.year} {car.make} {car.model}
        </h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#71717A]">Mileage:</span>
            <span className="font-bold">
              {car.mileage.toLocaleString()} km
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#71717A]">Engine:</span>
            <span className="font-bold">{car.engineSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#71717A]">Trans:</span>
            <span className="font-bold">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#71717A]">Fuel:</span>
            <span className="font-bold">{car.fuelType}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 pt-4 border-t-2 border-[#D4D4D8] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#71717A] uppercase tracking-wider">
              Price
            </span>
            <p className="text-xl font-black text-[#18181B]">
              ৳{formatPrice(car.price)}
            </p>
          </div>
          <button className="btn-outline text-xs px-4 py-2">View Details</button>
        </div>
      </div>
    </div>
  );
}
