import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#18181B] text-white border-t-4 border-[#FACC15]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FACC15] border-4 border-white flex items-center justify-center">
                <span className="text-xl font-black text-[#18181B]">S</span>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight">SANAA</span>
                <span className="block text-xs font-bold tracking-widest uppercase text-[#71717A]">
                  GLOBAL LTD
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Your trusted partner for importing quality Japanese vehicles to
              Bangladesh since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider mb-6 text-[#FACC15]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="#inventory"
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                Browse Inventory
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#auction"
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                Auction Request
              </Link>
              <Link
                href="#faq"
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider mb-6 text-[#FACC15]">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-[#A1A1AA]">Japan Auction Bidding</span>
              <span className="text-sm text-[#A1A1AA]">Vehicle Inspection</span>
              <span className="text-sm text-[#A1A1AA]">Shipping & Customs</span>
              <span className="text-sm text-[#A1A1AA]">Documentation</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider mb-6 text-[#FACC15]">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#A1A1AA]">
              <p>Dhaka, Bangladesh</p>
              <a
                href="tel:+8801XXXXXXXXX"
                className="hover:text-white transition-colors"
              >
                +880 1XXX-XXXXXX
              </a>
              <a
                href="mailto:info@sanaaglobal.com"
                className="hover:text-white transition-colors"
              >
                info@sanaaglobal.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 border-2 border-[#3F3F46] flex items-center justify-center hover:border-[#FACC15] hover:text-[#FACC15] transition-colors"
              >
                <span className="text-xs font-black">FB</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-[#3F3F46] flex items-center justify-center hover:border-[#FACC15] hover:text-[#FACC15] transition-colors"
              >
                <span className="text-xs font-black">WA</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-[#3F3F46] flex items-center justify-center hover:border-[#FACC15] hover:text-[#FACC15] transition-colors"
              >
                <span className="text-xs font-black">YT</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3F3F46] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#71717A]">
            &copy; {new Date().getFullYear()} SANAA Global Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-[#71717A] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-[#71717A] hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
