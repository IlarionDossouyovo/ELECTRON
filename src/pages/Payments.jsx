import React from 'react'

const Payments = () => {
  const methods = [
    { name: 'Orange Money', region: 'Afrique', icon: '🟠' },
    { name: 'MTN Mobile Money', region: 'Afrique', icon: '🟡' },
    { name: 'Wave', region: 'Senegal', icon: '🔵' },
    { name: 'Stripe', region: 'International', icon: '💳' },
    { name: 'PayPal', region: 'International', icon: '🔴' },
    { name: 'Bitcoin', region: 'Crypto', icon: '₿' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">💳 Payments</h1>
        <p className="text-xl text-green-400 text-center mb-12">Paiements securises multi-pays</p>
        
        <h2 className="text-2xl font-bold text-white mb-6">Moyens de paiement</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {methods.map((m, i) => (
            <div key={i} className="card p-4 rounded-xl flex items-center gap-4">
              <span className="text-3xl">{m.icon}</span>
              <div>
                <h3 className="font-bold text-white">{m.name}</h3>
                <p className="text-xs text-gray-400">{m.region}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Payments
