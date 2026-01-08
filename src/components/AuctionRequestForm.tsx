"use client";

import { useState } from "react";

export function AuctionRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    make: "",
    model: "",
    yearFrom: "",
    yearTo: "",
    maxBudget: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auction request submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="auction" className="bg-[#18181B] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="badge mb-6">Auction Request</span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mt-4">
              Can&apos;t Find Your
              <br />
              <span className="text-[#FACC15]">Dream Car?</span>
            </h2>
            <p className="text-[#A1A1AA] mt-6 max-w-md">
              Tell us what you&apos;re looking for and we&apos;ll source it directly from
              Japanese auctions. Access to USS, HAA, TAA, JU and more.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Access to 15+ auction houses",
                "Real-time bidding on your behalf",
                "Transparent pricing with no hidden fees",
                "Full inspection report before purchase",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#FACC15] flex items-center justify-center">
                    <span className="text-sm font-black">✓</span>
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white border-4 border-[#18181B] p-8">
            <h3 className="text-xl font-black uppercase tracking-tight mb-6">
              Submit Request
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input-light text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="input-light text-sm"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-light text-sm w-full"
              />

              <div className="grid grid-cols-2 gap-4">
                <select
                  value={formData.make}
                  onChange={(e) =>
                    setFormData({ ...formData, make: e.target.value })
                  }
                  className="input-light text-sm"
                  required
                >
                  <option value="">Select Make</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="nissan">Nissan</option>
                  <option value="mazda">Mazda</option>
                  <option value="subaru">Subaru</option>
                  <option value="mitsubishi">Mitsubishi</option>
                  <option value="lexus">Lexus</option>
                  <option value="suzuki">Suzuki</option>
                </select>
                <input
                  type="text"
                  placeholder="Model"
                  value={formData.model}
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                  className="input-light text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Year From"
                  value={formData.yearFrom}
                  onChange={(e) =>
                    setFormData({ ...formData, yearFrom: e.target.value })
                  }
                  className="input-light text-sm"
                />
                <input
                  type="number"
                  placeholder="Year To"
                  value={formData.yearTo}
                  onChange={(e) =>
                    setFormData({ ...formData, yearTo: e.target.value })
                  }
                  className="input-light text-sm"
                />
              </div>

              <input
                type="text"
                placeholder="Maximum Budget (BDT)"
                value={formData.maxBudget}
                onChange={(e) =>
                  setFormData({ ...formData, maxBudget: e.target.value })
                }
                className="input-light text-sm w-full"
              />

              <textarea
                placeholder="Additional Notes (color preference, specific features, etc.)"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="input-light text-sm w-full h-24 resize-none"
              />

              <button type="submit" className="btn-primary w-full">
                Submit Auction Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
