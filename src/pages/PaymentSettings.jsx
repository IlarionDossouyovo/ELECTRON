import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  CreditCard, Building2, Wallet, DollarSign, Shield, 
  CheckCircle, AlertCircle, Upload, Globe, Key,
  Eye, EyeOff, Copy, ArrowUp, ArrowDown, Calendar,
  TrendingUp, Clock, AlertTriangle, Lock
} from 'lucide-react'

const payoutSchedule = [
  { id: 'daily', name: 'Quotidien', fees: 1.5, minAmount: 5000 },
  { id: 'weekly', name: 'Hebdomadaire', fees: 1.0, minAmount: 5000 },
  { id: 'monthly', name: 'Mensuel', fees: 0.5, minAmount: 0 },
]

const paymentMethods = [
  { id: 'stripe', name: 'Stripe', logo: '💳', status: 'connected', fees: '2.9% + 0.30$' },
  { id: 'paypal', name: 'PayPal', logo: '🅿️', status: 'connected', fees: '3.5% + 0.30$' },
  { id: 'orange', name: 'Orange Money', logo: '🟠', status: 'pending', fees: '1.5%' },
  { id: 'mtn', name: 'MTN Mobile Money', logo: '🟡', status: 'pending', fees: '1.5%' },
  { id: 'wave', name: 'Wave', logo: '🌊', status: 'pending', fees: '1.0%' },
  { id: 'crypto', name: 'Cryptomonnaie', logo: '₿', status: 'disconnected', fees: '1.0%' },
]

