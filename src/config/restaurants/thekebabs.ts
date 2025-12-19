import type { RestaurantConfig } from '../types'

export const thekebabsConfig: RestaurantConfig = {
  slug: 'thekebabs',

  branding: {
    name: "The Kebab's",
    fullName: "The Kebab's Time",
    slogan: "Kebabs Artesanais",
    description: "The Kebab's produz kebabs/shawarmas artesanais da melhor qualidade! Os Kebabs são feitos com pão sírio grande, sem salada, com bastante molho de alho e molho de tomate e com batata frita, trazendo um sabor inexplicável e uma experiência única.",
    logo: "/images/restaurants/thekebabs/logo.png",
    favicon: "/images/restaurants/thekebabs/favicon.ico",
    colors: {
      primary: "#B8860B",
      secondary: "#1a1a1a",
      accent: "#D4AF37",
      background: "#ffffff",
      text: "#1a1a1a",
      textLight: "#666666",
    },
    tailwind: {
      primary: "bg-amber-700",
      primaryHover: "hover:bg-amber-800",
      secondary: "bg-gray-900",
      accent: "text-amber-600",
    },
    social: {
      instagram: "https://www.instagram.com/thekebabstime",
      whatsapp: "5511917515436",
      email: "thekebabstime@gmail.com",
      website: "https://www.thekebabstime.com.br",
    },
    partners: {
      ifood: true,
      ifoodExclusive: true,
    },
    culturalElements: {
      turkishFlag: true,
      istanbulSilhouette: true,
    },
    images: {
      hero: "/images/restaurants/thekebabs/hero-bg.jpg",
      about: [
        "/images/restaurants/thekebabs/cooking.jpg",
        "/images/restaurants/thekebabs/hero-bg.jpg",
        "/images/restaurants/thekebabs/storefront.jpg",
        "/images/restaurants/thekebabs/cooking.jpg"
      ],
      fallback: "/images/restaurants/thekebabs/menu/istambul-kebab.jpg"
    },
  },

  locations: [
    {
      id: "perdizes",
      name: "THE KEBAB'S - PERDIZES",
      type: "Salão & Delivery",
      address: "Rua Apinajes, 1889 - Sumaré",
      city: "São Paulo - SP",
      phone: "(11) 91751-5436",
      whatsapp: "5511917515436",
      hours: {
        weekdays: "11:00 - 23:00",
        weekend: "11:00 - 23:00",
        note: "Todos os dias",
      },
      ifoodUrl: "https://www.ifood.com.br/delivery/sao-paulo-sp/the-kebabs---perdizes-sumare/6b688df7-ef1a-4e32-b840-790b83b59a9a",
      coordinates: { lat: -23.5347, lng: -46.6798 },
      features: ["dineIn", "delivery", "takeaway"],
    },
    {
      id: "tatuape",
      name: "THE KEBAB'S - TATUAPÉ",
      type: "Salão & Delivery",
      address: "Rua Serra de Japi 604, Tatuapé",
      city: "São Paulo - SP",
      phone: "(11) 91751-5177",
      whatsapp: "5511917515177",
      hours: {
        weekdays: "11:00 - 23:00",
        weekend: "11:00 - 23:00",
        note: "Todos os dias",
      },
      ifoodUrl: "https://www.ifood.com.br/delivery/sao-paulo-sp/the-kebabs---tatuape-vila-gomes-cardim/dcad387c-e185-47af-8da4-1327cc763961",
      coordinates: { lat: -23.5416, lng: -46.5762 },
      features: ["dineIn", "delivery", "takeaway"],
    },
    {
      id: "bela-vista",
      name: "THE KEBAB'S - BELA VISTA",
      type: "Somente retirada ou delivery pelo iFood",
      address: "Rua Doutor Penaforte Mendes, 171 - Bela Vista",
      city: "São Paulo - SP",
      phone: "(11) 99297-5239",
      whatsapp: "5511992975239",
      hours: {
        weekdays: "11:00 - 02:00",
        friday: "11:00 - 05:00",
        saturday: "11:00 - 05:00",
        sunday: "11:00 - 02:00",
        note: "Horário estendido nos fins de semana",
      },
      ifoodUrl: "https://www.ifood.com.br/delivery/sao-paulo-sp/the-kebabs-bela-vista/3d6822c3-e8c2-4e8c-90b0-f33313714b70",
      coordinates: { lat: -23.5629, lng: -46.6417 },
      features: ["delivery", "takeaway"],
      ifoodOnly: true,
    },
    {
      id: "berrini",
      name: "THE KEBAB'S - BERRINI",
      type: "Somente retirada ou delivery pelo iFood",
      address: "Rua Michael Faraday, 100 - Cidade Monções",
      city: "São Paulo - SP",
      phone: "(11) 93715-6955",
      whatsapp: "5511937156955",
      hours: {
        weekdays: "11:00 - 23:00",
        weekend: "11:00 - 23:00",
        note: "Todos os dias",
      },
      ifoodUrl: "https://www.ifood.com.br/delivery/sao-paulo-sp/the-kebabs--berrini-cidade-moncoes/1117103e-0d6e-4604-8adb-addef92668e6",
      coordinates: { lat: -23.6098, lng: -46.6956 },
      features: ["delivery", "takeaway"],
      ifoodOnly: true,
    },
  ],

  menu: {
    currency: "R$",
    minimumOrder: 29.90,
    deliveryFee: {
      free: { upTo: 3, unit: "km" },
      standard: 5.00,
    },
    categories: [
      {
        id: "kebabs",
        name: "Kebabs Artesanais",
        description: "Nossos famosos kebabs/shawarmas artesanais",
        icon: "kebab",
        items: [
          { id: "oriente-kebab", name: "Oriente Kebab - Falafel", description: "Bolinhas de falafel com tempero especial, batata frita dentro, azeite, molho de tomate, no pão sírio grande", price: 35.90, image: "/images/restaurants/thekebabs/menu/oriente-kebab.jpg", tags: ["vegan", "popular"] },
          { id: "berlim-kebab", name: "Berlim Kebab - Frango", description: "Frango picadinho com tempero especial, batata frita dentro, molho de tomate, molho de alho, no pão sírio grande", price: 35.90, image: "/images/restaurants/thekebabs/menu/berlim-kebab.jpg", tags: ["frango"] },
          { id: "adana-kebab", name: "Adana Kebab - Kafta", description: "Bolinhas de carne moída com tempero especial, batata frita dentro, molho de tomate, molho de alho, no pão sírio grande", price: 35.90, image: "/images/restaurants/thekebabs/menu/adana-kebab.jpg", tags: ["carne"] },
          { id: "istambul-kebab", name: "Istambul Kebab - Carne", description: "Carne picadinha com tempero especial, batata frita dentro, molho de tomate, molho de alho, no pão sírio grande", price: 38.90, image: "/images/restaurants/thekebabs/menu/istambul-kebab.jpg", tags: ["carne", "bestseller"] },
          { id: "antioquia-kebab", name: "Antioquia Kebab - Misto", description: "Carne e frango picadinhos com tempero especial, batata frita dentro, molho de tomate, molho de alho", price: 38.90, image: "/images/restaurants/thekebabs/menu/antioquia-kebab.jpg", tags: ["misto"] },
          { id: "anatolia-kebab", name: "Anatolia Kebab - Carne com Mussarela", description: "Carne picadinha com tempero especial, molho de tomate, mussarela, batata frita dentro", price: 39.90, image: "/images/restaurants/thekebabs/menu/anatolia-kebab.jpg", tags: ["carne", "queijo"] },
        ],
      },
      {
        id: "esfihas",
        name: "Esfihas Grandes",
        description: "Esfihas artesanais com massa leve da casa",
        icon: "esfiha",
        items: [
          { id: "esfiha-carne", name: "Esfiha de Carne", description: "Recheio de carne com a massa bem leve da casa", price: 12.90, image: "/images/restaurants/thekebabs/menu/esfiha-carne.jpg" },
          { id: "esfiha-mussarella", name: "Esfiha de Mussarella", description: "Recheado com a mussarella com a massa bem leve da casa", price: 12.90, image: "/images/restaurants/thekebabs/menu/esfiha-mussarella.jpg" },
          { id: "esfiha-dois-queijos", name: "Esfiha de Dois Queijos", description: "Recheado com ricota temperada e mussarella", price: 13.90, image: "/images/restaurants/thekebabs/menu/esfiha-dois-queijos.jpg" },
          { id: "esfiha-chocolate", name: "Esfiha de Chocolate", description: "Esfiha de Chocolate Fechada - sobremesa deliciosa", price: 13.90, image: "/images/restaurants/thekebabs/menu/esfiha-chocolate.jpg", tags: ["doce"] },
        ],
      },
      {
        id: "pide",
        name: "Pizza Turca - Pide",
        description: "Famosa pizza turca do The Kebab's",
        icon: "pide",
        items: [
          { id: "pide-carne-mussarela", name: "Pide Carne com Mussarela", description: "Famoso pizza Turca com carne temperada e mussarella", price: 31.90, image: "/images/restaurants/thekebabs/menu/pide-carne-mussarela.jpg" },
          { id: "pide-dois-queijos", name: "Pide Dois Queijos", description: "Com ricota temperada e mussarella", price: 31.90, image: "/images/restaurants/thekebabs/menu/pide-dois-queijos.jpg" },
          { id: "pide-ricota", name: "Pide de Ricota", description: "Com ricota temperada e massa leve", price: 29.90, image: "/images/restaurants/thekebabs/menu/pide-ricota.jpg" },
        ],
      },
      {
        id: "bebidas",
        name: "Bebidas",
        description: "Bebidas tradicionais e refrigerantes",
        icon: "drink",
        items: [
          { id: "limonada-turca-300", name: "Limonada Turca 300 ml", description: "Refrescante limonada turca artesanal", price: 8.90, image: "/images/restaurants/thekebabs/menu/limonada-turca.jpg", tags: ["artesanal"] },
          { id: "limonada-turca-1l", name: "Limonada Turca 1 Litro", description: "Limonada turca artesanal - 1 litro", price: 14.90, image: "/images/restaurants/thekebabs/menu/limonada-turca-1l.jpg" },
          { id: "coca-cola", name: "Coca-Cola Original 350ml", description: "Lata 350ml", price: 7.90, image: "/images/restaurants/thekebabs/menu/coca-cola.jpg" },
          { id: "guarana", name: "Guaraná Antarctica 350ml", description: "Lata 350ml", price: 7.90, image: "/images/restaurants/thekebabs/menu/guarana.jpg" },
        ],
      },
      {
        id: "doces",
        name: "Doces Turcos",
        description: "Sobremesas tradicionais turcas",
        icon: "dessert",
        items: [
          { id: "baklava-nozes", name: "Baklava de Nozes", description: "Baklava com recheio de nozes e calda de mel", price: 13.90, image: "/images/restaurants/thekebabs/menu/baklava-nozes.jpg" },
          { id: "baklava-pistache", name: "Baklava de Pistache", description: "Famoso Baklava de pistache Turco", price: 15.90, image: "/images/restaurants/thekebabs/menu/baklava-pistache.jpg" },
          { id: "doce-turco-caixa", name: "Doce Turco - Caixa Mista 6 unidades", description: "Variedade de doces turcos", price: 19.90, image: "/images/restaurants/thekebabs/menu/doce-turco-caixa.jpg", tags: ["combo"] },
        ],
      },
    ],
  },

  seo: {
    title: "The Kebab's Time - Kebabs Artesanais | São Paulo",
    description: "The Kebab's produz kebabs e shawarmas artesanais da melhor qualidade em São Paulo. Delivery via iFood ou WhatsApp.",
    keywords: ["kebab", "shawarma", "comida turca", "São Paulo", "delivery"],
    ogImage: "/images/restaurants/thekebabs/og-image.jpg",
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

export default thekebabsConfig
