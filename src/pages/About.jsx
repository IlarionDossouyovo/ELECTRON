import React from 'react'

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">A propos de nous</h1>
      
      <div className="card p-8 rounded-2xl space-y-6 text-gray-300">
        <p>ELECTRON Business Suite est une plateforme digitale complete intégrant e-commerce, logistique, marketing, IA, recrutement et contenus personnalisés.</p>
        
        <h2 className="text-2xl font-bold text-white pt-4">Notre Mission</h2>
        <p>Démocratiser le commerce électronique en Afrique et dans le monde avec des outils professionnels accessibles à tous.</p>
        
        <h2 className="text-2xl font-bold text-white">Chiffres</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li className="card p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-cyan-400">12+</p>
            <p className="text-gray-400">Marketplaces</p>
          </li>
          <li className="card p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-purple-400">50+</p>
            <p className="text-gray-400">Pays couverts</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default About
