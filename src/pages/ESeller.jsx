import React from 'react'

const ESeller = () => {
  const categories = [
    { name: 'Mode', count: 245, icon: '👗' },
    { name: 'Electronique', count: 189, icon: '📱' },
    { name: 'Maison', count: 156, icon: '🏠' },
    { name: 'Alimentation', count: 98, icon: '🍎' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🛍️ E-Seller</h1>
        <p className="text-xl text-purple-400 text-center mb-12">Vendez en ligne facilement</p>
        
        <div className="card p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Creer votre boutique</h2>
          <p className="text-gray-400 mb-6">Rejoignez plus de 1000 vendeurs sur E-Seller</p>
          <button className="px-8 py-3 bg-purple-500 rounded-lg text-white font-semibold">Demarrer maintenant</button>
        </div>

        <h2 className="text-xl font-bold text-white mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((c, i) => (
            <div key={i} className="card p-6 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-white/10">
              <span className="text-3xl">{c.icon}</span>
              <div>
                <h3 className="font-bold text-white">{c.name}</h3>
                <p className="text-sm text-gray-400">{c.count} produits</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ESeller
