import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Store, ArrowLeft, Star, ShoppingCart, Heart, Share2, 
  Package, Truck, Shield, MessageCircle, Plus, Minus,
  CreditCard, CheckCircle, Filter
} from 'lucide-react'

const products = [
  { id: 1, name: 'Ciment OPC 42.5 (50kg)', price: 6500, category: 'Materiaux', image: '🏗️', rating: 4.8, reviews: 234, stock: 1500, vendor: 'BatiPro' },
  { id: 2, name: 'Sable fin (m3)', price: 25000, category: 'Materiaux', image: '🏜️', rating: 4.6, reviews: 89, stock: 200, vendor: 'BatiPro' },
  { id: 3, name: 'Parpaing 20x20x40', price: 350, category: 'Materiaux', image: '🧱', rating: 4.7, reviews: 567, stock: 5000, vendor: 'BatiPro' },
  { id: 4, name: 'Feron d\'armature 8mm', price: 2800, category: 'Fer', image: '🔩', rating: 4.9, reviews: 123, stock: 800, vendor: 'Metaux Benin' },
  { id: 5, name: 'Peinture facade blanche', price: 12500, category: 'Peinture', image: '🎨', rating: 4.5, reviews: 78, stock: 120, vendor: 'Peintures BJ' },
  { id: 6, name: 'Tuiles terre cuite', price: 850, category: 'Toiture', image: '🏠', rating: 4.8, reviews: 201, stock: 3000, vendor: 'Toiture Pro' },
  { id: 7, name: 'Gravier concasse (m3)', price: 35000, category: 'Materiaux', image: '🪨', rating: 4.4, reviews: 45, stock: 150, vendor: 'BatiPro' },
  { id: 8, name: 'Beton prets a emploi', price: 45000, category: 'Beton', image: '🧱', rating: 4.7, reviews: 67, stock: 50, vendor: 'BetonExpress' },
]

const categories = ['Tout', 'Materiaux', 'Fer', 'Peinture', 'Toiture', 'Beton']

export default function EBattisseurs() {
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('Tout')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(p => {
    const matchCategory = activeCategory === 'Tout' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
            <a href="/e-expresse" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" /> Retour a E-Expresse
            </a>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">🏗️</span>
              <div>
                <h1 className="text-4xl font-bold text-white">E-Battisseurs</h1>
                <p className="text-orange-200">Construction & Batiment - 156 produits</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-300">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold">4.7</span>
                <span className="text-orange-200">(234 avis)</span>
              </div>
              <span className="text-orange-200">|</span>
              <span className="text-orange-200">23 vendeurs</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-800 border-b border-slate-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-4">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher..." 
            className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
          />
          <div className="flex gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg ${activeCategory === cat ? 'bg-orange-500 text-white' : 'bg-slate-700 text-slate-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2 text-slate-400">
            <Filter className="w-4 h-4" />
            <span>{filteredProducts.length} produits</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:i*0.05}}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition"
            >
              <div className="bg-slate-900 p-6 text-center text-5xl">{product.image}</div>
              <div className="p-4">
                <p className="text-slate-400 text-xs mb-1">{product.vendor}</p>
                <h3 className="text-white font-bold mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm">{product.rating}</span>
                  <span className="text-slate-500 text-xs">({product.reviews})</span>
                </div>
                <p className="text-cyan-400 font-bold text-xl mb-3">{product.price.toLocaleString()} XAF</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex-1 py-2 bg-orange-500 text-white rounded-lg text-sm font-bold hover:bg-orange-600 flex items-center justify-center gap-1"
                  >
                    <ShoppingCart className="w-4 h-4" /> Ajouter
                  </button>
                  <button className="px-3 py-2 bg-slate-700 text-slate-400 rounded-lg">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-cyan-500 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </div>
              <div>
                <p className="text-white font-bold">{cart.length} produit(s) dans le panier</p>
                <p className="text-cyan-400 font-bold">{cart.reduce((sum, p) => sum + p.price, 0).toLocaleString()} XAF</p>
              </div>
            </div>
            <button className="px-8 py-3 gradient-bg text-white font-bold rounded-xl">
              Passer a la caisse avec Electron Pay
            </button>
          </div>
        </div>
      )}
    </div>
  )
}