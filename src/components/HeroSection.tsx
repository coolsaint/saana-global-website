import Image from "next/image";
import { featuredCar } from "@/data/cars";

export function HeroSection() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-BD").format(price);
  };

  return (
    <section className="relative bg-[#18181B] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#FACC15]/30 rotate-12 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FACC15]/20 -rotate-6 hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-8 border-white/10 rotate-45 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="badge mb-6">Trusted Since 2015</div>
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Premium
              <br />
              <span className="text-[#FACC15]">Japanese Cars</span>
              <br />
              Direct to BD
            </h1>
            <p className="text-lg text-[#A1A1AA] mb-8 max-w-md">
              Import your dream car directly from Japanese auctions. Quality
              verified, hassle-free delivery to Bangladesh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inventory" className="btn-primary">
                Browse Inventory
              </a>
              <a href="#how-it-works" className="btn-outline border-white text-white hover:bg-white hover:text-[#18181B]">
                How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#3F3F46]">
              <div>
                <p className="text-3xl font-black text-[#FACC15]">500+</p>
                <p className="text-xs uppercase tracking-wider text-[#71717A]">
                  Cars Imported
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#FACC15]">8+</p>
                <p className="text-xs uppercase tracking-wider text-[#71717A]">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#FACC15]">100%</p>
                <p className="text-xs uppercase tracking-wider text-[#71717A]">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right - Featured Car */}
          <div className="relative">
            {/* Polaroid Frame */}
            <div className="bg-white p-4 border-4 border-[#18181B] shadow-[12px_12px_0_0_#FACC15] rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featuredCar.image}
                  alt={`${featuredCar.year} ${featuredCar.make} ${featuredCar.model}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="pt-4 pb-2">
                <p className="text-xs uppercase tracking-widest text-[#71717A]">
                  Featured Vehicle
                </p>
                <h3 className="text-xl font-black uppercase text-[#18181B]">
                  {featuredCar.year} {featuredCar.make} {featuredCar.model}
                </h3>
                <p className="text-2xl font-black text-[#18181B] mt-2">
                  ৳{formatPrice(featuredCar.price)}
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 badge rotate-[-6deg]">
              Grade {featuredCar.grade}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
