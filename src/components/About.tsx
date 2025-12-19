"use client";

import { Star, Award, Clock, Heart } from "lucide-react";
import { useRestaurant } from "@/context/RestaurantContext";

export default function About() {
  const { branding, locations } = useRestaurant();

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Receitas Autênticas",
      description:
        "Receitas tradicionais turcas passadas de geração em geração",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade Premium",
      description:
        "Ingredientes selecionados e preparo artesanal todos os dias",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Feito na Hora",
      description: "Cada kebab é preparado no momento do seu pedido",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Feito com Amor",
      description: "Paixão pela culinária turca em cada detalhe",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            style={{ color: branding.colors.primary }}
            className="font-medium text-sm uppercase tracking-wider"
          >
            Nossa História
          </span>
          <h2 className="section-title mt-2">Conheça o {branding.name}</h2>
          <p className="section-subtitle">{branding.description}</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                className="h-48 rounded-2xl bg-cover bg-center shadow-lg transform hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('${branding.images.about[0]}')`,
                }}
              />
              <div
                className="h-64 rounded-2xl bg-cover bg-center shadow-lg transform hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('${branding.images.about[1]}')`,
                }}
              />
            </div>
            <div className="space-y-4 pt-8">
              <div
                className="h-64 rounded-2xl bg-cover bg-center shadow-lg transform hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('${branding.images.about[2]}')`,
                }}
              />
              <div
                className="h-48 rounded-2xl bg-cover bg-center shadow-lg transform hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('${branding.images.about[3]}')`,
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-6">
              {branding.slogan}
            </h3>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">{branding.name}</strong>{" "}
                nasceu do sonho de trazer a autêntica culinária para as ruas de
                São Paulo. Cada receita foi cuidadosamente desenvolvida para
                proporcionar uma experiência única.
              </p>

              <p>
                Nossos pratos são preparados com ingredientes selecionados e
                receitas tradicionais, garantindo o sabor autêntico que você
                merece.
              </p>

              <p>
                Hoje, com{" "}
                <strong className="text-gray-900">
                  {locations.length} unidades em São Paulo
                </strong>
                , continuamos com o mesmo compromisso: servir pratos artesanais
                da melhor qualidade, trazendo um sabor inexplicável e uma
                experiência única.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p
                  className="font-display text-4xl font-bold"
                  style={{ color: branding.colors.primary }}
                >
                  {locations.length}
                </p>
                <p className="text-gray-600 text-sm">Unidades</p>
              </div>
              <div className="text-center">
                <p
                  className="font-display text-4xl font-bold"
                  style={{ color: branding.colors.primary }}
                >
                  4.8
                </p>
                <p className="text-gray-600 text-sm">Avaliação</p>
              </div>
              <div className="text-center">
                <p
                  className="font-display text-4xl font-bold"
                  style={{ color: branding.colors.primary }}
                >
                  50+
                </p>
                <p className="text-gray-600 text-sm">Itens no Cardápio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${branding.colors.primary}10, ${branding.colors.secondary}20)`,
              }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{
                  backgroundColor: `${branding.colors.primary}20`,
                  color: branding.colors.primary,
                }}
              >
                {feature.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
