import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, Star, ShoppingCart, Heart, Filter } from 'lucide-react'

const products = [
  { id: 1, name: 'Logo professionnel', price: 75000, category: 'Logo', image: '🎨', rating: 4.9, reviews: 89, stock: 999, vendor: 'DesignPro' },
  { id: 2, name: 'Carte de visite', price: 15000, category: 'Print', image: '💳', rating: 4.7, reviews: 234, stock: 999, vendor: 'PrintExpress' },
  { id: 3, name: 'Flyer A5', price: 8000, category: 'Print', image: '📄', rating: 4.6, reviews: 156, stock: 999, vendor: 'PrintExpress' },
  { id: 4, name: 'Catalogue produits', price: 125000, category: 'Print', image: '📚', rating: 4.8, reviews: 45, stock: 999, vendor: 'DesignPro' },
  { id: 5, name: 'Site webvitrine', price: 350000, category: 'Web', image: '🌐', rating: 4.9, reviews: 78, stock: 999, vendor: 'WebAgency' },
  { id: 6, name: 'Identite visuelle', price: 250000, category: 'Branding', image: '✨', rating: 5.0, reviews: 34, stock: 999, vendor: 'DesignPro' },
  { id: 7, name: 'Banner reseaux sociaux', price: 25000, category: 'Social', image: '📱', rating: 4.7, reviews: 123, stock: 999, vendor: 'SocialMedia Pro' },
  { id: 8, name: 'Presentation PowerPoint', price: 45000, category: 'Presentation', image: '📊', rating: 4.5, reviews: 67, stock: 999, vendor: 'DesignPro' },
]
const categories = ['Tout', 'Logo', 'Print', 'Web', 'Branding', 'Social']

export default function EDesigne() {
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('Tout')
  const filteredProducts = products.filter(p => activeCategory === 'Tout' || p.category === activeCategory)
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
            <a href="/e-expresse" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"><ArrowLeft className="w-4 h-4" /> Retour</a>
            <div className="flex items-center gap-4"><span className="text-6xl">🎨</span><div><h1 className="text-4xl font-bold text-white">E-Designe</h1><p className="text-purple-200">Design & Architecture - 89 produits</p></div></div>
          </motion.div>
        </div>
      </div>
      <div className="bg-slate-800 py-4"><div className="max-w-7xl mx-auto px-4 flex gap-2">{categories.map(cat => (<button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-lg ${activeCategory === cat ? 'bg-purple-500 text-white' : 'bg-slate-700 text-slate-400'}`}>{cat}</button>))}</div></div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product, i) => (<motion.div key={product.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50">
            <div className="bg-slate-900 p-6 text-center text-5xl">{product.image}</div>
            <div className="p-4"><p className="text-slate-400 text-xs">{product.vendor}</p><h3 className="text-white font-bold mb-2">{product.name}</h3><div className="flex items-center gap-1 mb-2"><Star className="w-4 h-4 text-yellow-400 fill-current"/><span className="text-white text-sm">{product.rating}</span></div><p className="text-cyan-400 font-bold text-xl mb-3">{product.price.toLocaleString()} XAF</p><button onClick={() => setCart([...cart,product])} className="w-full py-2 bg-purple-500 text-white rounded-lg font-bold"><ShoppingCart className="w-4 h-4 inline mr-1"/>Ajouter</button></div>
          </motion.div>))}
        </div>
      </div>
    </div>
  )
}
