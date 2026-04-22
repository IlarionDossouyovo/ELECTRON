import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Settings as SettingsIcon, User, Bell, Shield, Key, Globe, Palette,
  Database, Mail, Smartphone, Eye, Save, Trash2,
  Check, X
} from 'lucide-react'

const tabs = [
  { id: 'profile', name: 'Profil', icon: User },
  { id: 'security', name: 'Sécurité', icon: Shield },
  { id: 'notifications', name: 'Notifications', icon: Bell },
  { id: 'billing', name: 'Facturation', icon: Database },
  { id: 'api', name: 'API Keys', icon: Key },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [saved, setSaved] = useState(false)
  
  const [profile, setProfile] = useState({
    name: 'DOSSOU-YOVO Ilarion',
    email: 'electronbusiness@gmail.com',
    phone: '+229 01 977 003 47',
    company: 'ELECTRON Business Suite',
  })

  const [security, setSecurity] = useState({
    mfa: true,
    loginAlerts: true,
  })

  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      <div className="px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <SettingsIcon className="w-12 h-12 text-cyan-400 mb-4" />
          <h1 className="text-3xl font-bold text-white">Paramètres</h1>
          <p className="text-slate-400">Gérez votre compte et préférences</p>
        </motion.div>
      </div>

      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                      activeTab === tab.id 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 mr-3" />
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              {activeTab === 'profile' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-6">Profil</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-sm">Nom complet</label>
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm">Email</label>
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'security' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-6">Sécurité</h2>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Authentification multifacteur</p>
                        <p className="text-slate-400 text-sm">Exiger un code à chaque connexion</p>
                      </div>
                      <button 
                        onClick={() => setSecurity({...security, mfa: !security.mfa})}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          security.mfa ? 'bg-cyan-500' : 'bg-slate-600'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                          security.mfa ? 'translate-x-6' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </label>
                  </div>
                </motion.div>
              )}

              {activeTab === 'notifications' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-6">Notifications</h2>
                  <div className="space-y-4">
                    {[
                      { id: 'email', name: 'Email', desc: 'Notifications par email' },
                      { id: 'sms', name: 'SMS', desc: 'Notifications par SMS' },
                      { id: 'push', name: 'Push', desc: 'Notifications push' },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{item.name}</p>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                        <button 
                          onClick={() => setNotifications({...notifications, [item.id]: !notifications[item.id]})}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            notifications[item.id] ? 'bg-cyan-500' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                            notifications[item.id] ? 'translate-x-6' : 'translate-x-0.5'
                          }`} />
                        </button>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'billing' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-6">Plan actuel</h2>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-6">
                    <p className="text-cyan-400 text-sm">Plan Pro</p>
                    <p className="text-3xl font-bold text-white">45 000 XAF<span className="text-lg text-slate-400">/mois</span></p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center text-slate-400 text-sm"><Check className="w-4 h-4 text-green-400 mr-2" /> API illimitées</li>
                      <li className="flex items-center text-slate-400 text-sm"><Check className="w-4 h-4 text-green-400 mr-2" /> Paiements multiples</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'api' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-6">Clés API</h2>
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Clé de production</p>
                      <p className="text-slate-400 text-sm font-mono">ep_live_••••••••••••</p>
                    </div>
                    <button className="text-cyan-400 text-sm">Copier</button>
                  </div>
                </motion.div>
              )}

              <div className="mt-6 flex justify-end">
                <button 
                  onClick={handleSave}
                  className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 flex items-center"
                >
                  {saved ? <><Check className="w-5 h-5 mr-2" /> Sauvegardé!</> : <><Save className="w-5 h-5 mr-2" /> Enregistrer</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}