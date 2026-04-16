import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Clock, DollarSign, ArrowRight, Send, CheckCircle } from 'lucide-react'

const jobs = [
  { 
    title: 'Senior Frontend Developer', 
    type: 'Temps plein', 
    location: 'Remote / Cotonou', 
    salary: '800K - 1.2M XAF',
    description: 'Build beautiful UIs with React and Framer Motion',
    requirements: ['3+ ans React', 'TypeScript', 'TailwindCSS', 'Animation']
  },
  { 
    title: 'Backend Engineer', 
    type: 'Temps plein', 
    location: 'Remote / Cotonou', 
    salary: '900K - 1.3M XAF',
    description: 'Scale our APIs and payment systems',
    requirements: ['4+ ans Node.js', 'PostgreSQL', 'Redis', 'Docker']
  },
  { 
    title: 'AI/ML Engineer', 
    type: 'Temps plein', 
    location: 'Remote', 
    salary: '1M - 1.5M XAF',
    description: 'Build smart recommendation and fraud detection',
    requirements: ['Python', 'TensorFlow', 'NLP', 'Computer Vision']
  },
  { 
    title: 'Customer Success Manager', 
    type: 'Temps plein', 
    location: 'Cotonou', 
    salary: '400K - 600K XAF',
    description: 'Help our customers succeed with Electron',
    requirements: ['French + English', 'SaaS exp', 'Communication', 'CRM']
  },
  { 
    title: 'Sales Representative', 
    type: 'Temps plein', 
    location: 'Multiple pays', 
    salary: '350K + Commission',
    description: 'Drive new business in West Africa',
    requirements: ['Sales exp', 'B2B', 'French', 'Travel']
  },
  { 
    title: 'Data Analyst', 
    type: 'Temps plein', 
    location: 'Remote', 
    salary: '500K - 700K XAF',
    description: 'Analyze user behavior and payment patterns',
    requirements: ['SQL', 'Python', 'Tableau', 'Statistics']
  },
]

const benefits = [
  '💰 Salaire compétitif',
  '🏥 Couverture santé',
  '🏖️ Congés flexible',
  '📱 Forfait mobile',
  '💻 Équipement fourni',
  '🎓 Formation continue',
  '🌍 Impact mondial',
  '🎉 Équipe internationale',
]

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [applied, setApplied] = useState(false)

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Hero */}
      <div className="py-20 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Rejoignez <span className="gradient-text">ELECTRON</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building the future of payments in Africa. Be part of something big.
          </p>
        </motion.div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {benefits.map((b, i) => (
            <span key={i} className="px-4 py-2 bg-slate-800/30 border border-slate-700 rounded-full text-white text-sm">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Jobs */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-8">Postes ouverts ({jobs.length})</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => setSelectedJob(job)}
              className={`bg-slate-800/30 border rounded-xl p-6 cursor-pointer transition-all ${
                selectedJob?.title === job.title 
                  ? 'border-cyan-500' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{job.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {job.type}</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" /> {job.salary}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((r, j) => (
                  <span key={j} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            {applied ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Candidature envoyée !</h3>
                <p className="text-slate-400 mb-4">Nous vous contacterons sous 48h.</p>
                <button onClick={() => { setApplied(false); setSelectedJob(null); }} className="text-cyan-400">
                  Voir d'autres postes
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Postuler: {selectedJob.title}</h3>
                  <button onClick={() => setSelectedJob(null)} className="text-slate-400 hover:text-white">✕</button>
                </div>
                
                <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-4">
                  <input type="text" required placeholder="Nom complet" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
                  <input type="email" required placeholder="Email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
                  <input type="tel" placeholder="Téléphone" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
                  <textarea required rows={4} placeholder="Pourquoi vous ?" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white resize-none" />
                  <input type="url" placeholder="LinkedIn / Portfolio" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white" />
                  
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma candidature
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  )
}