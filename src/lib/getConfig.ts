import { headers } from 'next/headers'
import { restaurantConfigs, getConfigBySlug } from '@/config/restaurants'
import { thekebabsConfig } from '@/config/restaurants/thekebabs'
import type { RestaurantConfig } from '@/config/types'

// Domain -> Slug mapping
// Yeni restoran eklediğinde buraya domain'ini ekle!
const domainToSlug: Record<string, string> = {
  // The Kebab's
  'thekebabstime.com.br': 'thekebabs',
  'www.thekebabstime.com.br': 'thekebabs',
  'thekebabs.com.br': 'thekebabs',
  'www.thekebabs.com.br': 'thekebabs',

  // Pizzacı Ali (örnek)
  'pizzaciali.com.br': 'pizzaci-ali',
  'www.pizzaciali.com.br': 'pizzaci-ali',

  // Development
  'localhost:3000': 'thekebabs',
  'localhost': 'thekebabs',
}

// Server-side: Domain'e göre config getir
export async function getConfigFromDomain(): Promise<RestaurantConfig> {
  const headersList = await headers()

  // Middleware'den gelen slug'ı kontrol et
  const slugFromMiddleware = headersList.get('x-restaurant-slug')
  if (slugFromMiddleware) {
    const config = getConfigBySlug(slugFromMiddleware)
    if (config) return config
  }

  // Host header'ından domain'i al
  const host = headersList.get('host') || 'localhost:3000'

  // Domain mapping'den slug bul
  const slug = domainToSlug[host] || domainToSlug[host.split(':')[0]] || 'thekebabs'

  // Config'i getir
  const config = getConfigBySlug(slug)
  if (config) return config

  // Fallback: default config
  return thekebabsConfig
}

// Client-side: Window location'dan config getir (hydration için)
export function getConfigFromWindow(): string {
  if (typeof window === 'undefined') return 'thekebabs'

  const hostname = window.location.hostname
  return domainToSlug[hostname] || 'thekebabs'
}

// Tüm domain'leri listele (sitemap için)
export function getAllDomains(): string[] {
  return Object.keys(domainToSlug).filter(d => !d.includes('localhost'))
}
