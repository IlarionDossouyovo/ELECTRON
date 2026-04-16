import { motion } from 'framer-motion'
import { Sparkles, Brain, MessageSquare, TrendingUp, Target, Users, Bot, Lightbulb, Zap, Cpu } from 'lucide-react'

const aiFeatures = [
  {
    icon: MessageSquare,
    name: 'IA Générative',
    desc: 'Blog, chatbot, recommandations automatiques',
    examples: ['Rédaction de contenu', 'Chatbot 24/7', 'Réponses automatisées']
  },
  {
    icon: TrendingUp,
    name: 'Prédiction',
    desc: 'Comportement d\'achat, retards livraison',
    examples: ['Prévisions de ventes', 'Détection de churn', 'Estimation délais']
  },
  {
    icon: Target,
    name: 'Segmentation',
    desc: 'Classification automatique клиентов',
    examples: ['Profils clients', 'Préférences', 'Valeur client']
  },
  {
    icon: Brain,
    name: 'LLM Intégré',
    desc: 'GPT-4o pour analyses avancées',
    examples: ['Analyse de documents', 'Résumé automatique', 'Extraction insights']
  },
]

const useCases = [
  { title: 'Recommandations produits', conversion: '+35%', description: 'Suggestions personnalisées basées sur l\'historique' },
  { title: 'Chatbot service client', reduction: '-60%', description: 'Réduction des tickets de support' },
  { title: 'Prédiction de stock', accuracy: '94%', description: 'Précision sur les besoins en inventaire' },
  { title: 'Maintenance prédictive', savings: '-25%', description: 'Réduction des coûts de maintenance' },
  { title: 'Détection de fraude', detection: '99.7%', description: 'Transactions suspectes identifié' },
  { title: 'Personnalisation marketing', engagement: '+45%', description: 'Engagement des campagnes' },
]

export default function AI() {
  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Header */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-5/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Module IA</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Intelligence <span className="gradient-text">Artificielle</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            IA générative, prédictive et recommandations. GPT-4o intégré pour analyser, 
            créer et optimiser vos processus métier.
          </motion.p>
        </div>
      </div>

      {/* AI Features */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl"
          >
            <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">{feature.name}</h3>
            <p className="text-slate-400 text-sm mb-4">{feature.desc}</p>
            <div className="space-y-2">
              {feature.examples.map((ex, i) => (
                <div key={i} className="text-xs text-slate-500 flex items-center">
                  <Zap className="w-3 h-3 text-purple-400 mr-2" />
                  {ex}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Demo Chat */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-slate-700 flex items-center">
            <Bot className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-white font-medium">Assistant IA Electron</span>
            <span className="ml-auto text-xs text-green-400">● En ligne</span>
          </div>
          <div className="p-6 space-y-4 min-h-[300px]">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <div className="ml-3 bg-slate-700/50 rounded-xl p-3 max-w-[80%]">
                <p className="text-slate-300 text-sm">
                  Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd'hui ?
                  Je peux analyser vos données, générer du contenu, ou répondre à vos questions.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="mr-3 bg-cyan-500/20 rounded-xl p-3 max-w-[80%]">
                <p className="text-white text-sm">
                  Quels produits me recommandez-vous ?
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <div className="ml-3 bg-slate-700/50 rounded-xl p-3 max-w-[80%]">
                <p className="text-slate-300 text-sm">
                  Basé sur votre historique, je vous recommande :
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center p-2 bg-slate-800/50 rounded-lg">
                    <span className="text-2xl mr-3">📱</span>
                    <div>
                      <p className="text-white text-sm font-medium">Smartphone Pro</p>
                      <p className="text-cyan-400 text-xs">45 000 CFA</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-slate-800/50 rounded-lg">
                    <span className="text-2xl mr-3">⌚</span>
                    <div>
                      <p className="text-white text-sm font-medium">Montre Connectée</p>
                      <p className="text-cyan-400 text-xs">15 000 CFA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-slate-700">
            <input
              type="text"
              placeholder="Tapez votre message..."
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold text-white mb-6">Cas d'usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{useCase.title}</h4>
                <span className="text-green-400 text-sm font-bold">{useCase.conversion || useCase.reduction || useCase.accuracy || useCase.savings || useCase.detection}</span>
              </div>
              <p className="text-slate-400 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}