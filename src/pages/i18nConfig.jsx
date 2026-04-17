import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Globe, Search, Plus, Settings, Check, Copy, Eye,
  Languages, MapPin, DollarSign, Clock, Calendar
} from 'lucide-react'

const languages = [
  { code: 'fr', name: 'Français', native: 'Français', status: 'active', translations: '100%', flag: '🇫🇷' },
  { code: 'en', name: 'English', native: 'English', status: 'active', translations: '98%', flag: '🇬🇧' },
  { code: 'pt', name: 'Português', native: 'Português', status: 'active', translations: '85%', flag: '🇵🇹' },
  { code: 'es', name: 'Español', native: 'Español', status: 'inactive', translations: '45%', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', native: 'Deutsch', status: 'inactive', translations: '30%', flag: '🇩🇪' },
  { code: 'zh', name: '中文', native: 'Chinese', status: 'inactive', translations: '20%', flag: '🇨🇳' },
]

const regions = [
  { id: 'bj', country: 'Bénin', currency: 'XOF', timezone: 'Africa/Porto-Novo', locale: 'fr-BJ', flag: '🇧🇯' },
  { id: 'ci', country: 'Côte d\'Ivoire', currency: 'XOF', timezone: 'Africa/Abidjan', locale: 'fr-CI', flag: '🇨🇮' },
  { id: 'sn', country: 'Sénégal', currency: 'XOF', timezone: 'Africa/Dakar', locale: 'fr-SN', flag: '🇸🇳' },
  { id: 'tg', country: 'Togo', currency: 'XOF', timezone: 'Africa/Lomé', locale: 'fr-TG', flag: '🇹🇬' },
  { id: 'ng', country: 'Nigéria', currency: 'NGN', timezone: 'Africa/Lagos', locale: 'en-NG', flag: '🇳🇬' },
  { id: 'fr', country: 'France', currency: 'EUR', timezone: 'Europe/Paris', locale: 'fr-FR', flag: '🇫🇷' },
]

const translations = [
  { key: 'welcome_message', fr: 'Bienvenue sur ELECTRON', en: 'Welcome to ELECTRON', pt: 'Bem-vindo ao ELECTRON' },
  { key: 'login', fr: 'Connexion', en: 'Login', pt: 'Entrar' },
  { key: 'register', fr: 'S\'inscrire', en: 'Register', pt: 'Registrar' },
  { key: 'dashboard', fr: 'Tableau de bord', en: 'Dashboard', pt: 'Painel' },
  { key: 'settings', fr: 'Paramètres', en: 'Settings', pt: 'Configurações' },
  { key: 'logout', fr: 'Déconnexion', en: 'Logout', pt: 'Sair' },
]

export default function i18nConfig() {
  const [activeTab, setActiveTab] = useState('languages')
  const [searchTerm, setSearchTerm] = useState('')

  const stats = [
    { label: 'Langues actives', value: '3', icon: Globe },
    { label: 'Traductions', value: '12,456', icon: Languages },
    { label: 'Régions', value: '6', icon: MapPin },
    { label: 'Devises', value: '3', icon: DollarSign },
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
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Globe className="w-8 h-8 mr-2 text-cyan-400" />
              Internationalisation
            </h1>
            <p className="text-slate-400">Configuration des langues et régions</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" />Exporter
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouvelle langue
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
          {['languages', 'regions', 'translations'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'languages' && 'Langues'}
              {tab === 'regions' && 'Régions'}
              {tab === 'translations' && 'Traductions'}
            </button>
          ))}
        </div>
      </div>

      {/* Languages */}
      {activeTab === 'languages' && (
        <div className="px-4 pb-16">
          <div className="mb-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher une langue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{lang.flag}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    lang.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'
                  }`}>
                    {lang.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg">{lang.name}</h3>
                <p className="text-slate-400 text-sm">{lang.native}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                  <span className="text-slate-500 text-sm">{lang.translations} traduit</span>
                  <button className="text-cyan-400 text-sm hover:underline">Configurer</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Regions */}
      {activeTab === 'regions' && (
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Pays</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Devise</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Fuseau horaire</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Locale</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {regions.map((region, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{region.flag}</span>
                          <span className="text-white font-medium">{region.country}</span>
                        </div>
                      </td>
                      <td className="text-cyan-400 px-6 py-4">{region.currency}</td>
                      <td className="text-slate-400 px-6 py-4">{region.timezone}</td>
                      <td className="text-slate-500 font-mono text-sm px-6 py-4">{region.locale}</td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                          <Settings className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Translations */}
      {activeTab === 'translations' && (
        <div className="px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="text-white font-bold">Clés de traduction</h3>
              <button className="text-cyan-400 text-sm">Ajouter une clé</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50">
                  <tr>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Clé</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">🇫🇷 Français</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">🇬🇧 English</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">🇵🇹 Português</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {translations.map((t, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="text-cyan-400 font-mono text-sm px-6 py-4">{t.key}</td>
                      <td className="text-white px-6 py-4">{t.fr}</td>
                      <td className="text-white px-6 py-4">{t.en}</td>
                      <td className="text-white px-6 py-4">{t.pt}</td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}