import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react'
const products = [
  { id: 1, name: 'Nettoyage maison (2h)', price: 8000, category: 'Residentiel', image: '🏠', rating: 4.8, reviews: 156, vendor: 'CleanPro' },
  { id: 2, name: 'Nettoyage bureau', price: 25000, category: 'Commercial', image: '🏢', rating: 4.7, reviews: 89, vendor: 'CleanPro' },
  { id: 3, name: 'Nettoyage profondeur', price: 45000, category: 'Special', image: '✨', rating: 4.9, reviews: 45, vendor: 'DeepClean' },
  { id: 4, name: 'Lessivage peinture', price: 35000, category: 'Special', image: '🧽', rating: 4.6, reviews: 34, vendor: 'CleanPro' },
]
const categories = ['Tout', 'Residentiel', 'Commercial', 'Special']
export default function EClean() {
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('Tout')
  const filteredProducts = products.filter(p => activeCategory === 'Tout' || p.category === activeCategory)
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
            <a href="/e-expresse" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"><ArrowLeft className="w-4 h-4" /> Retour</a>
            <div className="flex items-center gap-4"><span className="text-6xl">🧹</span><div><h1 className="text-4xl font-bold text-white">E-Clean</h1><p className="text-cyan-200">Services de Nettoyage - 45 services</p></div></div>
          </motion.div>
        </div>
      </div>
      <div className="bg-slate-800 py-4"><div className="max-w-7xl mx-auto px-4 flex gap-2">{categories.map(cat => (<button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-lg ${activeCategory === cat ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-400'}`}>{cat}</button>))}</div></div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product, i) => (<motion.div key={product.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className="text-5xl text-center mb-4">{product.image}</div><h3 className="text-white font-bold mb-2">{product.name}</h3><div className="flex items-center gap-1 mb-2"><Star className="w-4 h-4 text-yellow-400 fill-current"/><span className="text-white text-sm">{product.rating}</span></div><p className="text-cyan-400 font-bold text-xl mb-3">{product.price.toLocaleString()} XAF</p><button onClick={() => setCart([...cart,product])} className="w-full py-2 bg-cyan-500 text-white rounded-lg font-bold"><ShoppingCart className="w-4 h-4 inline mr-1"/>Commander</button>
          </motion.div>))}
        </div>
      </div>
    </div>
  )
}
