import { motion } from 'framer-motion'
import { useState } from 'react'
import { Tag, Plus, Copy, Check, Calendar, Percent } from 'lucide-react'

const coupons = [
  { code: 'BIENVENUE10', discount: 10, type: 'percent', minAmount: 25000, validUntil: '2026-05-31', used: 45, maxUses: 100, active: true },
  { code: 'SOLDE20', discount: 20, type: 'percent', minAmount: 50000, validUntil: '2026-04-20', used: 78, maxUses: 200, active: true },
  { code: 'LIVRAISON', discount: 100, type: 'fixed', minAmount: 30000, validUntil: '2026-06-30', used: 12, maxUses: 50, active: false },
  { code: 'VIP5', discount: 5, type: 'percent', minAmount: 100000, validUntil: '2026-12-31', used: 5, maxUses: 20, active: true },
]

export default function Coupons() {
  const [showNew, setShowNew] = useState(false)
  const [copied, setCopied] = useState('')

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
    setCopied(code)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white">Codes <span className="text-cyan-400">Promo</span></h1>
            <p className="text-slate-400 mt-2">Gestion des coupons de reduction</p>
          </div>
          <button onClick={() => setShowNew(true)} className="px-6 py-3 gradient-bg text-white font-bold rounded-xl flex items-center gap-2">
            <Plus className="w-5 h-5" /> Nouveau coupon
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total coupons', value: 4, icon: Tag },
            { label: 'Utilises', value: 140, icon: Percent },
            { label: 'Actifs', value: 3, icon: Check },
          ].map((stat, i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1*i}}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <stat.icon className="w-8 h-8 text-cyan-400 mb-2" />
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coupons.map((coupon, i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1*i}}
              className={`bg-slate-800 border rounded-xl p-6 ${coupon.active ? 'border-slate-700' : 'border-slate-700 opacity-60'}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <code className="text-2xl font-bold text-cyan-400">{coupon.code}</code>
                    <button onClick={() => handleCopy(coupon.code)} className="p-1 text-slate-400 hover:text-white">
                      {copied === coupon.code ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-3xl font-bold text-white mt-1">
                    {coupon.type === 'percent' ? `${coupon.discount}%` : `${coupon.discount.toLocaleString()} XAF`}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${coupon.active ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-400'}`}>
                  {coupon.active ? 'ACTIF' : 'INACTIF'}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-400">
                  <span>Minimum achat</span>
                  <span className="text-white">{coupon.minAmount.toLocaleString()} XAF</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Valid until</span>
                  <span className="text-white">{coupon.validUntil}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Utilisations</span>
                  <span className="text-white">{coupon.used}/{coupon.maxUses}</span>
                </div>
              </div>
              <div className="mt-4 bg-slate-700 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{width: `${coupon.used/coupon.maxUses*100}%`}}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {showNew && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} 
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-lg">
              <h3 className="text-xl font-bold text-white mb-4">Nouveau coupon</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-sm">Code</label>
                    <input type="text" placeholder="PROMO25" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white uppercase" />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm">Reduction</label>
                    <input type="number" placeholder="10" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white" />
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-sm">Type</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white">
                    <option>Pourcentage (%)</option>
                    <option>Montant fixe (XAF)</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setShowNew(false)} className="flex-1 py-2 bg-slate-700 text-white rounded-lg">Annuler</button>
                  <button className="flex-1 py-2 gradient-bg text-white font-bold rounded-lg">Creer</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}