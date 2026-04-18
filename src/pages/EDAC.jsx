import { motion } from 'framer-motion'
import { useState } from 'react'
import { Shield, Users, CheckCircle } from 'lucide-react'

const agents = [
  { id: 1, name: 'Sentinel-X', title: 'Surveillance', status: 'active' },
  { id: 2, name: 'CyberGuard AI', title: 'Cybersecurite', status: 'active' },
  { id: 3, name: 'Predicta Core', title: 'Prediction', status: 'active' },
  { id: 4, name: 'WarMind AI', title: 'Decision', status: 'active' },
  { id: 5, name: 'DroneNet AI', title: 'Drones', status: 'standby' },
  { id: 6, name: 'Matrice', title: 'Defense', status: 'active' },
  { id: 7, name: 'IntelFusion', title: 'Intel', status: 'active' },
  { id: 8, name: 'ComSecure', title: 'Comms', status: 'active' },
  { id: 9, name: 'BioScan AI', title: 'Biometrie', status: 'active' },
  { id: 10, name: 'LogistiX AI', title: 'Logistique', status: 'active' },
  { id: 11, name: 'DarkTrace', title: 'Menaces', status: 'active' },
  { id: 12, name: 'OmniMind', title: 'Central', status: 'active' }
]

export default function EDAC() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0])
  const [systemStatus, setSystemStatus] = useState('active')

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <section className="py-24 px-4">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/20 border border-red-500 rounded-full mb-6">
            <Shield className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-bold text-sm">DEFENSE IA SYSTEM</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">ELECTRON <span className="text-cyan-400">DEFENSE</span> <span className="text-red-500">CORE</span></h1>
          <p className="text-xl text-slate-400">EDAC - 12 Agents IA de Defense</p>
        </motion.div>
        
        <div className="flex justify-center gap-4 mt-8">
          {['active', 'standby', 'training'].map(s => (
            <button key={s} onClick={() => setSystemStatus(s)}
              className={`px-6 py-3 rounded-xl font-bold ${systemStatus === s ? 'bg-green-500/20 text-green-400 border-2 border-green-500' : 'bg-slate-800 text-slate-400'}`}>
              {s.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {[{v:'12',l:'Agents'},{v:'99.9%',l:'Uptime'},{v:'<50ms',l:'Response'},{v:'7/24',l:'Active'}].map((s,i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 text-center rounded-xl">
              <p className="text-3xl font-bold text-cyan-400">{s.v}</p>
              <p className="text-slate-400 text-sm">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <h2 className="text-3xl font-bold text-white text-center mb-8">7 Couches</h2>
        <div className="max-w-xl mx-auto space-y-2">
          {['PERCEPTION', 'ANALYSER', 'PREDICTION', 'DECISION', 'ACTION', 'APPRENTISSAGE', 'SUPERVISION'].map((layer,i) => (
            <motion.div key={i} className="flex items-center gap-4 p-3 bg-slate-800 border border-slate-700 rounded-lg">
              <div className="w-10 h-10 bg-cyan-500/20 rounded flex items-center justify-center"><Users className="w-5 h-5 text-cyan-400"/></div>
              <div><p className="text-xs text-slate-500">COUCHE {i+1}</p><p className="text-cyan-400 font-bold">{layer}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">12 Agents IA</h2>
        <div className="grid grid-cols-6 gap-2 mb-8 max-w-4xl mx-auto">
          {agents.map(a => (
            <button key={a.id} onClick={() => setSelectedAgent(a)}
              className={`p-2 rounded-lg ${selectedAgent.id===a.id?'bg-cyan-500/20 border-2 border-cyan-500':'bg-slate-900 border border-slate-800'}`}>
              <p className="text-white text-xs font-bold">{a.name}</p>
            </button>
          ))}
        </div>
        <motion.div key={selectedAgent.id} initial={{opacity:0}} animate={{opacity:1}}
          className="bg-slate-900 border border-slate-800 p-6 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white">{selectedAgent.name}</h3>
          <p className="text-cyan-400">{selectedAgent.title}</p>
          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">{selectedAgent.status}</span>
          </div>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Cas Usage</h2>
        <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[{t:'Ville',s:'250+'},{t:'Banque',s:'99.7%'},{t:'Defense',s:'12 AI'},{t:'Industrie',s:'24/7'}].map((c,i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <h3 className="text-white font-bold">{c.t}</h3>
              <span className="text-cyan-400 text-sm">{c.s}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Integrations</h2>
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          {['Firebase', 'OpenAI', 'n8n', 'React', 'IoT', 'Blockchain', 'API', 'ZeroTrust'].map((t,i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl text-center border border-slate-800"><p className="text-white">{t}</p></div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Ethique</h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {['Pas de mort autonome', 'Vie privee', 'Supervision humaine', 'Journalisation'].map((r,i) => (
            <div key={i} className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-400" /><span className="text-green-300">{r}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900 to-purple-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Pret pour EDAC?</h2>
        <button className="px-8 py-4 bg-red-500 text-white font-bold rounded-xl">Demonstration</button>
      </section>
    </div>
  )
}