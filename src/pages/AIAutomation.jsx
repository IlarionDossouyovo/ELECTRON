import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Bot, Brain, Cpu, Zap, Shield, Activity, MessageSquare,
  TrendingUp, Users, ShoppingCart, Package, DollarSign, 
  AlertTriangle, CheckCircle, Clock, Settings, Play, Pause,
  BarChart3, Mail, Bell, Database, Globe, Lock
} from 'lucide-react'

const agents = [
  { id: 1, name: 'EDAC-AI', role: 'CEO Intelligence', status: 'active', desc: 'Decision strategique IA', icon: Brain, color: 'purple' },
  { id: 2, name: 'SalesBot', role: 'Vendeur IA', status: 'active', desc: 'Automatisation des ventes', icon: ShoppingCart, color: 'green' },
  { id: 3, name: 'SupportAI', role: 'Support Client', status: 'active', desc: 'Chatbot 24/7', icon: MessageSquare, color: 'cyan' },
  { id: 4, name: 'LogisticsAI', role: 'Logistique', status: 'active', desc: 'Gestion des livraisons', icon: Package, color: 'orange' },
  { id: 5, name: 'FinanceBot', role: 'Comptabilite', status: 'active', desc: 'Gestion financiere', icon: DollarSign, color: 'yellow' },
  { id: 6, name: 'MarketingAI', role: 'Marketing', status: 'active', desc: 'Campagnes automatisees', icon: TrendingUp, color: 'pink' },
  { id: 7, name: 'HR-Bot', role: 'RH', status: 'standby', desc: 'Recrutement & gestion', icon: Users, color: 'blue' },
  { id: 8, name: 'SecurityAI', role: 'Securite', status: 'active', desc: 'Protection systeme', icon: Shield, color: 'red' },
]

const tasks = [
  { id: 1, name: 'Analyser les ventes du jour', agent: 'SalesBot', status: 'completed', time: 'il y a 2 min' },
  { id: 2, name: 'Repondre aux clients en attente', agent: 'SupportAI', status: 'running', time: 'en cours' },
  { id: 3, name: 'Optimiser les routes de livraison', agent: 'LogisticsAI', status: 'completed', time: 'il y a 15 min' },
  { id: 4, name: 'Generer rapport financier', agent: 'FinanceBot', status: 'pending', time: 'dans 30 min' },
  { id: 5, name: 'Lancer campagne marketing', agent: 'MarketingAI', status: 'pending', time: 'dans 1h' },
]

const metrics = {
  revenue: { value: 1250000, change: +12.5, period: 'aujourd\'hui' },
  orders: { value: 156, change: +8.2, period: 'aujourd\'hui' },
  customers: { value: 2340, change: +15, period: 'ce mois' },
  satisfaction: { value: 94.5, change: +2.3, period: 'ce mois' },
}

export default function AIAutomation() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0])
  const [agentStates, setAgentStates] = useState({1:'active',2:'active',3:'active',4:'active',5:'active',6:'active',7:'standby',8:'active'})

  const toggleAgent = (id) => {
    setAgentStates(prev => ({...prev, [id]: prev[id] === 'active' ? 'paused' : 'active'}))
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">AI Automation Center</h1>
              <p className="text-slate-400">Gestion intelligente de l'entreprise ELECTRON</p>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(metrics).map(([key, m], i) => (
            <motion.div key={key} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}}
              className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-slate-400 text-sm mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <p className="text-2xl font-bold text-white">{typeof m.value === 'number' && key !== 'satisfaction' ? m.value.toLocaleString() : m.value}{key === 'satisfaction' ? '%' : ''}</p>
              <p className="text-green-400 text-sm flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +{m.change}% {m.period}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Agents List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" /> Agents IA
            </h2>
            <div className="space-y-3">
              {agents.map(agent => (
                <motion.div key={agent.id} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:agent.id*0.05}}
                  onClick={() => setSelectedAgent(agent)}
                  className={`bg-slate-800 border rounded-xl p-4 cursor-pointer transition ${selectedAgent.id === agent.id ? 'border-cyan-500' : 'border-slate-700 hover:border-slate-600'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-${agent.color}-500/20 rounded-lg flex items-center justify-center`}>
                        <agent.icon className={`w-5 h-5 text-${agent.color}-400`} />
                      </div>
                      <div>
                        <p className="text-white font-bold">{agent.name}</p>
                        <p className="text-slate-400 text-sm">{agent.role}</p>
                      </div>
                    </div>
                    <button onClick={(e) => {e.stopPropagation(); toggleAgent(agent.id)}} 
                      className={`p-2 rounded-lg ${agentStates[agent.id] === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-400'}`}>
                      {agentStates[agent.id] === 'active' ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${agentStates[agent.id] === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {agentStates[agent.id] === 'active' ? 'Actif' : 'En pause'}
                    </span>
                    <span className="text-slate-500 text-xs">{agent.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Agent Details & Tasks */}
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Agent Details */}
            <motion.div key={selectedAgent.id} initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-${selectedAgent.color}-500/20 rounded-2xl flex items-center justify-center`}>
                    <selectedAgent.icon className={`w-8 h-8 text-${selectedAgent.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedAgent.name}</h3>
                    <p className="text-slate-400">{selectedAgent.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-cyan-400">98.5%</span>
                  <p className="text-slate-400 text-sm">Efficacite</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Taches traitees', value: '1,234' },
                  { label: 'Reponses', value: '5,678' },
                  { label: 'Uptime', value: '99.9%' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900 rounded-lg p-3 text-center">
                    <p className="text-white font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-slate-700 text-white rounded-lg flex items-center justify-center gap-2">
                  <Settings className="w-4 h-4" /> Configurer
                </button>
                <button className="flex-1 py-2 gradient-bg text-white font-bold rounded-lg flex items-center justify-center gap-2">
                  <Activity className="w-4 h-4" /> Voir activite
                </button>
              </div>
            </motion.div>

            {/* Tasks */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" /> Taches en cours
              </h3>
              <div className="space-y-3">
                {tasks.map((task, i) => (
                  <div key={task.id} className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      {task.status === 'completed' && <CheckCircle className="w-5 h-5 text-green-400" />}
                      {task.status === 'running' && <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />}
                      {task.status === 'pending' && <Clock className="w-5 h-5 text-yellow-400" />}
                      <div>
                        <p className="text-white">{task.name}</p>
                        <p className="text-slate-400 text-sm">{task.agent}</p>
                      </div>
                    </div>
                    <span className="text-slate-500 text-sm">{task.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Database, label: 'Base de donnees', status: 'healthy' },
                { icon: Globe, label: 'API', status: 'healthy' },
                { icon: Shield, label: 'Securite', status: 'healthy' },
                { icon: Zap, label: 'Performance', status: 'optimal' },
              ].map((sys, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                  <sys.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-white text-sm">{sys.label}</p>
                  <p className="text-green-400 text-xs capitalize">{sys.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}