import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Rocket, Brain, Shield, Globe, Zap, ChevronRight,
  ShoppingBag, Truck, CreditCard, Sparkles, ArrowRight,
  Menu, X, User, Bell, Search, Star, Play
} from 'lucide-react'

const services = [
  { icon: ShoppingBag, name: 'E-Commerce', desc: 'Boutique en ligne complete', color: 'cyan', route: '/ecommerce' },
  { icon: Truck, name: 'Logistique', desc: 'Transport & livraison', color: 'orange', route: '/logistics' },
  { icon: Brain, name: 'IA Business', desc: 'Intelligence artificielle', color: 'purple', route: '/ai-services' },
  { icon: CreditCard, name: 'Electron Pay', desc: 'Paiements unifies', color: 'green', route: '/payment-settings' },
  { icon: Globe, name: 'E-Expresse', desc: 'Marche B2B & B2C', color: 'yellow', route: '/e-expresse' },
  { icon: Shield, name: 'EDAC Defense', desc: 'Securite IA', color: 'red', route: '/edac' },
]

const stats = [
  { value: '50K+', label: 'Clients' },
  { value: '320+', label: 'Vendeurs' },
  { value: '12', label: 'Marches' },
  { value: '99.9%', label: 'Uptime' },
]

const testimonials = [
  { name: 'Jean D.', company: 'Tech Benin', text: 'Electron a transforme notre gestion', rating: 5 },
  { name: 'Marie K.', company: ' Deco', text: 'Meilleur investissement pour mon business', rating: 5 },
  { name: 'Paul O.', company: 'AutoPro', text: 'E-Garrage nous a apporte beaucoup de clients', rating: 5 },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-white font-bold text-xl">ELECTRON</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="/e-expresse" className="text-slate-300 hover:text-white">Marche</a>
              <a href="/services" className="text-slate-300 hover:text-white">Services</a>
              <a href="/ai-services" className="text-slate-300 hover:text-white">IA</a>
              <a href="/edac" className="text-slate-300 hover:text-white">Defense</a>
              <a href="/contact" className="text-slate-300 hover:text-white">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="/login" className="px-4 py-2 text-slate-300 hover:text-white">Connexion</a>
              <a href="/e-expresse" className="px-4 py-2 gradient-bg text-white font-bold rounded-lg">
                Commencer
              </a>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 p-4 space-y-3">
            <a href="/e-expresse" className="block text-white py-2">Marche</a>
            <a href="/services" className="block text-white py-2">Services</a>
            <a href="/ai-services" className="block text-white py-2">IA Business</a>
            <a href="/edac" className="block text-white py-2">Defense</a>
            <a href="/login" className="block text-white py-2">Connexion</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-white text-sm">L'entreprise intelligente du futur</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Bienvenue chez <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ELECTRON</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              La plateforme d'entreprise intelligente integrates: E-Commerce, Logistique, IA, 
              Finance et le grand marche E-Expresse. Tout un seul endroit.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="/e-expresse" className="px-8 py-4 gradient-bg text-white font-bold rounded-xl flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Decouvrir le marche
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/ai-services" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl flex items-center gap-2">
                <Brain className="w-5 h-5" /> IA Business
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl font-bold text-cyan-400">{stat.value}</p>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div animate={{y:[0,10,0]}} transition={{repeat:Infinity,duration:2}} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400">
          <ChevronRight className="w-8 h-8 rotate-90" />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nos Services</h2>
            <p className="text-slate-400">Tout ce dont votre entreprise a besoin</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.a href={service.route} key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.1}}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition group">
                <div className={`w-14 h-14 bg-${service.color}-500/20 rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className={`w-7 h-7 text-${service.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">{service.name}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* E-Expresse Banner */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  E-<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expresse</span>
                </h2>
                <p className="text-slate-400 text-lg mb-6 max-w-xl">
                  Le plus grand marche B2B & B2C d'Afrique de l'Ouest. 
                  12 marches, 320+ vendeurs, 50,000+ clients.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Construction', 'Tech', 'Immobilier', 'Auto', 'Design'].map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <a href="/e-expresse" className="px-8 py-4 gradient-bg text-white font-bold rounded-xl">
                Explorer le marche
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Temoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.1}}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (<Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />))}
                </div>
                <p className="text-slate-300 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">{t.name}</p>
                    <p className="text-slate-400 text-sm">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Pret a commencer?</h2>
          <p className="text-slate-400 mb-8">Rejoignez des milliers d'entreprises qui font confiance a ELECTRON</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/e-expresse" className="px-8 py-4 gradient-bg text-white font-bold rounded-xl">
              Creer mon compte
            </a>
            <a href="/contact" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-white font-bold text-xl">ELECTRON</span>
              </div>
              <p className="text-slate-400">L'entreprise intelligente du futur en Afrique</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Marches</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/e-battisseurs" className="hover:text-cyan-400">E-Battisseurs</a></li>
                <li><a href="/e-tech" className="hover:text-cyan-400">E-TECH</a></li>
                <li><a href="/e-immo" className="hover:text-cyan-400">E-Immo</a></li>
                <li><a href="/e-expresse" className="hover:text-cyan-400">Tous les marches</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/ai-services" className="hover:text-cyan-400">IA Business</a></li>
                <li><a href="/payment-settings" className="hover:text-cyan-400">Electron Pay</a></li>
                <li><a href="/logistics" className="hover:text-cyan-400">Logistique</a></li>
                <li><a href="/edac" className="hover:text-cyan-400">EDAC Defense</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>electronbusiness@gmail.com</li>
                <li>+229 01 977 003 47</li>
                <li>Cotonou, Benin</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 ELECTRON Business Suite. Tous droits reserves.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}