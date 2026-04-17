import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Users, DollarSign, TrendingUp, Plus, Search, Filter,
  MoreVertical, Phone, Mail, MapPin, Building2, Calendar,
  Clock, CheckCircle, Circle, ArrowRight, Star, MailPlus
} from 'lucide-react'

const contacts = [
  { id: 1, name: 'Marie Kouassi', company: 'Retail Corp', email: 'marie@retail.com', phone: '+225 07 123 456 78', status: 'Lead', value: 2500000, lastContact: '15/04/2026' },
  { id: 2, name: 'Jean Dupont', company: 'Tech Solutions', email: 'jean@techsol.com', phone: '+33 6 12 34 56 78', status: 'Client', value: 850000, lastContact: '14/04/2026' },
  { id: 3, name: 'Paul Obame', company: 'Export SA', email: 'paul@export.sa', phone: '+241 07 234 567 89', status: 'Prospect', value: 1200000, lastContact: '12/04/2026' },
  { id: 4, name: 'Alice Sossa', company: 'Digital Agency', email: 'alice@digia.com', phone: '+229 01 234 567 89', status: 'Lead', value: 450000, lastContact: '10/04/2026' },
]

const deals = [
  { id: 1, title: 'Contrat Maintenance IT', client: 'Retail Corp', value: 4500000, stage: 'negociation', probability: 70, daysLeft: 5 },
  { id: 2, title: 'Licences Logiciels', client: 'Tech Solutions', value: 2800000, stage: 'proposition', probability: 50, daysLeft: 12 },
  { id: 3, title: 'Formation Équipe', client: 'Export SA', value: 1200000, stage: 'gagne', probability: 100, daysLeft: 0 },
  { id: 4, title: 'Consulting Digital', client: 'Digital Agency', value: 850000, stage: 'prospection', probability: 20, daysLeft: 30 },
]

const stages = ['Prospection', 'Qualification', 'Proposition', 'Negociation', 'Gagné', 'Perdu']

const pipelines = stages.map(stage => ({
  stage,
  deals: deals.filter(d => {
    const stageMap = { 'prospection': 'Prospection', 'qualification': 'Qualification', 'proposition': 'Proposition', 'negociation': 'Negociation', 'gagne': 'Gagné', 'perdu': 'Perdu' }
    return stageMap[d.stage] === stage
  })
}))

export default function CRM() {
  const [activeTab, setActiveTab] = useState('pipeline')
  const [searchTerm, setSearchTerm] = useState('')

  const stats = [
    { label: 'Total Contacts', value: '1,247', icon: Users, change: '+23' },
    { label: 'Pipeline Actif', value: '45.2M XAF', icon: TrendingUp, change: '+12%' },
    { label: 'Deals ce mois', value: '28', icon: DollarSign, change: '+8' },
    { label: 'Taux Conversion', value: '34%', icon: CheckCircle, change: '+5%' },
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
            <h1 className="text-3xl font-bold text-white">CRM</h1>
            <p className="text-slate-400">Gestion des contacts et opportunités</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Filter className="w-4 h-4 mr-2" /> Filtrer
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" /> Nouveau Deal
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
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-green-400 text-sm">{stat.change}</span>
              </div>
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {['pipeline', 'contacts', 'rapports'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'pipeline' && 'Pipeline'}
              {tab === 'contacts' && 'Contacts'}
              {tab === 'rapports' && 'Rapports'}
            </button>
          ))}
        </div>
      </div>

      {/* Pipeline View */}
      {activeTab === 'pipeline' && (
        <div className="px-4 pb-16 overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {pipelines.map((pipeline, i) => (
              <motion.div
                key={pipeline.stage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="w-72 flex-shrink-0"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{pipeline.stage}</h3>
                    <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded">
                      {pipeline.deals.length}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {pipeline.deals.map((deal, j) => (
                      <div 
                        key={deal.id}
                        className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 cursor-pointer hover:border-cyan-500"
                      >
                        <h4 className="text-white text-sm font-medium">{deal.title}</h4>
                        <p className="text-slate-400 text-xs mt-1">{deal.client}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-cyan-400 text-sm font-bold">
                            {deal.value.toLocaleString()} XAF
                          </span>
                          <span className="text-slate-500 text-xs">
                            {deal.daysLeft}j
                          </span>
                        </div>
                        <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-cyan-500 rounded-full"
                            style={{ width: `${deal.probability}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Contacts View */}
      {activeTab === 'contacts' && (
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
                  placeholder="Rechercher un contact..."
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Contact</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Entreprise</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Valeur</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Dernière activité</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, i) => (
                    <motion.tr 
                      key={contact.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.05 * i }}
                      className="border-t border-slate-700 hover:bg-slate-700/30"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{contact.name}</p>
                          <p className="text-slate-400 text-sm">{contact.email}</p>
                        </div>
                      </td>
                      <td className="text-white px-6 py-4">{contact.company}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          contact.status === 'Client' ? 'bg-green-500/20 text-green-400' :
                          contact.status === 'Lead' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {contact.status}
                        </span>
                      </td>
                      <td className="text-cyan-400 px-6 py-4 font-medium">
                        {contact.value.toLocaleString()} XAF
                      </td>
                      <td className="text-slate-400 px-6 py-4">{contact.lastContact}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                            <Mail className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                            <Phone className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Reports View */}
      {activeTab === 'rapports' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Performance des deals</h3>
              <div className="space-y-4">
                {['Gagné', 'En cours', 'Perdu'].map((status, i) => (
                  <div key={status} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        status === 'Gagné' ? 'bg-green-500' : 
                        status === 'En cours' ? 'bg-blue-500' : 'bg-red-500'
                      }`} />
                      <span className="text-slate-400 ml-2">{status}</span>
                    </div>
                    <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          status === 'Gagné' ? 'bg-green-500' : 
                          status === 'En cours' ? 'bg-blue-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${[45, 35, 20][i]}%` }}
                      />
                    </div>
                    <span className="text-white text-sm w-12 text-right">{[45, 35, 20][i]}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Top Performers</h3>
              <div className="space-y-4">
                {[
                  { name: 'Jean Dupont', deals: 12, value: '8.5M' },
                  { name: 'Marie Kouassi', deals: 8, value: '6.2M' },
                  { name: 'Paul Obame', deals: 6, value: '4.1M' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-cyan-400 font-bold mr-3">#{i + 1}</span>
                      <span className="text-white">{p.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white">{p.deals} deals</p>
                      <p className="text-slate-400 text-sm">{p.value} XAF</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}