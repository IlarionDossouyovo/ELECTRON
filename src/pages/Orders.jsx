import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  ShoppingCart, Package, Truck, CheckCircle, Clock, XCircle,
  Search, Filter, Plus, Download, Eye, MoreVertical,
  MapPin, Phone, Mail, DollarSign, Calendar
} from 'lucide-react'

const orders = [
  { id: 'ORD-2024-001', client: 'Jean Dupont', email: 'jean@email.com', phone: '+229 01 123 456 78', date: '16/04/2026', total: 895000, status: 'En cours', items: ['iPhone 15 Pro'], payment: 'Paid', shipping: 'En transit' },
  { id: 'ORD-2024-002', client: 'Marie Kouassi', email: 'marie@email.com', phone: '+225 07 234 567 89', date: '16/04/2026', total: 145000, status: 'Livré', items: ['AirPods Pro x2'], payment: 'Paid', shipping: 'Livré' },
  { id: 'ORD-2024-003', client: 'Paul Obame', email: 'paul@email.com', phone: '+241 07 345 678 90', date: '15/04/2026', total: 520000, status: 'Expédié', items: ['Watch Ultra'], payment: 'Paid', shipping: 'Expédié' },
  { id: 'ORD-2024-004', client: 'Alice Sossa', email: 'alice@email.com', phone: '+229 01 456 789 01', date: '15/04/2026', total: 680000, status: 'En attente', items: ['MacBook Air'], payment: 'Pending', shipping: 'En attente' },
  { id: 'ORD-2024-005', client: 'Koffi Mensah', email: 'koffi@email.com', phone: '+233 20 123 456 7', date: '14/04/2026', total: 245000, status: 'Annulé', items: ['iPad Air'], payment: 'Refunded', shipping: 'Annulé' },
  { id: 'ORD-2024-006', client: 'Pierre Dubois', email: 'pierre@email.com', phone: '+33 6 12 34 56 78', date: '14/04/2026', total: 1250000, status: 'Livré', items: ['iPhone 15 Pro Max', 'AirPods Pro'], payment: 'Paid', shipping: 'Livré' },
]

const statusColors = {
  'En cours': 'bg-yellow-500/20 text-yellow-400',
  'Livré': 'bg-green-500/20 text-green-400',
  'Expédié': 'bg-blue-500/20 text-blue-400',
  'En attente': 'bg-slate-500/20 text-slate-400',
  'Annulé': 'bg-red-500/20 text-red-400'
}

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('Tous')
  const [selectedOrder, setSelectedOrder] = useState(null)

  const filteredOrders = orders.filter(order => {
    const matchSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       order.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchStatus = statusFilter === 'Tous' || order.status === statusFilter
    return matchSearch && matchStatus
  })

  const stats = [
    { label: 'Total Commandes', value: '2,341', change: '+12%' },
    { label: 'En Cours', value: '47', change: '+5' },
    { label: 'Livrées', value: '2,156', change: '+145' },
    { label: 'CA Total', value: '847M XAF', change: '+18%' },
  ]

  const statuses = ['Tous', 'En cours', 'Livré', 'Expédié', 'En attente', 'Annulé']

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
            <h1 className="text-3xl font-bold text-white">Commandes</h1>
            <p className="text-slate-400">Gestion des commandes et expéditions</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" />Exporter
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouvelle commande
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
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
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <span className="text-green-400 text-sm">{stat.change}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher une commande..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white"
          >
            {statuses.map(status => <option key={status}>{status}</option>)}
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="px-4 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900/50">
                <tr>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Commande</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Client</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Date</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Total</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Paiement</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, i) => (
                  <motion.tr 
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className="border-t border-slate-700 hover:bg-slate-700/30 cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className="px-6 py-4">
                      <span className="text-cyan-400 font-mono font-medium">{order.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-white font-medium">{order.client}</p>
                        <p className="text-slate-400 text-sm">{order.email}</p>
                      </div>
                    </td>
                    <td className="text-slate-400 px-6 py-4">{order.date}</td>
                    <td className="text-cyan-400 font-bold px-6 py-4">{order.total.toLocaleString()} XAF</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        order.payment === 'Paid' ? 'bg-green-500/20 text-green-400' :
                        order.payment === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {order.payment}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-700 flex items-center justify-between">
            <p className="text-slate-400 text-sm">Affichage de {filteredOrders.length} commandes</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm">Précédent</button>
              <button className="px-3 py-1 bg-cyan-500 text-white rounded-lg text-sm">1</button>
              <button className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm">2</button>
              <button className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm">Suivant</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedOrder.id}</h2>
                <p className="text-slate-400">{selectedOrder.date}</p>
              </div>
              <button 
                onClick={() => setSelectedOrder(null)}
                className="p-2 text-slate-400 hover:text-white"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h4 className="text-slate-400 text-sm mb-2">Client</h4>
                <p className="text-white font-medium">{selectedOrder.client}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h4 className="text-slate-400 text-sm mb-2">Contact</h4>
                <p className="text-white text-sm">{selectedOrder.phone}</p>
                <p className="text-slate-400 text-sm">{selectedOrder.email}</p>
              </div>
            </div>

            {/* Items */}
            <div className="bg-slate-900/50 rounded-lg p-4 mb-6">
              <h4 className="text-slate-400 text-sm mb-3">Articles</h4>
              {selectedOrder.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="flex items-center justify-between py-4 border-t border-slate-700">
              <span className="text-white font-bold">Total</span>
              <span className="text-cyan-400 text-2xl font-bold">{selectedOrder.total.toLocaleString()} XAF</span>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-3 bg-cyan-500 text-white rounded-lg font-semibold">
                Mettre à jour le statut
              </button>
              <button className="flex-1 py-3 bg-slate-700 text-white rounded-lg">
                Imprimer facture
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}