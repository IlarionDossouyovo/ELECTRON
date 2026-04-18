import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock, Zap, Flame, Percent } from 'lucide-react'

const flashSales = [
  { id: 1, name: 'iPhone 15 Pro', original: 950000, sale: 750000, ends: '2026-04-16T20:00:00', sold: 45, total: 100, image: '📱' },
  { id: 2, name: 'MacBook Air', original: 750000, sale: 599000, ends: '2026-04-16T18:00:00', sold: 23, total: 50, image: '💻' },
  { id: 3, name: 'AirPods Max', original: 350000, sale: 249000, ends: '2026-04-16T22:00:00', sold: 78, total: 100, image: '🎧' },
  { id: 4, name: 'iPad Pro', original: 800000, sale: 650000, ends: '2026-04-17T12:00:00', sold: 12, total: 30, image: '📱' },
]

function Countdown({ target }) {
  const [time, setTime] = useState({h:0,m:0,s:0})
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(target) - new Date()
      if (diff > 0) {
        setTime({h: Math.floor(diff/3600000), m: Math.floor((diff%3600000)/60000), s: Math.floor((diff%60000)/1000)})
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [target])
  return <span className="font-mono text-cyan-400">{time.h}h {time.m}m {time.s}s</span>
}

export default function FlashSales() {
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/20 border border-red-500 rounded-full mb-4">
            <Flame className="w-6 h-6 text-red-400" />
            <span className="text-red-400 font-bold text-xl">FLASH SALES</span>
          </div>
          <h1 className="text-4xl font-bold text-white">Offres <span className="text-cyan-400">Flash</span></h1>
          <p className="text-slate-400 mt-2">Ne manquez pas nos offres a duree limitee!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flashSales.map((sale, i) => (
            <motion.div key={sale.id} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:0.1*i}}
              className="bg-slate-800 border border-red-500/30 rounded-2xl overflow-hidden">
              <div className="relative">
                <div className="bg-slate-900 p-12 text-center text-7xl">{sale.image}</div>
                <div className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white font-bold rounded-full flex items-center gap-2">
                  <Percent className="w-4 h-4" />
                  {Math.round((1 - sale.sale/sale.original)*100)}%
                </div>
                <div className="absolute top-4 left-4 px-3 py-2 bg-slate-900/80 rounded-lg flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <Countdown target={sale.ends} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{sale.name}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-2xl font-bold text-cyan-400">{sale.sale.toLocaleString()} XAF</span>
                  <span className="text-slate-500 line-through">{sale.original.toLocaleString()} XAF</span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-slate-400 mb-1">
                    <span>Vendus: {sale.sold}/{sale.total}</span>
                    <span>{Math.round(sale.sold/sale.total*100)}%</span>
                  </div>
                  <div className="bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full" style={{width: `${sale.sold/sale.total*100}%`}}></div>
                  </div>
                </div>
                <button className="w-full mt-4 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" /> Acheter maintenant
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}