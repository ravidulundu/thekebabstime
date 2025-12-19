// Tüm restoran config'lerini burada kaydet
// Yeni restoran eklerken bu dosyaya import et!

import { thekebabsConfig } from './thekebabs'
import { pizzaciAliConfig } from './pizzaci-ali'
import type { RestaurantConfig } from '../types'

// Domain -> Config mapping
// Her yeni restoran için buraya ekle
export const restaurantConfigs: Record<string, RestaurantConfig> = {
  // Slug bazlı (subdomain veya path için)
  'thekebabs': thekebabsConfig,
  'pizzaci-ali': pizzaciAliConfig,

  // Full domain bazlı (custom domain için)
  'thekebabstime.com.br': thekebabsConfig,
  'www.thekebabstime.com.br': thekebabsConfig,
  'pizzaciali.com.br': pizzaciAliConfig,
  'www.pizzaciali.com.br': pizzaciAliConfig,
}

// Subdomain bazlı config getir
// örn: thekebabs.menusite.com -> thekebabs
export function getConfigBySubdomain(hostname: string): RestaurantConfig | null {
  // localhost için test
  if (hostname.includes('localhost')) {
    const subdomain = hostname.split('.')[0]
    if (subdomain !== 'localhost' && restaurantConfigs[subdomain]) {
      return restaurantConfigs[subdomain]
    }
    // Default olarak thekebabs döndür (development)
    return thekebabsConfig
  }

  // Subdomain çıkar: thekebabs.menusite.com -> thekebabs
  const parts = hostname.split('.')
  if (parts.length >= 3) {
    const subdomain = parts[0]
    if (restaurantConfigs[subdomain]) {
      return restaurantConfigs[subdomain]
    }
  }

  // Full domain check
  if (restaurantConfigs[hostname]) {
    return restaurantConfigs[hostname]
  }

  return null
}

// Slug bazlı config getir (API için)
export function getConfigBySlug(slug: string): RestaurantConfig | null {
  return restaurantConfigs[slug] || null
}

// Tüm restoranları listele
export function getAllRestaurants(): RestaurantConfig[] {
  const seen = new Set<string>()
  const restaurants: RestaurantConfig[] = []

  Object.values(restaurantConfigs).forEach((config) => {
    if (!seen.has(config.slug)) {
      seen.add(config.slug)
      restaurants.push(config)
    }
  })

  return restaurants
}

// Default export (development için)
export { thekebabsConfig as defaultConfig }
