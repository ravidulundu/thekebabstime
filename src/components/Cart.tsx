"use client";

import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Trash2,
} from "lucide-react";
import { useRestaurant } from "@/context/RestaurantContext";
import type { CartItem } from "./Menu";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function Cart({ isOpen, onClose, cart, setCart }: CartProps) {
  const config = useRestaurant();
  const { menu, branding, locations } = config;

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee =
    subtotal >= menu.minimumOrder ? 0 : menu.deliveryFee.standard;
  const total = subtotal + deliveryFee;

  // WhatsApp Checkout
  const handleCheckout = () => {
    if (cart.length === 0) return;

    const orderItems = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} - ${menu.currency} ${(
            item.price * item.quantity
          )
            .toFixed(2)
            .replace(".", ",")}`
      )
      .join("\n");

    const orderText = `
🍽️ *NOVO PEDIDO - ${branding.name.toUpperCase()}* 🍽️

📋 *ITENS DO PEDIDO:*
${orderItems}

💰 *RESUMO:*
Subtotal: ${menu.currency} ${subtotal.toFixed(2).replace(".", ",")}
Entrega: ${
      deliveryFee === 0
        ? "GRÁTIS"
        : `${menu.currency} ${deliveryFee.toFixed(2).replace(".", ",")}`
    }
*TOTAL: ${menu.currency} ${total.toFixed(2).replace(".", ",")}*

📍 *ENDEREÇO DE ENTREGA:*
[Por favor, informe seu endereço]

📝 *OBSERVAÇÕES:*
[Alguma observação sobre o pedido?]
`.trim();

    const encodedMessage = encodeURIComponent(orderText);
    const whatsappNumber = locations[0]?.whatsapp || branding.social.whatsapp;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const canCheckout = subtotal >= menu.minimumOrder;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <ShoppingBag style={{ color: branding.colors.primary }} size={24} />
            <h2 className="font-bold text-xl">Seu Carrinho</h2>
            <span
              className="text-sm font-bold px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${branding.colors.primary}20`,
                color: branding.colors.primary,
              }}
            >
              {cart.reduce((sum, item) => sum + item.quantity, 0)} itens
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-280px)]">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <ShoppingBag size={64} className="mb-4 opacity-50" />
              <p className="text-lg font-medium">Seu carrinho está vazio</p>
              <p className="text-sm">Adicione delícias do nosso cardápio!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-gray-50 rounded-xl p-3"
                >
                  <div
                    className="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0"
                    style={{
                      backgroundImage: item.image
                        ? `url('${item.image}')`
                        : `url('${branding.images.fallback}')`,
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm line-clamp-1">
                      {item.name}
                    </h4>
                    <p
                      className="font-bold mt-1"
                      style={{ color: branding.colors.primary }}
                    >
                      {menu.currency}{" "}
                      {(item.price * item.quantity)
                        .toFixed(2)
                        .replace(".", ",")}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:border-red-300 hover:text-red-600 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 text-white rounded-lg flex items-center justify-center transition-colors"
                        style={{ backgroundColor: branding.colors.primary }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full text-red-500 text-sm font-medium py-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Limpar carrinho
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 space-y-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>
                {menu.currency} {subtotal.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Entrega</span>
              <span
                className={
                  deliveryFee === 0 ? "text-green-600 font-semibold" : ""
                }
              >
                {deliveryFee === 0
                  ? "GRÁTIS"
                  : `${menu.currency} ${deliveryFee
                      .toFixed(2)
                      .replace(".", ",")}`}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>Total</span>
              <span style={{ color: branding.colors.primary }}>
                {menu.currency} {total.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>

          {subtotal > 0 && !canCheckout && (
            <div
              className="text-sm p-3 rounded-lg"
              style={{ backgroundColor: `${branding.colors.primary}20` }}
            >
              Pedido mínimo: {menu.currency}{" "}
              {menu.minimumOrder.toFixed(2).replace(".", ",")}
              <br />
              <span className="font-semibold">
                Faltam {menu.currency}{" "}
                {(menu.minimumOrder - subtotal).toFixed(2).replace(".", ",")}
              </span>
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={!canCheckout || cart.length === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
              canCheckout && cart.length > 0
                ? "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <MessageCircle size={24} />
            <span>Pedir pelo WhatsApp</span>
          </button>

          {locations[0]?.ifoodUrl && (
            <a
              href={locations[0].ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-center border-2 border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-50 transition-colors"
            >
              Ou peça pelo iFood
            </a>
          )}
        </div>
      </div>
    </>
  );
}
