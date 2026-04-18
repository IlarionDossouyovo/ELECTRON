import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  ShoppingCart, Truck, CreditCard, Sparkles, BarChart3, 
  Users, Building2, Package, Globe, Mail, Bot, Shield,
  Cloud, Database, Smartphone, Monitor, Zap, Star,
  ArrowRight, CheckCircle, Play
} from 'lucide-react'

const services = [
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce & Marketplace',
    description: 'Solution complète de vente en ligne avec gestion des produits, panier intelligent, recommandations IA et paiement sécurisé.',
    features: [
      'Catalogue produits illimité',
      'Panier intelligent avec IA',
      'Recommandations personnalisées',
      'Filtres avancés',
      'Gestion des promociones',
      'Multi-devises'
    ],
    color: 'cyan'
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistique Intelligente',
    description: 'Système de gestion logistique avec suivi en temps réel, planification automatique et livraison multi-modale.',
    features: [
      'Suivi GPS temps réel',
      'Planification IA des tournées',
      'Gestion d\'entrepôts (WMS)',
      'Intégration transporteurs',
      'Livraison par drone/vélo',
      'Blockchain traçabilité'
    ],
    color: 'blue'
  },
  {
    id: 'payments',
    icon: CreditCard,
    title: 'Paiements Sécurisés',
    description: 'Passerelle de paiement multi-pays avec cryptage TLS 1.3, tokenisation et fraude IA detection.',
    features: [
      'Stripe, PayPal, Mobile Money',
      ' crypto(blockchain)',
      'Paiement multi-devises',
      'Paiement différé/ABO',
      '3D Secure, MFA',
      'Détection fraude IA'
    ],
    color: 'green'
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'Intelligence Artificielle',
    description: 'IA intégrée pour recommandations, predictions, generation de contenu et automatisation.',
    features: [
      'Chatbot GPT-4o',
      'Recommandations produits',
      'Prédiction comportements',
      'Maintenance prédictive',
      'Segmentation clients',
      'Génération contenu'
    ],
    color: 'purple'
  },
  {
    id: 'marketing',
    icon: Mail,
    title: 'Marketing Digital',
    description: 'Automatisation marketing multi-canal avec analytics et optimisation IA.',
    features: [
      'Email/SMS/Push automation',
      'Campagnes Google/Facebook',
      'Blog SEO intégré',
      'Analytics IA',
      'A/B testing auto',
      'Segmentation clients'
    ],
    color: 'pink'
  },
  {
    id: 'hr',
    icon: Users,
    title: 'RH & Recrutement',
    description: 'Gestion des ressources humaines avec IA de selection et suivi automatisé.',
    features: [
      'Offres d\'emploi dynamiques',
      'Tri automatique CV (IA)',
      'Suivi candidats',
      'Gestion employés',
      'Paie & congés',
      'Dashboard RH'
    ],
    color: 'orange'
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & KPIs',
    description: 'Tableau de bord complet avec KPIs business et analytics avance.',
    features: [
      'CAC, CLV, conversion',
      'Dashboards personnalisés',
      'Rapports automatisés',
      'Export PDF/Excel',
      'Alertes automatique',
      'Prévisions IA'
    ],
    color: 'yellow'
  },
  {
    id: 'crm',
    icon: Building2,
    title: 'CRM Entreprise',
    description: 'Gestion de la relation client avec pipeline visuel et automation.',
    features: [
      'Pipeline visuel',
      'Gestion deals',
      'Contacts centralisés',
      'Suivi interactions',
      'Scoring leads (IA)',
      'Workflows automation'
    ],
    color: 'indigo'
  }
]

const pricing = [
  { name: 'Starter', price: 'Gratuit', period: '', features: ['1 utilisateur', '100 produits', 'Email support'], popular: false },
  { name: 'Pro', price: '49€', period: '/mois', features: ['5 utilisateurs', 'Produits illimités', 'Paiements', 'Support prioritaire', 'API access'], popular: true },
  { name: 'Enterprise', price: '199€', period: '/mois', features: ['Utilisateurs illimités', 'IA avancée', 'Multi-boutiques', 'Formation', 'Manager dedié'], popular: false }
]

const stats = [
  { value: '10K+', label: 'Utilisateurs actifs' },
  { value: '500+', label: 'Entreprises' },
  { value: '25+', label: 'Pay supported' },
  { value: '99.9%', label: 'Uptime' }
]

const testimonials = [
  { name: 'Marie K.', role: 'CEO, ModeAfrica', text: 'ELECTRON a multiplié nos ventes par 3 en 6 mois. Le système de paiement mobile est incroyable!' },
  { name: 'Jean D.', role: 'Logisticien, Dakar', text: 'La gestion logistique avec tracking temps réel a revolutionné nos livraisons.' },
  { name: 'Sarah M.', role: 'E-commerçante, Benin', text: 'Le meilleur investissement pour notre boutique en ligne. IA et chatbot sont performants.' }
]

export default function ServicesPresentation() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ELECTRON <span className="text-cyan-400">Business Suite</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              La plateforme digitale complète pour-entreprises en Afrique et dans le monde
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-4 gradient-bg text-white text-lg font-bold rounded-xl flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" /> Demo gratuite
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white text-lg font-bold rounded-xl flex items-center justify-center border border-slate-700">
                Commencer maintenant <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-cyan-400">{stat.value}</p>
                <p className="text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Nos <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Une suite complète d'outils pour digitaliser votre entreprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Service List */}
            <div className="lg:col-span-1 space-y-3">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ${
                    activeService.id === service.id 
                      ? `bg-${service.color}-500/20 border border-${service.color}-500 text-white` 
                      : 'bg-slate-800/30 border border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <service.icon className={`w-5 h-5 text-${service.color}-400`} />
                  <span className="font-medium">{service.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Service Detail */}
            <motion.div 
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 bg-slate-800/30 border border-slate-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-${activeService.color}-500/20 rounded-2xl flex items-center justify-center`}>
                  <activeService.icon className={`w-8 h-8 text-${activeService.color}-400`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
                  <p className="text-slate-400">{activeService.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activeService.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-900/50 rounded-lg">
                    <CheckCircle className={`w-5 h-5 text-${activeService.color}-400`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Tarifs <span className="text-cyan-400"> Simples</span>
            </h2>
            <p className="text-slate-400">Choisissez le plan qui vous convient</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`relative bg-slate-900 border rounded-2xl p-8 ${
                  plan.popular ? 'border-cyan-500' : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-white text-sm font-bold rounded-full">
                    Populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold ${
                  plan.popular 
                    ? 'gradient-bg text-white' 
                    : 'bg-slate-800 text-white border border-slate-700'
                }`}>
                  Choisir ce plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Témoignages <span className="text-cyan-400">Clients</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-white mb-4">"{t.text}"</p>
                <div>
                  <p className="text-cyan-400 font-bold">{t.name}</p>
                  <p className="text-slate-400 text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à digitaliser votre entreprise?
          </h2>
          <p className="text-slate-300 text-xl mb-8">
            Commencez gratuitement et ajoutez des fonctionnalités au fur et à mesure de votre croissance
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 gradient-bg text-white text-lg font-bold rounded-xl">
              Essai gratuit - Pas de carte
            </button>
            <button className="px-8 py-4 bg-transparent text-white text-lg font-bold rounded-xl border border-white/30">
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-white font-bold text-xl">ELECTRON Business Suite</span>
            </div>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Confidentialité</a>
              <a href="#" className="hover:text-white">CGU</a>
            </div>
            <p className="text-slate-500">© 2026 ELECTRON. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}