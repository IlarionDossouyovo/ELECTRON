import React from 'react'
import { useCartStore } from '../stores/cartStore'

const PaymentGateway = () => {
  const { getTotal } = useCartStore()
  const [selected, setSelected] = React.useState('')

  const methods = [
    { id: 'orange', name: 'Orange Money', icon: '🟠', color: 'bg-orange-500' },
    { id: 'mtn', name: 'MTN Mobile Money', icon: '🟡', color: 'bg-yellow-500' },
    { id: 'wave', name: 'Wave', icon: '🔵', color: 'bg-blue-500' },
    { id: 'stripe', name: 'Carte bancaire', icon: '💳', color: 'bg-purple-500' },
    { id: 'crypto', name: 'Bitcoin', icon: '₿', color: 'bg-orange-600' },
  ]

  const handlePayment = () => {
    if (!selected) {
      alert('Veuillez selectionner un moyen de paiement')
      return
    }
    alert(`Paiement ${methods.find(m => m.id === selected)?.name} en cours...`)
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Paiement</h1>
        <p className="text-2xl font-bold text-cyan-400 mb-8">{getTotal().toLocaleString()} XOF</p>
        
        <h2 className="text-xl font-bold text-white mb-4">Choisir le moyen de paiement</h2>
        <div className="space-y-3">
          {methods.map((m) => (
            <div 
              key={m.id}
              onClick={() => setSelected(m.id)}
              className={`card p-4 rounded-xl flex items-center gap-4 cursor-pointer border-2 ${selected === m.id ? 'border-cyan-500' : 'border-transparent'}`}
            >
              <span className="text-3xl">{m.icon}</span>
              <span className="text-white font-semibold">{m.name}</span>
              {selected === m.id && <span className="ml-auto text-cyan-400">✓</span>}
            </div>
          ))}
        </div>
        
        <button 
          onClick={handlePayment}
          className="w-full mt-8 py-4 bg-cyan-500 rounded-lg text-white font-semibold text-lg hover:bg-cyan-600"
        >
          Payer maintenant
        </button>
      </div>
    </div>
  )
}

export default PaymentGateway
