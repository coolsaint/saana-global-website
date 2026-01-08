export function FeaturesSection() {
  const features = [
    {
      icon: "🏆",
      title: "Auction Access",
      description: "Direct access to all major Japanese auction houses",
    },
    {
      icon: "🔍",
      title: "Quality Check",
      description: "Thorough inspection before and after purchase",
    },
    {
      icon: "📦",
      title: "Door Delivery",
      description: "Complete shipping and customs handling to your door",
    },
    {
      icon: "📋",
      title: "Documentation",
      description: "All paperwork handled for hassle-free registration",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#F5F5F0] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge mb-4">Why Choose Us</span>
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mt-4">
            End-to-End Import Service
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-4 border-[#18181B] p-6 hover:shadow-[6px_6px_0_0_#18181B] transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#52525B]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-16 bg-[#18181B] border-4 border-[#18181B] p-8 lg:p-12">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white text-center mb-8">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Choose", desc: "Select from our inventory or request a specific car" },
              { step: "02", title: "Confirm", desc: "Review details, pay deposit to secure the vehicle" },
              { step: "03", title: "Ship", desc: "We handle auction, inspection, and shipping" },
              { step: "04", title: "Receive", desc: "Get your car delivered with all documents ready" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FACC15] border-4 border-white mx-auto flex items-center justify-center mb-4">
                  <span className="text-xl font-black">{item.step}</span>
                </div>
                <h4 className="text-lg font-black uppercase text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#A1A1AA]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
