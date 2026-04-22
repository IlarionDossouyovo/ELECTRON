import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  DollarSign, TrendingUp, TrendingDown, CreditCard, ArrowUpRight, 
  ArrowDownRight, Clock, CheckCircle, XCircle, AlertCircle, Filter,
  Download, Eye, RefreshCw, Calendar, Wallet
} from 'lucide-react'

const transactions = [
  { id: 'TXN-001', type: 'sale', amount: 185000, status: 'completed', date: '2026-04-15 14:30', method: 'Orange Money', customer: 'Jean D.' },
  { id: 'TXN-002', type: 'sale', amount: 42000, status: 'completed', date: '2026-04-15 12:15', method: 'Wave', customer: 'Marie K.' },
  { id: 'TXN-003', type: 'refund', amount: -25000, status: 'completed', date: '2026-04-15 10:00', method: 'Carte', customer: 'Paul O.' },
  { id: 'TXN-004', type: 'payout', amount: -500000, status: 'pending', date: '2026-04-14 16:00', method: 'Virement', customer: '-> Banque' },
  { id: 'TXN-005', type: 'sale', amount: 89000, status: 'completed', date: '2026-04-14 09:45', method: 'MTN', customer: 'Alice S.' },
  { id: 'TXN-006', type: 'sale', amount: 156000, status: 'pending', date: '2026-04-13 18:30', method: 'Stripe', customer: 'Koffi M.' },
  { id: 'TXN-007', type: 'sale', amount: 34000, status: 'failed', date: '2026-04-13 11:20', method: 'Carte', customer: 'Pierre M.' },
]

export default function PaymentDashboard() {
  const [filter, setFilter] = useState('all')
  const [timeRange, setTimeRange] = useState('today')

  const stats = {
    today: { sales: 227000, transactions: 3, avg: 75667 },
    week: { sales: 1250000, transactions: 18, avg: 69444 },
    month: { sales: 4500000, transactions: 65, avg: 69230 },
  }

  const currentStats = stats[timeRange]

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Paiements</h1>
            <p className="text-slate-400">Suivez vos transactions et revenus</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-slate-800 text-white rounded-lg flex items-center gap-2">
              <Download className="w-4 h-4" /> Export
            </button>
            <button className="px-4 py-2 gradient-bg text-white font-bold rounded-lg flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> Actualiser
            </button>
          </div>
        </motion.div>

        {/* Time Range Selector */}
        <div className="flex gap-2 mb-8">
          {['today', 'week', 'month'].map(range => (
            <button key={range} onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg font-bold ${timeRange === range ? 'gradient-bg text-white' : 'bg-slate-800 text-slate-400'}`}>
              {range === 'today' ? "Aujourd'hui" : range === 'week' ? 'Cette semaine' : 'Ce mois'}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-green-400 text-sm flex items-center gap-1"><ArrowUpRight className="w-4 h-4" />+12%</span>
            </div>
            <p className="text-slate-400 text-sm">Ventes aujourd'hui</p>
            <p className="text-3xl font-bold text-white">{currentStats.sales.toLocaleString()} XAF</p>
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <p className="text-slate-400 text-sm">Transactions</p>
            <p className="text-3xl font-bold text-white">{currentStats.transactions}</p>
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <p className="text-slate-400 text-sm">Panier moyen</p>
            <p className="text-3xl font-bold text-white">{currentStats.avg.toLocaleString()} XAF</p>
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            <p className="text-slate-400 text-sm">Solde disponible</p>
            <p className="text-3xl font-bold text-cyan-400">1 250 000 XAF</p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            {['all', 'sale', 'refund', 'payout'].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg ${filter === f ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500' : 'bg-slate-800 text-slate-400'}`}>
                {f === 'all' ? 'Tout' : f === 'sale' ? 'Ventes' : f === 'refund' ? 'Remboursements' : 'Retraits'}
              </button>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.5}}
          className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900">
                <tr>
                  <th className="text-left text-slate-400 p-4">Transaction</th>
                  <th className="text-left text-slate-400 p-4">Client</th>
                  <th className="text-left text-slate-400 p-4">Moyen</th>
                  <th className="text-left text-slate-400 p-4">Date</th>
                  <th className="text-left text-slate-400 p-4">Statut</th>
                  <th className="text-right text-slate-400 p-4">Montant</th>
                </tr>
              </thead>
              <tbody>
                {transactions.filter(t => filter === 'all' || t.type === filter).map((txn, i) => (
                  <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          txn.type === 'sale' ? 'bg-green-500/20' : txn.type === 'refund' ? 'bg-red-500/20' : 'bg-yellow-500/20'
                        }`}>
                          {txn.type === 'sale' ? <ArrowUpRight className="w-5 h-5 text-green-400" /> :
                           txn.type === 'refund' ? <ArrowDownRight className="w-5 h-5 text-red-400" /> :
                           <ArrowDownRight className="w-5 h-5 text-yellow-400" />}
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm">{txn.id}</p>
                          <p className="text-slate-500 text-xs capitalize">{txn.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-white">{txn.customer}</td>
                    <td className="p-4 text-slate-400">{txn.method}</td>
                    <td className="p-4 text-slate-400">{txn.date}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 w-fit ${
                        txn.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        txn.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {txn.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                        {txn.status === 'pending' && <Clock className="w-3 h-3" />}
                        {txn.status === 'failed' && <XCircle className="w-3 h-3" />}
                        {txn.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <span className={`font-bold ${txn.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {txn.amount > 0 ? '+' : ''}{txn.amount.toLocaleString()} XAF
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}