import React from 'react'

const EDesigne = () => {
  const services = [
    { name: 'Logo', price: '25 000 XOF', desc: 'Design professionnel' },
    { name: ' Carte de visite', price: '15 000 XOF', desc: 'Full color' },
    { name: 'Affiche', price: '20 000 XOF', desc: 'Evenement' },
    { name: 'Bannerreseau', price: '30 000 XOF', desc: 'reseaux sociaux' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🎨 E-Designe</h1>
        <p className="text-xl text-pink-400 text-center mb-12">Design & Graphisme</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white">{s.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
              <p className="text-2xl font-bold text-cyan-400 mt-4">{s.price}</p>
              <button className="w-full mt-4 py-2 bg-pink-500 rounded-lg text-white">Commander</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EDesigne
