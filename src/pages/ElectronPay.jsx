import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  CreditCard, Smartphone as SmartIcon, Globe, Lock, Wallet, Bitcoin, DollarSign, Shield, CheckCircle, 
  ArrowRight, Zap, Building2, Users, Package, Cpu, Eye, Bell, Link, Code, Puzzle,
  ArrowUpRight, ArrowDownRight, CreditCard as CardIcon, QrCode, Voice, Bus,
  Layers, ShieldCheck, Usb, Wifi, Contactless, Copy, ExternalLink,
  Check, X, Copy as CopyIcon, Activity, Fingerprint, ScanFace, FileKey
} from 'lucide-react'

const features = [
  {
    id: 'virtual-cards',
    icon: CreditCard,
    title: 'Cartes Virtuelles',
    subtitle: 'Générées instantanément',
    description: 'Créez des cartes virtuellesjetables avec IBAN européen. Parf pour e-commerce et abonnements.',
    specs: ['IBAN européen米', 'Limites configurables', 'Validité paramétrable', 'Blocage instantané'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mobile-money',
    icon: Smartphone,
    title: 'Mobile Money Africa',
    subtitle: 'Tous les opérateurs',
    description: 'MTN, Orange, Moov, Wave, M-Pesa, PayDunya - un seul集成 pour toute l\'Afrique.',
    specs: ['150+ pays', '50+ opérateurs', 'Confirmation instantanée', 'Zero consolidation'],
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 'crypto',
    icon: Bitcoin,
    title: 'Crypto & Web3',
    subtitle: 'Futur des paiements',
    description: 'Bitcoin, Ethereum, USDC, USDT avec conversion automatique en XOF/CFA.',
    specs: ['Wallet intégré', 'Conversion auto', 'Cold storage', 'NFT support'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'escrow',
    icon: ShieldCheck,
    title: 'Escrow Intelligent',
    subtitle: 'Protect Acheteur & Vendeur',
    description: 'L\'argent est冻结 jusqu\'à livraison确认née. Protège les deux parties.',
    specs: ['Release conditionnelle', 'Disputes gérées', 'Remboursement auto', 'Partial releases'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'split-payment',
    icon: Layers,
    title: 'Split Payments',
    subtitle: 'Multi-bénéficiaires',
    description: 'Répartissez automatiquement entre fournisseurs,partenaires et livreurs.',
    specs: ['Jusqu\'à 10 parties', 'Pourcentages variables', 'Frais partagés', 'Rapports détaillés'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'recurring',
    icon: Cpu,
    title: 'Abonnements IA',
    subtitle: 'Paiements récurrents',
    description: 'Gérez leursabonnements avec retry intelligent. Récupérez les paiements échoués.',
    specs: ['Retry smarter', 'Plan flexible', 'Try-free Trial', 'Analytics MRR'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'payment-links',
    icon: Link,
    title: 'Payment Links',
    subtitle: 'Lien = Paiement',
    description: 'Partagez un lien et recevez.Parfait pour WhatsApp, réseaux sociaux.',
    specs: ['URL personnalisée', 'QR code', 'Expiration param', 'PAN', 'Confirmation email'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'virtual-iban',
    icon: Building2,
    title: 'IBAN Européen',
    subtitle: 'Virements locaux',
    description: 'Donnez un IBAN européen à vos clients. Reçus par virement SEPA/SWIFT.',
    spec: ['IBAN personnel', 'Reçu instantané', 'SWIFT & SEPA', 'Relevé PDF'],
    color: 'from-slate-500 to-zinc-500'
  }
]

const paymentMethods = [
  { name: 'Visa', logo: '💳', color: 'bg-blue-600' },
  { name: 'Mastercard', logo: '💳', color: 'bg-red-600' },
  { name: 'MTN Mobile', logo: '📱', color: 'bg-yellow-500' },
  { name: 'Orange Money', logo: '🟠', color: 'bg-orange-500' },
  { name: 'Wave', logo: '🌊', color: 'bg-purple-500' },
  { name: 'Moov', logo: '📲', color: 'bg-blue-500' },
  { name: 'Bitcoin', logo: '₿', color: 'bg-orange-400' },
  { name: 'Ethereum', logo: 'Ξ', color: 'bg-purple-600' },
  { name: 'USDC', logo: '⚡', color: 'bg-blue-500' },
  { name: 'M-Pesa', logo: '📱', color: 'bg-green-500' },
  { name: 'PayPal', logo: '🅿️', color: 'bg-blue-400' },
  { name: 'Apple Pay', logo: '🍎', color: 'bg-black' },
  { name: 'Google Pay', logo: '🔴', color: 'bg-red-500' },
  { name: 'Alipay', logo: '🔴', color: 'bg-blue-400' },
]

const securityFeatures = [
  { icon: Fingerprint, title: 'Biométrique', desc: 'Empreinte, reconnaissanced Gesicht' },
  { icon: ScanFace, title: 'Face ID', desc: 'Vérification faciale pour gros paiements' },
  { icon: FileKey, title: '3D Secure v2', desc: 'Authentification supplémentaire' },
  { icon: Shield, title: 'Assurance Fraud', desc: 'Remboursement100%' },
  { icon: Activity, title: 'IA Détection', desc: 'Détection fraude temps réel' },
  { icon: Lock, title: 'PCI DSS', desc: 'Certification niveau 1' },
]

const pricing = [
  { name: 'Starter', price: 0, period: 'mois', features: ['2,500 XAF/mois', '50 transactions', 'Toutes méthodes', 'Support email'], popular: false },
  { name: 'Pro', price: 9900, period: 'mois', features: ['1.5% transaction', 'Transactions illimitées', 'API complète', 'Cartes virtuelles', 'Support prioritaire', 'Manager dédié'], popular: true },
  { name: 'Enterprise', price: 49000, period: 'mois', features: ['0.8% transaction', 'Tout inclus', 'IBAN dédié', 'Formation', 'SLA99.9%', 'Account manager'], popular: false },
]

const integrations = [
  { name: 'Shopify', logo: '🛒' },
  { name: 'WooCommerce', logo: '🛍️' },
  { name: 'Prestashop', logo: '💎' },
  { name: 'Magento', logo: '🔷' },
  { name: 'React Native', logo: '⚛️' },
  { name: 'iOS', logo: '🍎' },
  { name: 'Android', logo: '🤖' },
  { name: 'WordPress', logo: '📝' },
]

export default function ElectronPay() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyApiKey = () => {
    navigator.clipboard.writeText('electron_sk_live_xxxxxxxxxxxxx')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Hero */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-sm flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              ELECTRON PAY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white text-center mb-4"
          >
            Le Paiement <span className="gradient-text">du Futur</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 text-center max-w-3xl mx-auto mb-8"
          >
            Un seul système pour <span className="text-cyan-400">150+ pays</span>. 
            Cartes virtuelles, Mobile Money, Crypto, IBAN européen. 
            Tout ce dont vous avez besoin en un seul endroit.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-8"
          >
            {[
              { value: '150+', label: 'Pays' },
              { value: '50+', label: 'Méthodes' },
              { value: '1.5%', label: 'Frais locals' },
              { value: '99.99%', label: 'Uptime' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#start" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center">
              Créer mon compte <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#demo" className="px-8 py-4 bg-slate-800 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center">
              Voir la démo
            </a>
          </motion.div>
        </div>
      </div>

      {/* Payment Methods Banner */}
      <div className="py-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-500 text-center text-sm mb-4">MÉTHODES DE PAIEMENT ACCEPTÉES</p>
          <div className="flex flex-wrap justify-center gap-3">
            {paymentMethods.map((method, i) => (
              <span key={i} className={`px-3 py-1.5 ${method.color} text-white rounded-full text-xs font-medium flex items-center`}>
                <span className="mr-1">{method.logo}</span> {method.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Tout ce dont vous avez besoin
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Un système de paiement complet avec des fonctionnalités avancées que vous ne trouvez nulle part ailleurs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((feat, i) => (
            <motion.button
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveFeature(i)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeFeature === i 
                  ? 'bg-slate-800/60 border-cyan-500' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feat.color} flex items-center justify-center mb-3`}>
                <feat.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{feat.title}</h3>
              <p className="text-cyan-400 text-xs">{feat.subtitle}</p>
            </motion.button>
          ))}
        </div>

        {/* Featured Detail */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center mb-4`}>
                {(() => {
                  const Icon = features[activeFeature].icon
                  return <Icon className="w-7 h-7 text-white" />
                })()}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {features[activeFeature].title}
              </h3>
              <p className="text-cyan-400 font-medium mb-4">
                {features[activeFeature].subtitle}
              </p>
              <p className="text-slate-400 mb-6">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-2">
                {features[activeFeature].specs.map((spec, i) => (
                  <li key={i} className="flex items-center text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4">API Example</h4>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <span className="text-purple-400">const</span> payment = <span className="text-yellow-400">await</span> electron.<span className="text-cyan-400">createPayment</span>({'{'}<br/>
                &nbsp;&nbsp;amount: <span className="text-green-400">5000</span>,<br/>
                &nbsp;&nbsp;currency: <span className="text-green-400">'XOF'</span>,<br/>
                &nbsp;&nbsp;method: <span className="text-green-400">'mobile'</span>,<br/>
                &nbsp;&nbsp;operator: <span className="text-green-400">'mtn'</span><br/>
                {'}'})
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                <span className="text-slate-500 text-xs">API Key: electron_sk_...</span>
                <button 
                  onClick={copyApiKey}
                  className="text-cyan-400 text-xs flex items-center"
                >
                  {copied ? <><Check className="w-3 h-3 mr-1" /> Copié!</> : <><CopyIcon className="w-3 h-3 mr-1" /> Copier</>}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Security */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Sécurité de niveau bancaire</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {securityFeatures.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center"
            >
              <feat.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">{feat.title}</p>
              <p className="text-slate-500 text-xs">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Tarifs transparents</h2>
        <p className="text-slate-400 text-center mb-12">Pas de frais cachés. Pas de surprise.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`rounded-2xl p-6 border ${
                plan.popular 
                  ? 'bg-gradient-to-b from-cyan-500/20 to-purple-500/20 border-cyan-500' 
                  : 'bg-slate-800/30 border-slate-700'
              }`}
            >
              {plan.popular && (
                <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded-full">Plus populaire</span>
              )}
              <h3 className="text-xl font-bold text-white mt-2">{plan.name}</h3>
              <div className="mt-2 mb-4">
                <span className="text-4xl font-bold gradient-text">{plan.price.toLocaleString()}</span>
                <span className="text-slate-500"> XAF/{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center text-slate-400 text-sm">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold ${
                plan.popular 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                  : 'bg-slate-700 text-white'
              }`}>
                Choisir {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Intégrations simples</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((int, i) => (
            <div key={i} className="flex items-center px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <span className="text-xl mr-2">{int.logo}</span>
              <span className="text-white text-sm">{int.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-6">
          + Documentation complète, SDKs, plugins WooCommerce/Shopify/Prestashop
        </p>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8"
        >
          <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à démarrer avec Electron Pay ?
          </h2>
          <p className="text-slate-400 mb-6">
            Commencez gratuitement. Aucune carte de crédit requise.
          </p>
          <a href="#start" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl">
            Créer mon compte gratuit <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}