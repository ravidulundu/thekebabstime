"use client";

import { ChevronDown } from "lucide-react";
import { useRestaurant } from "@/context/RestaurantContext";

export default function Hero() {
  const { branding } = useRestaurant();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${branding.images.hero}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        {branding.culturalElements?.turkishFlag && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
            <span className="text-2xl">☪</span>
            <span className="text-white/90 font-medium">
              Autêntica Culinária Turca
            </span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
          {branding.name}
        </h1>

        {/* Slogan */}
        <p
          className="text-xl md:text-2xl font-medium mb-4"
          style={{ color: branding.colors.accent }}
        >
          {branding.slogan}
        </p>

        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {branding.description.substring(0, 150)}...
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cardapio"
            className="text-lg flex items-center gap-2 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: branding.colors.primary }}
          >
            <span>Ver Cardápio</span>
            <span className="text-2xl">🥙</span>
          </a>

          <a href="#unidades" className="btn-secondary text-lg">
            Nossas Unidades
          </a>
        </div>

        {/* Partner Badge */}
        {branding.partners?.ifood && (
          <div className="mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
            <span className="text-white/80 text-sm">
              {branding.partners.ifoodExclusive
                ? "Parceiro exclusivo do"
                : "Parceiro do"}
            </span>
            <span className="text-red-500 font-bold text-2xl">iFood</span>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 scroll-indicator">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Role para descobrir</span>
          <ChevronDown size={24} />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
