// The Kebab's Time - Restaurant Configuration
// Config-Driven UI: Tüm site bu dosyadan beslenir

export const restaurantConfig = {
  // === BRANDING ===
  branding: {
    name: "The Kebab's",
    fullName: "The Kebab's Time",
    slogan: "Kebabs Artesanais",
    description: "The Kebab's produz kebabs/shawarmas artesanais da melhor qualidade! Os Kebabs são feitos com pão sírio grande, sem salada, com bastante molho de alho e molho de tomate e com batata frita, trazendo um sabor inexplicável e uma experiência única.",
    logo: "/images/restaurants/logo.png",
    favicon: "/favicon.ico",
    // Renk şeması
    colors: {
      primary: "#B8860B", // Altın/Turuncu - Kebab teması
      secondary: "#1a1a1a", // Koyu siyah
      accent: "#D4AF37", // Altın
      background: "#ffffff",
      text: "#1a1a1a",
      textLight: "#666666",
    },
    // Tailwind sınıfları
    tailwind: {
      primary: "bg-amber-700",
      primaryHover: "hover:bg-amber-800",
      secondary: "bg-gray-900",
      accent: "text-amber-600",
    },
    social: {
      instagram: "https://www.instagram.com/thekebabstime",
      whatsapp: "5511917515436", // Perdizes şubesi
      email: "thekebabstime@gmail.com",
      website: "https://www.thekebabstime.com.br",
    },
    // Ortaklıklar
    partners: {
      ifood: true,
      ifoodExclusive: true,
    },
    // Türk bayrağı ve kültürel semboller
    culturalElements: {
      turkishFlag: true,
      istanbulSilhouette: true,
    },
  },

  // === LOKASYONLAR (4 ŞUBE) ===
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
      coordinates: {
        lat: -23.5347,
        lng: -46.6798,
      },
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
      coordinates: {
        lat: -23.5416,
        lng: -46.5762,
      },
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
        weekdays: "11:00 - 02:00", // Segunda a quinta
        friday: "11:00 - 05:00",
        saturday: "11:00 - 05:00",
        sunday: "11:00 - 02:00",
        note: "Horário estendido nos fins de semana",
      },
      ifoodUrl: "https://www.ifood.com.br/delivery/sao-paulo-sp/the-kebabs-bela-vista/3d6822c3-e8c2-4e8c-90b0-f33313714b70",
      coordinates: {
        lat: -23.5629,
        lng: -46.6417,
      },
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
      coordinates: {
        lat: -23.6098,
        lng: -46.6956,
      },
      features: ["delivery", "takeaway"],
      ifoodOnly: true,
    },
  ],

  // === MENÜ KATEGORİLERİ ===
  menu: {
    currency: "R$",
    minimumOrder: 29.90,
    deliveryFee: {
      free: { upTo: 3, unit: "km" },
      standard: 5.00,
    },

    categories: [
      // === KEBABS ARTESANAIS ===
      {
        id: "kebabs",
        name: "Kebabs Artesanais",
        description: "Nossos famosos kebabs/shawarmas artesanais",
        icon: "kebab",
        items: [
          {
            id: "oriente-kebab",
            name: "Oriente Kebab - Falafel",
            description: "Bolinhas de falafel com tempero especial, batata frita dentro, azeite, molho de tomate, no pão sírio grande",
            price: 35.90,
            image: "/images/restaurants/thekebabs/menu/oriente-kebab.jpg",
            tags: ["vegan", "popular"],
          },
          {
            id: "berlim-kebab",
            name: "Berlim Kebab - Frango",
            description: "Frango picadinho com tempero especial, batata frita dentro, molho de tomate, molho de alho, no pão sírio grande",
            price: 35.90,
            image: "/images/restaurants/thekebabs/menu/berlim-kebab.jpg",
            tags: ["frango"],
          },
          {
            id: "adana-kebab",
            name: "Adana Kebab - Kafta",
            description: "Bolinhas de carne moída com tempero especial, batata frita dentro, molho de tomate, molho de alho, no pão sírio grande",
            price: 35.90,
            image: "/images/restaurants/thekebabs/menu/adana-kebab.jpg",
            tags: ["carne"],
          },
          {
            id: "oriente-express",
            name: "Oriente Express Kebab - Falafel com Mussarella",
            description: "Bolinhas de falafel com tempero especial, batata frita dentro, azeite, molho de tomate, mussarela no pão sírio grande",
            price: 36.90,
            image: "/images/restaurants/thekebabs/menu/oriente-express.jpg",
            tags: ["vegetariano"],
          },
          {
            id: "istambul-kebab",
            name: "Istambul Kebab - Carne",
            description: "Carne picadinha com tempero especial, batata frita dentro, molho de tomate, molho de alho, no pão sírio grande",
            price: 38.90,
            image: "/images/restaurants/thekebabs/menu/istambul-kebab.jpg",
            tags: ["carne", "bestseller"],
          },
          {
            id: "antioquia-kebab",
            name: "Antioquia Kebab - Misto",
            description: "Carne e frango picadinhos com tempero especial, batata frita dentro, molho de tomate, molho de alho, no pão sírio médio",
            price: 38.90,
            image: "/images/restaurants/thekebabs/menu/antioquia-kebab.jpg",
            tags: ["misto"],
          },
          {
            id: "anatolia-kebab",
            name: "Anatolia Kebab - Carne com Mussarela",
            description: "Carne picadinha com tempero especial, molho de tomate, mussarela, batata frita dentro, molho de alho, no pão sírio grande",
            price: 39.90,
            image: "/images/restaurants/thekebabs/menu/anatolia-kebab.jpg",
            tags: ["carne", "queijo"],
          },
        ],
      },

      // === ESFIHAS GRANDES ===
      {
        id: "esfihas",
        name: "Esfihas Grandes",
        description: "Esfihas artesanais com massa leve da casa",
        icon: "esfiha",
        items: [
          {
            id: "esfiha-carne",
            name: "Esfiha de Carne",
            description: "Recheio de carne com a massa bem leve da casa",
            price: 12.90,
            image: "/images/restaurants/thekebabs/menu/esfiha-carne.jpg",
          },
          {
            id: "esfiha-ricota",
            name: "Esfiha de Ricota",
            description: "Recheado com ricota temperada com a massa bem leve da casa",
            price: 12.90,
            image: "/images/restaurants/thekebabs/menu/esfiha-ricota.jpg",
          },
          {
            id: "esfiha-mussarella",
            name: "Esfiha de Mussarella",
            description: "Recheado com a mussarella com a massa bem leve da casa",
            price: 12.90,
            image: "/images/restaurants/thekebabs/menu/esfiha-mussarella.jpg",
          },
          {
            id: "esfiha-dois-queijos",
            name: "Esfiha de Dois Queijos",
            description: "Recheado com ricota temperada e mussarella com a massa bem leve da casa",
            price: 13.90,
            image: "/images/restaurants/thekebabs/menu/esfiha-dois-queijos.jpg",
          },
          {
            id: "esfiha-zaatar",
            name: "Esfiha de Zaatar",
            description: "Recheado com batata temperada e gergelim com a massa bem leve da casa",
            price: 12.90,
            image: "/images/restaurants/thekebabs/menu/esfiha-zaatar.jpg",
          },
          {
            id: "esfiha-carne-mussarella",
            name: "Esfiha de Carne com Mussarella",
            description: "Recheado com carne temperada e mussarella com a massa bem leve da casa",
            price: 13.90,
            image: "/images/restaurants/thekebabs/menu/esfiha-carne-mussarella.jpg",
          },
          {
            id: "esfiha-mussarella-zaatar",
            name: "Esfiha de Mussarella com Zaatar",
            description: "Recheado com batata temperada e gergelim com a massa bem leve da casa",
            price: 13.90,
            image: "/images/restaurants/thekebabs/menu/esfiha-mussarella-zaatar.jpg",
          },
          {
            id: "esfiha-chocolate",
            name: "Esfiha de Chocolate (Fechada)",
            description: "Esfiha de Chocolate Fechada - sobremesa deliciosa",
            price: 13.90,
            image: "/images/restaurants/thekebabs/menu/esfiha-chocolate.jpg",
            tags: ["doce"],
          },
        ],
      },

      // === PIZZA TURCA - PIDE ===
      {
        id: "pide",
        name: "Pizza Turca - Pide",
        description: "Famosa pizza turca do The Kebab's",
        icon: "pide",
        items: [
          {
            id: "pide-carne-mussarela",
            name: "Pide Carne com Mussarela",
            description: "Famoso pizza Turca do The Kebabs, com carne temperada e finalizado com mussarella",
            price: 31.90,
            image: "/images/restaurants/thekebabs/menu/pide-carne-mussarela.jpg",
          },
          {
            id: "pide-mussarela-zaatar",
            name: "Pide Mussarela Com Zaatar",
            description: "Experimente a famosa Pizza Turca do The Kebabs, com mussarela, zaatar, e uma massa incrivelmente leve e saborosa",
            price: 32.90,
            image: "/images/restaurants/thekebabs/menu/pide-mussarela-zaatar.jpg",
          },
          {
            id: "pide-dois-queijos",
            name: "Pide Dois Queijos",
            description: "Famoso pizza Turca do The Kebabs, com ricota temperada e finalizado com mussarella com uma massa bem leve da casa",
            price: 31.90,
            image: "/images/restaurants/thekebabs/menu/pide-dois-queijos.jpg",
          },
          {
            id: "pide-ricota",
            name: "Pide de Ricota",
            description: "Famoso pizza Turca do The Kebabs, com ricota temperada e uma massa bem leve da casa",
            price: 29.90,
            image: "/images/restaurants/thekebabs/menu/pide-ricota.jpg",
          },
          {
            id: "pide-mussarela",
            name: "Pide de Mussarela",
            description: "Famoso pizza Turca do The Kebabs, com mussarella com uma massa bem leve da casa",
            price: 31.90,
            image: "/images/restaurants/thekebabs/menu/pide-mussarela.jpg",
          },
        ],
      },

      // === PORÇÕES ===
      {
        id: "porcoes",
        name: "Porções",
        description: "Acompanhamentos e porções",
        icon: "portion",
        items: [
          {
            id: "molho-alho-30",
            name: "Molho de Alho (30 ml)",
            description: "Molho de alho especial da casa - 30 ml",
            price: 5.90,
            image: "/images/restaurants/thekebabs/menu/molho-alho.jpg",
          },
          {
            id: "molho-alho-96",
            name: "Molho de Alho (96 ml)",
            description: "Molho de alho especial da casa - 96 ml",
            price: 8.90,
            image: "/images/restaurants/thekebabs/menu/molho-alho-grande.jpg",
          },
          {
            id: "kibe-frito",
            name: "Kibe Frito",
            description: "Kibe frito de carne com nozes e temperos especiais (unidade)",
            price: 9.90,
            image: "/images/restaurants/thekebabs/menu/kibe-frito.jpg",
          },
          {
            id: "batata-frita",
            name: "Batata Frita",
            description: "Porção de batata frita",
            price: 19.90,
            image: "/images/restaurants/thekebabs/menu/batata-frita.jpg",
          },
          {
            id: "3-kibes",
            name: "3 Kibes + Molho de Alho",
            description: "3 kibes fritos de carne com nozes e temperos especiais + molho de alho 96ml",
            price: 24.90,
            image: "/images/restaurants/thekebabs/menu/3-kibes.jpg",
          },
          {
            id: "5-kibes",
            name: "5 Kibes Turcos",
            description: "5 kibes turcos deliciosos acompanha molho de alho",
            price: 38.90,
            image: "/images/restaurants/thekebabs/menu/5-kibes.jpg",
          },
          {
            id: "6-falafel",
            name: "6 Falafel Fritos + Molho de Tahine",
            description: "6 falafel fritos com molho de tahine",
            price: 19.99,
            image: "/images/restaurants/thekebabs/menu/falafel.jpg",
            tags: ["vegan"],
          },
        ],
      },

      // === MEZELER VE EKMEKLER ===
      {
        id: "mezes",
        name: "Mezzes e Pães",
        description: "Entradas e acompanhamentos tradicionais",
        icon: "bread",
        items: [
          {
            id: "coalhada-seca",
            name: "Coalhada Seca",
            description: "90g de coalhada seca tradicional",
            price: 11.90,
            image: "/images/restaurants/thekebabs/menu/coalhada-seca.jpg",
            tags: ["vegetariano"],
          },
          {
            id: "babaganush",
            name: "Babaganush",
            description: "90 gramas de pasta de berinjela",
            price: 11.90,
            image: "/images/restaurants/thekebabs/menu/babaganush.jpg",
            tags: ["vegan"],
          },
          {
            id: "pao-turco",
            name: "Pão Turco",
            description: "Pão Turco com a receita especial da casa com gergelim",
            price: 6.90,
            image: "/images/restaurants/thekebabs/menu/pao-turco.jpg",
            tags: ["vegan"],
          },
          {
            id: "3-paes-turcos",
            name: "3 Pães Turcos",
            description: "3 Pães Turcos com a receita especial da casa com gergelim",
            price: 16.90,
            image: "/images/restaurants/thekebabs/menu/3-paes-turcos.jpg",
          },
          {
            id: "combo-mezze",
            name: "Homus + Coalhada + Babaganush + 2 Pães Turcos",
            description: "Homus, Babaganush e Coalhada seca. Acompanha 2 pães turcos especiais da casa",
            price: 39.90,
            image: "/images/restaurants/thekebabs/menu/combo-mezze.jpg",
            tags: ["vegetariano", "combo"],
          },
          {
            id: "pacote-pao-sirio",
            name: "Pacote de Pão Sírio (12 unidades)",
            description: "Pacote de Pão Sírio 12 unidades",
            price: 26.90,
            image: "/images/restaurants/thekebabs/menu/pao-sirio.jpg",
          },
        ],
      },

      // === DOCES (TATLILAR) ===
      {
        id: "doces",
        name: "Doces Turcos",
        description: "Sobremesas tradicionais turcas",
        icon: "dessert",
        items: [
          {
            id: "baklava-nozes",
            name: "Baklava de Nozes",
            description: "Baklava com recheio de nozes e calda de mel",
            price: 13.90,
            image: "/images/restaurants/thekebabs/menu/baklava-nozes.jpg",
          },
          {
            id: "ninho-nozes",
            name: "Ninho de Nozes",
            description: "Feito com farinha, margarina, ovo, açúcar, leite e nozes",
            price: 14.90,
            image: "/images/restaurants/thekebabs/menu/ninho-nozes.jpg",
          },
          {
            id: "ninho-pistache",
            name: "Ninho de Pistache",
            description: "Feito com farinha, margarina, ovo, açúcar, leite e pistache",
            price: 14.90,
            image: "/images/restaurants/thekebabs/menu/ninho-pistache.jpg",
          },
          {
            id: "baklava-pistache",
            name: "Baklava Triangulo de Pistache",
            description: "Famoso Baklava de pistache Turco em versão triangular",
            price: 15.90,
            image: "/images/restaurants/thekebabs/menu/baklava-pistache.jpg",
          },
          {
            id: "doce-turco-caixa",
            name: "Doce Turco - Caixa Mista 6 unidades",
            description: "Baklava com caju, Ninho de caju, Flor de pistache com chocolate, Triangulo fechado, Namura",
            price: 19.90,
            image: "/images/restaurants/thekebabs/menu/doce-turco-caixa.jpg",
            tags: ["combo"],
          },
        ],
      },

      // === BEBIDAS (İÇECEKLER) ===
      {
        id: "bebidas",
        name: "Bebidas",
        description: "Bebidas tradicionais e refrigerantes",
        icon: "drink",
        items: [
          {
            id: "limonada-turca-300",
            name: "Limonada Turca 300 ml",
            description: "Refrescante limonada turca artesanal",
            price: 8.90,
            image: "/images/restaurants/thekebabs/menu/limonada-turca.jpg",
            tags: ["artesanal"],
          },
          {
            id: "limonada-turca-1l",
            name: "Limonada Turca 1 Litro",
            description: "Refrescante limonada turca artesanal - 1 litro",
            price: 14.90,
            image: "/images/restaurants/thekebabs/menu/limonada-turca-1l.jpg",
            tags: ["artesanal"],
          },
          {
            id: "cha-hibisco",
            name: "Chá de Hibisco Natural 300 ml",
            description: "Hibisco com canela, cravo, açúcar e água mineral",
            price: 8.90,
            image: "/images/restaurants/thekebabs/menu/cha-hibisco.jpg",
            tags: ["artesanal"],
          },
          {
            id: "coca-cola",
            name: "Coca-Cola Original 350ml",
            description: "Lata 350ml",
            price: 7.90,
            image: "/images/restaurants/thekebabs/menu/coca-cola.jpg",
          },
          {
            id: "coca-cola-zero",
            name: "Coca-Cola sem Açúcar 350ml",
            description: "Lata 350ml",
            price: 7.90,
            image: "/images/restaurants/thekebabs/menu/coca-cola-zero.jpg",
          },
          {
            id: "guarana",
            name: "Refrigerante Guaraná Antarctica 350ml",
            description: "Lata 350ml",
            price: 7.90,
            image: "/images/restaurants/thekebabs/menu/guarana.jpg",
          },
        ],
      },

      // === COMBOS ===
      {
        id: "combos",
        name: "Combos",
        description: "Combos especiais com desconto",
        icon: "combo",
        items: [
          {
            id: "combo-2-kebab",
            name: "2 Kebab (Shawarma)",
            description: "2 kebabs artesanais tamanho grande, escolhe sabores",
            price: 70.90,
            image: "/images/restaurants/thekebabs/menu/combo-2-kebab.jpg",
            tags: ["popular"],
          },
          {
            id: "combo-5-esfihas",
            name: "5 Esfihas Grandes",
            description: "Escolha seus 5 favoritos entre nossas variedades de esfihas",
            price: 55.90,
            image: "/images/restaurants/thekebabs/menu/combo-5-esfihas.jpg",
          },
          {
            id: "combo-5-esfihas-limonada",
            name: "5 Esfihas Grandes + 1 Lt de Limonada Turca",
            description: "Escolha seus 5 favoritos + 1 Lt de Limonada",
            price: 72.90,
            image: "/images/restaurants/thekebabs/menu/combo-esfihas-limonada.jpg",
          },
          {
            id: "combo-3-pide",
            name: "3 Pide (Pizza Turca)",
            description: "3 Pides à sua escolha",
            price: 84.90,
            image: "/images/restaurants/thekebabs/menu/combo-3-pide.jpg",
          },
          {
            id: "combo-kebab-esfiha-bebida",
            name: "Kebab + Esfiha De Chocolate + Bebida",
            description: "Escolha entre os kebabs: carne, falafel, frango, misto ou carne com mussarela. Acompanhe com esfiha de chocolate fechada",
            price: 55.90,
            image: "/images/restaurants/thekebabs/menu/combo-kebab-esfiha.jpg",
          },
          {
            id: "combo-kebab-batata-bebida",
            name: "Kebab + Batata Frita ou Kibe + Bebida",
            description: "Escolhe seu kebab preferido, + batata frita ou kibe + bebida",
            price: 60.90,
            image: "/images/restaurants/thekebabs/menu/combo-kebab-batata.jpg",
          },
          {
            id: "combo-pide-bebida",
            name: "Pide (Pizza Turca) + Bebida",
            description: "Escolha seu pidé favorito com Bebida",
            price: 39.90,
            image: "/images/restaurants/thekebabs/menu/combo-pide-bebida.jpg",
          },
          {
            id: "dia-de-kebab",
            name: "Dia de Kebab - Menu Completo!",
            description: "2 Kebab a sua escolha + 2 Kibes Fritos ou Batata Frita + 2 Limonadas ou Chá de Hibisco + 2 doces + 1 Molho de Alho da casa",
            price: 119.90,
            image: "/images/restaurants/thekebabs/menu/dia-de-kebab.jpg",
            tags: ["familia"],
          },
          {
            id: "kit-familia",
            name: "Kit para Família",
            description: "2 Kebabs a sua escolha + 2 Kibes Fritos ou batatas Fritas + 2 Pides a sua escolha + 2 Doces a sua escolha + 2 Molhos",
            price: 199.90,
            image: "/images/restaurants/thekebabs/menu/kit-familia.jpg",
            tags: ["familia", "bestseller"],
          },
        ],
      },
    ],
  },

  // === SEO & META ===
  seo: {
    title: "The Kebab's Time - Kebabs Artesanais | São Paulo",
    description: "The Kebab's produz kebabs e shawarmas artesanais da melhor qualidade em São Paulo. Delivery via iFood ou WhatsApp. 4 unidades: Perdizes, Tatuapé, Bela Vista e Berrini.",
    keywords: ["kebab", "shawarma", "comida turca", "São Paulo", "delivery", "esfiha", "pide", "baklava", "falafel"],
    ogImage: "/images/og-image.jpg",
  },

  // === SITE SETTINGS ===
  settings: {
    language: "pt-BR",
    currency: "BRL",
    timezone: "America/Sao_Paulo",
    orderingMethod: "whatsapp", // veya "ifood"
    showPrices: true,
    enableCart: true,
  },
};

export type RestaurantConfig = typeof restaurantConfig;
export default restaurantConfig;
