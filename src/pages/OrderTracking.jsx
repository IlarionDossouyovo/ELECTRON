import React from 'react'

const OrderTracking = () => {
  const order = {
    id: 'CMD-2025-001',
    status: 'En transit',
    date: '25 Avril 2025',
    items: ['Ciment x 10', 'Fer a beton x 5'],
    total: '150 000 XOF',
  }

  const steps = [
    { name: 'Commande', done: true },
    { name: 'Confirmation', done: true },
    { name: 'Preparation', done: true },
    { name: 'En transit', done: true },
    { name: 'Livre', done: false },
  ]

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Suivi de commande</h1>
        
        <div className="card p-6 rounded-xl mb-6">
          <p className="text-gray-400">Commande</p>
          <p className="text-2xl font-bold text-cyan-400">{order.id}</p>
          <p className="text-gray-400 mt-2">Date: {order.date}</p>
          <p className="text-xl text-white mt-4">Total: {order.total}</p>
        </div>

        <div className="card p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-6">Progression</h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s.done ? 'bg-green-500' : 'bg-slate-700'}`}>
                  {s.done ? '✓' : i + 1}
                </div>
                <span className={s.done ? 'text-white' : 'text-gray-500'}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderTracking
