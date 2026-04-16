import { motion } from 'framer-motion'
import { ShoppingCart, Filter, Search, Heart, Star, Plus, Minus, Truck, Shield, CreditCard, Sparkles } from 'lucide-react'
import { useState } from 'react'

const products = [
  { id: 1, name: 'Smartphone Pro', price: 45000, category: 'Electronics', image: '📱', rating: 4.8, reviews: 234 },
  { id: 2, name: 'Laptop Ultra', price: 85000, category: 'Electronics', image: '💻', rating: 4.9, reviews: 189 },
  { id: 3, name: 'Montre Connectée', price: 15000, category: 'Accessories', image: '⌚', rating: 4.7, reviews: 156 },
  { id: 4, name: 'Casque Audio', price: 25000, category: 'Accessories', image: '🎧', rating: 4.6, reviews: 98 },
  { id: 5, name: 'Tablette HD', price: 35000, category: 'Electronics', image: '📱', rating: 4.5, reviews: 167 },
  { id: 6, name: 'Appareil Photo', price: 65000, category: 'Electronics', image: '📷', rating: 4.9, reviews: 87 },
]

const categories = ['Tous', 'Electronics', 'Accessories', 'Mode', 'Maison', 'Sports']

const features = [
  { icon: Sparkles, title: 'Recommandations IA', desc: 'Produits personnalisés selon vos besoins' },
  { icon: Filter, title: 'Filtres avancés', desc: 'Par prix, marque, géolocalisation' },
  { icon: Shield, title: 'Paiement sécurisé', desc: 'Cryptage TLS 1.3, 3D Secure' },
  { icon: Truck, title: 'Livraison express', desc: 'Suivi GPS en temps réel' },
]

export default function Ecommerce() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [cart, setCart] = useState([])

  const filteredProducts = selectedCategory === 'Tous' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Header */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <ShoppingCart className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Module E-commerce</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            E-commerce <span className="gradient-text">Intelligent</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Créez votre boutique en ligne avec IA, recommandations personnalisées, 
            filtres avancés et paiement sécurisé multi-devises.
          </motion.p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl"
          >
            <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden card-hover"
            >
              <div className="h-48 bg-slate-700/30 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-cyan-400">{product.category}</span>
                  <div className="flex items-center text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm ml-1">{product.rating}</span>
                    <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{product.name}</h3>
                <p className="text-cyan-400 font-bold text-xl mb-4">
                  {product.price.toLocaleString()} CFA
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 py-2 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Ajouter
                  </button>
                  <button className="p-2 bg-slate-700 text-slate-400 rounded-lg hover:text-red-400 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Floating */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          <span className="font-semibold">{cart.length} articles</span>
        </div>
      )}
    </div>
  )
}