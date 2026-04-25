import React from 'react'

const EBattisseurs = () => {
  const products = [
    { name: 'Ciment', price: '15 000 XOF', category: ' مواد البناء' },
    { name: 'Briques', price: '5 000 XOF', category: 'Matériaux' },
    { name: 'Sable', price: '8 000 XOF', category: 'Matériaux' },
    { name: 'Fer à béton', price: '25 000 XOF', category: 'Acier' },
    { name: 'Tuiles', price: '12 000 XOF', category: 'Toiture' },
    { name: 'Peinture', price: '18 000 XOF', category: 'Finition' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🏗️ E-Battisseurs</h1>
        <p className="text-xl text-orange-400 text-center mb-12">Construction & BTP - Matériaux de construction</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="card p-6 rounded-xl hover:bg-white/10 transition cursor-pointer">
              <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{p.price}</p>
              <p className="text-sm text-gray-400 mt-2">{p.category}</p>
              <button className="w-full mt-4 py-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EBattisseurs
