import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Share2, Flag, Star, Check } from 'lucide-react'

const products = [
  { id: 1, name: 'iPhone 15 Pro', rating: 4.8, reviews: 234, price: 850000, image: '📱' },
  { id: 2, name: 'MacBook Air M3', rating: 4.9, reviews: 156, price: 680000, image: '💻' },
  { id: 3, name: 'AirPods Pro 2', rating: 4.7, reviews: 412, price: 185000, image: '🎧' },
]

export default function Wishlist() {
  const [items, setItems] = useState(products)

  const removeItem = (id) => {
    setItems(items.filter(i => i.id !== id))
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
          <h1 className="text-4xl font-bold text-white mb-2">Ma <span className="text-cyan-400">Wishlist</span></h1>
          <p className="text-slate-400">{items.length} produits sauvegardes</p>
        </motion.div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-20 h-20 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-xl">Votre wishlist est vide</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {items.map((product, i) => (
              <motion.div key={product.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1*i}}
                className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                <div className="bg-slate-900 p-8 text-center text-6xl">{product.image}</div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (<Star key={j} className={`w-4 h-4 ${j < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />))}
                    </div>
                    <span className="text-slate-400 text-sm">({product.reviews})</span>
                  </div>
                  <p className="text-cyan-400 font-bold text-xl mt-2">{product.price.toLocaleString()} XAF</p>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 py-2 gradient-bg text-white rounded-lg font-bold">Ajouter au panier</button>
                    <button onClick={() => removeItem(product.id)} className="p-2 bg-slate-700 text-red-400 rounded-lg"><Heart className="w-5 h-5 fill-current" /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}