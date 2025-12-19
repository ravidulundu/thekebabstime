import type { RestaurantConfig } from '../types'

// ÖRNEK İKİNCİ RESTORAN - Pizzacı Ali
// Bu dosyayı kopyalayıp yeni restoran için değiştir!

export const pizzaciAliConfig: RestaurantConfig = {
  slug: 'pizzaci-ali',

  branding: {
    name: "Pizzacı Ali",
    fullName: "Pizzacı Ali - Pizza Artesanal",
    slogan: "A Melhor Pizza da Cidade",
    description: "Pizzacı Ali traz o sabor autêntico da pizza italiana para sua mesa. Massa artesanal, ingredientes frescos e muito amor em cada fatia.",
    logo: "/images/restaurants/pizzaci-ali/logo.png",
    favicon: "/images/restaurants/pizzaci-ali/favicon.ico",
    colors: {
      primary: "#DC2626", // Kırmızı - Pizza teması
      secondary: "#166534", // Yeşil - İtalyan bayrağı
      accent: "#EAB308", // Sarı
      background: "#ffffff",
      text: "#1a1a1a",
      textLight: "#666666",
    },
    tailwind: {
      primary: "bg-red-600",
      primaryHover: "hover:bg-red-700",
      secondary: "bg-green-800",
      accent: "text-yellow-500",
    },
    social: {
      instagram: "https://www.instagram.com/pizzaciali",
      whatsapp: "5511999999999",
      email: "contato@pizzaciali.com.br",
      website: "https://www.pizzaciali.com.br",
    },
    partners: {
      ifood: true,
      rappi: true,
    },
    images: {
      hero: "/images/restaurants/pizzaci-ali/hero-bg.jpg",
      about: [
        "/images/restaurants/pizzaci-ali/cooking.jpg",
        "/images/restaurants/pizzaci-ali/hero-bg.jpg",
        "/images/restaurants/pizzaci-ali/storefront.jpg",
        "/images/restaurants/pizzaci-ali/cooking.jpg"
      ],
      fallback: "/images/restaurants/pizzaci-ali/pizza-fallback.jpg"
    },
  },

  locations: [
    {
      id: "centro",
      name: "PIZZACI ALI - CENTRO",
      type: "Salão & Delivery",
      address: "Rua Augusta, 1500 - Centro",
      city: "São Paulo - SP",
      phone: "(11) 99999-9999",
      whatsapp: "5511999999999",
      hours: {
        weekdays: "18:00 - 00:00",
        weekend: "18:00 - 02:00",
        note: "Todos os dias",
      },
      ifoodUrl: "https://www.ifood.com.br/delivery/pizzaci-ali",
      coordinates: { lat: -23.5505, lng: -46.6333 },
      features: ["dineIn", "delivery", "takeaway"],
    },
  ],

  menu: {
    currency: "R$",
    minimumOrder: 40.00,
    deliveryFee: {
      free: { upTo: 5, unit: "km" },
      standard: 8.00,
    },
    categories: [
      {
        id: "pizzas-tradicionais",
        name: "Pizzas Tradicionais",
        description: "Nossas pizzas clássicas",
        icon: "pizza",
        items: [
          { id: "margherita", name: "Margherita", description: "Molho de tomate, mussarela, manjericão fresco", price: 45.90, tags: ["vegetariano", "popular"] },
          { id: "calabresa", name: "Calabresa", description: "Molho de tomate, mussarela, calabresa fatiada, cebola", price: 48.90, tags: ["bestseller"] },
          { id: "portuguesa", name: "Portuguesa", description: "Molho de tomate, mussarela, presunto, ovos, cebola, azeitonas", price: 52.90 },
          { id: "quatro-queijos", name: "Quatro Queijos", description: "Mussarela, provolone, gorgonzola, parmesão", price: 55.90, tags: ["vegetariano"] },
          { id: "frango-catupiry", name: "Frango com Catupiry", description: "Frango desfiado, catupiry, mussarela", price: 52.90, tags: ["popular"] },
        ],
      },
      {
        id: "pizzas-especiais",
        name: "Pizzas Especiais",
        description: "Criações exclusivas do chef",
        icon: "star",
        items: [
          { id: "trufa", name: "Pizza de Trufa", description: "Creme de trufa, mussarela de búfala, rúcula", price: 75.90, tags: ["premium"] },
          { id: "burrata", name: "Pizza Burrata", description: "Tomate cereja, burrata fresca, manjericão, azeite trufado", price: 68.90, tags: ["premium"] },
        ],
      },
      {
        id: "bebidas",
        name: "Bebidas",
        description: "Para acompanhar sua pizza",
        icon: "drink",
        items: [
          { id: "coca-cola-2l", name: "Coca-Cola 2L", description: "Refrigerante 2 litros", price: 14.90 },
          { id: "guarana-2l", name: "Guaraná Antarctica 2L", description: "Refrigerante 2 litros", price: 12.90 },
          { id: "suco-laranja", name: "Suco de Laranja Natural", description: "500ml de suco natural", price: 12.90, tags: ["natural"] },
        ],
      },
      {
        id: "sobremesas",
        name: "Sobremesas",
        description: "Para finalizar",
        icon: "dessert",
        items: [
          { id: "pizza-chocolate", name: "Pizza de Chocolate", description: "Chocolate ao leite com morango", price: 35.90, tags: ["doce"] },
          { id: "tiramisu", name: "Tiramisù", description: "Sobremesa italiana tradicional", price: 22.90, tags: ["italiano"] },
        ],
      },
    ],
  },

  seo: {
    title: "Pizzacı Ali - A Melhor Pizza Artesanal de São Paulo",
    description: "Pizza artesanal com ingredientes frescos. Delivery e salão. Peça pelo WhatsApp ou iFood.",
    keywords: ["pizza", "pizzaria", "delivery", "São Paulo", "pizza artesanal"],
    ogImage: "/images/restaurants/pizzaci-ali/og-image.jpg",
  },

  settings: {
    language: "pt-BR",
    currency: "BRL",
    timezone: "America/Sao_Paulo",
    orderingMethod: "both",
    showPrices: true,
    enableCart: true,
  },
}

export default pizzaciAliConfig
