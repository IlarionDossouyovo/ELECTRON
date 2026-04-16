import { motion } from 'framer-motion'
import { CreditCard, Smartphone, Globe, Lock, Wallet, Bitcoin, DollarSign, Shield, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const paymentRegions = [
  {
    region: 'Afrique',
    countries: ['Bénin', 'Sénégal', 'Côte d\'Ivoire', 'Nigeria', 'Ghana'],
    methods: [
      { name: 'MTN Mobile Money', icon: '📱', color: 'bg-yellow-500' },
      { name: 'Orange Money', icon: '🟠', color: 'bg-orange-500' },
      { name: 'Moov Money', icon: '🔵', color: 'bg-blue-500' },
      { name: 'Wave', icon: '🌊', color: 'bg-purple-500' },
      { name: 'PayDunya', icon: '💚', color: 'bg-green-500' },
    ]
  },
  {
    region: 'Europe',
    countries: ['France', 'Allemagne', 'Belgique', 'Espagne'],
    methods: [
      { name: 'Stripe', icon: '💳', color: 'bg-purple-600' },
      { name: 'PayPal', icon: '🅿️', color: 'bg-blue-500' },
      { name: 'Apple Pay', icon: '🍎', color: 'bg-black' },
      { name: 'Klarna', icon: '💴', color: 'bg-pink-500' },
    ]
  },
  {
    region: 'Amériques',
    countries: ['USA', 'Canada', 'Brésil'],
    methods: [
      { name: 'Visa/Mastercard', icon: '💳', color: 'bg-blue-600' },
      { name: 'Square', icon: '⬛', color: 'bg-gray-600' },
      { name: 'Google Pay', icon: '🔴', color: 'bg-red-500' },
    ]
  },
  {
    region: 'Asie',
    countries: ['Chine', 'Japon', 'Inde'],
    methods: [
      { name: 'Alipay', icon: '🔴', color: 'bg-blue-400' },
      { name: 'WeChat Pay', icon: '💚', color: 'bg-green-500' },
      { name: 'Razorpay', icon: '💳', color: 'bg-blue-600' },
    ]
  },
]

const securityFeatures = [
  { icon: Lock, title: 'Cryptage TLS 1.3', desc: 'Sécurisation des transactions' },
  { icon: Shield, title: '3D Secure', desc: 'Authentification renforcée' },
  { icon: Smartphone, title: 'MFA', desc: 'Authentification multifacteur' },
  { icon: CheckCircle, title: 'PCI DSS', desc: 'Conformité internationale' },
]

export default function Payments() {
  const [selectedRegion, setSelectedRegion] = useState('Afrique')

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
            <CreditCard className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Module Paiements</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Paiement Global <span className="gradient-text">Sécurisé</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
           -Accepte paiements locaux et internationaux. Cryptage TLS 1.3, tokenisation, 3D Secure.
            Support multi-devises et crypto.
          </motion.p>
        </div>
      </div>

      {/* Security Features */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl"
          >
            <feature.icon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Payment Methods by Region */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold text-white mb-6">Moyens de paiement par région</h3>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {paymentRegions.map((region) => (
            <button
              key={region.region}
              onClick={() => setSelectedRegion(region.region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedRegion === region.region
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {region.region}
            </button>
          ))}
        </div>

        {paymentRegions.map((region) => (
          region.region === selectedRegion && (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                {region.region}
              </h4>
              <p className="text-slate-400 text-sm mb-6">
                {region.countries.join(', ')}
              </p>
              <div className="flex flex-wrap gap-4">
                {region.methods.map((method, idx) => (
                  <div key={idx} className="flex items-center px-4 py-3 bg-slate-700/30 rounded-xl">
                    <span className="text-2xl mr-3">{method.icon}</span>
                    <span className="text-white font-medium">{method.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        ))}
      </div>

      {/* Crypto Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/30 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <Bitcoin className="w-10 h-10 text-amber-400 mr-3" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Paiement Blockchain</h3>
              <p className="text-slate-400">Cryptomonnaies et smart contracts</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {['Bitcoin', 'Ethereum', 'USDC', 'USDT', 'WalletConnect'].map((crypto, idx) => (
              <span key={idx} className="px-4 py-2 bg-slate-700/50 text-white rounded-full text-sm">
                {crypto}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}