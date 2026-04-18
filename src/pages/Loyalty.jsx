import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Star, Gift, Tag, Clock, Users, TrendingUp } from 'lucide-react'

const rewards = [
  { id: 1, name: '10% de reduction', points: 500, icon: '🎫', claimed: false },
  { id: 2, name: 'Livraison gratuite', points: 1000, icon: '🚚', claimed: false },
  { id: 3, name: '15% de reduction', points: 1500, icon: '🎫', claimed: false },
  { id: 4, name: 'Produit gratuit', points: 5000, icon: '🎁', claimed: true },
  { id: 5, name: '25% de reduction', points: 3000, icon: '🎫', claimed: false },
  { id: 6, name: 'VIP 1 mois', points: 10000, icon: '👑', claimed: false },
]

export default function LoyaltyProgram() {
  const [userPoints, setUserPoints] = useState(2750)
  const [userLevel, setUserLevel] = useState('Bronze')
  const [history, setHistory] = useState([
    { id: 1, action: 'Achat iPhone 15', points: -850, date: '2026-04-15' },
    { id: 2, action: 'Parrainage Marie', points: +500, date: '2026-04-14' },
    { id: 3, action: 'Achat AirPods', points: -185, date: '2026-04-12' },
    { id: 4, action: 'Bonus connexion', points: +10, date: '2026-04-11' },
  ])

  const levels = [
    { name: 'Bronze', min: 0, color: 'orange' },
    { name: 'Silver', min: 2000, color: 'gray' },
    { name: 'Gold', min: 5000, color: 'yellow' },
    { name: 'Platinum', min: 10000, color: 'purple' },
    { name: 'Diamond', min: 25000, color: 'cyan' },
  ]

  const nextLevel = levels.find(l => l.min > userPoints) || levels[levels.length - 1]
  const progress = ((userPoints - (levels[levels.indexOf(levels.find(l => l.name === userLevel) || levels[0])].min)) / (nextLevel.min - (levels[levels.indexOf(levels.find(l => l.name === userLevel) || levels[0])].min))) * 100

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
          <Gift className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">Programme de <span className="text-cyan-400">Fidelite</span></h1>
          <p className="text-slate-400">Gagnez des points a chaque achat et decoffrez des recompenses</p>
        </motion.div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">Vos points</p>
            <p className="text-4xl font-bold text-cyan-400">{userPoints}</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">Niveau actuel</p>
            <p className="text-4xl font-bold text-yellow-400">{userLevel}</p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">Prochain niveau</p>
            <p className="text-4xl font-bold text-white">{nextLevel.name}</p>
            <div className="mt-2 bg-slate-700 rounded-full h-2">
              <div className="bg-cyan-500 h-2 rounded-full" style={{width: `${Math.min(progress, 100)}%`}}></div>
            </div>
            <p className="text-slate-500 text-sm mt-1">{nextLevel.min - userPoints} points restants</p>
          </motion.div>
        </div>

        {/* Rewards */}
        <h2 className="text-2xl font-bold text-white mb-6">Recompenses disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {rewards.map((reward, i) => (
            <motion.div key={reward.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1*i}}
              className={`bg-slate-800 border rounded-xl p-4 ${reward.claimed ? 'border-green-500/50' : 'border-slate-700'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">{reward.icon}</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">{reward.points} pts</span>
              </div>
              <h3 className="text-white font-bold">{reward.name}</h3>
              <button disabled={reward.claimed || userPoints < reward.points}
                className={`mt-3 w-full py-2 rounded-lg font-bold ${reward.claimed ? 'bg-green-500/20 text-green-400' : userPoints >= reward.points ? 'gradient-bg text-white' : 'bg-slate-700 text-slate-500'}`}>
                {reward.claimed ? 'Recu' : userPoints >= reward.points ? 'Echanger' : 'Points insuffisants'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* History */}
        <h2 className="text-2xl font-bold text-white mb-6">Historique des points</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="text-left text-slate-400 p-4">Date</th>
                <th className="text-left text-slate-400 p-4">Action</th>
                <th className="text-right text-slate-400 p-4">Points</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i} className="border-t border-slate-700">
                  <td className="text-slate-400 p-4">{h.date}</td>
                  <td className="text-white p-4">{h.action}</td>
                  <td className={`text-right p-4 font-bold ${h.points > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {h.points > 0 ? '+' : ''}{h.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}