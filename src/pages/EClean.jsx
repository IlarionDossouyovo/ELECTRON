import React from 'react'

const EClean = () => {
  const services = [
    { name: 'Nettoyage domicile', price: '15 000 XOF/h', icon: '🏠' },
    { name: 'Nettoyage bureau', price: '20 000 XOF/h', icon: '🏢' },
    { name: 'Nettoyage fin de chantier', price: '50 000 XOF', icon: '🔨' },
    { name: 'Lavage auto', price: '5 000 XOF', icon: '🚗' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🧹 E-Clean</h1>
        <p className="text-xl text-blue-400 text-center mb-12">Services de nettoyage professionnels</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card p-6 rounded-xl flex items-center gap-4">
              <span className="text-4xl">{s.icon}</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{s.name}</h3>
                <p className="text-xl text-cyan-400">{s.price}</p>
              </div>
              <button className="px-4 py-2 bg-blue-500 rounded-lg text-white">Réserver</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EClean
