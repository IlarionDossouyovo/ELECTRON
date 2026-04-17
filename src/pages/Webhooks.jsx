import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Webhook, Plus, Search, Filter, Copy, Trash2, Eye,
  Settings, CheckCircle, XCircle, Clock, Play, Pause,
  Code, Database, Bell, ShoppingCart, Truck, CreditCard,
  ChevronRight, ArrowRight
} from 'lucide-react'

const webhooks = [
  { id: 'wh-001', name: 'Commandes Stripe', url: 'https://api.electron.africa/webhooks/stripe', event: 'payment_intent.succeeded', status: 'active', calls: 1247, lastTrigger: 'il y a 2 min' },
  { id: 'wh-002', name: 'Notification client', url: 'https://api.electron.africa/webhooks/email', event: 'order.created', status: 'active', calls: 856, lastTrigger: 'il y a 15 min' },
  { id: 'wh-003', name: 'Sync inventory', url: 'https://api.electron.africa/webhooks/inventory', event: 'stock.updated', status: 'active', calls: 234, lastTrigger: 'il y a 1h' },
  { id: 'wh-004', name: 'Logistics webhook', url: 'https://api.electron.africa/webhooks/logistics', event: 'delivery.completed', status: 'paused', calls: 156, lastTrigger: 'il y a 3h' },
  { id: 'wh-005', name: 'CRM sync', url: 'https://api.electron.africa/webhooks/crm', event: 'user.registered', status: 'active', calls: 89, lastTrigger: 'il y a 5h' },
]

const events = [
  { category: 'Commandes', events: ['order.created', 'order.updated', 'order.completed', 'order.cancelled'] },
  { category: 'Paiements', events: ['payment_intent.succeeded', 'payment_intent.failed', 'payment.refunded'] },
  { category: 'Utilisateurs', events: ['user.registered', 'user.updated', 'user.deleted', 'user.login'] },
  { category: 'Produits', events: ['product.created', 'product.updated', 'product.deleted', 'stock.updated'] },
  { category: 'Livraison', events: ['delivery.created', 'delivery.in_transit', 'delivery.completed', 'delivery.failed'] },
]

const logs = [
  { id: 'log-001', webhook: 'Commandes Stripe', event: 'payment_intent.succeeded', status: 'success', time: '16/04/2026 14:30', duration: '234ms' },
  { id: 'log-002', webhook: 'Notification client', event: 'order.created', status: 'success', time: '16/04/2026 14:25', duration: '156ms' },
  { id: 'log-003', webhook: 'CRM sync', event: 'user.registered', status: 'failed', time: '16/04/2026 13:45', duration: '1.2s' },
  { id: 'log-004', webhook: 'Sync inventory', event: 'stock.updated', status: 'success', time: '16/04/2026 12:00', duration: '89ms' },
  { id: 'log-005', webhook: 'Logistics webhook', event: 'delivery.completed', status: 'success', time: '15/04/2026 18:30', duration: '312ms' },
]

export default function Webhooks() {
  const [activeTab, setActiveTab] = useState('webhooks')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const stats = [
    { label: 'Webhooks actifs', value: '4', icon: CheckCircle },
    { label: 'Appels ce mois', value: '2,582', icon: Play },
    { label: 'Taux de succès', value: '98.2%', icon: CheckCircle },
    { label: 'Échecs', value: '47', icon: XCircle },
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
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Webhook className="w-8 h-8 mr-2 text-cyan-400" />
              Webhooks
            </h1>
            <p className="text-slate-400">Gestion des webhooks et intégrations</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Code className="w-4 h-4 mr-2" />Documentation
            </button>
            <button 
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />Nouveau webhook
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
          {['webhooks', 'events', 'logs'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'webhooks' && 'Webhooks'}
              {tab === 'events' && 'Événements'}
              {tab === 'logs' && 'Journaux'}
            </button>
          ))}
        </div>
      </div>

      {/* Webhooks Tab */}
      {activeTab === 'webhooks' && (
        <div className="px-4 pb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl mb-4 p-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un webhook..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {webhooks.map((webhook, i) => (
              <motion.div
                key={webhook.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${webhook.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <div>
                      <h3 className="text-white font-bold">{webhook.name}</h3>
                      <p className="text-slate-400 text-sm font-mono">{webhook.url}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      webhook.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {webhook.status === 'active' ? 'Actif' : 'En pause'}
                    </span>
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-700">
                  <div>
                    <p className="text-slate-400 text-xs">Événement</p>
                    <p className="text-cyan-400 text-sm font-mono">{webhook.event}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Appels totaux</p>
                    <p className="text-white">{webhook.calls}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Dernière exécution</p>
                    <p className="text-slate-500 text-sm">{webhook.lastTrigger}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-white font-bold mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.events.map((event, j) => (
                    <div key={j} className="flex items-center justify-between p-2 bg-slate-900/50 rounded-lg">
                      <code className="text-cyan-400 text-sm">{event}</code>
                      <button className="text-slate-500 hover:text-cyan-400 text-sm">Tester</button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Logs Tab */}
      {activeTab === 'logs' && (
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Webhook</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Événement</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Durée</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Temps</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="text-white px-6 py-4">{log.webhook}</td>
                      <td className="text-cyan-400 font-mono text-sm px-6 py-4">{log.event}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          log.status === 'success' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {log.status === 'success' ? 'Succès' : 'Échec'}
                        </span>
                      </td>
                      <td className="text-slate-400 px-6 py-4">{log.duration}</td>
                      <td className="text-slate-500 text-sm px-6 py-4">{log.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Nouveau Webhook</h2>
            <div className="space-y-4">
              <div>
                <label className="text-slate-400 text-sm">Nom</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">URL de callback</label>
                <input type="url" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Événement</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1">
                  {events.map(cat => (
                    <optgroup key={cat.category} label={cat.category}>
                      {cat.events.map(ev => <option key={ev}>{ev}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Secret (optionnel)</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 bg-slate-700 text-white rounded-lg"
              >
                Annuler
              </button>
              <button className="flex-1 py-3 bg-cyan-500 text-white rounded-lg font-semibold">
                Créer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}