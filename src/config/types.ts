// Restaurant Config Type Definitions
// Her yeni restoran bu yapıya uymalı

export interface Location {
  id: string
  name: string
  type: string
  address: string
  city: string
  phone: string
  whatsapp: string
  hours: {
    weekdays?: string
    weekend?: string
    friday?: string
    saturday?: string
    sunday?: string
    note?: string
  }
  ifoodUrl?: string
  coordinates?: {
    lat: number
    lng: number
  }
  features: string[]
  ifoodOnly?: boolean
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
  tags?: string[]
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  icon?: string
  items: MenuItem[]
}

export interface RestaurantConfig {
  // Unique identifier (URL slug olarak kullanılır)
  slug: string

  branding: {
    name: string
    fullName: string
    slogan: string
    description: string
    logo: string
    favicon: string
    colors: {
      primary: string
      secondary: string
      accent: string
      background: string
      text: string
      textLight: string
    }
    tailwind: {
      primary: string
      primaryHover: string
      secondary: string
      accent: string
    }
    social: {
      instagram?: string
      facebook?: string
      whatsapp: string
      email: string
      website?: string
    }
    partners?: {
      ifood?: boolean
      ifoodExclusive?: boolean
      rappi?: boolean
      ubereats?: boolean
    }
    culturalElements?: {
      turkishFlag?: boolean
      istanbulSilhouette?: boolean
      customBadge?: string
    }
    images: {
      hero: string
      about: string[]
      fallback: string
    }
  }

  locations: Location[]

  menu: {
    currency: string
    minimumOrder: number
    deliveryFee: {
      free: { upTo: number; unit: string }
      standard: number
    }
    categories: MenuCategory[]
  }

  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
  }

  settings: {
    language: string
    currency: string
    timezone: string
    orderingMethod: 'whatsapp' | 'ifood' | 'both'
    showPrices: boolean
    enableCart: boolean
  }
}

// Helper type for creating new configs
export type NewRestaurantConfig = Omit<RestaurantConfig, 'slug'> & { slug: string }
