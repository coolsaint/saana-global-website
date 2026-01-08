"use client";

import { useState } from "react";

export function InquiryBar() {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    budget: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="inquiry" className="bg-[#FACC15] border-y-4 border-[#18181B]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/4">
            <h3 className="text-xl font-black uppercase tracking-tight">
              Quick Inquiry
            </h3>
            <p className="text-sm text-[#52525B]">
              Tell us what you&apos;re looking for
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full"
          >
            <select
              value={formData.make}
              onChange={(e) => setFormData({ ...formData, make: e.target.value })}
              className="input-light text-sm"
            >
              <option value="">Select Make</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="nissan">Nissan</option>
              <option value="mazda">Mazda</option>
              <option value="subaru">Subaru</option>
              <option value="mitsubishi">Mitsubishi</option>
              <option value="lexus">Lexus</option>
            </select>

            <input
              type="text"
              placeholder="Model (e.g., Crown)"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              className="input-light text-sm"
            />

            <select
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="input-light text-sm"
            >
              <option value="">Budget Range</option>
              <option value="3000000">Up to ৳30 Lakh</option>
              <option value="5000000">৳30-50 Lakh</option>
              <option value="7500000">৳50-75 Lakh</option>
              <option value="10000000">৳75 Lakh - 1 Crore</option>
              <option value="10000001">Above 1 Crore</option>
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="input-light text-sm"
            />

            <button type="submit" className="btn-dark text-sm">
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
