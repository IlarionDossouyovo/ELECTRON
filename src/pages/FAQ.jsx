import { motion } from 'framer-motion'
import { useState } from 'react'
import { HelpCircle, ChevronDown, Search, MessageCircle, Mail, Phone } from 'lucide-react'

const faqs = [
  {
    category: 'Paiement',
    questions: [
      { q: 'Comment fonctionne Electron Pay ?', a: 'Electron Pay vous permet de recevoir des paiements via Mobile Money (MTN, Orange, Wave), cartes bancaires, et crypto. Chaque transaction est sécurisée avec cryptage TLS et vérification 3D Secure.' },
      { q: 'Quels sont les frais de transaction ?', a: 'Les frais varient selon le plan: Starter (gratuit), Business (1.5%), Professional (1.2%), Enterprise (0.8%).' },
      { q: 'Comment retrait mon argent ?', a: 'Vous pouvez retirer vers votre compte Mobile Money, compte bancaire, ou wallet crypto. Les retraits sont traités sous 24-48h.' },
      { q: 'Electron Pay accepte-t-il les crypto ?', a: 'Oui! Nous acceptons Bitcoin, Ethereum, USDT et USDC avec conversion automatique en XAF.' }
    ]
  },
  {
    category: 'E-commerce',
    questions: [
      { q: 'Comment créer ma boutique en ligne ?', a: 'Inscrivez-vous, sélectionnez le module E-commerce, ajoutez vos produits, et votre boutique est prête en quelques minutes.' },
      { q: 'Puis-je vendre des produits numériques ?', a: 'Oui, vous pouvez vendre des ebooks, formations vidéo, logiciels, et tout produit téléchargeable.' },
      { q: 'Comment gérer mes stocks ?', a: 'Notre système WMS gère automatiquement vos stocks, vous alerte quand les niveaux sont bas, et同步 synchronize avec vos ventes.' }
    ]
  },
  {
    category: 'Logistique',
    questions: [
      { q: 'Comment suivre mes livraisons ?', a: 'Chaque client reçoit un lien de tracking en temps réel avec GPS. Vous pouvez suivre depuis votre dashboard.' },
      { q: 'Quels transporteurs disponibles ?', a: 'Nous intégrons plusieurs partenaires: drones de livraison, vélos électriques, véhicules standards selon la zone.' },
      { q: 'Livrez-vous à l\'international ?', a: 'Oui, nous livrons dans 30+ pays avec suivi douanier intégré pour les expéditions internationales.' }
    ]
  },
  {
    category: 'Technique',
    questions: [
      { q: 'Comment installer l\'application ?', a: 'Electron est une PWA - installez directement depuis votre navigateur Chrome/Safari sans passer par un app store.' },
      { q: 'Mes données sont-elles sécurisées ?', a: 'Absolument. Cryptage AES-256, authentification MFA, sauvegardes quotidiennes, conformité RGPD.' },
      { q: 'Puis-je intégrer ma comptabilité ?', a: 'Oui, intégration native avec plusieurs logiciels comptables et export Excel/CSV.' }
    ]
  }
]

export default function FAQ() {
  const [search, setSearch] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const filteredFaqs = faqs.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.q.toLowerCase().includes(search.toLowerCase()) || 
      q.a.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0)

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Hero */}
      <div className="py-16 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <HelpCircle className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Foire Aux <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur ELECTRON
          </p>
        </motion.div>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto px-4 pb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher une question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
          />
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {filteredFaqs.map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * catIdx }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{category.category}</h2>
            <div className="space-y-2">
              {category.questions.map((item, idx) => {
                const globalIdx = `${catIdx}-${idx}`
                return (
                  <div 
                    key={idx}
                    className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === globalIdx ? null : globalIdx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between"
                    >
                      <span className="text-white font-medium">{item.q}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === globalIdx ? 'rotate-180' : ''}`} />
                    </button>
                    {openIndex === globalIdx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-slate-400">{item.a}</p>
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Vous n'avez pas trouvé ?</h2>
          <p className="text-slate-400 mb-6">Contactez notre équipe directement</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 flex items-center">
              <Mail className="w-5 h-5 mr-2" /> Nous écrire
            </a>
            <a href="tel:+2290197700347" className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 flex items-center">
              <Phone className="w-5 h-5 mr-2" /> +229 01 977 003 47
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}