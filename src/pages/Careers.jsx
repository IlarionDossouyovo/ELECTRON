import React from 'react'
import { Link } from 'react-router-dom'

const jobs = [
  { title: 'Developpeur Frontend React', type: 'Temps plein', dept: 'Technique' },
  { title: 'Expert IA / ML', type: 'Temps plein', dept: 'IA' },
  { title: 'Chef de Projet E-commerce', type: 'Temps plein', dept: 'Produit' },
  { title: 'Designer UI/UX', type: 'CDD', dept: 'Design' },
]

const Careers = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">💼 Carrières</h1>
      <p className="text-xl text-gray-400 text-center mb-12">Rejoignez ELECTRON Business Suite</p>
      
      <div className="grid gap-6">
        {jobs.map((job, i) => (
          <div key={i} className="card p-6 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-white">{job.title}</h3>
              <p className="text-gray-400">{job.type} · {job.dept}</p>
            </div>
            <button className="px-6 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600">
              Postuler
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Careers
