import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react'
const products = [
  { id: 1, name: 'Plan de masse', price: 150000, category: 'Topographie', image: '📐', rating: 4.9, reviews: 45, vendor: 'GeoPro' },
  { id: 2, name: 'Mission topographique', price: 250000, category: 'Topographie', image: '🗺️', rating: 5.0, reviews: 23, vendor: 'GeoPro' },
  { id: 3, name: 'Plan batiment R+2', price: 350000, category: 'Architecture', image: '🏗️', rating: 4.8, reviews: 67, vendor: 'ArchTech' },
  { id: 4, name: 'Plan voirie', price: 200000, category: 'VRD', image: '🛣️', rating: 4.7, reviews: 34, vendor: 'GeoPro' },
]
export default function CAOTopographique() {
  const [cart, setCart] = useState([])
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
            <a href="/e-expresse" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"><ArrowLeft className="w-4 h-4" /> Retour</a>
            <div className="flex items-center gap-4"><span className="text-6xl">📐</span><div><h1 className="text-4xl font-bold text-white">CAO-Topographique</h1><p className="text-indigo-200">Ingenierie & Topographie - 67 services</p></div></div>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, i) => (<motion.div key={p.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-slate-800 border border-slate-700 rounded-xl p-4"><div className="text-5xl text-center mb-4">{p.image}</div><h3 className="text-white font-bold mb-2">{p.name}</h3><div className="flex items-center gap-1 mb-2"><Star className="w-4 h-4 text-yellow-400 fill-current"/><span className="text-white text-sm">{p.rating}</span></div><p className="text-cyan-400 font-bold text-xl mb-3">{p.price.toLocaleString()} XAF</p><button onClick={() => setCart([...cart,p])} className="w-full py-2 bg-indigo-500 text-white rounded-lg font-bold"><ShoppingCart className="w-4 h-4 inline mr-1"/>Commander</button></motion.div>))}
        </div>
      </div>
    </div>
  )
}
