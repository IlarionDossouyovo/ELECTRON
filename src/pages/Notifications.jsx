import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Bell, Mail, MessageSquare, Smartphone, Send, Plus,
  Search, Filter, Settings, CheckCircle, Clock, AlertTriangle,
  FileText, Users, ShoppingCart, Truck, CreditCard
} from 'lucide-react'

const notificationTypes = [
  { id: 'email', name: 'Email', icon: Mail, count: 156, active: true },
  { id: 'sms', name: 'SMS', icon: Smartphone, count: 89, active: true },
  { id: 'push', name: 'Push', icon: Bell, count: 234, active: false },
  { id: 'inapp', name: 'In-App', icon: MessageSquare, count: 456, active: true },
]

const templates = [
  { id: 1, name: 'Confirmation commande', type: 'email', status: 'Actif', uses: 1247 },
  { id: 2, name: 'Rappel livraison', type: 'sms', status: 'Actif', uses: 856 },
  { id: 3, name: 'Promo weekend', type: 'push', status: 'Inactif', uses: 0 },
  { id: 4, name: 'Merci pour votre achat', type: 'email', status: 'Actif', uses: 934 },
  { id: 5, name: 'Alerte stock', type: 'inapp', status: 'Actif', uses: 234 },
]

const recentNotifications = [
  { id: 1, title: 'Commande #ORD-001 confirmée', channel: 'Email', to: 'jean@email.com', time: '2 min', status: 'Delivered' },
  { id: 2, title: 'Paiement reçu - 450,000 XAF', channel: 'SMS', to: '+229 01 123 456 78', time: '15 min', status: 'Delivered' },
  { id: 3, title: 'Votre colis est en route', channel: 'Push', to: 'App mobile', time: '1h', status: 'Delivered' },
  { id: 4, title: 'Promo flash - 20% de réduction', channel: 'Push', to: '1,234 utilisateurs', time: '3h', status: 'Delivered' },
  { id: 5, title: 'Alerte: Stock faible', channel: 'In-App', to: 'Admin', time: '5h', status: 'Read' },
]

const stats = [
  { label: 'Envoyés ce mois', value: '45,231', icon: Send, change: '+12%' },
  { label: 'Taux d\'ouverture', value: '34.5%', icon: Mail, change: '+2.3%' },
  { label: 'Taux de clic', value: '8.2%', icon: MousePointer, change: '+1.1%' },
  { label: 'Désabonnements', value: '12', icon: AlertTriangle, change: '-5' },
]

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')

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
            <h1 className="text-3xl font-bold text-white">Notifications</h1>
            <p className="text-slate-400">Gestion des notifications multi-canal</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Filter className="w-4 h-4 mr-2" /> Filtrer
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouvelle notification
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
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Channels */}
      <div className="px-4 pb-8">
        <h3 className="text-white font-bold mb-4">Canaux</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {notificationTypes.map((type, i) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <type.icon className="w-6 h-6 text-cyan-400" />
                <button className={`w-10 h-5 rounded-full transition-colors ${type.active ? 'bg-cyan-500' : 'bg-slate-600'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${type.active ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </button>
              </div>
              <p className="text-white font-semibold">{type.name}</p>
              <p className="text-slate-400 text-sm">{type.count} envoyés</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {['overview', 'templates', 'history'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'overview' && 'Vue d\'ensemble'}
              {tab === 'templates' && 'Modèles'}
              {tab === 'history' && 'Historique'}
            </button>
          ))}
        </div>
      </div>

      {/* Overview/Templates */}
      {(activeTab === 'overview' || activeTab === 'templates') && (
        <div className="px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-slate-700">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher un modèle..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50">
                  <tr>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Modèle</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Canal</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Utilisations</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {templates.map((template, i) => (
                    <tr key={template.id} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-white font-medium">{template.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded capitalize">
                          {template.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          template.status === 'Actif' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-slate-500/20 text-slate-400'
                        }`}>
                          {template.status}
                        </span>
                      </td>
                      <td className="text-slate-400 px-6 py-4">{template.uses.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <button className="text-cyan-400 text-sm hover:underline">Modifier</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* History */}
      {activeTab === 'history' && (
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Notification</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Canal</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Destinataire</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Temps</th>
                  </tr>
                </thead>
                <tbody>
                  {recentNotifications.map((notif, i) => (
                    <tr key={notif.id} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="px-6 py-4">
                        <span className="text-white font-medium">{notif.title}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded">
                          {notif.channel}
                        </span>
                      </td>
                      <td className="text-slate-400 px-6 py-4">{notif.to}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          notif.status === 'Delivered' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {notif.status}
                        </span>
                      </td>
                      <td className="text-slate-500 px-6 py-4">{notif.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}