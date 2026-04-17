import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  MessageCircle, Send, Search, Plus, MoreVertical,
  Paperclip, Smile, Image, Phone, Video, Pin,
  Archive, Trash2, User, Check, CheckCheck, Clock,
  Hash, BellOff, VolumeX
} from 'lucide-react'

const conversations = [
  { id: 1, name: 'Jean Dupont', lastMessage: 'Merci pour le suivi de commande!', time: '14:30', unread: 2, avatar: 'JD', online: true },
  { id: 2, name: 'Marie Kouassi', lastMessage: 'Le paiement a été traité', time: '13:45', unread: 0, avatar: 'MK', online: true },
  { id: 3, name: 'Support Client', lastMessage: 'Comment puis-je vous aider?', time: '12:00', unread: 5, avatar: 'SC', online: false },
  { id: 4, name: 'Tech Solutions', lastMessage: 'Rendez-vous demain', time: 'Hier', unread: 0, avatar: 'TS', online: false },
  { id: 5, name: 'Équipe Marketing', lastMessage: 'Campagne prête pour validation', time: 'Hier', unread: 1, avatar: 'EM', online: true },
]

const messages = [
  { id: 1, from: 'them', text: 'Bonjour, je voudrais vérifier le statut de ma commande', time: '14:25', status: 'read' },
  { id: 2, from: 'me', text: 'Bonjour Jean! Bien sûr, Laissez-moi vérifier. Votre commande #ORD-001 est en cours de livraison.', time: '14:26', status: 'read' },
  { id: 3, from: 'them', text: 'Super! Quand vais-je la recevoir?', time: '14:27', status: 'read' },
  { id: 4, from: 'me', text: 'Selon le suivi, elle devrait arriver demain avant 18h. Le livreur vous contactera.', time: '14:28', status: 'delivered' },
  { id: 5, from: 'them', text: 'Merci beaucoup! Une dernière question...', time: '14:30', status: 'read' },
]

const groups = [
  { id: 1, name: 'Équipe Ventes', members: 12, lastMessage: 'Réunion à 15h', time: '10:00' },
  { id: 2, name: 'Support Technique', members: 5, lastMessage: 'Ticket résolu', time: '09:30' },
  { id: 3, name: 'Logistique', members: 8, lastMessage: 'Colis en retard', time: 'Hier' },
]

export default function Messaging() {
  const [activeTab, setActiveTab] = useState('conversations')
  const [selectedChat, setSelectedChat] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen pt-16 hero-gradient flex">
      {/* Sidebar */}
      <div className="w-80 border-r border-slate-700 flex flex-col h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-white flex items-center">
              <MessageCircle className="w-6 h-6 mr-2 text-cyan-400" />
              Messages
            </h1>
            <button className="p-2 bg-slate-700 rounded-lg text-white hover:bg-slate-600">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="p-2 border-b border-slate-700 flex gap-1">
          {['direct', 'groups', 'archived'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'direct' && 'Direct'}
              {tab === 'groups' && 'Groupes'}
              {tab === 'archived' && 'Archivés'}
            </button>
          ))}
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'direct' && conversations.map((conv) => (
            <motion.div
              key={conv.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedChat(conv)}
              className={`p-4 border-b border-slate-700 cursor-pointer hover:bg-slate-700/30 ${
                selectedChat.id === conv.id ? 'bg-slate-700/50 border-l-2 border-l-cyan-400' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {conv.avatar}
                  </div>
                  {conv.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium truncate">{conv.name}</h3>
                    <span className="text-slate-500 text-xs">{conv.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-400 text-sm truncate">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="bg-cyan-500 text-white text-xs rounded-full px-2 py-0.5">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {activeTab === 'groups' && groups.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 border-b border-slate-700 cursor-pointer hover:bg-slate-700/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                  <Hash className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">{group.name}</h3>
                  <p className="text-slate-400 text-sm truncate">{group.lastMessage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {selectedChat.avatar}
                </div>
                <div>
                  <h3 className="text-white font-medium">{selectedChat.name}</h3>
                  <p className="text-slate-400 text-sm">
                    {selectedChat.online ? 'En ligne' : 'Hors ligne'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md px-4 py-3 rounded-2xl ${
                    msg.from === 'me' 
                      ? 'bg-cyan-500 text-white rounded-br-md' 
                      : 'bg-slate-700 text-white rounded-bl-md'
                  }`}>
                    <p>{msg.text}</p>
                    <div className={`flex items-center justify-end gap-1 mt-1 ${
                      msg.from === 'me' ? 'text-white/70' : 'text-slate-500'
                    }`}>
                      <span className="text-xs">{msg.time}</span>
                      {msg.from === 'me' && (
                        msg.status === 'read' ? <CheckCheck className="w-4 h-4" /> :
                        msg.status === 'delivered' ? <Check className="w-4 h-4" /> :
                        <Clock className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-700">
              <div className="flex items-center gap-3">
                <button className="p-2 text-slate-400 hover:text-white">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white">
                  <Image className="w-5 h-5" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Tapez un message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="w-full bg-slate-800 border border-slate-700 rounded-full px-4 py-3 text-white placeholder-slate-500"
                  />
                </div>
                <button className="p-2 text-slate-400 hover:text-white">
                  <Smile className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleSendMessage}
                  className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Sélectionnez une conversation</h3>
              <p className="text-slate-400">Choisissez une conversation pour commencer à discuter</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}