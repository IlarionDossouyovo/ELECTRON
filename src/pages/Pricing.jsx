import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Zap, Star, Shield, Clock, Users, Building2, Globe, Wallet, CreditCard } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'mois',
    description: 'Pour démarrer',
    features: [
      '2 500 XAF/mois',
      '50 transactions',
      'E-commerce basique',
      '1 méthode paiement',
      'Support email',
      'Sans garantie'
    ],
    notIncluded: ['IA avancées', 'API', 'Blanc label'],
    color: 'from-slate-500 to-slate-600',
    popular: false
  },
  {
    name: 'Business',
    price: 15000,
    period: 'mois',
    description: 'Pour TPE/PME',
    features: [
      '1.5% par transaction',
      'Transactions illimitées',
      'Tous modules e-commerce',
      'Toutes méthodes paiement',
      'Support优先级',
      'Chatbot basique',
      'API access',
      'Dashboard analytiques'
    ],
    notIncluded: ['IBAN dédié', 'Manager dédié'],
    color: 'from-cyan-500 to-blue-600',
    popular: true
  },
  {
    name: 'Professional',
    price: 45000,
    period: 'mois',
    description: 'Pour croissance',
    features: [
      '1.2% par transaction',
      'Tout inclus',
      'IBAN européen',
      'Manager dédié',
      'Formation équipe',
      'Custom branding',
      'SLA 99.9%',
      'Intégration ERP',
      'Logistique complète'
    ],
    notIncluded: [],
    color: 'from-purple-500 to-pink-600',
    popular: false
  },
  {
    name: 'Enterprise',
    price: 150000,
    period: 'mois',
    description: 'Pour grandes entreprises',
    features: [
      '0.8% par transaction',
      'Multi-pays',
      'Multi-devises',
      'Équipe dédiée',
      'Formation sur site',
      'SLA 99.99%',
      'API illimitée',
      'Intégration sur mesure',
      'White label'
    ],
    notIncluded: [],
    color: 'from-amber-500 to-orange-600',
    popular: false
  }
]

const comparison = [
  { feature: 'Cartes virtuelles', starter: false, business: true, pro: true, enterprise: true },
  { feature: 'IBAN européen', starter: false, business: false, pro: true, enterprise: true },
  { feature: 'Mobile Money Africa', starter: '1', business: 'Tous', pro: 'Tous', enterprise: 'Tous' },
  { feature: 'Crypto wallet', starter: false, business: true, pro: true, enterprise: true },
  { feature: 'Escrow intelligent', starter: false, business: true, pro: true, enterprise: true },
  { feature: 'Split payments', starter: false, business: '3', pro: '10', enterprise: 'Illimité' },
  { feature: 'API calls/mois', starter: '100', business: '10000', pro: '100000', enterprise: 'Illimité' },
  { feature: 'Support', starter: 'Email', business: 'Chat', pro: 'Téléphone', enterprise: '24/7 dédié' },
  { feature: 'SLA', starter: '99%', business: '99.5%', pro: '99.9%', enterprise: '99.99%' },
]

export default function Pricing() {
  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Hero */}
      <div className="py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold mb-6">
            <Zap className="w-4 h-4 mr-2" /> TARIFS TRANSPARENTS
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Choisissez votre <span className="gradient-text">plan</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Des tarifs adaptés à votre croissance. Paiement mensuel. Sans engagement.
        </motion.p>
      </div>

      {/* Plans */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={`relative bg-slate-800/30 border rounded-2xl p-6 ${
                plan.popular 
                  ? 'border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                  : 'border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1" /> Plus populaire
                  </span>
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                {idx === 0 ? <Wallet className="w-6 h-6 text-white" /> :
                 idx === 1 ? <CreditCard className="w-6 h-6 text-white" /> :
                 idx === 2 ? <Building2 className="w-6 h-6 text-white" /> :
                 <Globe className="w-6 h-6 text-white" />}
              </div>
              
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">{plan.price.toLocaleString()}</span>
                <span className="text-slate-500"> XAF</span>
                <span className="text-slate-500">/{plan.period}</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm">
                    <X className="w-4 h-4 mr-2" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-semibold ${
                plan.popular 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}>
                Choisir {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Comparaison détaillée
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-4 text-slate-400">Fonctionnalité</th>
                <th className="text-center py-4 px-4 text-slate-400">Starter</th>
                <th className="text-center py-4 px-4 text-cyan-400">Business</th>
                <th className="text-center py-4 px-4 text-purple-400">Professional</th>
                <th className="text-center py-4 px-4 text-amber-400">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b border-slate-700/50">
                  <td className="py-4 px-4 text-white">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-slate-400">
                    {typeof row.starter === 'boolean' 
                      ? (row.starter ? <Check className="w-4 h-4 text-green-400 mx-auto" /> : <X className="w-4 h-4 text-red-400 mx-auto" />)
                      : row.starter
                    }
                  </td>
                  <td className="py-4 px-4 text-center text-cyan-400">
                    {typeof row.business === 'boolean' 
                      ? (row.business ? <Check className="w-4 h-4 text-green-400 mx-auto" /> : <X className="w-4 h-4 text-red-400 mx-auto" />)
                      : row.business
                    }
                  </td>
                  <td className="py-4 px-4 text-center text-purple-400">
                    {typeof row.pro === 'boolean' 
                      ? (row.pro ? <Check className="w-4 h-4 text-green-400 mx-auto" /> : <X className="w-4 h-4 text-red-400 mx-auto" />)
                      : row.pro
                    }
                  </td>
                  <td className="py-4 px-4 text-center text-amber-400">
                    {typeof row.enterprise === 'boolean' 
                      ? (row.enterprise ? <Check className="w-4 h-4 text-green-400 mx-auto" /> : <X className="w-4 h-4 text-red-400 mx-auto" />)
                      : row.enterprise
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Questions fréquentes</h2>
        
        <div className="space-y-4">
          {[
            { q: 'Puis-je changer de plan à tout moment ?', a: 'Oui, vous pouvez upgrader ou downgrade quand vous voulez. Les changements prennent effet le mois suivant.' },
            { q: 'Y a-t-il des frais cachés ?', a: 'Non, tous les frais sont transparents. Pas de frais de setup, pas de frais de résiliation.' },
            { q: 'Comment suis-je facturé ?', a: 'Facturation mensuelle. Vous pouvez payer par Mobile Money, virement ou crypto.' },
            { q: 'Quel plan choisir pour started ?', a: 'Le plan Starter est parfait pour tester. Vous pouvez commencer gratuitement et upgrader au fur et à mesure.' }
          ].map((faq, i) => (
            <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
              <p className="text-slate-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8"
        >
          <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Commencez gratuitement</h2>
          <p className="text-slate-400 mb-6">Essayez Electron pendant 14 jours. Aucune carte requise.</p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl flex items-center mx-auto">
            Créer mon compte gratuit <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}