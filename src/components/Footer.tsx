'use client'

import { Instagram, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react'
import { useRestaurant } from '@/context/RestaurantContext'

export default function Footer() {
  const { branding, locations } = useRestaurant()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cardápio', href: '#cardapio' },
    { name: 'Unidades', href: '#unidades' },
  ]

  return (
    <footer id="contato" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: branding.colors.secondary }}
              >
                <span
                  className="font-display font-bold text-xs leading-tight text-center"
                  style={{ color: branding.colors.accent }}
                >
                  {branding.name.split(' ').slice(0, 2).join('\n')}
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-lg">{branding.name}</p>
                <p className="text-sm" style={{ color: branding.colors.accent }}>{branding.slogan}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {branding.description.substring(0, 150)}...
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {branding.social.instagram && (
                <a
                  href={branding.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors"
                  style={{ ['--hover-bg' as string]: branding.colors.primary }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = branding.colors.primary}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
                >
                  <Instagram size={20} />
                </a>
              )}
              {branding.social.email && (
                <a
                  href={`mailto:${branding.social.email}`}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = branding.colors.primary}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
                >
                  <Mail size={20} />
                </a>
              )}
              {locations[0]?.whatsapp && (
                <a
                  href={`https://wa.me/${locations[0].whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Phone size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors"
                    style={{ ['--hover-color' as string]: branding.colors.accent }}
                    onMouseEnter={(e) => e.currentTarget.style.color = branding.colors.accent}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-6">Unidades</h4>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.id} className="text-sm">
                  <a
                    href={location.ifoodUrl || `https://wa.me/${location.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-gray-400 transition-colors group"
                  >
                    <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-white group-hover:opacity-80">
                        {location.name}
                      </span>
                      <br />
                      <span className="text-xs">{location.phone}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Order */}
          <div>
            <h4 className="font-bold text-lg mb-6">Peça Agora</h4>

            <div className="space-y-4">
              {/* WhatsApp CTA */}
              {locations[0]?.whatsapp && (
                <a
                  href={`https://wa.me/${locations[0].whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl transition-colors"
                >
                  <Phone size={20} />
                  <div>
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-xs opacity-80">{locations[0].name}: {locations[0].phone}</p>
                  </div>
                </a>
              )}

              {/* iFood CTA */}
              {branding.partners?.ifood && locations[0]?.ifoodUrl && (
                <a
                  href={locations[0].ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl transition-colors"
                >
                  <ExternalLink size={20} />
                  <div>
                    <p className="font-semibold text-sm">iFood</p>
                    <p className="text-xs opacity-80">
                      {branding.partners.ifoodExclusive ? 'Parceiro exclusivo' : 'Parceiro'}
                    </p>
                  </div>
                </a>
              )}

              {/* Email */}
              {branding.social.email && (
                <a
                  href={`mailto:${branding.social.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">{branding.social.email}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              &copy; {currentYear} {branding.fullName}. Todos os direitos reservados.
            </p>

            <p className="flex items-center gap-2">
              Feito com <Heart size={14} className="text-red-500 fill-red-500" /> em São Paulo
              {branding.culturalElements?.turkishFlag && (
                <span style={{ color: branding.colors.accent }}>☪</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
