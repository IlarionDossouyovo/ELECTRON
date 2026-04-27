import React from 'react'

const EDecor = () => {
  const products = [
    { name: 'Canape', price: '150 000 XOF', icon: '🛋️' },
    { name: 'Table', price: '85 000 XOF', icon: '🪑' },
    { name: 'Lampe', price: '25 000 XOF', icon: '💡' },
    { name: 'Tapis', price: '35 000 XOF', icon: '🟫' },
    { name: 'Rideaux', price: '20 000 XOF', icon: '🪟' },
    { name: 'Vase', price: '15 000 XOF', icon: '🏺' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🛋️ E-Decor</h1>
        <p className="text-xl text-amber-400 text-center mb-12">Decoration & Ameublement</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="card p-6 rounded-xl text-center">
              <span className="text-4xl">{p.icon}</span>
              <h3 className="text-lg font-bold text-white mt-4">{p.name}</h3>
              <p className="text-2xl text-cyan-400 mt-2">{p.price}</p>
              <button className="w-full mt-4 py-2 bg-amber-500 rounded-lg text-white">Ajouter</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EDecor
