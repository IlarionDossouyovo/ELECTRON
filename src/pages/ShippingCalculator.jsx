import { motion } from 'framer-motion'
import { useState } from 'react'
import { Truck, Package, MapPin, Clock, DollarSign, Calculator } from 'lucide-react'

const destinations = [
  { name: 'Cotonou, Benin', region: 'Benin', multiplier: 1 },
  { name: 'Porto-Novo, Benin', region: 'Benin', multiplier: 1.2 },
  { name: 'Abidjan, Cote d\'Ivoire', region: 'CI', multiplier: 2.5 },
  { name: 'Dakar, Senegal', region: 'Senegal', multiplier: 3 },
  { name: 'Lome, Togo', region: 'Togo', multiplier: 1.5 },
  { name: 'Paris, France', region: 'Europe', multiplier: 8 },
  { name: 'New York, USA', region: 'USA', multiplier: 12 },
]

const deliveryMethods = [
  { name: 'Standard', days: '5-7 jours', price: 2500 },
  { name: 'Express', days: '2-3 jours', price: 5000 },
  { name: 'Prioritaire', days: '24-48h', price: 12000 },
  { name: 'Retrait magazin', days: '立即', price: 0 },
]

export default function ShippingCalculator() {
  const [destination, setDestination] = useState(destinations[0])
  const [weight, setWeight] = useState(1)
  const [method, setMethod] = useState(deliveryMethods[0])
  const [showResults, setShowResults] = useState(false)

  const basePrice = 1500
  const shippingCost = (basePrice + (weight * 500)) * destination.multiplier + method.price
  const freeShippingThreshold = 50000

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
          <Calculator className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Calculateur de <span className="text-cyan-400">Livraison</span></h1>
          <p className="text-slate-400 mt-2">Estimez les frais de livraison pour votre commande</p>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-slate-400 text-sm mb-2 block">Destination</label>
              <select value={destination.name} onChange={(e) => setDestination(destinations.find(d => d.name === e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white">
                {destinations.map(d => (<option key={d.name} value={d.name}>{d.name} ({d.region})</option>))}
              </select>
            </div>
            <div>
              <label className="text-slate-400 text-sm mb-2 block">Poids (kg)</label>
              <input type="number" min="0.1" max="50" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
            </div>
          </div>

          <label className="text-slate-400 text-sm mb-3 block">Mode de livraison</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {deliveryMethods.map(m => (
              <button key={m.name} onClick={() => setMethod(m)}
                className={`p-4 rounded-xl border text-center ${method.name === m.name ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-700 hover:border-slate-600'}`}>
                <Truck className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-bold">{m.name}</p>
                <p className="text-slate-400 text-sm">{m.days}</p>
                <p className="text-cyan-400 font-bold mt-1">{m.price === 0 ? 'Gratuit' : m.price.toLocaleString() + ' XAF'}</p>
              </button>
            ))}
          </div>

          <button onClick={() => setShowResults(true)} className="w-full py-4 gradient-bg text-white font-bold rounded-xl">
            Calculer le prix
          </button>

          {showResults && (
            <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} className="mt-8 p-6 bg-slate-900 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400">Frais de livraison</span>
                <span className="text-2xl font-bold text-cyan-400">{shippingCost.toLocaleString()} XAF</span>
              </div>
              {shippingCost > freeShippingThreshold && (
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg mb-4">
                  <Truck className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Livraison gratuite!</span>
                </div>
              )}
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Delai estime</span>
                <span>{method.days}</span>
              </div>
              <button className="w-full mt-4 py-3 bg-cyan-500 text-white rounded-lg font-bold">Commander avec ce tarif</button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}