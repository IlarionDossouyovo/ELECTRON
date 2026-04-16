import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  ShoppingCart, Truck, CreditCard, Sparkles, BarChart3, Users, Building2, Package,
  ArrowRight, CheckCircle, Star, Zap, Shield, Globe, MapPin, Clock, DollarSign,
  Bot, TrendingUp, HeadphonesIcon, FileText, Store, Heart, GraduationCap, Cpu
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'ecommerce',
    name: 'E-commerce & Marketplace',
    tagline: 'Vendez plus, everywhere',
    icon: ShoppingCart,
    color: 'from-cyan-500 to-blue-600',
    features: [
      'Catalogue produits intelligent avec IA',
      'Recommandations personnalisées',
      'Filtres avancés (prix, marque, géolocalisé)',
      'Panier flottant avec micro-conversion',
      'Paiement multi-devises sécurisé',
      'Gestion stocks temps réel',
      'Badges: promo, rareté, minuteurs',
      'Tunnel d\'achat optimisé'
    ],
    pricing: 'À partir de 15 000 CFA/mois',
    demo: '/ecommerce'
  },
  {
    id: 'logistics',
    name: 'Transport & Logistique',
    tagline: 'Livrez plus vite, moins cher',
    icon: Truck,
    color: 'from-green-500 to-emerald-600',
    features: [
      'Suivi GPS temps réel',
      'Planification automatique tournées',
      'Gestion entrepôts (WMS)',
      'Routing dynamique IA',
      'Livraison par drone/vélo',
      'Intégration transporteurs',
      'Suivi températures RFID',
      'Bordereaux digitaux'
    ],
    pricing: 'À partir de 25 000 CFA/mois',
    demo: '/logistics'
  },
  {
    id: 'payments',
    name: 'Paiement Global Sécurisé',
    tagline: 'Acceptez tous les paiements',
    icon: CreditCard,
    color: 'from-purple-500 to-pink-600',
    features: [
      'MTN, Orange, Wave, Moov Money',
      'Stripe, PayPal, Apple Pay',
      'Crypto (BTC, ETH, USDC)',
      'Cryptage TLS 1.3',
      '3D Secure & MFA',
      'Tokenisation cartes',
      'Paiement différé/abo',
      'Split payment'
    ],
    pricing: '1.5% par transaction',
    demo: '/payments'
  },
  {
    id: 'ai',
    name: 'Intelligence Artificielle',
    tagline: 'Automatisez avec l\'IA',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-600',
    features: [
      'Chatbot 24/7 intégré',
      'Génération de contenu',
      'Recommandations produits',
      'Prédiction comportements',
      'Segmentation clients',
      'Maintenance prédictive',
      'Analyse sentiments',
      'LLM GPT-4o intégré'
    ],
    pricing: 'À partir de 50 000 CFA/mois',
    demo: '/ai'
  },
  {
    id: 'analytics',
    name: 'Analyse & KPIs',
    tagline: 'Mesurez, pilotez, grow',
    icon: BarChart3,
    color: 'from-cyan-500 to-teal-600',
    features: [
      'Dashboard temps réel',
      'CAC, CLV, conversion',
      'Panier moyen',
      'KPI logistique',
      'Rapports automatisés',
      'Graphiques interactifs',
      'Alertes smart',
      'Export PDF/Excel'
    ],
    pricing: 'À partir de 20 000 CFA/mois',
    demo: '/analytics'
  },
  {
    id: 'recruitment',
    name: 'Recrutement & RH',
    tagline: 'Trouvez les meilleurs talents',
    icon: Users,
    color: 'from-indigo-500 to-purple-600',
    features: [
      'Offres d\'emploi dynamiques',
      'Tri automatique CV (IA)',
      'Matching intelligent',
      'Suivi candidatures',
      'Entretiens автоматиqués',
      'Tableau RH',
      'Onboarding digital',
      'Gestion payroll'
    ],
    pricing: 'À partir de 30 000 CFA/mois',
    demo: '/recruitment'
  },
  {
    id: 'industry',
    name: 'Industrie & Distribution',
    tagline: 'Optimisez votre supply chain',
    icon: Building2,
    color: 'from-slate-500 to-zinc-600',
    features: [
      'Commandes B2B',
      'Gestion conteneurs',
      'Devis automatique',
      'Intégration douanes',
      'Entrepôt 4.0',
      'Traçabilité blockchain',
      'Prévision stocks',
      'ERP connecté'
    ],
    pricing: 'À partir de 75 000 CFA/mois',
    demo: '/industry'
  },
  {
    id: 'ngo',
    name: 'ONG & Humanitaire',
    tagline: 'Impact measurable',
    icon: Heart,
    color: 'from-red-500 to-rose-600',
    features: [
      'Gestion dons',
      'Projets humanitaires',
      'Impact tracking',
      'Blockchain transparen',
      'Rapports donateurs',
      'Médias terrain',
      'Dashboard public',
      'Paiement multidevises'
    ],
    pricing: 'Gratuit pour NGOs',
    demo: '/ngo'
  }
]

const stats = [
  { value: '150+', label: 'Pays couverts' },
  { value: '50+', label: 'Méthodes paiement' },
  { value: '10K+', label: 'Entreprises' },
  { value: '99.9%', label: 'Uptime garanti' }
]

const testimonials = [
  { name: 'Marie D.', company: 'Boutique CK', text: '+340% de ventes en 3 mois', avatar: '👩🏾' },
  { name: 'Jean-Pierre K.', company: 'Logistique Africa', text: 'Livraison 2x plus rapide', avatar: '👨🏾' },
  { name: 'Fatou S.', company: 'TechShop', text: 'IA super efficace', avatar: '👩🏼' }
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">NOS SERVICES</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Tout ce dont votre <span className="gradient-text">entreprise</span><br/>a besoin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Une plateforme complète. 8 modules intégrés pour digitaliser, automatiser et 
            développer votre business en Afrique et partout dans le monde.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className={`bg-slate-800/30 border rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-cyan-500/50 ${
                activeService === idx ? 'border-cyan-500' : 'border-slate-700/50'
              }`}
              onClick={() => setActiveService(idx)}
            >
              <div className={`p-6 bg-gradient-to-br ${service.color}`}>
                <service.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                <p className="text-white/80 text-sm">{service.tagline}</p>
              </div>
              <div className="p-5">
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 5).map((feat, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-cyan-400 font-bold text-sm">{service.pricing}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Service Detail */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {(() => {
          const active = services[activeService]
          const ActiveIcon = active.icon || Package
          return (
        <motion.div
          key={activeService}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center mb-6`}>
                <ActiveIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {active.name}
              </h2>
              <p className="text-xl text-cyan-400 mb-6">
                {active.tagline}
              </p>
              <ul className="space-y-3">
                {active.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                to={active.demo}
                className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Voir la démo <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-2">Interface {active.name}</h3>
              <p className="text-slate-400">
                Design moderne, responsive et intuitif. Accès sur mobile, tablette et ordinateur.
              </p>
            </div>
          </div>
        </motion.div>
          )
        })()}
      </div>

      {/* Témoignages */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Ils font confiance à <span className="gradient-text">ELECTRON</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{t.avatar}</div>
              <p className="text-green-400 text-lg font-bold mb-2">"{t.text}"</p>
              <p className="text-white font-medium">{t.name}</p>
              <p className="text-slate-500 text-sm">{t.company}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8"
        >
          <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-slate-400 mb-6">
            Réservez une démo personnalisée de 30 minutes. Gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Réserver ma démo
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}