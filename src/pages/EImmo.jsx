import React from 'react'

const EImmo = () => {
  const properties = [
    { name: 'Villa 3 pieces', price: '150 000 XOF/mois', location: 'Cotonou' },
    { name: 'Appartement', price: '100 000 XOF/mois', location: 'Porto-Novo' },
    { name: 'Bureau 50m2', price: '200 000 XOF/mois', location: 'Cotonou' },
    { name: 'Terrain 500m2', price: '25 000 000 XOF', location: 'Abomey-Calavi' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🏠 E-Immo</h1>
        <p className="text-xl text-green-400 text-center mb-12">Immobilier</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {properties.map((p, i) => (
            <div key={i} className="card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <p className="text-gray-400 text-sm">{p.location}</p>
              <p className="text-2xl text-cyan-400 mt-4">{p.price}</p>
              <button className="w-full mt-4 py-2 bg-green-500 rounded-lg text-white">Contacter</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EImmo
