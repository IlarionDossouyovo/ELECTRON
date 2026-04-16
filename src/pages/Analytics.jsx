import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, TrendingDown, Users, ShoppingCart, Package, DollarSign, Target, Activity, PieChart } from 'lucide-react'

const kpiData = [
  { label: 'CAC', value: '2,450', currency: 'CFA', trend: -12, description: 'Coût d\'acquisition client' },
  { label: 'CLV', value: '28,500', currency: 'CFA', trend: 18, description: 'Valeur vie client' },
  { label: 'Conversion', value: '3.2%', trend: 8, description: 'Taux de conversion' },
  { label: 'Panier moyen', value: '18,500', currency: 'CFA', trend: 15, description: 'Panier moyen' },
]

const ecommerceKPIs = [
  { name: 'Ventes aujourd\'hui', value: '1,247,000', change: 12.5 },
  { name: 'Commandes', value: '89', change: 8.2 },
  { name: 'Panier moyen', value: '18,500', change: 4.1 },
  { name: 'Taux de conversion', value: '3.2%', change: 0.8 },
]

const logisticsKPIs = [
  { name: 'Colis livrés', value: '1,158', change: 15.3 },
  { name: 'En livraison', value: '89', change: -5.2 },
  { name: 'Temps moyen', value: '2.3h', change: -12.5 },
  { name: 'Satisfaction', value: '4.7/5', change: 2.1 },
]

const charts = [
  { name: 'Ventes', data: [65, 78, 90, 87, 95, 102, 98, 115, 120, 118, 125, 130] },
  { name: 'Visiteurs', data: [120, 145, 160, 155, 175, 190, 185, 210, 225, 230, 245, 260] },
]

export default function Analytics() {
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
            <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Module Analytics</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Analyse & <span className="gradient-text">KPIs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Dashboard complet avec tous vos KPIs business. CAC, CLV, taux de conversion, 
            logistique et carrière.
          </motion.p>
        </div>
      </div>

      {/* Main KPIs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpiData.map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">{kpi.label}</span>
                <span className={`flex items-center text-sm ${kpi.trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {kpi.trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {Math.abs(kpi.trend)}%
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {kpi.value}
                <span className="text-slate-500 text-sm ml-1">{kpi.currency || ''}</span>
              </div>
              <p className="text-slate-500 text-xs">{kpi.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* E-commerce KPIs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <ShoppingCart className="w-6 h-6 mr-2 text-cyan-400" />
          KPIs E-commerce
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ecommerceKPIs.map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">{kpi.name}</span>
                <span className="text-green-400 text-sm">+{kpi.change}%</span>
              </div>
              <div className="text-2xl font-bold text-white">{kpi.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logistics KPIs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Package className="w-6 h-6 mr-2 text-cyan-400" />
          KPIs Logistique
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {logisticsKPIs.map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">{kpi.name}</span>
                <span className={`text-sm ${kpi.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {kpi.change > 0 ? '+' : ''}{kpi.change}%
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{kpi.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Charts Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Performance mensuelle</h3>
          
          {/* Simple Chart Visualization */}
          <div className="space-y-6">
            {charts.map((chart, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{chart.name}</span>
                  <span className="text-green-400 text-sm">+12%</span>
                </div>
                <div className="flex items-end h-24 gap-1">
                  {chart.data.map((value, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-cyan-500/30 rounded-t"
                      style={{ height: `${(value / 260) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}