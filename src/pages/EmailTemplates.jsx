import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, Plus, Search, Filter, Save, Eye, Copy,
  Send, Clock, User, ShoppingCart, Package, DollarSign,
  CheckCircle, AlertTriangle, FileText
} from 'lucide-react'

const emailTemplates = [
  { id: 1, name: 'Confirmation de commande', category: 'Commande', trigger: 'order.confirmed', subject: 'Votre commande #{order_id} a été confirmée', status: 'active', uses: 1247 },
  { id: 2, name: 'Paiement réussi', category: 'Paiement', trigger: 'payment.success', subject: 'Paiement confirmé - Commande #{order_id}', status: 'active', uses: 1156 },
  { id: 3, name: 'Expédition effectuée', category: 'Livraison', trigger: 'shipping.shipped', subject: 'Votre commande est en route!', status: 'active', uses: 987 },
  { id: 4, name: 'Livraison effectuée', category: 'Livraison', trigger: 'delivery.completed', subject: 'Votre commande a été livrée', status: 'active', uses: 945 },
  { id: 5, name: 'Rappel de paiement', category: 'Paiement', trigger: 'payment.reminder', subject: 'Rappel: Paiement en attente', status: 'active', uses: 234 },
  { id: 6, name: 'Bienvenue', category: 'Utilisateur', trigger: 'user.welcome', subject: 'Bienvenue sur ELECTRON!', status: 'active', uses: 1567 },
  { id: 7, name: 'Réinitialisation mot de passe', category: 'Utilisateur', trigger: 'user.password.reset', subject: 'Réinitialisez votre mot de passe', status: 'active', uses: 456 },
  { id: 8, name: 'Promo weekend', category: 'Marketing', trigger: 'campaign.weekend', subject: 'Weekend spécial -20% sur tout!', status: 'inactive', uses: 0 },
]

const categories = ['Tous', 'Commande', 'Paiement', 'Livraison', 'Utilisateur', 'Marketing']

const templateContent = `Bonjour {{customer_name}},

Merci pour votre commande #{order_id}!

Détails de la commande:
- Produit: {{product_name}}
- Prix: {{total_amount}}
- Date: {{order_date}}

Vous pouvez suivre votre commande ici: {{tracking_url}}

L'équipe ELECTRON vous remercie pour votre confiance.

--
ELECTRON Business Suite
 electronbusiness@gmail.com`

export default function EmailTemplates() {
  const [activeTab, setActiveTab] = useState('templates')
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Tous')
  const [selectedTemplate, setSelectedTemplate] = useState(emailTemplates[0])

  const stats = [
    { label: 'Templates actifs', value: '7', icon: Mail },
    { label: 'Envoyés ce mois', value: '45,231', icon: Send },
    { label: 'Taux d\'ouverture', value: '34.5%', icon: Eye },
    { label: 'Taux de clic', value: '8.2%', icon: Click },
  ]

  const filteredTemplates = emailTemplates.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = categoryFilter === 'Tous' || t.category === categoryFilter
    return matchSearch && matchCategory
  })

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
              <Mail className="w-8 h-8 mr-2 text-cyan-400" />
              Templates d'Emails
            </h1>
            <p className="text-slate-400">Configurez vos emails transactionnels</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Eye className="w-4 h-4 mr-2" />Aperçu
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouveau template
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
          {['templates', 'editor', 'settings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'templates' && 'Templates'}
              {tab === 'editor' && 'Éditeur'}
              {tab === 'settings' && 'Paramètres'}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="px-4 pb-16">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un template..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white"
            >
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Template</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Catégorie</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Sujet</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Utilisations</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTemplates.map((template, i) => (
                    <tr 
                      key={template.id} 
                      className={`border-t border-slate-700 hover:bg-slate-700/30 cursor-pointer ${selectedTemplate.id === template.id ? 'bg-cyan-500/10' : ''}`}
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-white font-medium">{template.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded">
                          {template.category}
                        </span>
                      </td>
                      <td className="text-slate-400 text-sm px-6 py-4 max-w-xs truncate">{template.subject}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          template.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'
                        }`}>
                          {template.status === 'active' ? 'Actif' : 'Inactif'}
                        </span>
                      </td>
                      <td className="text-slate-400 px-6 py-4">{template.uses.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg">
                            <Copy className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                            <Save className="w-4 h-4" />
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

      {/* Editor Tab */}
      {activeTab === 'editor' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Édition: {selectedTemplate.name}</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-slate-400 text-sm">Sujet</label>
                  <input 
                    type="text" 
                    value={selectedTemplate.subject}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm">Déclencheur</label>
                  <code className="block bg-slate-900 px-4 py-2 rounded text-cyan-400 text-sm mt-1">
                    {selectedTemplate.trigger}
                  </code>
                </div>
                <div>
                  <label className="text-slate-400 text-sm">Contenu</label>
                  <textarea 
                    value={templateContent}
                    rows={15}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1 font-mono text-sm"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Variables disponibles</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '{{customer_name}}', '{{order_id}}', '{{product_name}}',
                  '{{total_amount}}', '{{order_date}}', '{{tracking_url}}',
                  '{{company_name}}', '{{company_email}}'
                ].map((v, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-slate-900 rounded">
                    <code className="text-cyan-400 text-sm">{v}</code>
                    <button className="text-slate-500 hover:text-cyan-400">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <h3 className="text-white font-bold mt-6 mb-4">Aperçu</h3>
              <div className="bg-white rounded-lg p-4 text-slate-800 text-sm">
                <p>Bonjour Jean Dupont,</p>
                <p className="mt-2">Merci pour votre commande #ORD-001!</p>
                <p className="mt-2">Détails de la commande:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Produit: iPhone 15 Pro</li>
                  <li>Prix: 850,000 XAF</li>
                  <li>Date: 16/04/2026</li>
                </ul>
                <p className="mt-4">L'équipe ELECTRON vous remercie.</p>
              </div>
            </motion.div>
          </div>
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
            <h3 className="text-white font-bold mb-6">Paramètres d'envoi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-slate-400 text-sm">Email expéditeur</label>
                <input type="email" value="noreply@electron.africa" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Nom expéditeur</label>
                <input type="text" value="ELECTRON Business Suite" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Reply-To</label>
                <input type="email" value="support@electron.africa" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">DKIM/SPF</label>
                <span className="flex items-center text-green-400 mt-2">
                  <CheckCircle className="w-4 h-4 mr-2" /> Configuré
                </span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 gradient-bg text-white font-semibold rounded-xl">
              Sauvegarder les paramètres
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}

function Click(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"/>
    </svg>
  )
}