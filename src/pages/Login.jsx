import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated auth - replace with Firebase Auth
    alert(isRegister ? 'Inscription reussie!' : 'Connexion reussie!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">⚡ ELECTRON</h1>
          <p className="text-gray-400 mt-2">{isRegister ? 'Creer un compte' : 'Se connecter'}</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8 rounded-2xl space-y-6">
          {isRegister && (
            <div>
              <label className="block text-gray-400 mb-2">Nom complet</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-cyan-500 rounded-lg text-white font-semibold hover:bg-cyan-600">
            {isRegister ? 'S\'inscrire' : 'Se connecter'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          {isRegister ? 'Deja un compte?' : 'Pas de compte?'}{' '}
          <button onClick={() => setIsRegister(!isRegister)} className="text-cyan-400 hover:underline">
            {isRegister ? 'Se connecter' : 'S\'inscrire'}
          </button>
        </p>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Ou continuer avec</p>
          <div className="flex gap-4 justify-center">
            <button className="px-4 py-2 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100">
              Google
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
