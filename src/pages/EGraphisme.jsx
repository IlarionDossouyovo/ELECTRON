import React from 'react'
import { Link } from 'react-router-dom'

const EGraphisme = () => (
  <div className="min-h-screen bg-slate-900 p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-4">EGraphisme</h1>
      <p className="text-xl text-cyan-400 mb-8">Page en cours de développement</p>
      <Link to="/" className="px-6 py-3 bg-cyan-500 text-white rounded-lg">
        ← Retour
      </Link>
    </div>
  </div>
)
export default EGraphisme
