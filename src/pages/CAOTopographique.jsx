import React from 'react'

const CAOTopographique = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">📐 CAO-Topographique</h1>
      <p className="text-xl text-teal-400 text-center mb-12">Ingenierie & Design Assisté par Ordinateur</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white">Plans architecture</h3>
          <p className="text-gray-400 mt-2">Dessin technique, plans de maisons</p>
          <p className="text-2xl text-cyan-400 mt-4">50 000 XOF</p>
        </div>
        <div className="card p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white">Levé topographique</h3>
          <p className="text-gray-400 mt-2">Mesure de terrain, bornage</p>
          <p className="text-2xl text-cyan-400 mt-4">100 000 XOF</p>
        </div>
        <div className="card p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white">Modèle 3D</h3>
          <p className="text-gray-400 mt-2">Visualisation réaliste</p>
          <p className="text-2xl text-cyan-400 mt-4">75 000 XOF</p>
        </div>
        <div className="card p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white">Plan electrique</h3>
          <p className="text-gray-400 mt-2">Schéma electrique</p>
          <p className="text-2xl text-cyan-400 mt-4">35 000 XOF</p>
        </div>
      </div>
    </div>
  </div>
)

export default CAOTopographique
