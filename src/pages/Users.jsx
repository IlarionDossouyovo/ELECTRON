import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Users, Search, Plus, MoreVertical, Mail, Phone, Shield,
  Building2, MapPin, Calendar, Filter, Download, Edit,
  Trash2, Eye, Check, X, ChevronDown, UserPlus
} from 'lucide-react'

const users = [
  { id: 1, name: 'DOSSOU-YOVO Ilarion', email: 'electronbusiness07@gmail.com', phone: '+229 01 977 003 47', role: 'Admin', status: 'Actif', company: 'ELECTRON', joined: '15/01/2024', avatar: 'DI' },
  { id: 2, name: 'Marie Kouassi', email: 'marie.k@electron.africa', phone: '+225 07 123 456 78', role: 'Manager', status: 'Actif', company: 'ELECTRON', joined: '20/02/2024', avatar: 'MK' },
  { id: 3, name: 'Jean Dupont', email: 'jean.d@electron.africa', phone: '+33 6 12 34 56 78', role: 'Client', status: 'Actif', company: 'Retail Corp', joined: '05/03/2024', avatar: 'JD' },
  { id: 4, name: 'Paul Obame', email: 'paul.o@electron.africa', phone: '+241 07 234 567 89', role: 'Livreur', status: 'Inactif', company: 'ELECTRON', joined: '12/04/2024', avatar: 'PO' },
  { id: 5, name: 'Alice Sossa', email: 'alice.s@electron.africa', phone: '+229 01 234 567 89', role: 'Manager', status: 'Actif', company: 'ELECTRON', joined: '18/05/2024', avatar: 'AS' },
  { id: 6, name: 'Koffi Mensah', email: 'koffi.m@electron.africa', phone: '+233 20 123 456 7', role: 'Client', status: 'Actif', company: 'Trade Ltd', joined: '22/06/2024', avatar: 'KM' },
]

const roles = ['Admin', 'Manager', 'Client', 'Livreur', 'Comptable', 'RH']
const statuses = ['Actif', 'Inactif', 'En attente']

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('Tous')
  const [statusFilter, setStatusFilter] = useState('Tous')
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState([])

  const filteredUsers = users.filter(user => {
    const matchSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchRole = roleFilter === 'Tous' || user.role === roleFilter
    const matchStatus = statusFilter === 'Tous' || user.status === statusFilter
    return matchSearch && matchRole && matchStatus
  })

  const stats = [
    { label: 'Total Utilisateurs', value: '2,341', icon: Users, change: '+12%' },
    { label: 'Admins', value: '8', icon: Shield, change: '+2' },
    { label: 'Clients', value: '2,156', icon: Building2, change: '+156' },
    { label: 'Actifs ce mois', value: '847', icon: Calendar, change: '+23%' },
  ]

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Header */}
      <div className="px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Utilisateurs</h1>
            <p className="text-slate-400">Gérez les utilisateurs et leurs rôles</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" /> Exporter
            </button>
            <button 
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center"
            >
              <UserPlus className="w-4 h-4 mr-2" /> Ajouter
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-green-400 text-sm">{stat.change}</span>
              </div>
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-4">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un utilisateur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
              >
                <option>Tous les rôles</option>
                {roles.map(role => <option key={role}>{role}</option>)}
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
              >
                <option>Tous les statuts</option>
                {statuses.map(status => <option key={status}>{status}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="px-4 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900/50">
                <tr>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Utilisateur</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Rôle</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Entreprise</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Inscrit</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, i) => (
                  <motion.tr 
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className="border-t border-slate-700 hover:bg-slate-700/30"
                  >
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedUsers.includes(user.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedUsers([...selectedUsers, user.id])
                          } else {
                            setSelectedUsers(selectedUsers.filter(id => id !== user.id))
                          }
                        }}
                        className="rounded" 
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold mr-3">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-slate-400 text-sm">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === 'Admin' ? 'bg-purple-500/20 text-purple-400' :
                        user.role === 'Manager' ? 'bg-blue-500/20 text-blue-400' :
                        user.role === 'Livreur' ? 'bg-green-500/20 text-green-400' :
                        'bg-slate-500/20 text-slate-400'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="text-white px-6 py-4">{user.company}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Actif' ? 'bg-green-500/20 text-green-400' :
                        user.status === 'Inactif' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="text-slate-400 px-6 py-4">{user.joined}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-700 flex items-center justify-between">
            <p className="text-slate-400 text-sm">Affichage de {filteredUsers.length} utilisateurs</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm">Précédent</button>
              <button className="px-3 py-1 bg-cyan-500 text-white rounded-lg text-sm">1</button>
              <button className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm">2</button>
              <button className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm">3</button>
              <button className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm">Suivant</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Nouvel Utilisateur</h2>
            <div className="space-y-4">
              <div>
                <label className="text-slate-400 text-sm">Nom complet</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Téléphone</label>
                <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
              <div>
                <label className="text-slate-400 text-sm">Rôle</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1">
                  {roles.map(role => <option key={role}>{role}</option>)}
                </select>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Entreprise</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 bg-slate-700 text-white rounded-lg"
              >
                Annuler
              </button>
              <button className="flex-1 py-3 bg-cyan-500 text-white rounded-lg font-semibold">
                Créer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}