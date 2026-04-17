import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  CreditCard, Smartphone, Globe, Key, Settings, CheckCircle,
  DollarSign, TrendingUp, AlertCircle, Shield, RefreshCw,
  Plus, Eye, Trash2, Copy
} from 'lucide-react'

const paymentGateways = [
  { id: 'stripe', name: 'Stripe', status: 'active', icon: '💳', transactions: '45,231', volume: '125M XAF' },
  { id: 'paypal', name: 'PayPal', status: 'active', icon: '🅿️', transactions: '12,456', volume: '45M XAF' },
  { id: 'flutterwave', name: 'Flutterwave', status: 'active', icon: '🌊', transactions: '23,891', volume: '67M XAF' },
  { id: 'orangemoney', name: 'Orange Money', status: 'active', icon: '🟠', transactions: '8,234', volume: '15M XAF' },
  { id: 'mtn', name: 'MTN Moov', status: 'inactive', icon: '🔵', transactions: '0', volume: '0 XAF' },
]

const recentTransactions = [
  { id: 'TXN-001', gateway: 'Stripe', amount: 850000, status: 'Success', date: '16/04/2026 14:30', client: 'Jean Dupont' },
  { id: 'TXN-002', gateway: 'Flutterwave', amount: 145000, status: 'Success', date: '16/04/2026 13:15', client: 'Marie Kouassi' },
  { id: 'TXN-003', gateway: 'Orange Money', amount: 52000, status: 'Pending', date: '16/04/2026 12:45', client: 'Paul Obame' },
  { id: 'TXN-004', gateway: 'PayPal', amount: 1250000, status: 'Failed', date: '16/04/2026 11:20', client: 'Pierre Martin' },
  { id: 'TXN-005', gateway: 'Stripe', amount: 680000, status: 'Success', date: '15/04/2026 16:00', client: 'Alice Sossa' },
]

const countries = [
  { code: 'BJ', name: 'Bénin', methods: ['Orange Money', 'MTN', 'Wave'] },
  { code: 'CI', name: 'Côte d\'Ivoire', methods: ['MTN', 'Orange Money', 'Wave'] },
  { code: 'SN', name: 'Sénégal', methods: ['Wave', 'Orange Money'] },
  { code: 'TG', name: 'Togo', methods: ['Togo Cell', 'Flooz'] },
  { code: 'FR', name: 'France', methods: ['Stripe', 'PayPal', 'CB'] },
  { code: 'US', name: 'États-Unis', methods: ['Stripe', 'PayPal'] },
]

export default function PaymentGateway() {
  const [activeTab, setActiveTab] = useState('gateways')

  const stats = [
    { label: 'Transactions aujourd\'hui', value: '247', change: '+12%', icon: DollarSign },
    { label: 'Volume total', value: '252M XAF', change: '+18%', icon: TrendingUp },
    { label: 'Taux de succès', value: '98.5%', change: '+0.5%', icon: CheckCircle },
    { label: 'Retours', value: '1.5%', change: '-0.3%', icon: AlertCircle },
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
            <h1 className="text-3xl font-bold text-white">Passerelle de Paiement</h1>
            <p className="text-slate-400">Gestion des moyens de paiement</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Settings className="w-4 h-4 mr-2" />Configuration
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Ajouter passerelle
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
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {['gateways', 'transactions', 'countries', 'api'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'gateways' && 'Passerelles'}
              {tab === 'transactions' && 'Transactions'}
              {tab === 'countries' && 'Pays'}
              {tab === 'api' && 'API'}
            </button>
          ))}
        </div>
      </div>

      {/* Gateways */}
      {activeTab === 'gateways' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentGateways.map((gateway, i) => (
              <motion.div
                key={gateway.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{gateway.icon}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    gateway.status === 'active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-slate-500/20 text-slate-400'
                  }`}>
                    {gateway.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg">{gateway.name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-xs">Transactions</p>
                    <p className="text-cyan-400 font-bold">{gateway.transactions}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Volume</p>
                    <p className="text-white font-bold">{gateway.volume}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-2 bg-slate-700 text-white text-sm rounded-lg">
                    Configurer
                  </button>
                  <button className="p-2 bg-slate-700 text-white rounded-lg">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Transactions */}
      {activeTab === 'transactions' && (
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">ID</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Passerelle</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Client</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Montant</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((txn, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="text-cyan-400 font-mono text-sm px-6 py-4">{txn.id}</td>
                      <td className="text-white px-6 py-4">{txn.gateway}</td>
                      <td className="text-slate-400 px-6 py-4">{txn.client}</td>
                      <td className="text-cyan-400 font-bold px-6 py-4">{txn.amount.toLocaleString()} XAF</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          txn.status === 'Success' ? 'bg-green-500/20 text-green-400' :
                          txn.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {txn.status}
                        </span>
                      </td>
                      <td className="text-slate-500 text-sm px-6 py-4">{txn.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Countries */}
      {activeTab === 'countries' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((country, i) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
              >
                <div className="flex items-center mb-3">
                  <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <h4 className="text-white font-bold">{country.name}</h4>
                    <p className="text-slate-400 text-xs">{country.code}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {country.methods.map((method, j) => (
                    <span key={j} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                      {method}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* API */}
      {activeTab === 'api' && (
        <div className="px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Key className="w-5 h-5 mr-2 text-cyan-400" />
              Clés API de paiement
            </h3>
            <div className="bg-slate-900 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Clé publique</span>
                <button className="text-cyan-400 text-sm flex items-center">
                  <Copy className="w-4 h-4 mr-1" /> Copier
                </button>
              </div>
              <code className="text-cyan-400 font-mono text-sm">pk_live_••••••••••••••••</code>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Clé secrète</span>
                <button className="text-cyan-400 text-sm flex items-center">
                  <Eye className="w-4 h-4 mr-1" /> Afficher
                </button>
              </div>
              <code className="text-slate-500 font-mono text-sm">sk_live_••••••••••••••••</code>
            </div>
            <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg flex items-center">
              <RefreshCw className="w-4 h-4 mr-2" /> Régénérer les clés
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}