import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FileText, Download, Send, Printer, Search, Plus,
  Calendar, DollarSign, User, Package, CreditCard,
  CheckCircle, Clock, RefreshCw, Eye
} from 'lucide-react'

const invoices = [
  { id: 'INV-2026-001', client: 'Jean Dupont', date: '16/04/2026', dueDate: '01/05/2026', amount: 895000, status: 'Paid', items: ['iPhone 15 Pro'] },
  { id: 'INV-2026-002', client: 'Marie Kouassi', date: '15/04/2026', dueDate: '30/04/2026', amount: 145000, status: 'Pending', items: ['AirPods Pro x2'] },
  { id: 'INV-2026-003', client: 'Tech Solutions', date: '14/04/2026', dueDate: '29/04/2026', amount: 1250000, status: 'Overdue', items: ['MacBook Air', 'Accessories'] },
  { id: 'INV-2026-004', client: 'Digital Agency', date: '12/04/2026', dueDate: '27/04/2026', amount: 520000, status: 'Paid', items: ['Watch Ultra'] },
  { id: 'INV-2026-005', client: 'Export SA', date: '10/04/2026', dueDate: '25/04/2026', amount: 680000, status: 'Paid', items: ['iPad Pro'] },
]

const invoiceItems = [
  { description: 'iPhone 15 Pro 256GB', quantity: 1, unitPrice: 850000, total: 850000 },
]

export default function InvoiceGenerator() {
  const [activeTab, setActiveTab] = useState('invoices')
  const [showInvoiceModal, setShowInvoiceModal] = useState(false)

  const stats = [
    { label: 'Total émis', value: '45.2M XAF', icon: FileText },
    { label: 'En attente', value: '2.1M XAF', icon: Clock },
    { label: 'En retard', value: '1.2M XAF', icon: AlertCircle },
    { label: 'Payé ce mois', value: '12.5M XAF', icon: CheckCircle },
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
              <FileText className="w-8 h-8 mr-2 text-cyan-400" />
              Générateur de Factures
            </h1>
            <p className="text-slate-400">Créez et gérez vos factures PDF</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" />Exporter
            </button>
            <button 
              onClick={() => setShowInvoiceModal(true)}
              className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />Nouvelle facture
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
          {['invoices', 'create', 'settings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'invoices' && 'Factures'}
              {tab === 'create' && 'Créer'}
              {tab === 'settings' && 'Paramètres'}
            </button>
          ))}
        </div>
      </div>

      {/* Invoices Tab */}
      {activeTab === 'invoices' && (
        <div className="px-4 pb-16">
          <div className="mb-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher une facture..."
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Facture</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Client</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Date</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Échéance</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Montant</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="text-cyan-400 font-mono font-medium px-6 py-4">{invoice.id}</td>
                      <td className="text-white px-6 py-4">{invoice.client}</td>
                      <td className="text-slate-400 text-sm px-6 py-4">{invoice.date}</td>
                      <td className="text-slate-400 text-sm px-6 py-4">{invoice.dueDate}</td>
                      <td className="text-cyan-400 font-bold px-6 py-4">{invoice.amount.toLocaleString()} XAF</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          invoice.status === 'Paid' ? 'bg-green-500/20 text-green-400' :
                          invoice.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {invoice.status === 'Paid' ? 'Payé' : 
                           invoice.status === 'Pending' ? 'En attente' : 'En retard'}
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
                          <button className="p-2 text-slate-400 hover:text-green-400 hover:bg-slate-700 rounded-lg">
                            <Send className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                            <Printer className="w-4 h-4" />
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

      {/* Create Tab */}
      {activeTab === 'create' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-6">Informations client</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-slate-400 text-sm">Client</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1">
                    <option>Sélectionner un client...</option>
                    <option>Jean Dupont</option>
                    <option>Marie Kouassi</option>
                    <option>Tech Solutions</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 text-sm">Date de facturation</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
                </div>
                <div>
                  <label className="text-slate-400 text-sm">Date d'échéance</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold">Articles</h3>
                <button className="text-cyan-400 text-sm flex items-center">
                  <Plus className="w-4 h-4 mr-1" /> Ajouter
                </button>
              </div>
              <div className="space-y-3">
                {invoiceItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-900/50 rounded-lg">
                    <Package className="w-5 h-5 text-cyan-400" />
                    <div className="flex-1">
                      <p className="text-white text-sm">{item.description}</p>
                      <p className="text-slate-400 text-xs">{item.quantity} x {item.unitPrice.toLocaleString()} XAF</p>
                    </div>
                    <span className="text-cyan-400 font-medium">{item.total.toLocaleString()} XAF</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Totals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <div className="flex justify-end">
              <div className="w-64 space-y-3">
                <div className="flex justify-between text-slate-400">
                  <span>Sous-total</span>
                  <span className="text-white">850,000 XAF</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>TVA (18%)</span>
                  <span className="text-white">153,000 XAF</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-3 border-t border-slate-700">
                  <span className="text-white">Total</span>
                  <span className="text-cyan-400">1,003,000 XAF</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 py-3 bg-slate-700 text-white rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 mr-2" /> Aperçu
              </button>
              <button className="flex-1 py-3 gradient-bg text-white rounded-lg font-semibold flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" /> Générer PDF
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-6">Paramètres de facturation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-slate-400 text-sm">Numéro de série</label>
                <input type="text" value="INV-2026-" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">TVA par défaut (%)</label>
                <input type="number" value="18" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Devise</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1">
                  <option>XAF - Franc CFA</option>
                  <option>EUR - Euro</option>
                  <option>USD - Dollar US</option>
                </select>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Conditions de paiement</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1">
                  <option>30 jours</option>
                  <option>15 jours</option>
                  <option>60 jours</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-6 py-3 gradient-bg text-white font-semibold rounded-xl">
              Sauvegarder
            </button>
          </motion.div>
        </div>
      )}

      {/* Invoice Modal */}
      {showInvoiceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Facture #INV-2026-001</h2>
              <button 
                onClick={() => setShowInvoiceModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Invoice Preview */}
            <div className="bg-white text-slate-900 rounded-xl p-8">
              <div className="flex justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">ELECTRON Business Suite</h3>
                  <p className="text-slate-600">electronbusiness07@gmail.com</p>
                  <p className="text-slate-600">Cotonou, Benin</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-600">Date: 16/04/2026</p>
                  <p className="text-slate-600">Échéance: 01/05/2026</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-slate-600 mb-2">Facturé à:</p>
                <p className="font-bold">Jean Dupont</p>
                <p className="text-slate-600">jean@email.com</p>
              </div>

              <table className="w-full mb-8">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-2">Description</th>
                    <th className="text-right py-2">Qté</th>
                    <th className="text-right py-2">Prix</th>
                    <th className="text-right py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3">iPhone 15 Pro 256GB</td>
                    <td className="text-right py-3">1</td>
                    <td className="text-right py-3">850,000</td>
                    <td className="text-right py-3 font-bold">850,000 XAF</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end">
                <div className="w-64 space-y-2">
                  <div className="flex justify-between text-slate-600">
                    <span>Sous-total</span>
                    <span>850,000 XAF</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>TVA (18%)</span>
                    <span>153,000 XAF</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t-2 border-slate-900 pt-2">
                    <span>Total</span>
                    <span>1,003,000 XAF</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowInvoiceModal(false)}
                className="flex-1 py-3 bg-slate-700 text-white rounded-lg"
              >
                Fermer
              </button>
              <button className="flex-1 py-3 gradient-bg text-white rounded-lg font-semibold flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" /> Télécharger PDF
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

function AlertCircle(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}