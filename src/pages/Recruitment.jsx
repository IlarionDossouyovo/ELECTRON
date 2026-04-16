import { motion } from 'framer-motion'
import { Users, Briefcase, MapPin, Clock, Search, Send, FileText, Star, CheckCircle, Building2 } from 'lucide-react'
import { useState } from 'react'

const jobOffers = [
  { id: 1, title: 'Développeur Frontend React', location: 'Cotonou, Benin', type: 'CDI', salary: '400K-600K CFA', posted: 'Il y a 2 jours' },
  { id: 2, title: 'Chef de Projet Digital', location: 'Lomé, Togo', type: 'CDI', salary: '500K-700K CFA', posted: 'Il y a 3 jours' },
  { id: 3, title: 'Spécialiste Marketing IA', location: 'Abidjan, CI', type: 'CDD', salary: '350K-500K CFA', posted: 'Il y a 5 jours' },
  { id: 4, title: 'Responsable Logistique', location: 'Dakar, Senegal', type: 'CDI', salary: '450K-650K CFA', posted: 'Il y a 1 semaine' },
  { id: 5, title: 'Data Analyst', location: 'Paris, France', type: 'CDI', salary: '3K-5K EUR', posted: 'Il y a 2 semaines' },
]

const stats = [
  { label: 'Postes ouverts', value: '156' },
  { label: 'Candidatures', value: '2,847' },
  { label: 'Embauches', value: '89' },
  { label: 'Temps moyen', value: '18 jours' },
]

const candidates = [
  { name: 'Marie K.', score: 92, skills: ['React', 'Node.js', 'IA'], status: ' shortlisted' },
  { name: 'Jean P.', score: 88, skills: ['Marketing', 'Data'], status: 'En évaluation' },
  { name: 'Paul S.', score: 85, skills: ['Logistique', 'Supply Chain'], status: 'En entretien' },
]

export default function Recruitment() {
  const [searchTerm, setSearchTerm] = useState('')

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
            <Users className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Module RH</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Recrutement <span className="gradient-text">Intelligent</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Trouvez les meilleurs talents avec l'IA. Tri automatique des CV, matching intelligent, 
            et gestion complète du recrutement.
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
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Job Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-2 text-cyan-400" />
            Offres d'emploi
          </h3>
          
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un poste..."
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="space-y-3">
            {jobOffers.map((job) => (
              <div key={job.id} className="p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-white font-medium">{job.title}</h4>
                    <p className="text-slate-400 text-sm flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </p>
                  </div>
                  <span className="text-xs text-cyan-400 px-2 py-1 bg-cyan-500/20 rounded-full">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-white text-sm font-medium">{job.salary}</span>
                  <span className="text-slate-500 text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {job.posted}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Candidate Matching */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2 text-purple-400" />
            Matching IA
          </h3>
          
          <div className="space-y-4">
            {candidates.map((candidate, idx) => (
              <div key={idx} className="p-4 bg-slate-700/30 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-semibold mr-3">
                      {candidate.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{candidate.name}</h4>
                      <p className="text-slate-400 text-sm">{candidate.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{candidate.score}</div>
                    <p className="text-xs text-slate-500">score IA</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 bg-purple-500/20 border border-purple-500/30 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/30 transition-colors flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            Voir tous les candidats
          </button>
        </motion.div>
      </div>

      {/* Application Form */}
      <div className="max-w-xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Building2 className="w-6 h-6 mr-2 text-cyan-400" />
            Postuler
          </h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nom" className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
              <input type="text" placeholder="Prénom" className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
            <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center cursor-pointer hover:border-cyan-500 transition-colors">
              <FileText className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Glissez votre CV ici</p>
              <p className="text-slate-500 text-xs">PDF, DOC，最大 5MB</p>
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center">
              <Send className="w-5 h-5 mr-2" />
              Envoyer ma candidature
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}