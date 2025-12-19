import type { Metadata } from 'next'
import './globals.css'
import { getConfigFromDomain } from '@/lib/getConfig'
import { RestaurantProvider } from '@/context/RestaurantContext'

// Dinamik metadata (domain'e göre)
export async function generateMetadata(): Promise<Metadata> {
  const config = await getConfigFromDomain()

  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords.join(', '),
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      images: [config.seo.ogImage],
      locale: 'pt_BR',
      type: 'website',
    },
    icons: {
      icon: config.branding.favicon,
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Server-side'da domain'e göre config al
  const config = await getConfigFromDomain()

  return (
    <html lang={config.settings.language}>
      <head>
        {/* Dinamik theme color */}
        <meta name="theme-color" content={config.branding.colors.primary} />
      </head>
      <body>
        {/* Config'i tüm uygulamaya sağla */}
        <RestaurantProvider config={config}>
          {children}
        </RestaurantProvider>
      </body>
    </html>
  )
}
