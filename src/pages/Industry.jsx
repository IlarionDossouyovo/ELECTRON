import { motion } from 'framer-motion'
import { Building2, Package, Truck, Factory, MapPin, DollarSign, Cpu, Shield, Globe, Zap } from 'lucide-react'

const stats = [
  { label: 'Commandes B2B', value: '12,847' },
  { label: 'Chiffre d\'affaires', value: '2.5M €' },
  { label: 'livraisons', value: '8,459' },
  { label: 'Entrepôts', value: '24' },
]

const orders = [
  { id: 'PO-2024-001', client: 'Distri Africa', items: 450, status: 'En cours', total: '1,250,000' },
  { id: 'PO-2024-002', client: 'TechShop Lomé', items: 120, status: 'Livré', total: '340,000' },
  { id: 'PO-2024-003', client: 'MegaStore CI', items: 890, status: 'En préparation', total: '2,100,000' },
  { id: 'PO-2024-004', client: 'Commerce Dakar', items: 75, status: 'En transit', total: '180,000' },
]

const features = [
  { icon: Package, title: 'Gestion B2B', desc: 'Commandes par palettes, conteneurs' },
  { icon: Globe, title: 'Douanes', desc: 'Intégration automatique' },
  { icon: Cpu, title: 'Prédiction IA', desc: 'Besoins en stock' },
  { icon: Shield, title: 'Traçabilité', desc: 'Blockchain & suivi' },
]

export default function Industry() {
  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Header */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-5/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <Building2 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Module Industrie</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Industrie & <span className="gradient-text">Distribution</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Gestion B2B, entrepôts 4.0, douanes automatisées, et optimisation 
            de la chaîne logistique.
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

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl"
          >
            <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Orders */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6">Commandes B2B</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-4 text-slate-400 font-medium">Commande</th>
                <th className="text-left py-4 px-4 text-slate-400 font-medium">Client</th>
                <th className="text-left py-4 px-4 text-slate-400 font-medium">Articles</th>
                <th className="text-left py-4 px-4 text-slate-400 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-slate-400 font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="border-b border-slate-700/50"
                >
                  <td className="py-4 px-4 text-white font-medium">{order.id}</td>
                  <td className="py-4 px-4 text-slate-300">{order.client}</td>
                  <td className="py-4 px-4 text-slate-300">{order.items}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Livré' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'En cours' ? 'bg-cyan-500/20 text-cyan-400' :
                      order.status === 'En transit' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white text-right font-medium">{order.total} CFA</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quote Generator */}
      <div className="max-w-xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <DollarSign className="w-6 h-6 mr-2 text-cyan-400" />
            Générateur de devis
          </h3>
          <form className="space-y-4">
            <input type="text" placeholder="Nom de l'entreprise" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Type de produit" className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
              <input type="number" placeholder="Quantité" className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            </div>
            <input type="text" placeholder="Destination" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl">
              Générer un devis
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}