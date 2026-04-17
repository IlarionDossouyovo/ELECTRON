import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  ShoppingCart, Plus, Minus, Trash2, Heart, Tag, CreditCard,
  Truck, Shield, ArrowRight, ShoppingBag, X, Promo
} from 'lucide-react'

const cartItems = [
  { id: 1, name: 'iPhone 15 Pro 256GB', price: 850000, image: '📱', quantity: 1, inStock: true },
  { id: 2, name: 'AirPods Pro 2nd Gen', price: 145000, image: '🎧', quantity: 2, inStock: true },
  { id: 3, name: 'MacBook Air M2', price: 680000, image: '💻', quantity: 1, inStock: false },
]

const recommendations = [
  { id: 1, name: 'Apple Watch Ultra', price: 520000, image: '⌚' },
  { id: 2, name: 'iPad Pro 12.9"', price: 720000, image: '📱' },
  { id: 3, name: 'Magic Keyboard', price: 89000, image: '⌨️' },
]

export default function Cart() {
  const [items, setItems] = useState(cartItems)
  const [promoCode, setPromoCode] = useState('')
  const [showPromo, setShowPromo] = useState(false)

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQty }
      }
      return item
    }))
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 500000 ? 0 : 5000
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      <div className="px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-white">Panier</h1>
          <p className="text-slate-400">{items.length} article(s) dans votre panier</p>
        </motion.div>
      </div>

      <div className="px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.length === 0 ? (
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-12 text-center">
                <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-white text-xl mb-2">Votre panier est vide</p>
                <p className="text-slate-400 mb-4">Découvrez nos produits</p>
                <a href="/ecommerce" className="px-6 py-3 bg-cyan-500 text-white rounded-xl inline-block">
                  Parcourir
                </a>
              </div>
            ) : (
              items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center text-3xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-cyan-400 font-bold">{item.price.toLocaleString()} XAF</p>
                      {!item.inStock && (
                        <span className="text-red-400 text-sm">Rupture de stock</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-lg"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))
            )}

            {/* Promo Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
            >
              <button 
                onClick={() => setShowPromo(!showPromo)}
                className="flex items-center text-white"
              >
                <Tag className="w-5 h-5 mr-2 text-cyan-400" />
                Code promo
                <ArrowRight className={`w-5 h-5 ml-auto transition-transform ${showPromo ? 'rotate-90' : ''}`} />
              </button>
              {showPromo && (
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Entrez votre code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                  />
                  <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg">Appliquer</button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold text-white mb-4">Résumé</h2>
              
              <div className="space-y-3 border-b border-slate-700 pb-4">
                <div className="flex justify-between text-slate-400">
                  <span>Sous-total ({items.length} articles)</span>
                  <span className="text-white">{subtotal.toLocaleString()} XAF</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Livraison</span>
                  <span className={shipping === 0 ? 'text-green-400' : 'text-white'}>
                    {shipping === 0 ? 'Gratuite' : `${shipping.toLocaleString()} XAF`}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>TVA (18%)</span>
                  <span className="text-white">{tax.toLocaleString()} XAF</span>
                </div>
              </div>

              <div className="py-4 border-b border-slate-700">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-cyan-400">{total.toLocaleString()} XAF</span>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-center text-slate-400 text-sm">
                  <Truck className="w-4 h-4 mr-2" />
                  Livraison gratuite dès 500.000 XAF
                </div>
                <div className="flex items-center text-slate-400 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Garantie 2 ans incluse
                </div>
              </div>

              <button className="w-full mt-6 py-4 gradient-bg text-white font-bold rounded-xl flex items-center justify-center">
                Passer la commande
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button className="w-full mt-3 py-3 bg-slate-700 text-white rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Paiement en plusieurs fois
              </button>
            </motion.div>
          </div>
        </div>

        {/* Recommendations */}
        {items.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Vous aimerez aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendations.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-cyan-500 cursor-pointer"
                >
                  <div className="w-full h-32 bg-slate-900 rounded-lg flex items-center justify-center text-4xl mb-4">
                    {item.image}
                  </div>
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-cyan-400 font-bold">{item.price.toLocaleString()} XAF</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}