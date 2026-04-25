import React from 'react'

const ETech = () => {
  const products = [
    { name: 'Ord portable', price: '350 000 XOF', spec: '8Go RAM' },
    { name: 'Telephone', price: '150 000 XOF', spec: '128Go' },
    { name: 'Tablette', price: '120 000 XOF', spec: '10"' },
    { name: 'Accessoires', price: '5 000 XOF', spec: 'Cables' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">💻 E-Tech</h1>
        <p className="text-xl text-cyan-400 text-center mb-12">Technologie & Electronique</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <div key={i} className="card p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              <p className="text-sm text-gray-400">{p.spec}</p>
              <p className="text-xl text-cyan-400 mt-2">{p.price}</p>
              <button className="w-full mt-4 py-2 bg-cyan-500 rounded-lg text-white">Acheter</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ETech
