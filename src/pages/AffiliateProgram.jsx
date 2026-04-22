import { motion } from 'framer-motion'
import { useState } from 'react'
import { Users, DollarSign, Gift, Link, TrendingUp, Copy, Check, Gift as GiftIcon, Award } from 'lucide-react'

const affiliateStats = {
  totalEarned: 1250000,
  referrals: 156,
  pending: 85000,
  level: 'Diamond',
  nextLevel: 'Partner',
  pointsToNext: 250000,
}

const tiers = [
  { name: 'Bronze', min: 0, color: 'orange', perSale: 5 },
  { name: 'Silver', min: 500000, color: 'gray', perSale: 7 },
  { name: 'Gold', min: 1500000, color: 'yellow', perSale: 10 },
  { name: 'Platinum', min: 5000000, color: 'purple', perSale: 12 },
  { name: 'Diamond', min: 10000000, color: 'cyan', perSale: 15 },
  { name: 'Partner', min: 25000000, color: 'green', perSale: 20 },
]

const referrals = [
  { id: 1, name: 'Marie K.', date: '2026-04-15', sale: 185000, commission: 9250, status: 'paid' },
  { id: 2, name: 'Jean D.', date: '2026-04-14', sale: 45000, commission: 2250, status: 'paid' },
  { id: 3, name: 'Paul O.', date: '2026-04-14', sale: 220000, commission: 11000, status: 'pending' },
  { id: 4, name: 'Alice S.', date: '2026-04-13', sale: 85000, commission: 4250, status: 'paid' },
]

export default function AffiliateProgram() {
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://electron.africa?ref=ELECTRON2026'

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500 rounded-full mb-4">
            <GiftIcon className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm">GAGNEZ JUSQU'A 20%</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Programme <span className="text-yellow-400">Affiliation</span></h1>
          <p className="text-slate-400">Recommandez ELECTRON et gagnez des commissions</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{affiliateStats.totalEarned.toLocaleString()} XAF</p>
            <p className="text-slate-400 text-sm">Total gagne</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{affiliateStats.referrals}</p>
            <p className="text-slate-400 text-sm">Parrainsages</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
            <Gift className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{affiliateStats.pending.toLocaleString()} XAF</p>
            <p className="text-slate-400 text-sm">En attente</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="bg-slate-800 border border-yellow-500/30 rounded-xl p-6 text-center">
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-yellow-400">{affiliateStats.level}</p>
            <p className="text-slate-400 text-sm">Niveau actuel</p>
          </motion.div>
        </div>

        {/* Referral Link */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-12">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Link className="w-5 h-5 text-cyan-400" /> Votre lien de parrainage</h3>
          <div className="flex gap-3">
            <input type="text" value={referralLink} readOnly className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
            <button onClick={copyLink} className="px-6 py-3 gradient-bg text-white font-bold rounded-lg flex items-center gap-2">
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copie!' : 'Copier'}
            </button>
          </div>
        </motion.div>

        {/* Tiers */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-12">
          <h3 className="text-white font-bold mb-6">Niveaux de commission</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {tiers.map((tier, i) => (
              <div key={i} className={`p-4 rounded-xl text-center ${affiliateStats.level === tier.name ? 'bg-yellow-500/20 border-2 border-yellow-500' : 'bg-slate-900'}`}>
                <p className={`text-${tier.color}-400 font-bold`}>{tier.name}</p>
                <p className="text-white text-2xl font-bold">{tier.perSale}%</p>
                <p className="text-slate-400 text-xs">par vente</p>
              </div>
            ))}
          </div>
        </div>

        {/* Referrals */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <h3 className="text-white font-bold">Historique des commissions</h3>
          </div>
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="text-left text-slate-400 p-4">Parrain</th>
                <th className="text-left text-slate-400 p-4">Date</th>
                <th className="text-left text-slate-400 p-4">Vente</th>
                <th className="text-left text-slate-400 p-4">Commission</th>
                <th className="text-left text-slate-400 p-4">Statut</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((r, i) => (
                <tr key={i} className="border-t border-slate-700">
                  <td className="p-4 text-white">{r.name}</td>
                  <td className="p-4 text-slate-400">{r.date}</td>
                  <td className="p-4 text-white">{r.sale.toLocaleString()} XAF</td>
                  <td className="p-4 text-green-400 font-bold">+{r.commission.toLocaleString()} XAF</td>
                  <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs ${r.status === 'paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{r.status === 'paid' ? 'Paye' : 'En attente'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}