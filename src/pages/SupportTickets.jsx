import { motion } from 'framer-motion'
import { useState } from 'react'
import { Headphones, Plus, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react'

const tickets = [
  { id: 'TKT-001', subject: 'Probleme de paiement', status: 'open', priority: 'high', date: '2026-04-15', category: 'Paiement' },
  { id: 'TKT-002', subject: 'Question sur garantie', status: 'pending', priority: 'medium', date: '2026-04-14', category: 'Produit' },
  { id: 'TKT-003', subject: 'Retard de livraison', status: 'resolved', priority: 'high', date: '2026-04-12', category: 'Livraison' },
  { id: 'TKT-004', subject: 'Demande de remboursement', status: 'open', priority: 'low', date: '2026-04-15', category: 'Finance' },
]

const categories = ['Paiement', 'Produit', 'Livraison', 'Technique', 'Autre']

export default function SupportTickets() {
  const [showNew, setShowNew] = useState(false)
  const [newTicket, setNewTicket] = useState({ subject: '', category: 'Paiement', priority: 'medium', message: '' })

  const statusColors = { open: 'red', pending: 'yellow', resolved: 'green' }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white">Support <span className="text-cyan-400">Tickets</span></h1>
            <p className="text-slate-400 mt-2">Gestion des demandes de support</p>
          </div>
          <button onClick={() => setShowNew(true)} className="px-6 py-3 gradient-bg text-white font-bold rounded-xl flex items-center gap-2">
            <Plus className="w-5 h-5" /> Nouveau ticket
          </button>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Ouverts', count: 2, icon: AlertCircle, color: 'red' },
            { label: 'En attente', count: 1, icon: Clock, color: 'yellow' },
            { label: 'Resolus', count: 1, icon: CheckCircle, color: 'green' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1*i}}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <stat.icon className={`w-8 h-8 text-${stat.color}-400 mb-2`} />
              <p className="text-3xl font-bold text-white">{stat.count}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
          className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="text-left text-slate-400 p-4">ID</th>
                <th className="text-left text-slate-400 p-4">Sujet</th>
                <th className="text-left text-slate-400 p-4">Categorie</th>
                <th className="text-left text-slate-400 p-4">Priorite</th>
                <th className="text-left text-slate-400 p-4">Statut</th>
                <th className="text-left text-slate-400 p-4">Date</th>
                <th className="text-left text-slate-400 p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, i) => (
                <tr key={i} className="border-t border-slate-700">
                  <td className="text-cyan-400 p-4 font-mono">{ticket.id}</td>
                  <td className="text-white p-4">{ticket.subject}</td>
                  <td className="text-slate-400 p-4">{ticket.category}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      ticket.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                      ticket.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>{ticket.priority.toUpperCase()}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs flex items-center gap-1 w-fit ${
                      ticket.status === 'open' ? 'bg-red-500/20 text-red-400' :
                      ticket.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {ticket.status === 'open' && <AlertCircle className="w-3 h-3" />}
                      {ticket.status === 'pending' && <Clock className="w-3 h-3" />}
                      {ticket.status === 'resolved' && <CheckCircle className="w-3 h-3" />}
                      {ticket.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="text-slate-400 p-4">{ticket.date}</td>
                  <td className="p-4">
                    <button className="text-cyan-400 hover:text-cyan-300">Voir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {showNew && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} 
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-lg">
              <h3 className="text-xl font-bold text-white mb-4">Nouveau ticket</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-slate-400 text-sm">Sujet</label>
                  <input type="text" value={newTicket.subject} onChange={(e) => setNewTicket({...newTicket, subject: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white" />
                </div>
                <div>
                  <label className="text-slate-400 text-sm">Categorie</label>
                  <select value={newTicket.category} onChange={(e) => setNewTicket({...newTicket, category: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white">
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 text-sm">Message</label>
                  <textarea rows={4} value={newTicket.message} onChange={(e) => setNewTicket({...newTicket, message: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"></textarea>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setShowNew(false)} className="flex-1 py-2 bg-slate-700 text-white rounded-lg">Annuler</button>
                  <button className="flex-1 py-2 gradient-bg text-white font-bold rounded-lg">Envoyer</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}