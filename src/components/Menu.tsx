"use client";

import { useState } from "react";
import { Plus, Minus, Flame, Leaf, Star } from "lucide-react";
import { useRestaurant } from "@/context/RestaurantContext";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface MenuProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function Menu({ cart, setCart }: MenuProps) {
  const config = useRestaurant();
  const { menu, branding } = config;

  const [activeCategory, setActiveCategory] = useState(
    menu.categories[0]?.id || ""
  );

  const addToCart = (item: {
    id: string;
    name: string;
    price: number;
    image?: string;
  }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== itemId);
    });
  };

  const getItemQuantity = (itemId: string) => {
    const item = cart.find((i) => i.id === itemId);
    return item?.quantity || 0;
  };

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "vegan":
        return <Leaf size={14} className="text-green-600" />;
      case "vegetariano":
        return <Leaf size={14} className="text-green-500" />;
      case "bestseller":
      case "popular":
        return <Star size={14} className="text-amber-500 fill-amber-500" />;
      case "picante":
        return <Flame size={14} className="text-red-500" />;
      default:
        return null;
    }
  };

  const activeItems =
    menu.categories.find((c) => c.id === activeCategory)?.items || [];

  return (
    <section id="cardapio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            style={{ color: branding.colors.primary }}
            className="font-medium text-sm uppercase tracking-wider"
          >
            Nosso Cardápio
          </span>
          <h2 className="section-title mt-2">Delícias para Você</h2>
          <p className="section-subtitle">
            Escolha suas delícias favoritas e monte seu pedido
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {menu.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap"
                style={{
                  backgroundColor:
                    activeCategory === category.id
                      ? branding.colors.primary
                      : "#fff",
                  color: activeCategory === category.id ? "#fff" : "#666",
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            {menu.categories.find((c) => c.id === activeCategory)?.description}
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItems.map((item) => {
            const quantity = getItemQuantity(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: item.image
                        ? `url('${item.image}')`
                        : `url('${branding.images.fallback}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                        >
                          {getTagIcon(tag)}
                          <span className="capitalize">{tag}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price Badge */}
                  <div
                    className="absolute bottom-3 right-3 text-white px-3 py-1 rounded-full font-bold"
                    style={{ backgroundColor: branding.colors.primary }}
                  >
                    {menu.currency} {item.price.toFixed(2).replace(".", ",")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Add to Cart */}
                  <div className="flex items-center justify-between">
                    {quantity === 0 ? (
                      <button
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                          })
                        }
                        className="w-full text-white font-semibold py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                        style={{ backgroundColor: branding.colors.secondary }}
                      >
                        <Plus size={20} />
                        <span>Adicionar</span>
                      </button>
                    ) : (
                      <div className="w-full flex items-center justify-between bg-gray-100 rounded-xl p-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="font-bold text-lg">{quantity}</span>
                        <button
                          onClick={() =>
                            addToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              image: item.image,
                            })
                          }
                          className="w-10 h-10 text-white rounded-lg flex items-center justify-center transition-colors"
                          style={{ backgroundColor: branding.colors.primary }}
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery Info */}
        <div
          className="mt-12 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: `${branding.colors.primary}20` }}
        >
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Entrega Grátis!</h4>
            <p className="text-gray-600">
              Frete grátis para pedidos até {menu.deliveryFee.free.upTo}
              {menu.deliveryFee.free.unit}
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600">Pedido mínimo</p>
            <p
              className="font-bold text-xl"
              style={{ color: branding.colors.primary }}
            >
              {menu.currency} {menu.minimumOrder.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
