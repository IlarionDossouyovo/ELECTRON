import { motion } from 'framer-motion'
import { Truck, Package, MapPin, Navigation, Clock, Shield, Zap, Globe, Drone, RotateCcw } from 'lucide-react'
import { useState } from 'react'

const deliveries = [
  { id: 'CMD-001', status: 'En livraison', destination: 'Cotonou, Benin', progress: 75, eta: '14:30' },
  { id: 'CMD-002', status: 'En entrepôt', destination: 'Lomé, Togo', progress: 45, eta: 'Demain' },
  { id: 'CMD-003', status: 'Livré', destination: 'Abidjan, CI', progress: 100, eta: 'Terminé' },
  { id: 'CMD-004', status: 'En cours', destination: 'Dakar, Senegal', progress: 20, eta: '2 jours' },
]

const trackingSteps = [
  { status: 'Commande passée', time: '09:00', completed: true },
  { status: 'Payé et confirmé', time: '09:15', completed: true },
  { status: 'En préparation', time: '10:30', completed: true },
  { status: 'Expédié', time: '14:00', completed: true },
  { status: 'En livraison', time: '--:--', completed: false },
  { status: 'Livré', time: '--:--', completed: false },
]

const stats = [
  { label: 'Colis aujourd\'hui', value: '1,247' },
  { label: 'En livraison', value: '89' },
  { label: 'Livrés', value: '1,158' },
  { label: 'Temps moyen', value: '2.3h' },
]

const fleet = [
  { type: 'Véhicules', count: 45, status: 'Actifs' },
  { type: 'Drones', count: 12, status: 'En vol' },
  { type: 'Entrepôts', count: 8, status: 'Opérationnels' },
  { type: 'Livreurs', count: 156, status: 'En service' },
]

export default function Logistics() {
  const [trackId, setTrackId] = useState('')

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
            <Truck className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Module Logistique</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Transport & Logistique <span className="gradient-text">Intelligente</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Planification automatique, suivi GPS temps réel, livraison par drone ou véhicule autonome. 
            Optimisé pour l'Afrique et le monde entier.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Package className="w-6 h-6 mr-2 text-cyan-400" />
            Suivre un colis
          </h3>
          
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
              placeholder="Entrez le numéro de suivi"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button className="px-6 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors">
              Suivre
            </button>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {trackingSteps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.completed ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-700/50 text-slate-500'
                }`}>
                  {step.completed ? <Package className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                </div>
                <div className="ml-4 flex-1">
                  <p className={`font-medium ${step.completed ? 'text-white' : 'text-slate-500'}`}>
                    {step.status}
                  </p>
                  <p className="text-sm text-slate-500">{step.time}</p>
                </div>
                {idx < trackingSteps.length - 1 && (
                  <div className={`w-px h-8 ${step.completed ? 'bg-cyan-500/50' : 'bg-slate-700'}`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fleet Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Globe className="w-6 h-6 mr-2 text-cyan-400" />
            Flotte & Entrepôts
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {fleet.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-700/30 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{item.type}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'Actifs' || item.status === 'En vol' || item.status === 'Opérationnels' || item.status === 'En service'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">{item.count}</div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center">
            <Navigation className="w-5 h-5 mr-2" />
            Voir la carte
          </button>
        </motion.div>
      </div>

      {/* Active Deliveries */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6">Livraisons actives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deliveries.map((delivery, idx) => (
            <motion.div
              key={delivery.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl flex items-center justify-between"
            >
              <div>
                <p className="text-white font-medium">{delivery.id}</p>
                <p className="text-sm text-slate-400 flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {delivery.destination}
                </p>
              </div>
              <div className="text-right">
                <span className={`text-sm ${
                  delivery.status === 'Livré' ? 'text-green-400' : 'text-cyan-400'
                }`}>
                  {delivery.status}
                </span>
                <p className="text-xs text-slate-500 mt-1">ETA: {delivery.eta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}