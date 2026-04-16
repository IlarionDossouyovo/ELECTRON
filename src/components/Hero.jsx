import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Zap, Shield, Globe, Sparkles, Truck, CreditCard, BarChart3, Users } from 'lucide-react'

const stats = [
  { value: '150+', label: 'Pays couverts' },
  { value: '50+', label: 'Modules IA' },
  { value: '10K+', label: 'Entreprises' },
  { value: '99.9%', label: 'Uptime' },
]

const features = [
  { icon: ShoppingCart, name: 'E-commerce', desc: 'Boutique en ligne intelligente avec IA' },
  { icon: Truck, name: 'Logistique', desc: 'Suivi GPS et planification IA' },
  { icon: CreditCard, name: 'Paiements', desc: 'Multi-paiements locaux et internationaux' },
  { icon: Sparkles, name: 'IA Générative', desc: 'Contenu, chatbot et recommandations' },
  { icon: BarChart3, name: 'Analytics', desc: 'KPIs en temps réel' },
  { icon: Users, name: 'Recrutement', desc: 'Sélection automatique par IA' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpbmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8"
          >
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Plateforme N°1 en Afrique</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            <span className="block">ELECTRON</span>
            <span className="block gradient-text mt-2">Business Suite</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto"
          >
            La plateforme digitale complète qui révolutionne votre business. 
            E-commerce, logistique, marketing, IA, recrutement et contenus personnalisés.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center group"
            >
              Commencer gratuitement
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Voir la démo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <Link
              key={idx}
              to={`/${feature.name.toLowerCase()}`}
              className="group p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.name}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Import ShoppingCart which was used but not imported
import { ShoppingCart } from 'lucide-react'