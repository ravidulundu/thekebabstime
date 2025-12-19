'use client'

import { createContext, useContext, ReactNode } from 'react'
import type { RestaurantConfig } from '@/config/types'

// Context
const RestaurantContext = createContext<RestaurantConfig | null>(null)

// Provider
interface RestaurantProviderProps {
  config: RestaurantConfig
  children: ReactNode
}

export function RestaurantProvider({ config, children }: RestaurantProviderProps) {
  return (
    <RestaurantContext.Provider value={config}>
      {children}
    </RestaurantContext.Provider>
  )
}

// Hook - componentlerde config'e erişmek için
export function useRestaurant(): RestaurantConfig {
  const context = useContext(RestaurantContext)
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider')
  }
  return context
}

// Branding hook - sadece branding bilgilerine erişim
export function useBranding() {
  const config = useRestaurant()
  return config.branding
}

// Menu hook - sadece menü bilgilerine erişim
export function useMenu() {
  const config = useRestaurant()
  return config.menu
}

// Locations hook - sadece lokasyon bilgilerine erişim
export function useLocations() {
  const config = useRestaurant()
  return config.locations
}

// Settings hook
export function useSettings() {
  const config = useRestaurant()
  return config.settings
}

export default RestaurantContext
