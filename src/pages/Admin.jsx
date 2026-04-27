import React from 'react'
import { useCartStore } from '../stores/cartStore'

const Admin = () => {
  const { items } = useCartStore()

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Administration</h1>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 rounded-xl">
            <p className="text-3xl font-bold text-cyan-400">124</p>
            <p className="text-gray-400">Produits</p>
          </div>
          <div className="card p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">58</p>
            <p className="text-gray-400">Commandes</p>
          </div>
          <div className="card p-6 rounded-xl">
            <p className="text-3xl font-bold text-purple-400">2.3M</p>
            <p className="text-gray-400">XOF Chiffre</p>
          </div>
          <div className="card p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">89</p>
            <p className="text-gray-400">Utilisateurs</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 rounded-xl">
            <h2 className="text-xl font-bold text-white mb-4">Dernieres commandes</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <span>CMD-001</span><span>50 000 XOF</span><span className="text-green-400">Confirmee</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>CMD-002</span><span>25 000 XOF</span><span className="text-yellow-400">En cours</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>CMD-003</span><span>75 000 XOF</span><span className="text-cyan-400">Livree</span>
              </div>
            </div>
          </div>
          
          <div className="card p-6 rounded-xl">
            <h2 className="text-xl font-bold text-white mb-4">Actions rapides</h2>
            <div className="space-y-3">
              <button className="w-full py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600">
                Ajouter un produit
              </button>
              <button className="w-full py-2 bg-purple-500 rounded-lg text-white hover:bg-purple-600">
                Voir les rapports
              </button>
              <button className="w-full py-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600">
                Gerer les stocks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
