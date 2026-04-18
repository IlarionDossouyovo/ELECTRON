import { motion } from 'framer-motion'
import { useState } from 'react'
import { DollarSign, Calculator, Info } from 'lucide-react'

const countries = [
  { name: 'Benin', rate: 0.18, nameLocal: 'TVA' },
  { name: 'Senegal', rate: 0.18, nameLocal: 'TVA' },
  { name: 'Cote d\'Ivoire', rate: 0.18, nameLocal: 'TVA' },
  { name: 'Togo', rate: 0.18, nameLocal: 'TVA' },
  { name: 'France', rate: 0.20, nameLocal: 'TVA' },
  { name: 'USA (NY)', rate: 0.08875, nameLocal: 'Sales Tax' },
  { name: 'Canada', rate: 0.15, nameLocal: 'GST/HST' },
]

export default function TaxCalculator() {
  const [amount, setAmount] = useState(100000)
  const [country, setCountry] = useState(countries[0])
  const [includeTax, setIncludeTax] = useState(false)
  
  const taxAmount = amount * country.rate
  const total = includeTax ? amount : amount + taxAmount

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
          <Calculator className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Calculateur de <span className="text-cyan-400">Taxes</span></h1>
          <p className="text-slate-400 mt-2">Calculez les taxes selon le pays de destination</p>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <div className="mb-6">
            <label className="text-slate-400 text-sm mb-2 block">Montant (XAF)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-2xl font-bold" />
          </div>

          <div className="mb-6">
            <label className="text-slate-400 text-sm mb-2 block">Pays</label>
            <select value={country.name} onChange={(e) => setCountry(countries.find(c => c.name === e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white">
              {countries.map(c => (<option key={c.name} value={c.name}>{c.name} ({c.rate*100}%)</option>))}
            </select>
          </div>

          <div className="mb-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={includeTax} onChange={(e) => setIncludeTax(e.target.checked)} className="w-5 h-5 accent-cyan-500" />
              <span className="text-white">Le montant inclut les taxes</span>
            </label>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-slate-400">Sous-total</span>
              <span className="text-white font-bold">{amount.toLocaleString()} XAF</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{country.nameLocal} ({country.rate*100}%)</span>
              <span className="text-red-400">+{taxAmount.toLocaleString()} XAF</span>
            </div>
            <div className="border-t border-slate-700 pt-4 flex justify-between">
              <span className="text-white font-bold">Total</span>
              <span className="text-cyan-400 font-bold text-2xl">{total.toLocaleString()} XAF</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}