import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FileText, Search, Plus, Filter, Download, Eye, Edit,
  Trash2, Calendar, User, Tag, Clock, MessageCircle,
  ThumbsUp, Share2, MoreVertical
} from 'lucide-react'

const posts = [
  { id: 1, title: 'Comment optimiser votre e-commerce en 2024', excerpt: 'Découvrez les meilleures stratégies pour augmenter vos ventes en ligne...', author: 'Marie Kouassi', category: 'E-commerce', date: '16/04/2026', views: 1245, likes: 89, status: 'Published', image: '📊' },
  { id: 2, title: 'La logistique du dernier kilomètre en Afrique', excerpt: 'Analyse des défis et solutions pour la livraison de proximité...', author: 'Jean Dupont', category: 'Logistique', date: '14/04/2026', views: 892, likes: 56, status: 'Published', image: '🚚' },
  { id: 3, title: 'Introduction à l\'IA pour les entreprises', excerpt: 'Guide complet pour intégrer l\'intelligence artificielle dans votre...', author: 'Paul Obame', category: 'IA', date: '12/04/2026', views: 2341, likes: 156, status: 'Published', image: '🤖' },
  { id: 4, title: 'Gestion des paiements mobiles en Afrique de l\'Ouest', excerpt: 'Comparatif des solutions de paiement mobile disponibles...', author: 'Alice Sossa', category: 'Paiement', date: '10/04/2026', views: 678, likes: 34, status: 'Draft', image: '📱' },
  { id: 5, title: 'Recrutement 2.0 : L\'IA au service du RH', excerpt: 'Comment l\'intelligence artificielle transforme le recrutement...', author: 'Koffi Mensah', category: 'RH', date: '08/04/2026', views: 456, likes: 23, status: 'Published', image: '👥' },
]

const categories = ['Tous', 'E-commerce', 'Logistique', 'IA', 'Paiement', 'RH', 'Marketing']

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Tous')
  const [activeTab, setActiveTab] = useState('posts')

  const stats = [
    { label: 'Articles publiés', value: '47', icon: FileText },
    { label: 'Vues ce mois', value: '12,456', icon: Eye },
    { label: 'Abonnés newsletter', value: '2,341', icon: User },
    { label: 'Commentaires', value: '234', icon: MessageCircle },
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
            <h1 className="text-3xl font-bold text-white">Blog</h1>
            <p className="text-slate-400">Gestion du contenu et des articles</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" />Exporter
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouvel article
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
              <stat.icon className="w-5 h-5 text-cyan-400 mb-2" />
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {['posts', 'categories', 'comments', 'media'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'posts' && 'Articles'}
              {tab === 'categories' && 'Catégories'}
              {tab === 'comments' && 'Commentaires'}
              {tab === 'media' && 'Médias'}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white"
          >
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {/* Posts Table */}
      {activeTab === 'posts' && (
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Article</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Catégorie</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Auteur</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Vues</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Date</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, i) => (
                    <motion.tr 
                      key={post.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.05 * i }}
                      className="border-t border-slate-700 hover:bg-slate-700/30"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-xl">
                            {post.image}
                          </div>
                          <div>
                            <p className="text-white font-medium line-clamp-1">{post.title}</p>
                            <p className="text-slate-400 text-xs line-clamp-1">{post.excerpt}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                          {post.category}
                        </span>
                      </td>
                      <td className="text-slate-400 px-6 py-4">{post.author}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          post.status === 'Published' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-slate-500/20 text-slate-400'
                        }`}>
                          {post.status === 'Published' ? 'Publié' : 'Brouillon'}
                        </span>
                      </td>
                      <td className="text-slate-400 px-6 py-4">{post.views.toLocaleString()}</td>
                      <td className="text-slate-500 text-sm px-6 py-4">{post.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
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
          </motion.div>
        </div>
      )}

      {/* Categories */}
      {activeTab === 'categories' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.filter(c => c !== 'Tous').map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <Tag className="w-5 h-5 text-cyan-400" />
                  <button className="text-slate-400 hover:text-white">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="text-white font-bold">{cat}</h4>
                <p className="text-slate-400 text-sm">{Math.floor(Math.random() * 20) + 5} articles</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/30 border border-dashed border-slate-700 rounded-xl p-4 flex items-center justify-center cursor-pointer hover:border-cyan-500"
            >
              <div className="text-center">
                <Plus className="w-8 h-8 text-slate-500 mx-auto" />
                <p className="text-slate-500 mt-2">Ajouter</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Comments */}
      {activeTab === 'comments' && (
        <div className="px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4">Commentaires récents</h3>
            <div className="space-y-4">
              {[
                { user: 'Jean Dupont', comment: 'Excellent article! Très instructif.', post: 'Comment optimiser votre e-commerce', time: '2h' },
                { user: 'Marie Kouassi', comment: 'Merci pour ces conseils.', post: 'La logistique du dernier kilomètre', time: '5h' },
                { user: 'Paul Obame', comment: 'Pouvez-vous développer davantage?', post: 'Introduction à l\'IA', time: '1 jour' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">
                    {c.user[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium">{c.user}</p>
                      <span className="text-slate-500 text-sm">{c.time}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{c.comment}</p>
                    <p className="text-cyan-400 text-xs mt-1">sur: {c.post}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Media */}
      {activeTab === 'media' && (
        <div className="px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['📷', '🎬', '🖼️', '📊', '🎨', '📱', '🎥', '🖂️'].map((emoji, i) => (
                <div key={i} className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center text-4xl hover:bg-slate-800 cursor-pointer">
                  {emoji}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}