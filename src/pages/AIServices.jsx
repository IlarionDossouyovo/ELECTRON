import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Sparkles, MessageCircle, Brain, Wand2, Lightbulb, 
  Send, Bot, TrendingUp, AlertTriangle, CheckCircle,
  Settings, Zap, BarChart3, FileText, Image, Video
} from 'lucide-react'

const aiFeatures = [
  { id: 'chatbot', name: 'Chatbot IA', desc: 'Assistant virtuel 24/7', icon: MessageCircle, active: true, users: '1,247' },
  { id: 'recommendations', name: 'Recommandations', desc: 'Produits personnalisés', icon: Lightbulb, active: true, users: '2,341' },
  { id: 'predictions', name: 'Prédictions', desc: 'Analyse comportementale', icon: TrendingUp, active: false, users: '0' },
  { id: 'content', name: 'Génération Contenu', desc: 'Articles, descriptions', icon: FileText, active: true, users: '156' },
  { id: 'images', name: 'Génération Images', desc: 'Images produits IA', icon: Image, active: false, users: '0' },
  { id: 'voice', name: 'Assistant Vocal', desc: 'Commandes vocales', icon: Bot, active: false, users: '0' },
]

const chatMessages = [
  { role: 'user', text: 'Bonjour, je cherche un smartphone' },
  { role: 'ai', text: 'Bonjour! Je serais ravi de vous aider. Quel budget avez-vous en tête? Nous avons des iPhone à partir de 450.000 XAF.' },
  { role: 'user', text: 'J\'ai un budget de 600.000 XAF' },
  { role: 'ai', text: 'Parfait! Avec ce budget, je vous recommande l\'iPhone 14 Pro (550.000 XAF) ou le Samsung S23 (580.000 XAF). Voulez-vous que je vous montre les caractéristiques de ces modèles?' },
]

const predictions = [
  { label: 'Ventes demain', value: '847,000 XAF', accuracy: '94%', trend: '+12%' },
  { label: 'Livraisons en retard', value: '3', accuracy: '89%', trend: '-15%' },
  { label: 'Clients à risque', value: '12', accuracy: '91%', trend: '+5%' },
  { label: 'Stock optimal', value: '89%', accuracy: '96%', trend: '0%' },
]

export default function AIServices() {
  const [activeTab, setActiveTab] = useState('overview')
  const [chatInput, setChatInput] = useState('')

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
              <Sparkles className="w-8 h-8 mr-2 text-cyan-400" />
              Intelligence Artificielle
            </h1>
            <p className="text-slate-400">Services IA et apprentissage automatique</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Settings className="w-4 h-4 mr-2" /> Configurer
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Zap className="w-4 h-4 mr-2" />Nouvelle fonctionnalité
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Requêtes IA', value: '45,231', change: '+23%' },
            { label: 'Temps économisé', value: '127h', change: '+15%' },
            { label: 'Précision moyenne', value: '94.2%', change: '+2%' },
            { label: 'Utilisateurs actifs', value: '2,341', change: '+156' },
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
        <div className="flex gap-2">
          {['overview', 'chatbot', 'predictions', 'content'].map(tab => (
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
              {tab === 'chatbot' && 'Chatbot'}
              {tab === 'predictions' && 'Prédictions'}
              {tab === 'content' && 'Contenu'}
            </button>
          ))}
        </div>
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiFeatures.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                  <div className={`px-2 py-1 rounded text-xs ${feature.active ? 'bg-green-500/20 text-green-400' : 'bg-slate-600 text-slate-400'}`}>
                    {feature.active ? 'Actif' : 'Inactif'}
                  </div>
                </div>
                <h3 className="text-white font-bold">{feature.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{feature.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{feature.users} utilisateurs</span>
                  <button className="text-cyan-400 text-sm hover:underline">Configurer</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Chatbot */}
      {activeTab === 'chatbot' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex flex-col"
              style={{ height: '500px' }}
            >
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700">
                <div className="flex items-center">
                  <Bot className="w-6 h-6 text-cyan-400 mr-2" />
                  <span className="text-white font-semibold">ELECTRON AI Assistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-slate-400 text-sm">En ligne</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-xl ${
                      msg.role === 'user' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-900 text-slate-300'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Tapez votre message..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
                />
                <button className="px-4 bg-cyan-500 text-white rounded-lg">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Stats & Config */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
              >
                <h3 className="text-white font-bold mb-4">Statistiques</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Conversations aujourd\'hui', value: '127' },
                    { label: 'Temps moyen de réponse', value: '2.3s' },
                    { label: 'Satisfaction', value: '94%' },
                    { label: 'Résolution au 1er contact', value: '78%' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-900 rounded-lg p-3">
                      <p className="text-cyan-400 font-bold">{stat.value}</p>
                      <p className="text-slate-400 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
              >
                <h3 className="text-white font-bold mb-4">Configuration</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                    <span className="text-white">Voix active</span>
                    <button className="w-12 h-6 bg-cyan-500 rounded-full">
                      <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
                    </button>
                  </label>
                  <label className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                    <span className="text-white">Mode apprentissage</span>
                    <button className="w-12 h-6 bg-slate-600 rounded-full">
                      <div className="w-5 h-5 bg-white rounded-full translate-x-0.5" />
                    </button>
                  </label>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Predictions */}
      {activeTab === 'predictions' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {predictions.map((pred, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{pred.label}</span>
                  <Brain className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-white font-bold text-2xl mb-2">{pred.value}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs">Précision: {pred.accuracy}</span>
                  <span className={`text-sm ${pred.trend.startsWith('+') ? 'text-green-400' : pred.trend === '0%' ? 'text-slate-400' : 'text-red-400'}`}>
                    {pred.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4">Prédictions de ventes - 7 prochains jours</h3>
            <div className="flex items-end gap-2 h-40">
              {[65, 78, 82, 70, 85, 90, 88].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg"
                    style={{ height: `${val}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-slate-400 text-xs">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((d, i) => <span key={i}>{d}</span>)}
            </div>
          </motion.div>
        </div>
      )}

      {/* Content */}
      {activeTab === 'content' && (
        <div className="px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4">Génération de contenu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Articles de blog générés</h4>
                <p className="text-cyan-400 text-3xl font-bold">47</p>
              </div>
              <div className="bg-slate-900 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Descriptions produits</h4>
                <p className="text-cyan-400 text-3xl font-bold">234</p>
              </div>
            </div>
            <button className="w-full py-3 bg-cyan-500 text-white rounded-lg flex items-center justify-center">
              <Wand2 className="w-5 h-5 mr-2" /> Générer nouveau contenu
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}