import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Send, Bot, User, Loader2, ThumbsUp, ThumbsDown, RefreshCw } from 'lucide-react'

const quickQuestions = [
  'Comment suivre ma commande?',
  'Quels sont les modes de paiement?',
  'Politique de retour',
  'Contacter le support',
  'Livraison gratuite?',
  'Garantie produits',
]

export default function LiveChat() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: 'Bonjour! Je suis EDAC, votre assistant IA. Comment puis-je vous aider?', time: new Date() }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEnd = useRef(null)

  const sendMessage = (text) => {
    if (!text.trim()) return
    const userMsg = { id: Date.now(), from: 'user', text, time: new Date() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      const botResponses = {
        'commande': 'Pour suivre votre commande, allez dans "Mes commandes" ou cliquez sur le lien de suivi dans votre email de confirmation.',
        'paiement': 'Nous acceptons: Carte bancaire, Orange Money, MTN, Wave, PayPal et Bitcoin.',
        'retour': 'Vous avez 14 jours pour retourner un produit. Allez dans "Mes commandes" > "Retour" pour initiate un retour.',
        'support': 'Notre support est disponible 24/7. Appelez le +229 00 00 00 00 ou utilisez ce chat.',
        'livraison': 'La livraison est gratuite pour toute commande superieure a 50.000 XAF.',
        'garantie': 'Tous nos produits ont une garantie de 2 ans minimum.',
      }
      const lowerText = text.toLowerCase()
      let response = 'Je suis desole, je n\'ai pas bien compris. Pouvez-vous reformuler ou choisir une question rapide?'
      for (const [key, val] of Object.entries(botResponses)) {
        if (lowerText.includes(key)) { response = val; break }
      }
      setMessages(prev => [...prev, { id: Date.now()+1, from: 'bot', text: response, time: new Date() }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900 flex">
      {/* Sidebar */}
      <div className="w-80 bg-slate-800 border-r border-slate-700 p-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">EDAC Assistant</h3>
            <p className="text-green-400 text-sm flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full"></span> En ligne</p>
          </div>
        </div>
        <h4 className="text-slate-400 text-sm mb-3">Questions frequentes:</h4>
        <div className="space-y-2">
          {quickQuestions.map((q, i) => (
            <button key={i} onClick={() => sendMessage(q)} className="w-full text-left p-3 bg-slate-700/50 rounded-lg text-slate-300 text-sm hover:bg-slate-700 transition">
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <motion.div key={msg.id} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md px-4 py-3 rounded-2xl ${msg.from === 'user' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-white'}`}>
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.from === 'user' ? 'text-white/70' : 'text-slate-500'}`}>
                  {msg.time.toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-800 px-4 py-3 rounded-2xl flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                <span className="text-slate-400">EDAC ecrit...</span>
              </div>
            </div>
          )}
          <div ref={messagesEnd} />
        </div>

        <div className="p-4 border-t border-slate-700">
          <div className="flex gap-3">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Tapez votre message..." className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500" />
            <button onClick={() => sendMessage(input)} className="px-6 py-3 gradient-bg text-white rounded-xl font-bold flex items-center gap-2">
              <Send className="w-5 h-5" /> Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}