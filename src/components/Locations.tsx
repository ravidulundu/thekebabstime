'use client'

import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react'
import { useRestaurant } from '@/context/RestaurantContext'

export default function Locations() {
  const { locations, branding } = useRestaurant()

  return (
    <section id="unidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span style={{ color: branding.colors.primary }} className="font-medium text-sm uppercase tracking-wider">
            Nossas Unidades
          </span>
          <h2 className="section-title mt-2">Encontre o {branding.name}</h2>
          <p className="section-subtitle">
            {locations.length} unidades em São Paulo para você saborear
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-gradient-to-br from-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              style={{ backgroundImage: `linear-gradient(to bottom right, #f9fafb, ${branding.colors.primary}10)` }}
            >
              {/* Map Preview */}
              <div className="relative h-48 bg-gray-200">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(location.address + ', São Paulo')}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                {/* Badge */}
                {location.ifoodOnly && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Somente iFood
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-1">
                  {location.name}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: branding.colors.primary }}>
                  {location.type}
                </p>

                <div className="space-y-3 text-gray-600">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: branding.colors.primary }} />
                    <span className="text-sm">{location.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="flex-shrink-0" style={{ color: branding.colors.primary }} />
                    <a
                      href={`tel:${location.phone.replace(/\D/g, '')}`}
                      className="text-sm hover:text-amber-600 transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="flex-shrink-0 mt-0.5" style={{ color: branding.colors.primary }} />
                    <div className="text-sm">
                      {location.hours.note && (
                        <p className="font-medium">{location.hours.note}</p>
                      )}
                      {location.hours.weekdays && (
                        <p>Seg-Sex: {location.hours.weekdays}</p>
                      )}
                      {location.hours.friday && (
                        <p>Sexta: {location.hours.friday}</p>
                      )}
                      {location.hours.saturday && (
                        <p>Sábado: {location.hours.saturday}</p>
                      )}
                      {location.hours.sunday && (
                        <p>Domingo: {location.hours.sunday}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${location.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="text-sm">WhatsApp</span>
                  </a>

                  {/* iFood */}
                  <a
                    href={location.ifoodUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">iFood</span>
                  </a>

                  {/* Directions */}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address + ', São Paulo')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Navigation size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* iFood Partner Banner */}
        {branding.partners?.ifood && locations[0]?.ifoodUrl && (
          <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-center text-white">
            <h3 className="font-bold text-2xl mb-2">
              {branding.partners.ifoodExclusive ? 'Parceiro Exclusivo iFood' : 'Parceiro iFood'}
            </h3>
            <p className="opacity-90 mb-6">
              Peça pelo aplicativo e receba no conforto da sua casa
            </p>
            <a
              href={locations[0].ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <span>Pedir Agora</span>
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
