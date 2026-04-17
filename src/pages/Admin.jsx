import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Settings, Users, DollarSign, TrendingUp, BarChart3,
  Shield, Database, Globe, Bell, Palette, Server,
  Plus, Search, Filter, Download, MoreVertical,
  CheckCircle, XCircle, AlertTriangle, Clock
} from 'lucide-react'

const adminModules = [
  { id: 'users', name: 'Utilisateurs', icon: Users, count: '2,341', status: 'Actif' },
  { id: 'finance', name: 'Finance', icon: DollarSign, count: '45.2M', status: 'Actif' },
  { id: 'analytics', name: 'Analytique', icon: BarChart3, count: '15', status: 'Actif' },
  { id: 'security', name: 'Sécurité', icon: Shield, count: '12', status: 'Actif' },
  { id: 'system', name: 'Système', icon: Server, count: '99.9%', status: 'Actif' },
  { id: 'domains', name: 'Domaines', icon: Globe, count: '3', status: 'Actif' },
]

const recentActivity = [
  { action: 'Nouvel utilisateur', user: 'Marie Kouassi', time: '2 min', type: 'success' },
  { action: 'Paiement reçu', user: '450,000 XAF', time: '15 min', type: 'success' },
  { action: 'Alerte sécurité', user: 'Connexion suspecte', time: '1h', type: 'warning' },
  { action: 'Maintenance prévue', user: 'Serveur EU-West', time: '3h', type: 'info' },
  { action: 'Nouveau client', user: 'Tech Solutions', time: '5h', type: 'success' },
]

const systemHealth = [
  { service: 'API Gateway', status: 'Actif', uptime: '99.99%', latency: '12ms' },
  { service: 'Base de données', status: 'Actif', uptime: '99.95%', latency: '8ms' },
  { service: 'Cache Redis', status: 'Actif', uptime: '99.99%', latency: '2ms' },
  { service: 'CDN Cloudflare', status: 'Actif', uptime: '100%', latency: '15ms' },
  { service: 'Worker Queue', status: 'Actif', uptime: '99.90%', latency: '45ms' },
]

const adminSettings = [
  { category: 'Général', items: ['Langue', 'Fuseau horaire', 'Devise'] },
  { category: 'Sécurité', items: ['Authentification', 'Sessions', 'API Keys'] },
  { category: 'Notifications', items: ['Email', 'SMS', 'Push'] },
  { category: 'API', items: ['Webhooks', 'Rate Limiting', 'Documentation'] },
]

export default function Admin() {
  const [activeTab, setActiveTab] = useState('overview')

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
            <h1 className="text-3xl font-bold text-white">Administration</h1>
            <p className="text-slate-400">Gestion globale de la plateforme</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" />Exporter
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouvel Admin
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Utilisateurs', value: '2,341', change: '+12%' },
            { label: 'Revenus (mois)', value: '45.2M', change: '+8%' },
            { label: 'Requêtes API', value: '1.2M', change: '+23%' },
            { label: 'Uptime global', value: '99.9%', change: '0%' },
          ].map((stat, i) => (
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

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto">
          {['overview', 'users', 'system', 'config'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'overview' && 'Vue d\'ensemble'}
              {tab === 'users' && 'Utilisateurs'}
              {tab === 'system' && 'Système'}
              {tab === 'config' && 'Configuration'}
            </button>
          ))}
        </div>
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Modules */}
            <div className="md:col-span-2">
              <h3 className="text-white font-bold mb-4">Modules</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {adminModules.map((module, i) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-cyan-500 cursor-pointer"
                  >
                    <module.icon className="w-8 h-8 text-cyan-400 mb-3" />
                    <p className="text-white font-semibold">{module.name}</p>
                    <p className="text-cyan-400 text-lg">{module.count}</p>
                    <span className="text-green-400 text-xs">{module.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div>
              <h3 className="text-white font-bold mb-4">Activité récente</h3>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 space-y-3">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-slate-400 text-xs">{activity.user}</p>
                    </div>
                    <span className="text-slate-500 text-xs">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* System */}
      {activeTab === 'system' && (
        <div className="px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="text-white font-bold">État des services</h3>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                Tous opérationnels
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50">
                  <tr>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Service</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Uptime</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Latence</th>
                  </tr>
                </thead>
                <tbody>
                  {systemHealth.map((service, i) => (
                    <tr key={i} className="border-t border-slate-700">
                      <td className="text-white px-6 py-4">{service.service}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center text-green-400">
                          <CheckCircle className="w-4 h-4 mr-2" /> {service.status}
                        </span>
                      </td>
                      <td className="text-cyan-400 px-6 py-4">{service.uptime}</td>
                      <td className="text-slate-400 px-6 py-4">{service.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Config */}
      {activeTab === 'config' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adminSettings.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
              >
                <h3 className="text-white font-bold mb-4">{section.category}</h3>
                <div className="space-y-2">
                  {section.items.map((item, j) => (
                    <button key={j} className="w-full flex items-center justify-between p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900 text-left">
                      <span className="text-white">{item}</span>
                      <Settings className="w-4 h-4 text-slate-500" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}