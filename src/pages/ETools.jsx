import React from 'react'

const ETools = () => {
  const tools = [
    { name: 'Perceuse', price: '35 000 XOF' },
    { name: 'Scie', price: '25 000 XOF' },
    { name: 'Marteau', price: '5 000 XOF' },
    { name: 'Tournevis', price: '3 000 XOF' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🔨 E-Outils</h1>
        <p className="text-xl text-gray-400 text-center mb-12">Outils & Equipement</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((t, i) => (
            <div key={i} className="card p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-white">{t.name}</h3>
              <p className="text-xl text-cyan-400 mt-2">{t.price}</p>
              <button className="w-full mt-4 py-2 bg-gray-500 rounded-lg text-white">Acheter</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ETools
