import React from 'react'

const EGarage = () => {
  const services = [
    { name: 'Vidange', price: '15 000 XOF', icon: '🛢️' },
    { name: 'Pneumatiques', price: '50 000 XOF', icon: '🛞' },
    { name: 'Freins', price: '35 000 XOF', icon: '🛑' },
    { name: 'Diagnostique', price: '25 000 XOF', icon: '📱' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🔧 E-Garage</h1>
        <p className="text-xl text-red-400 text-center mb-12">Auto & Mecanique</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card p-6 rounded-xl flex items-center gap-4">
              <span className="text-4xl">{s.icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{s.name}</h3>
                <p className="text-xl text-cyan-400">{s.price}</p>
              </div>
              <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Reserver</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EGarage