export default function PaymentSettings() {
  const [activeTab, setActiveTab] = useState('bank')
  const [showAccountNumber, setShowAccountNumber] = useState(false)
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountName: '',
    accountNumber: '',
    routingNumber: '',
    swift: '',
    iban: '',
    country: 'BJ',
    currency: 'XAF',
  })
  const [payoutMethod, setPayoutMethod] = useState('weekly')
  const [notificationPrefs, setNotificationPrefs] = useState({
    email: true,
    sms: false,
    payout: true,
    refund: true,
  })

  const tabs = [
    { id: 'bank', name: 'Compte Bancaire', icon: Building2 },
    { id: 'methods', name: 'Moyens de paiement', icon: CreditCard },
    { id: 'payout', name: 'Retraits', icon: ArrowUp },
    { id: 'fees', name: 'Frais & Limites', icon: DollarSign },
    { id: 'security', name: 'Securite', icon: Shield },
  ]

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Parametres de <span className="text-cyan-400">Paiement</span></h1>
          <p className="text-slate-400">Configurez vos informations bancaires pour recevoir vos paiements</p>
        </motion.div>

        {/* Status Banner */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">Compte actif</h3>
                <p className="text-slate-400 text-sm">Vous pouvez recevoir des paiements</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">Solde disponible</p>
              <p className="text-3xl font-bold text-cyan-400">1 250 000 XAF</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 ${activeTab === tab.id ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* Bank Account Tab */}
            {activeTab === 'bank' && (
              <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="space-y-6">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                    Informations Bancaires
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-slate-400 text-sm mb-2 block">Nom de la banque</label>
                      <input type="text" value={bankDetails.bankName} onChange={(e) => setBankDetails({...bankDetails, bankName: e.target.value})}
                        placeholder="Banque Atlantique"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-2 block">Nom du compte</label>
                      <input type="text" value={bankDetails.accountName} onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                        placeholder="ELECTRON Business"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-2 block">Numero de compte</label>
                      <div className="relative">
                        <input type={showAccountNumber ? "text" : "password"} value={bankDetails.accountNumber} onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                          placeholder="12345678901"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white pr-12" />
                        <button onClick={() => setShowAccountNumber(!showAccountNumber)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                          {showAccountNumber ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-2 block">Code SWIFT/BIC</label>
                      <input type="text" value={bankDetails.swift} onChange={(e) => setBankDetails({...bankDetails, swift: e.target.value})}
                        placeholder="ABCIBJNB"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-2 block">IBAN (optionnel)</label>
                      <input type="text" value={bankDetails.iban} onChange={(e) => setBankDetails({...bankDetails, iban: e.target.value})}
                        placeholder="BJ00 1234 5678 9012 3456 7890"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-2 block">Pays</label>
                      <select value={bankDetails.country} onChange={(e) => setBankDetails({...bankDetails, country: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white">
                        <option value="BJ">Benin</option>
                        <option value="CI">Cote d'Ivoire</option>
                        <option value="SN">Senegal</option>
                        <option value="TG">Togo</option>
                        <option value="FR">France</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-yellow-400 font-bold">Verification requise</p>
                      <p className="text-slate-400 text-sm">Vous devez telecharger un Relevé d'Identité Bancaire (RIB) pour verifier votre compte.</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <button className="px-6 py-3 bg-slate-700 text-white rounded-lg flex items-center gap-2">
                      <Upload className="w-5 h-5" /> Telecharger RIB
                    </button>
                    <button className="px-8 py-3 gradient-bg text-white font-bold rounded-xl">
                      Enregistrer
                    </button>
                  </div>
                </div>

                {/* Connected Account Info */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-4">Compte Connecte</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white">Compte bancaire verifie</span>
                      </div>
                      <span className="text-green-400 text-sm">Actif</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Payment Methods Tab */}
            {activeTab === 'methods' && (
              <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="space-y-6">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-cyan-400" />
                    Moyen de paiement accepts
                  </h3>
                  <div className="space-y-3">
                    {paymentMethods.map(method => (
                      <div key={method.id} className="flex items-center justify-between p-4 bg-slate-900 rounded-xl">
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{method.logo}</span>
                          <div>
                            <p className="text-white font-bold">{method.name}</p>
                            <p className="text-slate-400 text-sm">Frais: {method.fees}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {method.status === 'connected' && <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Connecte</span>}
                          {method.status === 'pending' && <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">En attente</span>}
                          {method.status === 'disconnected' && <span className="px-3 py-1 bg-slate-700 text-slate-400 rounded-full text-sm">Inactif</span>}
                          <button className={`px-4 py-2 rounded-lg text-sm font-bold ${method.status === 'connected' ? 'bg-slate-700 text-slate-400' : 'gradient-bg text-white'}`}>
                            {method.status === 'connected' ? 'Gerer' : 'Connecter'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Payout Tab */}
            {activeTab === 'payout' && (
              <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="space-y-6">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                    <ArrowUp className="w-6 h-6 text-cyan-400" />
                    Methode de retrait
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    {payoutSchedule.map(schedule => (
                      <button key={schedule.id} onClick={() => setPayoutMethod(schedule.id)}
                        className={`w-full p-4 rounded-xl flex items-center justify-between ${payoutMethod === schedule.id ? 'bg-cyan-500/20 border-2 border-cyan-500' : 'bg-slate-900 border border-slate-700'}`}>
                        <div>
                          <p className="text-white font-bold">{schedule.name}</p>
                          <p className="text-slate-400 text-sm">Frais: {schedule.fees}% | Min: {schedule.minAmount.toLocaleString()} XAF</p>
                        </div>
                        {payoutMethod === schedule.id && <CheckCircle className="w-6 h-6 text-cyan-400" />}
                      </button>
                    ))}
                  </div>

                  <div className="bg-slate-900 rounded-xl p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-400">Prochain retrait prevu</span>
                      <span className="text-white">22 Avril 2026</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-400">Montant estime</span>
                      <span className="text-cyan-400 font-bold">1 250 000 XAF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Frais de retrait</span>
                      <span className="text-red-400">-12 500 XAF</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Fees Tab */}
            {activeTab === 'fees' && (
              <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="space-y-6">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-cyan-400" />
                    Frais et Limites
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Frais transaction carte', value: '2.9% + 0.30$' },
                      { name: 'Frais Mobile Money', value: '1.5%' },
                      { name: 'Frais Wave', value: '1.0%' },
                      { name: 'Frais retrait bancaire', value: '1.0%' },
                      { name: 'Limite par transaction', value: '10 000 000 XAF' },
                      { name: 'Limite quotidienne', value: '25 000 000 XAF' },
                    ].map((fee, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-slate-900 rounded-lg">
                        <span className="text-slate-400">{fee.name}</span>
                        <span className="text-white font-bold">{fee.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="space-y-6">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-cyan-400" />
                    Securite des Paiements
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Authentification 3D Secure', enabled: true, icon: Lock },
                      { name: 'Verification carte', enabled: true, icon: CheckCircle },
                      { name: 'Alertes transactions', enabled: true, icon: AlertCircle },
                      { name: 'Code PIN paiement', enabled: false, icon: Key },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-900 rounded-lg">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white">{item.name}</span>
                        </div>
                        <button className={`w-12 h-6 rounded-full relative ${item.enabled ? 'bg-cyan-500' : 'bg-slate-700'}`}>
                          <div className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition ${item.enabled ? 'left-6' : 'left-0.5'}`}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}