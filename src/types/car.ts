export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  engineSize: string;
  transmission: "Automatic" | "Manual";
  fuelType: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  color: string;
  price: number;
  currency: "BDT" | "JPY" | "USD";
  image: string;
  grade: string;
  auctionHouse?: string;
  features: string[];
  status: "Available" | "Reserved" | "Sold";
}
