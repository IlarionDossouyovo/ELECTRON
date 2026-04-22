import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Store, ShoppingBag, Truck, CreditCard, Star, Eye, 
  ArrowRight, Package, Search, Filter, Heart, Plus,
  ChevronRight, Zap, Shield, Globe, MapPin, Phone,
  Mail, Menu, X, User, ShoppingCart, Bell
} from 'lucide-react'

const marketplaces = [
  {
    id: 'ebattisseurs',
    name: 'E-Battisseurs',
    tagline: 'Construction & Batiment',
    description: 'Materiaux de construction, prefabricats, services chantier',
    icon: '🏗️',
    color: 'orange',
    repo: 'https://github.com/IlarionDossouyovo/E-Battisseurs.git',
    category: 'construction',
    products: 156,
    rating: 4.7,
    vendors: 23,
    url: '/e-battisseurs'
  },
  {
    id: 'edesigne',
    name: 'E-Designe',
    tagline: 'Design & Architecture',
    description: 'Architecture interieur, design graphique, amenagement',
    icon: '🎨',
    color: 'purple',
    repo: 'https://github.com/IlarionDossouyovo/E-Designe.git',
    category: 'design',
    products: 89,
    rating: 4.9,
    vendors: 15,
    url: '/e-designe'
  },
  {
    id: 'eclean',
    name: 'E-Clean',
    tagline: 'Services de Nettoyage',
    description: 'Nettoyage residential, commercial, industriel',
    icon: '🧹',
    color: 'cyan',
    repo: 'https://github.com/IlarionDossouyovo/E-Clean.git',
    category: 'services',
    products: 45,
    rating: 4.8,
    vendors: 12,
    url: '/e-clean'
  },
  {
    id: 'esim',
    name: 'E-Sim',
    tagline: 'Telecom & Connectivite',
    description: 'Cartes SIM, forfaits data, recharge, accessoires',
    icon: '📱',
    color: 'blue',
    repo: 'https://github.com/IlarionDossouyovo/E-Sim.git',
    category: 'telecom',
    products: 234,
    rating: 4.6,
    vendors: 8,
    url: '/e-sim'
  },
  {
    id: 'caotopographique',
    name: 'CAO-Topographique',
    tagline: 'Ingenierie & Topographie',
    description: 'Plans, etudes, missions topographiques, ingenierie',
    icon: '📐',
    color: 'indigo',
    repo: 'https://github.com/IlarionDossouyovo/-CAO-TOPOGRAPHIQUE.git',
    category: 'engineering',
    products: 67,
    rating: 4.9,
    vendors: 6,
    url: '/cao-topographique'
  },
  {
    id: 'edecor',
    name: 'E-Decor',
    tagline: 'Decoration & Amenagement',
    description: 'Mobilier, decoration interieur, tissus, rideaux',
    icon: '🏠',
    color: 'amber',
    repo: 'https://github.com/IlarionDossouyovo/E-Decor.git',
    category: 'home',
    products: 312,
    rating: 4.7,
    vendors: 34,
    url: '/e-decor'
  },
  {
    id: 'egarrage',
    name: 'E-Garrage',
    tagline: 'Automobile & Garage',
    description: 'Vehicules, pieces, services garage, accessoires auto',
    icon: '🚗',
    color: 'red',
    repo: 'https://github.com/IlarionDossouyovo/E-Garrage.git',
    category: 'auto',
    products: 456,
    rating: 4.5,
    vendors: 28,
    url: '/e-garrage'
  },
  {
    id: 'etech',
    name: 'E-TECH',
    tagline: 'Technologie & Electronique',
    description: 'Informatique, gadgets, composants electroniques',
    icon: '💻',
    color: 'cyan',
    repo: 'https://github.com/IlarionDossouyovo/E-TECH.git',
    category: 'tech',
    products: 523,
    rating: 4.8,
    vendors: 42,
    url: '/e-tech'
  },
  {
    id: 'eoutilles',
    name: 'E-Outilles',
    tagline: 'Outils & Equipements',
    description: 'Outils professionnels, equipements chantier',
    icon: '🔧',
    color: 'slate',
    repo: 'https://github.com/IlarionDossouyovo/E-Outilles.git',
    category: 'tools',
    products: 289,
    rating: 4.6,
    vendors: 19,
    url: '/e-outilles'
  },
  {
    id: 'eseller',
    name: 'E-Seller',
    tagline: 'Revendeur & Distribution',
    description: 'Produits multi-categories, revendeur officiel',
    icon: '🛒',
    color: 'green',
    repo: 'https://github.com/IlarionDossouyovo/E-Seller.git',
    category: 'reseller',
    products: 892,
    rating: 4.4,
    vendors: 67,
    url: '/e-seller'
  },
  {
    id: 'eimmo',
    name: 'E-Immo',
    tagline: 'Immobilier & Proprietes',
    description: 'Vente, location, gestion immobiliere',
    icon: '🏢',
    color: 'emerald',
    repo: 'https://github.com/IlarionDossouyovo/E-Immo.git',
    category: 'realestate',
    products: 178,
    rating: 4.7,
    vendors: 45,
    url: '/e-immo'
  },
  {
    id: 'egraphisme',
    name: 'E-Graphisme',
    tagline: 'Graphisme & Creation',
    description: 'Logos, affiches, brand identity, printing',
    icon: '✒️',
    color: 'pink',
    repo: 'https://github.com/IlarionDossouyovo/E-Graphisme.git',
    category: 'creative',
    products: 145,
    rating: 4.9,
    vendors: 22,
    url: '/e-graphisme'
  }
]

