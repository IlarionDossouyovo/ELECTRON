import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FileText, Download, Calendar, Filter, Search, Plus,
  BarChart3, PieChart, TrendingUp, Table, FileSpreadsheet,
  Printer, Mail, Eye, Clock
} from 'lucide-react'

const reportTemplates = [
  { id: 'sales', name: 'Rapport de ventes', description: 'Ventes par période, produit, région', frequency: 'Quotidien', lastGen: '16/04/2026 08:00' },
  { id: 'inventory', name: 'État du stock', description: 'Niveau de stock, rotations, alertes', frequency: 'Hebdomadaire', lastGen: '14/04/2026' },
  { id: 'financial', name: 'Rapport financier', description: 'Revenus, dépenses, marges', frequency: 'Mensuel', lastGen: '01/04/2026' },
  { id: 'customers', name: 'Analyse clients', description: 'Nouveaux clients, rétention, CLV', frequency: 'Hebdomadaire', lastGen: '12/04/2026' },
  { id: 'logistics', name: 'Performance logistique', description: 'Livraisons, délais, coûts', frequency: 'Quotidien', lastGen: '16/04/2026 06:00' },
  { id: 'marketing', name: 'ROI Marketing', description: 'Campagnes, conversions, coûts', frequency: 'Mensuel', lastGen: '10/04/2026' },
]

const recentReports = [
  { id: 1, name: 'Ventes - Avril 2026', type: 'sales', date: '16/04/2026', size: '2.4 MB', format: 'PDF' },
  { id: 2, name: 'Stock - Semaine 15', type: 'inventory', date: '14/04/2026', size: '1.8 MB', format: 'Excel' },
  { id: 3, name: 'Revenus Mars 2026', type: 'financial', date: '01/04/2026', size: '3.2 MB', format: 'PDF' },
  { id: 4, name: 'Clients - Mars 2026', type: 'customers', date: '12/04/2026', size: '890 KB', format: 'Excel' },
  { id: 5, name: 'Livraisons - Avril', type: 'logistics', date: '15/04/2026', size: '1.1 MB', format: 'PDF' },
]

const scheduledReports = [
  { id: 1, name: 'Ventes quotidiennes', schedule: 'Chaque jour à 08:00', nextRun: '17/04/2026 08:00', recipients: 3 },
  { id: 2, name: 'Stock hebdomadaire', schedule: 'Lundi à 09:00', nextRun: '20/04/2026 09:00', recipients: 2 },
  { id: 3, name: 'Finance mensuel', schedule: '1er du mois', nextRun: '01/05/2026', recipients: 5 },
]

export default function Reports() {
  const [activeTab, setActiveTab] = useState('templates')
  const [searchTerm, setSearchTerm] = useState('')

  const stats = [
    { label: 'Rapports générés', value: '127', icon: FileText, change: '+12' },
    { label: 'Téléchargements', value: '89', icon: Download, change: '+8' },
    { label: 'Planifiés', value: '5', icon: Clock, change: '0' },
    { label: 'Taille totale', value: '245 MB', icon: FileSpreadsheet, change: '+15 MB' },
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
            <h1 className="text-3xl font-bold text-white">Rapports</h1>
            <p className="text-slate-400">Générez et exportez des rapports détaillés</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Calendar className="w-4 h-4 mr-2" />Planifier
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouveau rapport
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
          {['templates', 'recent', 'scheduled', 'custom'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'templates' && 'Modèles'}
              {tab === 'recent' && 'Récents'}
              {tab === 'scheduled' && 'Planifiés'}
              {tab === 'custom' && 'Personnalisé'}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher un rapport..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
          />
        </div>
      </div>

      {/* Templates */}
      {activeTab === 'templates' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportTemplates.map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <button className="text-cyan-400 text-sm hover:underline">Générer</button>
                </div>
                <h3 className="text-white font-bold mb-2">{template.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{template.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-slate-500 text-sm">{template.frequency}</span>
                  <span className="text-slate-500 text-xs">{template.lastGen}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Recent */}
      {activeTab === 'recent' && (
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Nom du rapport</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Type</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Date</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Taille</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Format</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentReports.map((report, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{report.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded capitalize">
                          {report.type}
                        </span>
                      </td>
                      <td className="text-slate-400 text-sm px-6 py-4">{report.date}</td>
                      <td className="text-slate-500 text-sm px-6 py-4">{report.size}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          report.format === 'PDF' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {report.format}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Scheduled */}
      {activeTab === 'scheduled' && (
        <div className="px-4 pb-16">
          <div className="space-y-4">
            {scheduledReports.map((report, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-white font-bold">{report.name}</h3>
                      <p className="text-slate-400 text-sm">{report.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-slate-500 text-sm">Prochaine exécution</p>
                      <p className="text-cyan-400">{report.nextRun}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-sm">Destinataires</p>
                      <p className="text-white">{report.recipients}</p>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Custom */}
      {activeTab === 'custom' && (
        <div className="px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-6">Créer un rapport personnalisé</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-slate-400 text-sm">Nom du rapport</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Période</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1">
                  <option>Aujourd'hui</option>
                  <option>Cette semaine</option>
                  <option>Ce mois</option>
                  <option>Personnalisé</option>
                </select>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Données à inclure</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1">
                  <option>Ventes</option>
                  <option>Stock</option>
                  <option>Finances</option>
                  <option>Clients</option>
                </select>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Format</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1">
                  <option>PDF</option>
                  <option>Excel</option>
                  <option>CSV</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-6 py-4 gradient-bg text-white font-bold rounded-xl">
              Générer le rapport
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}