import React from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../stores/cartStore'

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🛒</p>
          <h2 className="text-2xl font-bold text-white mb-4">Votre panier est vide</h2>
          <Link to="/" className="px-6 py-3 bg-cyan-500 rounded-lg text-white">
            Continuer vos achats
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">🛒 Panier</h1>
        
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="card p-4 rounded-xl flex items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-white">{item.name}</h3>
                <p className="text-cyan-400">{item.price} XOF</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-slate-700 rounded-lg text-white hover:bg-slate-600"
                >-</button>
                <span className="w-8 text-center text-white">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-slate-700 rounded-lg text-white hover:bg-slate-600"
                >+</button>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="px-3 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600"
              >Supprimer</button>
            </div>
          ))}
        </div>

        <div className="mt-8 card p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl text-white">Total:</span>
            <span className="text-2xl font-bold text-cyan-400">{getTotal().toLocaleString()} XOF</span>
          </div>
          <button 
            onClick={clearCart}
            className="mr-4 px-6 py-3 bg-slate-700 rounded-lg text-white hover:bg-slate-600"
          >Vider le panier</button>
          <Link to="/checkout" className="px-6 py-3 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600">
            Passer commande
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
