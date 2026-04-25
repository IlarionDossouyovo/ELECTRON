import React from 'react'
import { Link } from 'react-router-dom'

const EExpresse = () => {
  const marketplaces = [
    { id: 'e-battisseurs', name: 'E-Battisseurs', icon: '🏗️', desc: 'Construction & BTP', color: 'orange' },
    { id: 'e-designe', name: 'E-Designe', icon: '🎨', desc: 'Design & Graphisme', color: 'pink' },
    { id: 'e-clean', name: 'E-Clean', icon: '🧹', desc: 'Nettoyage & Services', color: 'blue' },
    { id: 'e-sim', name: 'E-Sim', icon: '📱', desc: 'Téléphonie & IT', color: 'indigo' },
    { id: 'cao-topographique', name: 'CAO-Topographique', icon: '📐', desc: 'Ingénierie', color: 'teal' },
    { id: 'e-decor', name: 'E-Decor', icon: '🛋️', desc: 'Décoration & Ameublement', color: 'amber' },
    { id: 'e-garage', name: 'E-Garage', icon: '🔧', desc: 'Auto & Mécanique', color: 'red' },
    { id: 'e-tech', name: 'E-Tech', icon: '💻', desc: 'Technologie', color: 'cyan' },
    { id: 'e-outils', name: 'E-Outils', icon: '🔨', desc: 'Outils & Équipement', color: 'gray' },
    { id: 'e-seller', name: 'E-Seller', icon: '🛍️', desc: 'Vente en Ligne', color: 'purple' },
    { id: 'e-immo', name: 'E-Immo', icon: '🏠', desc: 'Immobilier', color: 'green' },
    { id: 'e-graphisme', name: 'E-Graphisme', icon: '✏️', desc: 'Création Graphique', color: 'violet' },
  ]

  const colorClasses = {
    orange: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
    pink: 'text-pink-400 border-pink-500/30 bg-pink-500/10',
    blue: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    indigo: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
    teal: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
    amber: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    red: 'text-red-400 border-red-500/30 bg-red-500/10',
    cyan: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    gray: 'text-gray-400 border-gray-500/30 bg-gray-500/10',
    purple: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    green: 'text-green-400 border-green-500/30 bg-green-500/10',
    violet: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">🛒 E-Expresse</h1>
          <p className="text-xl text-cyan-400">Marketplace Central - 12 Boutiques Spécialisées</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketplaces.map((m) => (
            <Link
              key={m.id}
              to={`/${m.id}`}
              className={`p-6 rounded-xl border ${colorClasses[m.color]} hover:scale-105 transition transform`}
            >
              <div className="text-4xl mb-3">{m.icon}</div>
              <h3 className="text-lg font-bold mb-1">{m.name}</h3>
              <p className="text-sm text-gray-400">{m.desc}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/" className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EExpresse
