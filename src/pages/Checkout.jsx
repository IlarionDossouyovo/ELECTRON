import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  CreditCard, Smartphone, Building2, Lock, CheckCircle,
  ArrowLeft, Truck, MapPin, Phone, Mail, User,
  ShoppingBag, Package, DollarSign, Shield
} from 'lucide-react'

const cartItems = [
  { id: 1, name: 'iPhone 15 Pro 256GB', price: 850000, image: '📱', quantity: 1 },
  { id: 2, name: 'AirPods Pro 2nd Gen', price: 145000, image: '🎧', quantity: 2 },
]

const deliveryMethods = [
  { id: 'standard', name: 'Standard', price: 5000, days: '3-5 jours' },
  { id: 'express', name: 'Express', price: 10000, days: '1-2 jours' },
  { id: 'pickup', name: 'Point relais', price: 0, days: '24h' },
]

const paymentMethods = [
  { id: 'card', name: 'Carte bancaire', icon: CreditCard },
  { id: 'mobile', name: 'Mobile Money', icon: Smartphone },
  { id: 'bank', name: 'Virement bancaire', icon: Building2 },
]

export default function Checkout() {
  const [step, setStep] = useState(1)
  const [delivery, setDelivery] = useState('standard')
  const [payment, setPayment] = useState('card')
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', country: 'Bénin', postalCode: ''
  })

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = deliveryMethods.find(d => d.id === delivery)?.price || 0
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      <div className="px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <button className="flex items-center text-slate-400 hover:text-white mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour au panier
          </button>
          <h1 className="text-3xl font-bold text-white">Paiement</h1>
          <p className="text-slate-400">Finalisez votre commande en quelques étapes</p>
        </motion.div>
      </div>

      {/* Progress Steps */}
      <div className="px-4 pb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            {['Informations', 'Livraison', 'Paiement'].map((label, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step > i + 1 ? 'bg-green-500' : step === i + 1 ? 'bg-cyan-500' : 'bg-slate-700'
                }`}>
                  {step > i + 1 ? <CheckCircle className="w-5 h-5" /> : <span className="text-white font-bold">{i + 1}</span>}
                </div>
                <span className={`ml-2 text-sm hidden md:inline ${step >= i + 1 ? 'text-white' : 'text-slate-500'}`}>
                  {label}
                </span>
                {i < 2 && <div className={`w-16 md:w-24 h-1 mx-2 ${step > i + 1 ? 'bg-green-500' : 'bg-slate-700'}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-cyan-400" />
                  Informations personnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-sm">Prénom</label>
                    <input
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm">Nom</label>
                    <input
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-slate-400 text-sm">Adresse</label>
                    <input
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm">Ville</label>
                    <input
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm">Code postal</label>
                    <input
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full mt-6 py-4 gradient-bg text-white font-bold rounded-xl"
                >
                  Continuer vers la livraison
                </button>
              </motion.div>
            )}

            {/* Step 2: Delivery */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-cyan-400" />
                  Mode de livraison
                </h2>
                <div className="space-y-3">
                  {deliveryMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer ${
                        delivery === method.id ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="delivery"
                          checked={delivery === method.id}
                          onChange={() => setDelivery(method.id)}
                          className="hidden"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                          delivery === method.id ? 'border-cyan-500' : 'border-slate-500'
                        }`}>
                          {delivery === method.id && <div className="w-3 h-3 rounded-full bg-cyan-500" />}
                        </div>
                        <div>
                          <p className="text-white font-medium">{method.name}</p>
                          <p className="text-slate-400 text-sm">{method.days}</p>
                        </div>
                      </div>
                      <span className="text-cyan-400 font-bold">
                        {method.price === 0 ? 'Gratuit' : `${method.price.toLocaleString()} XAF`}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 bg-slate-700 text-white rounded-xl font-semibold"
                  >
                    Retour
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 gradient-bg text-white font-bold rounded-xl"
                  >
                   Continuer vers le paiement
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-cyan-400" />
                  Mode de paiement
                </h2>
                <div className="space-y-3 mb-6">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer ${
                        payment === method.id ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={payment === method.id}
                        onChange={() => setPayment(method.id)}
                        className="hidden"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                        payment === method.id ? 'border-cyan-500' : 'border-slate-500'
                      }`}>
                        {payment === method.id && <div className="w-3 h-3 rounded-full bg-cyan-500" />}
                      </div>
                      <method.icon className="w-6 h-6 text-cyan-400 mr-3" />
                      <span className="text-white font-medium">{method.name}</span>
                    </label>
                  ))}
                </div>

                {/* Card Form */}
                {payment === 'card' && (
                  <div className="space-y-4 p-4 bg-slate-900/50 rounded-xl">
                    <div>
                      <label className="text-slate-400 text-sm">Numéro de carte</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-sm">Date d'expiration</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                  <Lock className="w-4 h-4" />
                  Paiement sécurisé par cryptage SSL
                </div>

                <div className="flex gap-3 mt-6">
                  <button 
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 bg-slate-700 text-white rounded-xl font-semibold"
                  >
                    Retour
                  </button>
                  <button className="flex-1 py-4 gradient-bg text-white font-bold rounded-xl">
                    Payer {total.toLocaleString()} XAF
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold text-white mb-4">Résumé de commande</h2>
              
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{item.name}</p>
                      <p className="text-slate-400 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">
                      {(item.price * item.quantity).toLocaleString()} XAF
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-slate-700 pt-4">
                <div className="flex justify-between text-slate-400">
                  <span>Sous-total</span>
                  <span className="text-white">{subtotal.toLocaleString()} XAF</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Livraison</span>
                  <span className={shipping === 0 ? 'text-green-400' : 'text-white'}>
                    {shipping === 0 ? 'Gratuit' : `${shipping.toLocaleString()} XAF`}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>TVA (18%)</span>
                  <span className="text-white">{tax.toLocaleString()} XAF</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-2 border-t border-slate-700">
                  <span className="text-white">Total</span>
                  <span className="text-cyan-400">{total.toLocaleString()} XAF</span>
                </div>
              </div>

              <div className="mt-4 flex items-center text-slate-400 text-sm">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                Garantie 2 ans incluse
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}