const categories = [
  { id: 'all', name: 'Tout', icon: '🌐' },
  { id: 'construction', name: 'Construction', icon: '🏗️' },
  { id: 'design', name: 'Design', icon: '🎨' },
  { id: 'services', name: 'Services', icon: '🧹' },
  { id: 'telecom', name: 'Telecom', icon: '📱' },
  { id: 'engineering', name: 'Ingenierie', icon: '📐' },
  { id: 'home', name: 'Maison', icon: '🏠' },
  { id: 'auto', name: 'Auto', icon: '🚗' },
  { id: 'tech', name: 'Tech', icon: '💻' },
  { id: 'tools', name: 'Outils', icon: '🔧' },
  { id: 'reseller', name: 'Revente', icon: '🛒' },
  { id: 'realestate', name: 'Immobilier', icon: '🏢' },
  { id: 'creative', name: 'Creatif', icon: '✒️' },
]

const featuredProducts = [
  { id: 1, name: 'Groupe electrogene 5KVA', price: 450000, market: 'E-TECH', image: '⚡', sales: 234 },
  { id: 2, name: 'Ciment OPC 42.5 (50kg)', price: 6500, market: 'E-Battisseurs', image: '🏗️', sales: 1567 },
  { id: 3, name: 'Canape design moderne', price: 185000, market: 'E-Decor', image: '🛋️', sales: 89 },
  { id: 4, name: 'SIM 4G Data 10Go', price: 3500, market: 'E-Sim', image: '📱', sales: 4521 },
  { id: 5, name: 'Tableau electrique complet', price: 125000, market: 'E-TECH', image: '🔌', sales: 345 },
  { id: 6, name: 'Pack graphique logo + carte', price: 75000, market: 'E-Graphisme', image: '🎨', sales: 167 },
  { id: 7, name: 'BMW X5 2019', price: 35000000, market: 'E-Garrage', image: '🚙', sales: 12 },
  { id: 8, name: 'Appartement F3 Cotonou', price: 25000000, market: 'E-Immo', image: '🏢', sales: 8 },
]

export default function EExpresse() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filteredMarkets = activeCategory === 'all' 
    ? marketplaces 
    : marketplaces.filter(m => m.category === activeCategory)

  const displayMarkets = showAll ? filteredMarkets : filteredMarkets.slice(0, 8)

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-white text-sm">Le plus grand marche d'Afrique de l'Ouest</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              E-<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expresse</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Le marche B2B & B2C d'ELECTRON. Achetez et vendez sans limites. 
              Un seul paiement pour tous les services: <span className="text-cyan-400 font-bold">Electron Pay</span>
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex bg-white/10 backdrop-blur rounded-2xl p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher un produit, service ou vendeurs..." 
                    className="w-full bg-transparent text-white px-4 py-3 outline-none placeholder-slate-400"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl">
                  Rechercher
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: '12+', label: 'Marches' },
                { value: '3,000+', label: 'Produits' },
                { value: '320+', label: 'Vendeurs' },
                { value: '50,000+', label: 'Clients' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="sticky top-16 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2">
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2 transition ${
                  activeCategory === cat.id 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplaces Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              {activeCategory === 'all' ? 'Tous les Marches' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
            >
              {showAll ? 'Voir moins' : 'Voir tout'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayMarkets.map((market, i) => (
              <motion.div 
                key={market.id}
                initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                transition={{delay:i*0.05}}
                className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition group"
              >
                <div className={`h-20 bg-gradient-to-br from-${market.color}-500/20 to-${market.color}-600/10 flex items-center justify-center text-5xl`}>
                  {market.icon}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">{market.name}</h3>
                  <p className="text-slate-400 text-sm mb-2">{market.tagline}</p>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2">{market.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{market.rating}</span>
                    </div>
                    <span className="text-slate-400">{market.products} produits</span>
                    <span className="text-slate-400">{market.vendors} vendeurs</span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-600">
                      Visiter
                    </button>
                    <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm hover:bg-cyan-500/30">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Produits en Vedette</h2>
            <button className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
              Tout voir <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {featuredProducts.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{opacity:0,scale:0.9}}
                animate={{opacity:1,scale:1}}
                transition={{delay:i*0.05}}
                className="bg-slate-800 border border-slate-700 rounded-xl p-3 hover:border-cyan-500/50 transition"
              >
                <div className="text-3xl text-center mb-2">{product.image}</div>
                <p className="text-white text-xs font-bold line-clamp-1">{product.name}</p>
                <p className="text-cyan-400 text-sm font-bold">{product.price.toLocaleString()} XAF</p>
                <p className="text-slate-500 text-xs">{product.market} • {product.sales} ventes</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Electron Pay Banner */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Un seul paiement pour tout E-Expresse
                </h2>
                <p className="text-white/80 text-lg">
                  Avec <span className="font-bold text-yellow-300">Electron Pay</span>, payez en toute securite sur tous les marches
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Orange Money', 'MTN', 'Wave', 'Stripe', 'Crypto'].map(p => (
                    <span key={p} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">{p}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-white/90 transition">
                  Connecter Electron Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why E-Expresse */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pourquoi choisir E-Expresse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Paiement securise', desc: 'Electron Pay protege toutes vos transactions avec cryptage TLS 1.3' },
              { icon: Truck, title: 'Livraison rapide', desc: 'Livraison dans toute l\'Afrique de l\'Ouest avec suivi en temps reel' },
              { icon: Star, title: 'Qualite garantie', desc: 'Tous les vendeurs sont verifies et evalues par notre communaute' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Vendor CTA */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Devenez Vendeur sur E-Expresse</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez plus de 320 vendeurs et accedez a des milliers de clients. 
              Une seule plateforme pour tous vos produits et services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 gradient-bg text-white font-bold rounded-xl">
                Creer ma boutique
              </button>
              <button className="px-8 py-4 bg-slate-700 text-white font-bold rounded-xl">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}