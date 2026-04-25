import React from 'react'

const AIAutomation = () => {
  const services = [
    { name: 'Chatbot IA', desc: 'Assistant virtuel 24/7', icon: '💬' },
    { name: 'Recommandations', desc: 'Produits personalises', icon: '🎯' },
    { name: 'Analyse predictive', desc: 'Prevision des ventes', icon: '📊' },
    { name: 'Generation contenu', desc: 'Blog, descriptions', icon: '✍️' },
    { name: 'NLP', desc: 'Traitement du langage', icon: '🗣️' },
    { name: 'Computer Vision', desc: 'Reconnaissance images', icon: '👁️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">🤖 AI Automation</h1>
        <p className="text-xl text-cyan-400 text-center mb-12">Intelligence Artificielle pour votre entreprise</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card p-6 rounded-xl text-center hover:bg-white/10 transition cursor-pointer">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.name}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Essayez notre chatbot</h2>
          <div className="flex gap-4">
            <input type="text" placeholder="Posez votre question..." className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white" />
            <button className="px-6 py-3 bg-purple-500 rounded-lg text-white">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIAutomation
