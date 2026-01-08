"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F5F0] border-b-4 border-[#18181B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FACC15] border-4 border-[#18181B] flex items-center justify-center">
              <span className="text-xl font-black">S</span>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight">SANAA</span>
              <span className="block text-xs font-bold tracking-widest uppercase text-[#52525B]">
                GLOBAL LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inventory"
              className="text-sm font-black uppercase tracking-wider hover:text-[#CA8A04] transition-colors"
            >
              Inventory
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-black uppercase tracking-wider hover:text-[#CA8A04] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#auction"
              className="text-sm font-black uppercase tracking-wider hover:text-[#CA8A04] transition-colors"
            >
              Auction Request
            </a>
            <a
              href="#contact"
              className="text-sm font-black uppercase tracking-wider hover:text-[#CA8A04] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#inquiry" className="btn-primary">
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 border-4 border-[#18181B] flex flex-col items-center justify-center gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-1 bg-[#18181B] transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-1 bg-[#18181B] ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-1 bg-[#18181B] transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-4 border-[#18181B] py-6">
            <nav className="flex flex-col gap-4">
              <a
                href="#inventory"
                className="text-sm font-black uppercase tracking-wider py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inventory
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-black uppercase tracking-wider py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#auction"
                className="text-sm font-black uppercase tracking-wider py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Auction Request
              </a>
              <a
                href="#contact"
                className="text-sm font-black uppercase tracking-wider py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a href="#inquiry" className="btn-primary text-center mt-4">
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
