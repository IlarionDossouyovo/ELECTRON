import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShoppingCart, Truck, Package, CreditCard, 
  Sparkles, BarChart3, Users, Building2, 
  Menu, X, ChevronDown, Zap
} from 'lucide-react'

const modules = [
  { id: 'ecommerce', name: 'E-commerce & Marketplace', icon: ShoppingCart, path: '/ecommerce' },
  { id: 'logistics', name: 'Transport & Logistique', icon: Truck, path: '/logistics' },
  { id: 'payments', name: 'Paiement Global', icon: CreditCard, path: '/payments' },
  { id: 'ai', name: 'Intelligence Artificielle', icon: Sparkles, path: '/ai' },
  { id: 'analytics', name: 'Analyse & KPIs', icon: BarChart3, path: '/analytics' },
  { id: 'recruitment', name: 'Recrutement & RH', icon: Users, path: '/recruitment' },
  { id: 'industry', name: 'Industrie & Distribution', icon: Building2, path: '/industry' },
  { id: 'ngo', name: 'ONG & Humanitaire', icon: Package, path: '/ngo' },
]

const sectors = [
  { id: 'retail', name: 'Retail & Mode', target: '/sector/retail' },
  { id: 'industry', name: 'Industrie & Distribution', target: '/sector/industry' },
  { id: 'services', name: 'Entreprises de Services', target: '/sector/services' },
  { id: 'education', name: 'Éducation & e-Learning', target: '/sector/education' },
  { id: 'public', name: 'Secteur Public', target: '/sector/public' },
  { id: 'ong', name: 'ONG & International', target: '/sector/ong' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showModules, setShowModules] = useState(false)
  const [showSectors, setShowSectors] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect bg-slate-900/90 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">ELECTRON</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Modules Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setShowModules(true)}
                onMouseLeave={() => setShowModules(false)}
                className="flex items-center px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                <Package className="w-4 h-4 mr-2" />
                Modules
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {showModules && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 py-2"
                    onMouseEnter={() => setShowModules(true)}
                    onMouseLeave={() => setShowModules(false)}
                  >
                    {modules.map((module) => (
                      <Link
                        key={module.id}
                        to={module.path}
                        className="flex items-center px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                      >
                        <module.icon className="w-5 h-5 mr-3 text-cyan-400" />
                        <span className="text-sm">{module.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sectors Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setShowSectors(true)}
                onMouseLeave={() => setShowSectors(false)}
                className="flex items-center px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Secteurs
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {showSectors && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 py-2"
                    onMouseEnter={() => setShowSectors(true)}
                    onMouseLeave={() => setShowSectors(false)}
                  >
                    {sectors.map((sector) => (
                      <Link
                        key={sector.id}
                        to={sector.target}
                        className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                      >
                        <span className="text-sm">{sector.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/pricing" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
              Tarifs
            </Link>
            <Link to="/contact" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/demo" className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Démo
            </Link>
            <Link to="/signup" className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25">
              Commencer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50"
          >
            <div className="px-4 py-4 space-y-2">
              {modules.slice(0, 4).map((module) => (
                <Link
                  key={module.id}
                  to={module.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <module.icon className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-sm">{module.name}</span>
                </Link>
              ))}
              <hr className="border-slate-700/50 my-2" />
              {sectors.map((sector) => (
                <Link
                  key={sector.id}
                  to={sector.target}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <span className="text-sm">{sector.name}</span>
                </Link>
              ))}
              <hr className="border-slate-700/50 my-2" />
              <Link to="/demo" className="block px-4 py-3 text-cyan-400">
                Demander une démo
              </Link>
              <Link to="/signup" className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center font-semibold rounded-lg">
                Commencer gratuitement
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}