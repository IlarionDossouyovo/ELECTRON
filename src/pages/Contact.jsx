import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Clock, ArrowRight } from 'lucide-react'

const reasons = [
  'Démo personnalisée',
  'Questions techniques',
  'Partenariat',
  'Support',
  'Autre'
]

export default function ContactPageNew() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactez <span className="gradient-text">ELECTRON</span>
            </h1>
            <p className="text-xl text-slate-400">
              Une question ? Besoin d'aide ? Nous sommes là pour vous.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Nos coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Siège social</p>
                      <p className="text-slate-400">Cotonou, Benin</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-slate-400">electronbusiness07@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Téléphone</p>
                      <p className="text-slate-400">+229 01 977 003 47 / 01 498 022 02</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Horaires</p>
                      <p className="text-slate-400">Lun - Ven: 8h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Support rapide</h3>
                <p className="text-slate-400 mb-4"> Consultez notre centre d'aide ou contactez-nous directement.</p>
                <a href="/faq" className="inline-flex items-center text-cyan-400 hover:underline">
                  Voir FAQ <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6"
            >
              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-slate-400 mb-6">Nous vous répondrons sous 24h.</p>
                  <button onClick={() => setSent(false)} className="text-cyan-400 hover:underline">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Envoyez-nous un message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-sm">Nom complet *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-sm">Téléphone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        placeholder="+229 01 977 003 47"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm">Motif *</label>
                      <select
                        required
                        value={form.reason}
                        onChange={(e) => setForm({...form, reason: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                      >
                        <option value="">Sélectionner</option>
                        {reasons.map((r, i) => (
                          <option key={i} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-sm">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}