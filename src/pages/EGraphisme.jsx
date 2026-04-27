import React from 'react'

const EGraphisme = () => {
  const services = [
    { name: 'Creation logo', price: '30 000 XOF', icon: '✒️' },
    { name: 'Carte visite', price: '10 000 XOF', icon: '💳' },
    { name: 'Affiche', price: '15 000 XOF', icon: '📄' },
    { name: 'Pack branding', price: '80 000 XOF', icon: '🎨' },
    { name: 'Illustration', price: '25 000 XOF', icon: '🖼️' },
    { name: 'UI design', price: '100 000 XOF', icon: '📱' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">✏️ E-Graphisme</h1>
        <p className="text-xl text-violet-400 text-center mb-12">Creation Graphique Professionnelle</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card p-6 rounded-xl text-center">
              <span className="text-4xl">{s.icon}</span>
              <h3 className="text-lg font-bold text-white mt-4">{s.name}</h3>
              <p className="text-2xl text-cyan-400 mt-2">{s.price}</p>
              <button className="w-full mt-4 py-2 bg-violet-500 rounded-lg text-white">Commander</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EGraphisme
