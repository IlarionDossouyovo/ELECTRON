import React, { useState } from 'react'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bonjour! Je suis ELECTRON AI. Comment puis-je vous aider?' }
  ])
  const [input, setInput] = useState('')

  const responses = {
    'prix': 'Nos prix varient selon les produits. Consultez nos marketplaces pour plus de details!',
    'livraison': 'La livraison est disponible dans plusieurs pays d\'Afrique et du monde.',
    'paiement': 'Nous acceptons Orange Money, MTN, Wave, Stripe et Bitcoin.',
    'contact': 'Vous pouvez nous contacter a electronbusiness@gmail.com',
  }

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMsg = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    
    const resp = Object.keys(responses).find(k => input.toLowerCase().includes(k))
    const botMsg = { 
      role: 'assistant', 
      content: resp ? responses[resp] : 'Je suis toujours en apprentissage. Postez votre question plus tard!' 
    }
    setTimeout(() => setMessages(prev => [...prev, botMsg]), 500)
    setInput('')
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg card rounded-2xl overflow-hidden">
        <div className="bg-cyan-500 p-4 text-white font-bold flex items-center gap-2">
          <span>🤖</span> ELECTRON AI Assistant
        </div>
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-xl ${m.role === 'user' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-gray-200'}`}>
                {m.content}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-700 flex gap-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tapez votre question..."
            className="flex-1 px-4 py-2 bg-slate-800 rounded-lg text-white"
          />
          <button onClick={handleSend} className="px-4 py-2 bg-cyan-500 rounded-lg text-white">Envoyer</button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
