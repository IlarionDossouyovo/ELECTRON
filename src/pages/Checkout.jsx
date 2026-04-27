import React, { useState } from 'react'
import { useCartStore } from '../stores/cartStore'

const Checkout = () => {
  const { items, getTotal, clearCart } = useCartStore()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    setTimeout(() => clearCart(), 3000)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-slate-900 p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">✅</p>
          <h2 className="text-2xl font-bold text-white mb-4">Commande confirmee!</h2>
          <p className="text-gray-400">Vous recevrez un email de confirmation</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="card p-6 rounded-xl space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Nom complet</label>
            <input required type="text" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white" />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input required type="email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white" />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Telephone</label>
            <input required type="tel" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white" />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Adresse de livraison</label>
            <textarea required rows="3" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"></textarea>
          </div>
          
          <div className="pt-4 border-t border-slate-700">
            <p className="text-xl font-bold text-white mb-4">Total: {getTotal().toLocaleString()} XOF</p>
            <button type="submit" className="w-full py-3 bg-cyan-500 rounded-lg text-white font-semibold hover:bg-cyan-600">
              Confirmer la commande
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
