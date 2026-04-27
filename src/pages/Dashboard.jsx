import React from 'react'
import { useCartStore } from '../stores/cartStore'

const Dashboard = () => {
  const { items } = useCartStore()

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Tableau de bord</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-cyan-400">{items.length}</p>
            <p className="text-gray-400">Articles en panier</p>
          </div>
          <div className="card p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-green-400">0</p>
            <p className="text-gray-400">Commandes</p>
          </div>
          <div className="card p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-purple-400">0</p>
            <p className="text-gray-400">Favoris</p>
          </div>
        </div>

        <div className="card p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-4">Informations du compte</h2>
          <p className="text-gray-400">Email: utilisateur@electron.app</p>
          <p className="text-gray-400">Membre depuis: 2025</p>
          <button className="mt-4 px-6 py-2 bg-slate-700 rounded-lg text-white hover:bg-slate-600">
            Modifier le profil
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
