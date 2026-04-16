import { motion } from 'framer-motion'
import { Package, Heart, Globe, MapPin, Users, DollarSign, TrendingUp, Shield, Video, Image, Eye } from 'lucide-react'

const stats = [
  { label: 'Dons totaux', value: '45.2M CFA', change: 28 },
  { label: 'Bénéficiaires', value: '156,000+', change: 45 },
  { label: 'Projets actifs', value: '24' },
  { label: 'Pays', value: '8' },
]

const projects = [
  { id: 1, title: 'Programme alimentaire Sahel', location: 'Niger, Mali, Burkina', goal: '50M', raised: '32M', donors: 1247, status: 'En cours' },
  { id: 2, title: 'Éducation pour tous', location: 'Bénin, Togo', goal: '15M', raised: '12M', donors: 567, status: 'En cours' },
  { id: 3, title: 'Santé maternelle', location: 'Sénégal', goal: '25M', raised: '25M', donors: 890, status: 'Terminé' },
  { id: 4, title: 'Eau potable', location: 'Nigeria', goal: '40M', raised: '18M', donors: 432, status: 'En cours' },
]

const impact = [
  { label: 'Nourriture distribuée', value: '2.5M kg' },
  { label: 'Enfants scolarisés', value: '45,000' },
  { label: 'Consultations médicales', value: '89,000' },
  { label: 'Points d\'eau', value: '156' },
]

export default function NGO() {
  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Header */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-5/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <Heart className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Module Humanitaire</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            ONG & <span className="gradient-text">Humanitaire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Gérez vos dons, projets humanitaires et impact. Paiements multidevises, 
            traçabilité blockchain et rapports automatisés.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl text-center"
            >
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                {stat.change && (
                  <span className="ml-2 text-green-400 text-sm">+{stat.change}%</span>
                )}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6">Projets humanitaires</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold">{project.title}</h4>
                  <p className="text-slate-400 text-sm flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Terminé' ? 'bg-green-500/20 text-green-400' : 'bg-cyan-500/20 text-cyan-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">{project.raised} CFA collectés</span>
                  <span className="text-white">Objectif: {project.goal} CFA</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                    style={{ width: `${(parseInt(project.raised) / parseInt(project.goal)) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {project.donors} donateurs
                </span>
                <button className="text-cyan-400 hover:text-cyan-300">Contribuer →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Dashboard */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-cyan-400" />
          Tableau de bord d'impact
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impact.map((item, idx) => (
            <div key={idx} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">{item.value}</div>
              <div className="text-slate-400 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-white mb-6">Médias & Terrain</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Vidéos terrain', 'Photos avant/après', 'Témoignages'].map((type, idx) => (
            <div key={idx} className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-xl text-center cursor-pointer hover:border-cyan-500/30 transition-colors">
              {type === 'Vidéos terrain' ? <Video className="w-10 h-10 text-red-400 mx-auto mb-3" /> :
               type === 'Photos avant/après' ? <Image className="w-10 h-10 text-green-400 mx-auto mb-3" /> :
               <Eye className="w-10 h-10 text-purple-400 mx-auto mb-3" />}
              <p className="text-white font-medium">{type}</p>
              <p className="text-slate-500 text-sm mt-1">{idx === 0 ? '24 vidéos' : idx === 1 ? '156 albums' : '89 témoignages'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Form */}
      <div className="max-w-xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-red-400" />
            Faire un don
          </h3>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            {['1000', '5000', '10000', '25000', '50000', 'Autre'].map((amount, idx) => (
              <button key={idx} className="py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white hover:border-cyan-500 transition-colors">
                {amount} CFA
              </button>
            ))}
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Nom" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            <input type="text" placeholder="Message (optionnel)" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2" />
              Faire un don
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}