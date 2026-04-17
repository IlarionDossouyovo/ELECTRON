import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Chrome, Facebook, Apple, Smartphone } from 'lucide-react'

const plans = [
  { name: 'Free', price: 0, features: ['Email/Password', '1 utilisateur', '100 requêtes/mois'] },
  { name: 'Pro', price: 4900, features: ['OAuth2 complet', '10 utilisateurs', '10K requêtes/mois', 'MFA', 'Support prioritaire'] },
  { name: 'Enterprise', price: 19900, features: ['SSO SAML', 'Utilisateurs illimités', 'API illimitées', 'Audit logs', 'Manager dédié'] },
]

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '', name: '', phone: '' })
  const [step, setStep] = useState('method') // method, form, otp

  const methods = [
    { id: 'email', icon: Mail, name: 'Email', desc: 'Connexion par email' },
    { id: 'google', icon: Chrome, name: 'Google', desc: 'Connexion Google' },
    { id: 'facebook', icon: Facebook, name: 'Facebook', desc: 'Connexion Facebook' },
    { id: 'apple', icon: Apple, name: 'Apple', desc: 'Connexion Apple' },
    { id: 'phone', icon: Smartphone, name: 'SMS', desc: 'Connexion par SMS' },
  ]

  return (
    <div className="min-h-screen pt-16 hero-gradient flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h1>
          <p className="text-slate-400">Accédez à ELECTRON Business Suite</p>
        </div>

        {/* Auth Methods */}
        {step === 'method' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold mb-4">Choisir une méthode</h3>
            <div className="space-y-3">
              {methods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    if (m.id === 'email') setStep('form')
                    else alert(`${m.name} - Coming soon!`)
                  }}
                  className="w-full flex items-center p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl transition-colors"
                >
                  <m.icon className="w-6 h-6 text-cyan-400 mr-4" />
                  <div className="text-left">
                    <p className="text-white font-medium">{m.name}</p>
                    <p className="text-slate-400 text-sm">{m.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 ml-auto" />
                </button>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-400">
                {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="text-cyan-400 ml-1 hover:underline"
                >
                  {isLogin ? "S'inscrire" : 'Se connecter'}
                </button>
              </p>
            </div>
          </motion.div>
        )}

        {/* Email Form */}
        {step === 'form' && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
          >
            <form onSubmit={(e) => { e.preventDefault(); setStep('otp'); }} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="text-slate-400 text-sm">Nom complet</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                    placeholder="Votre nom"
                  />
                </div>
              )}
              <div>
                <label className="text-slate-400 text-sm">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                  placeholder="vous@email.com"
                />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Mot de passe</label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) => setForm({...form, password: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5 text-slate-400" /> : <Eye className="w-5 h-5 text-slate-400" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-slate-400 text-sm">
                    <input type="checkbox" className="mr-2" /> Se souvenir
                  </label>
                  <button type="button" className="text-cyan-400 text-sm hover:underline">Mot de passe oublié?</button>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl"
              >
                {isLogin ? 'Se connecter' : "S'inscrire"}
              </button>
            </form>

            <button onClick={() => setStep('method')} className="mt-4 text-slate-400 text-sm hover:text-white flex items-center">
              ← Retour aux méthodes
            </button>
          </motion.div>
        )}

        {/* OTP */}
        {step === 'otp' && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold">Vérification</h3>
              <p className="text-slate-400 text-sm mt-2">Entrez le code envoyé à {form.email}</p>
            </div>
            
            <div className="flex gap-2 justify-center mb-6">
              {[0,0,0,0].map((_,i) => (
                <input key={i} type="text" maxLength={1} className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg text-white text-center text-xl" />
              ))}
            </div>

            <button
              onClick={() => alert('Connexion réussie!')}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl"
            >
              Vérifier
            </button>
            
            <p className="text-center text-slate-400 text-sm mt-4">
              Renvoyer le code <span className="text-cyan-400 cursor-pointer">dans 30s</span>
            </p>
          </motion.div>
        )}

        {/* Plans for later */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {plans.map((p, i) => (
            <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-cyan-400 font-bold">{p.name}</p>
              <p className="text-white font-bold">{p.price === 0 ? 'Gratuit' : `${p.price} XAF`}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}