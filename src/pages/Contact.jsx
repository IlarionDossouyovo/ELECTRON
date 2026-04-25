import React from 'react'

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">📞 Contact</h1>
      
      <div className="card p-8 rounded-2xl">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Nom complet</label>
            <input type="text" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea rows="5" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none" />
          </div>
          <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition text-white">
            Envoyer le message
          </button>
        </form>
        
        <div className="mt-8 pt-8 border-t border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Autres moyens</h3>
          <p className="text-gray-400">📧 electronbusiness@gmail.com</p>
          <p className="text-gray-400">📱 +229 01 23 45 67 89</p>
          <p className="text-gray-400">📍 Cotonou, Benin</p>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
