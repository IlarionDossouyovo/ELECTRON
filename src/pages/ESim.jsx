import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react'
const products = [
  { id: 1, name: 'SIM 4G + 10Go Data', price: 3500, category: 'SIM', image: '📱', rating: 4.6, reviews: 2341, vendor: 'TelecomBJ' },
  { id: 2, name: 'SIM 5G + 50Go Data', price: 8000, category: 'SIM', image: '📱', rating: 4.8, reviews: 1234, vendor: 'TelecomBJ' },
  { id: 3, name: 'Recharge 5Go', price: 2000, category: 'Recharge', image: '💳', rating: 4.5, reviews: 5678, vendor: 'TelecomBJ' },
  { id: 4, name: 'Recharge 10Go', price: 3500, category: 'Recharge', image: '💳', rating: 4.7, reviews: 3456, vendor: 'TelecomBJ' },
  { id: 5, name: 'Recharge 20Go', price: 6500, category: 'Recharge', image: '💳', rating: 4.9, reviews: 1234, vendor: 'TelecomBJ' },
  { id: 6, name: 'Kit main libre', price: 5500, category: 'Accessoires', image: '🎧', rating: 4.4, reviews: 567, vendor: 'AccessoirePro' },
  { id: 7, name: 'Chargeur rapide', price: 8500, category: 'Accessoires', image: '🔌', rating: 4.6, reviews: 890, vendor: 'AccessoirePro' },
  { id: 8, name: 'Powerbank 10000mAh', price: 15000, category: 'Accessoires', image: '🔋', rating: 4.7, reviews: 456, vendor: 'AccessoirePro' },
]
export default function ESim() {
  const [cart, setCart] = useState([])
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
            <a href="/e-expresse" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"><ArrowLeft className="w-4 h-4" /> Retour</a>
            <div className="flex items-center gap-4"><span className="text-6xl">📱</span><div><h1 className="text-4xl font-bold text-white">E-Sim</h1><p className="text-blue-200">Telecom & Connectivite - 234 produits</p></div></div>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, i) => (<motion.div key={product.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className="text-5xl text-center mb-4">{product.image}</div><h3 className="text-white font-bold mb-2">{product.name}</h3><div className="flex items-center gap-1 mb-2"><Star className="w-4 h-4 text-yellow-400 fill-current"/><span className="text-white text-sm">{product.rating}</span></div><p className="text-cyan-400 font-bold text-xl mb-3">{product.price.toLocaleString()} XAF</p><button onClick={() => setCart([...cart,product])} className="w-full py-2 bg-blue-500 text-white rounded-lg font-bold"><ShoppingCart className="w-4 h-4 inline mr-1"/>Ajouter</button>
          </motion.div>))}
        </div>
      </div>
    </div>
  )
}
