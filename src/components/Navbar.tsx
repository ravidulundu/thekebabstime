"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Instagram } from "lucide-react";
import { useRestaurant } from "@/context/RestaurantContext";

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemCount, onCartClick }: NavbarProps) {
  const config = useRestaurant();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Cardápio", href: "#cardapio" },
    { name: "Unidades", href: "#unidades" },
    { name: "Contato", href: "#contato" },
  ];

  const { branding } = config;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div
              className={`transition-all duration-300 ${
                isScrolled ? "w-20 h-20" : "w-28 h-28"
              }`}
            >
              <img
                src={branding.logo}
                alt={branding.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className={`hidden md:block transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <p className="font-display font-bold text-lg">{branding.name}</p>
              <p className="text-xs opacity-80">{branding.slogan}</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
                style={{
                  ["--hover-color" as string]: branding.colors.primary,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            {branding.social.instagram && (
              <a
                href={branding.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Instagram size={24} />
              </a>
            )}

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: isScrolled
                  ? branding.colors.primary
                  : "rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center cart-badge-bounce">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Cultural Element (if configured) */}
            {branding.culturalElements?.turkishFlag && (
              <div className="hidden md:flex items-center justify-center w-10 h-7 bg-red-600 rounded overflow-hidden">
                <span className="text-white text-lg">☪</span>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div
            className={`rounded-xl p-4 ${
              isScrolled ? "bg-gray-50" : "bg-white/10 backdrop-blur-lg"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 font-medium transition-colors duration-300 border-b last:border-b-0 ${
                  isScrolled
                    ? "text-gray-700 border-gray-200"
                    : "text-white border-white/20"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Partner Badge - Mobile */}
            {branding.partners?.ifood && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-center text-gray-500">
                  {branding.partners.ifoodExclusive
                    ? "Parceiro exclusivo"
                    : "Parceiro"}
                </p>
                <p className="text-center font-bold text-red-600 text-xl">
                  iFood
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
