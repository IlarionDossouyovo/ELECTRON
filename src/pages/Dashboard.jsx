import { motion } from 'framer-motion'
import { 
  Users, ShoppingCart, DollarSign, TrendingUp, Package, 
  Truck, BarChart3, CreditCard, AlertTriangle, CheckCircle,
  ArrowUp, ArrowDown, Calendar, Activity, Scale, Wallet
} from 'lucide-react'

const stats = [
  { label: 'Revenus', value: '12.4M', change: '+12%', icon: DollarSign, color: 'green' },
  { label: 'Commandes', value: '847', change: '+8%', icon: ShoppingCart, color: 'cyan' },
  { label: 'Clients', value: '2,341', change: '+15%', icon: Users, color: 'purple' },
  { label: 'Livraisons', value: '723', change: '-2%', icon: Truck, color: 'orange' },
]

const orders = [
  { id: 'ORD-2024-001', client: 'Jean Dupont', produit: 'iPhone 15 Pro', montant: 850000, statut: 'En cours', date: '16/04/2026' },
  { id: 'ORD-2024-002', client: 'Marie Kouassi', produit: 'MacBook Air', montant: 680000, statut: 'Livré', date: '16/04/2026' },
  { id: 'ORD-2024-003', client: 'Paul Obame', produit: 'AirPods Pro', montant: 145000, statut: 'En attente', date: '15/04/2026' },
  { id: 'ORD-2024-004', client: 'Alice Sossa', produit: 'iPad Air', montant: 420000, statut: 'Expédié', date: '15/04/2026' },
  { id: 'ORD-2024-005', client: 'Koffi Mensah', produit: 'Watch Ultra', montant: 520000, statut: 'En cours', date: '14/04/2026' },
]

const topProducts = [
  { name: 'iPhone 15 Pro', sales: 156, revenue: '3.2M' },
  { name: 'MacBook Pro 14"', sales: 89, revenue: '5.8M' },
  { name: 'AirPods Pro', sales: 234, revenue: '1.8M' },
  { name: 'iPad Pro 12.9"', sales: 67, revenue: '2.1M' },
  { name: 'Watch Ultra', sales: 45, revenue: '1.1M' },
]

const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin']
const revenueData = [1200000, 1800000, 2100000, 1950000, 2800000, 3200000]

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Header */}
      <div className="px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-400">Bienvenue, DOSSOU-YOVO Ilarion</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Calendar className="w-4 h-4 mr-2" /> Aujourd'hui
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold">
              Exporter
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                <span className={`flex items-center text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change.startsWith('+') ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-bold flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
                Revenus
              </h2>
              <select className="bg-slate-700 text-white text-sm rounded-lg px-3 py-1">
                <option>Ce mois</option>
                <option>Mois dernier</option>
                <option>Cette année</option>
              </select>
            </div>
            
            <div className="flex items-end gap-2 h-48">
              {revenueData.map((value, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(value / 3500000) * 100}%` }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {months.map((m, i) => (
                <span key={i} className="text-slate-400 text-xs">{m}</span>
              ))}
            </div>
          </motion.div>

          {/* Top Products */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h2 className="text-white font-bold flex items-center mb-6">
              <Package className="w-5 h-5 mr-2 text-cyan-400" />
              Top Produits
            </h2>
            <div className="space-y-4">
              {topProducts.map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{p.name}</p>
                    <p className="text-slate-400 text-sm">{p.sales} ventes</p>
                  </div>
                  <p className="text-green-400 font-bold">{p.revenue} XAF</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="px-4 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
        >
          <div className="p-6 border-b border-slate-700 flex items-center justify-between">
            <h2 className="text-white font-bold flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2 text-cyan-400" />
              Commandes Récentes
            </h2>
            <button className="text-cyan-400 text-sm hover:underline">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900/50">
                <tr>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">ID</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Client</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Produit</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Montant</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Date</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <motion.tr 
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className="border-t border-slate-700"
                  >
                    <td className="text-white px-6 py-4 font-mono text-sm">{order.id}</td>
                    <td className="text-white px-6 py-4">{order.client}</td>
                    <td className="text-white px-6 py-4">{order.produit}</td>
                    <td className="text-green-400 px-6 py-4">{order.montant.toLocaleString()} XAF</td>
                    <td className="text-slate-400 px-6 py-4">{order.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.statut === 'Livré' ? 'bg-green-500/20 text-green-400' :
                        order.statut === 'Expédié' ? 'bg-blue-500/20 text-blue-400' :
                        order.statut === 'En cours' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-slate-500/20 text-slate-400'
                      }`}>
                        {order.statut}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Package, label: 'Produits', count: '1,247' },
            { icon: Users, label: 'Clients', count: '2,341' },
            { icon: Wallet, label: 'Revenus', count: '12.4M' },
            { icon: Activity, label: 'Sessions', count: '8,562' },
          ].map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-left hover:border-cyan-500"
            >
              <item.icon className="w-6 h-6 text-cyan-400 mb-2" />
              <p className="text-white font-bold text-lg">{item.count}</p>
              <p className="text-slate-400 text-sm">{item.label}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}