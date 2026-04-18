import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Truck, Package, CheckCircle, Clock, AlertCircle } from 'lucide-react'

const trackingSteps = [
  { id: 1, name: 'Commande confirmee', date: '2026-04-10 09:30', status: 'completed', location: 'Cotonou' },
  { id: 2, name: 'Paiement recu', date: '2026-04-10 09:35', status: 'completed', location: 'Cotonou' },
  { id: 3, name: 'Preparation commande', date: '2026-04-11 14:00', status: 'completed', location: 'Entrepot Cotonou' },
  { id: 4, name: 'Expedition', date: '2026-04-12 08:00', status: 'current', location: 'Hub logistique' },
  { id: 5, name: 'En cours de livraison', date: '', status: 'pending', location: '' },
  { id: 6, name: 'Livre', date: '', status: 'pending', location: '' },
]

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('ORD-2026-001')
  const order = { id: orderId, date: '2026-04-10', total: 185000, items: 3, estimated: '2026-04-16' }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
          <Package className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Suivi de <span className="text-cyan-400">Commande</span></h1>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="mb-8">
          <label className="text-slate-400 text-sm mb-2 block">Numero de commande</label>
          <div className="flex gap-3">
            <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white" placeholder="ORD-2026-001" />
            <button className="px-6 py-3 gradient-bg text-white font-bold rounded-lg">Suivre</button>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm">Commande</p>
              <p className="text-white font-bold text-xl">{order.id}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">Livraison prevue</p>
              <p className="text-cyan-400 font-bold">{order.estimated}</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <div><span className="text-slate-400">Articles:</span> <span className="text-white">{order.items}</span></div>
            <div><span className="text-slate-400">Total:</span> <span className="text-cyan-400 font-bold">{order.total.toLocaleString()} XAF</span></div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <Truck className="w-6 h-6 text-cyan-400" /> Historique de suivi
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
            <div className="space-y-6">
              {trackingSteps.map((step, i) => (
                <div key={step.id} className="flex items-start gap-4 relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                    step.status === 'completed' ? 'bg-green-500' : step.status === 'current' ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}>
                    {step.status === 'completed' ? <CheckCircle className="w-5 h-5 text-white" /> :
                     step.status === 'current' ? <Truck className="w-5 h-5 text-white animate-pulse" /> :
                     <Clock className="w-5 h-5 text-slate-500" />}
                  </div>
                  <div className="flex-1 pb-6">
                    <p className={`font-bold ${step.status === 'pending' ? 'text-slate-500' : 'text-white'}`}>{step.name}</p>
                    {step.date && <p className="text-slate-400 text-sm">{step.date} - {step.location}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}