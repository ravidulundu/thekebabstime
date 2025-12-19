import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Domain bazlı routing middleware
// Her request'te domain'i kontrol edip doğru config'i set eder

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const response = NextResponse.next()

  // Hostname'i header olarak ekle (server component'lerde kullanmak için)
  response.headers.set('x-hostname', hostname)

  // Subdomain'i çıkar ve header olarak ekle
  const parts = hostname.split('.')

  let restaurantSlug = 'thekebabs' // default

  // localhost için: thekebabs.localhost:3000
  if (hostname.includes('localhost')) {
    const subdomain = parts[0]
    if (subdomain !== 'localhost' && subdomain !== '127') {
      restaurantSlug = subdomain
    }
  }
  // Production için: thekebabs.menusite.com veya thekebabstime.com.br
  else if (parts.length >= 3) {
    restaurantSlug = parts[0]
  }
  // Custom domain: thekebabstime.com.br -> thekebabs mapping
  else {
    // Domain mapping (custom domain'ler için)
    const domainMapping: Record<string, string> = {
      'thekebabstime.com.br': 'thekebabs',
      'www.thekebabstime.com.br': 'thekebabs',
      'pizzaciali.com.br': 'pizzaci-ali',
      'www.pizzaciali.com.br': 'pizzaci-ali',
    }
    restaurantSlug = domainMapping[hostname] || 'thekebabs'
  }

  response.headers.set('x-restaurant-slug', restaurantSlug)

  return response
}

// Middleware'in çalışacağı path'ler
export const config = {
  matcher: [
    // API ve statik dosyalar hariç tüm path'ler
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}
