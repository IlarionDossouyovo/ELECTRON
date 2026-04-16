import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Truck, Sparkles, GraduationCap, Users, Heart, Store, ArrowRight, Package, CreditCard, BarChart3, Bot } from 'lucide-react'

const sectors = {
  retail: {
    name: 'Retail & Mode',
    description: 'Boutiques en ligne, marketplaces multi-vendeurs, vente de produits physiques et numériques.',
    icon: ShoppingCart,
    features: ['Catalogue intelligent', 'Recommandations IA', 'Filtres avancés', 'Paiement sécurisé'],
    modules: ['/ecommerce', '/payments', '/ai', '/analytics']
  },
  industry: {
    name: 'Industrie & Distribution',
    description: 'Gestion B2B, entrepôts industriels, import/export et supply chain.',
    icon: Building2,
    features: ['Commandes par conteneurs', 'Gestion douanes', 'Entrepôt 4.0', 'Devis automatique'],
    modules: ['/industry', '/logistics', '/payments', '/analytics']
  },
  services: {
    name: 'Entreprises de Services',
    description: 'Agences, consultants, services à la demande, RH et gestion client.',
    icon: Store,
    features: ['Réservation en ligne', 'CRM intégré', 'Paiements', 'Gestion agents'],
    modules: ['/recruitment', '/payments', '/analytics']
  },
  education: {
    name: 'Éducation & e-Learning',
    description: 'Plateformes LMS, vente de formations, certification et suivi pédagogique.',
    icon: GraduationCap,
    features: ['Cours en ligne', 'Certification', 'Vente de manuels', 'Suivi étudiants'],
    modules: ['/ai', '/payments', '/analytics']
  },
  public: {
    name: 'Secteur Public',
    description: 'Collectivités, municipalities, portails citoyens et gestion RH publique.',
    icon: Users,
    features: ['Portails citoyens', 'Demandes en ligne', 'RH automatisé', 'Statistiques'],
    modules: ['/recruitment', '/analytics']
  },
  ong: {
    name: 'ONG & International',
    description: 'Organisations humanitaires, dons, traçabilité et impact social.',
    icon: Heart,
    features: ['Gestion dons', 'Projets humanitaires', 'Impact tracking', 'Blockchain'],
    modules: ['/ngo', '/payments', '/ai', '/analytics']
  }
}

const sectorModules = [
  { path: '/ecommerce', icon: ShoppingCart, name: 'E-commerce' },
  { path: '/logistics', icon: Truck, name: 'Logistique' },
  { path: '/payments', icon: CreditCard, name: 'Paiements' },
  { path: '/ai', icon: Sparkles, name: 'Intelligence IA' },
  { path: '/analytics', icon: BarChart3, name: 'Analytics' },
  { path: '/recruitment', icon: Users, name: 'Recrutement' },
  { path: '/industry', icon: Building2, name: 'Industrie' },
  { path: '/ngo', icon: Heart, name: 'ONG' },
]

export default function SectorPage() {
  const { sector } = useParams()
  const sectorData = sectors[sector]

  if (!sectorData) {
    return (
      <div className="min-h-screen pt-16 hero-gradient flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Secteur non trouvé</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">
            Retour à l'accueil →
          </Link>
        </div>
      </div>
    )
  }

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
            <sectorData.icon className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Secteur</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {sectorData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            {sectorData.description}
          </motion.p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6">Fonctionnalités dédiées</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectorData.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl flex items-center"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mr-3">
                <Package className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-white font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Related Modules */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6">Modules recommandés</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sectorData.modules.map((mod, idx) => {
            const modData = sectorModules.find(m => m.path === mod)
            const ModIcon = modData ? modData.icon : Package
            return (
              <Link
                key={idx}
                to={mod}
                className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 transition-colors group"
              >
                {modData && <ModIcon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />}
                <h4 className="text-white font-semibold mb-1">{modData ? modData.name : 'Module'}</h4>
                <p className="text-slate-500 text-sm flex items-center">
                  Voir plus <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Prêt à démarrer pour {sectorData.name} ?
          </h3>
          <p className="text-slate-400 mb-8">
            Créez votre compte et configurez votre sector en quelques minutes.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Commencer gratuitement
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}