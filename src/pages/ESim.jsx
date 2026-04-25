import React from 'react'

const ESim = () => {
  const offers = [
    { name: 'SIM 2Go', price: '2 000 XOF', data: '2Go/30 jours' },
    { name: 'SIM 5Go', price: '5 000 XOF', data: '5Go/30 jours' },
    { name: 'SIM 10Go', price: '8 000 XOF', data: '10Go/30 jours' },
    { name: 'SIM Illimité', price: '15 000 XOF', data: 'Illimité/30 jours' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">📱 E-Sim</h1>
        <p className="text-xl text-indigo-400 text-center mb-12">Cartes SIM et forfaits mobiles</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {offers.map((o, i) => (
            <div key={i} className="card p-6 rounded-xl text-center hover:bg-white/10 transition cursor-pointer">
              <h3 className="text-xl font-bold text-white mb-2">{o.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{o.price}</p>
              <p className="text-sm text-gray-400 mt-2">{o.data}</p>
              <button className="w-full mt-4 py-2 bg-indigo-500 rounded-lg text-white">Acheter</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ESim
