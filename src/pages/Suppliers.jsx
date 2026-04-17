import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Package, Search, Plus, Filter, Download, MoreVertical,
  MapPin, Mail, Phone, Clock, Star, Truck, CreditCard,
  TrendingUp, TrendingDown
} from 'lucide-react'

const suppliers = [
  { id: 1, name: 'Apple Africa Ltd', contact: 'John Smith', email: 'john@apple-africa.com', phone: '+27 11 123 4567', country: 'Afrique du Sud', products: 45, rating: 4.8, orders: 234, delivery: '98%', status: 'Actif' },
  { id: 2, name: 'Samsung West Africa', contact: 'Marie Diallo', email: 'marie@samsung.africa', phone: '+221 33 123 4567', country: 'Sénégal', products: 38, rating: 4.6, orders: 189, delivery: '95%', status: 'Actif' },
  { id: 3, name: 'Tecno Benin', contact: 'Koffi Amégan', email: 'koffi@tecno.bj', phone: '+229 21 123 456', country: 'Bénin', products: 28, rating: 4.5, orders: 156, delivery: '92%', status: 'Actif' },
  { id: 4, name: 'Infinix Nigeria', contact: 'Adamu Yusuf', email: 'adamu@infinix.ng', phone: '+234 1 123 4567', country: 'Nigéria', products: 22, rating: 4.3, orders: 98, delivery: '89%', status: 'Actif' },
  { id: 5, name: 'Huawei Africa', contact: 'Li Wei', email: 'li.wei@huawei.africa', phone: '+254 20 123 456', country: 'Kenya', products: 35, rating: 4.7, orders: 167, delivery: '96%', status: 'En pause' },
]

const orders = [
  { id: 'PO-001', supplier: 'Apple Africa Ltd', date: '16/04/2026', items: 50, total: 12500000, status: 'Livré' },
  { id: 'PO-002', supplier: 'Samsung West Africa', date: '15/04/2026', items: 30, total: 8500000, status: 'En transit' },
  { id: 'PO-003', supplier: 'Tecno Benin', date: '14/04/2026', items: 100, total: 4500000, status: 'En attente' },
  { id: 'PO-004', supplier: 'Huawei Africa', date: '12/04/2026', items: 25, total: 6800000, status: 'Livré' },
]

export default function Suppliers() {
  const [activeTab, setActiveTab] = useState('suppliers')
  const [searchTerm, setSearchTerm] = useState('')

  const stats = [
    { label: 'Fournisseurs', value: '47', icon: Package, change: '+3' },
    { label: 'Commandes ouvertes', value: '12', icon: Truck, change: '+2' },
    { label: 'Livraisons à temps', value: '96%', icon: Clock, change: '+1%' },
    { label: 'Dépenses mois', value: '45M', icon: CreditCard, change: '+8%' },
  ]

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
            <h1 className="text-3xl font-bold text-white">Fournisseurs</h1>
            <p className="text-slate-400">Gestion des fournisseurs et approvisionnements</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" />Exporter
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouveau fournisseur
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
              <stat.icon className="w-5 h-5 text-cyan-400 mb-2" />
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {['suppliers', 'orders', 'performance'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'suppliers' && 'Fournisseurs'}
              {tab === 'orders' && 'Commandes'}
              {tab === 'performance' && 'Performance'}
            </button>
          ))}
        </div>
      </div>

      {/* Suppliers */}
      {activeTab === 'suppliers' && (
        <div className="px-4 pb-16">
          <div className="mb-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un fournisseur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
              />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50">
                  <tr>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Fournisseur</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Contact</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Pays</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Produits</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Note</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map((supplier, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{supplier.name}</p>
                          <p className="text-slate-400 text-sm">{supplier.orders} commandes</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white">{supplier.contact}</p>
                          <p className="text-slate-400 text-sm">{supplier.email}</p>
                        </div>
                      </td>
                      <td className="text-slate-400 px-6 py-4">{supplier.country}</td>
                      <td className="text-cyan-400 px-6 py-4">{supplier.products}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-white">{supplier.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          supplier.status === 'Actif' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {supplier.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Orders */}
      {activeTab === 'orders' && (
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Fournisseur</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Date</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Articles</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Total</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="text-cyan-400 font-mono px-6 py-4">{order.id}</td>
                      <td className="text-white px-6 py-4">{order.supplier}</td>
                      <td className="text-slate-400 px-6 py-4">{order.date}</td>
                      <td className="text-white px-6 py-4">{order.items}</td>
                      <td className="text-cyan-400 font-medium px-6 py-4">{order.total.toLocaleString()} XAF</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          order.status === 'Livré' ? 'bg-green-500/20 text-green-400' :
                          order.status === 'En transit' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Performance */}
      {activeTab === 'performance' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suppliers.map((supplier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold">{supplier.name}</h3>
                  <span className="text-yellow-400 flex items-center">
                    <Star className="w-4 h-4 mr-1" /> {supplier.rating}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Livraisons à temps</span>
                    <span className="text-green-400">{supplier.delivery}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Commandes</span>
                    <span className="text-white">{supplier.orders}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Produits</span>
                    <span className="text-cyan-400">{supplier.products}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}