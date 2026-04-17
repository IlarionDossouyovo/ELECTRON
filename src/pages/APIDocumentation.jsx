import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Book, Search, Copy, Check, Code, Globe, Shield,
  Clock, Zap, RefreshCw, Rocket, Terminal, Database,
  Lock, Key, Server, Webhook, Smartphone
} from 'lucide-react'

const endpoints = [
  { 
    category: 'Authentication', 
    items: [
      { method: 'POST', path: '/auth/register', description: 'Créer un nouveau compte utilisateur', status: 'active' },
      { method: 'POST', path: '/auth/login', description: 'Connexion utilisateur', status: 'active' },
      { method: 'POST', path: '/auth/logout', description: 'Déconnexion', status: 'active' },
      { method: 'POST', path: '/auth/reset-password', description: 'Réinitialiser mot de passe', status: 'active' },
      { method: 'GET', path: '/auth/me', description: 'Obtenir le profil actuel', status: 'active' },
    ]
  },
  { 
    category: 'Products', 
    items: [
      { method: 'GET', path: '/products', description: 'Lister tous les produits', status: 'active' },
      { method: 'GET', path: '/products/:id', description: 'Obtenir un produit', status: 'active' },
      { method: 'POST', path: '/products', description: 'Créer un produit', status: 'active' },
      { method: 'PUT', path: '/products/:id', description: 'Modifier un produit', status: 'active' },
      { method: 'DELETE', path: '/products/:id', description: 'Supprimer un produit', status: 'active' },
    ]
  },
  { 
    category: 'Orders', 
    items: [
      { method: 'GET', path: '/orders', description: 'Lister les commandes', status: 'active' },
      { method: 'GET', path: '/orders/:id', description: 'Obtenir une commande', status: 'active' },
      { method: 'POST', path: '/orders', description: 'Créer une commande', status: 'active' },
      { method: 'PATCH', path: '/orders/:id/status', description: 'Mettre à jour le statut', status: 'active' },
    ]
  },
  { 
    category: 'Payments', 
    items: [
      { method: 'POST', path: '/payments/initiate', description: 'Initier un paiement', status: 'active' },
      { method: 'GET', path: '/payments/:id', description: 'Statut du paiement', status: 'active' },
      { method: 'POST', path: '/payments/webhook', description: 'Webhook de paiement', status: 'active' },
    ]
  },
  { 
    category: 'Users', 
    items: [
      { method: 'GET', path: '/users', description: 'Lister les utilisateurs', status: 'admin' },
      { method: 'GET', path: '/users/:id', description: 'Profil utilisateur', status: 'active' },
      { method: 'PUT', path: '/users/:id', description: 'Mettre à jour profil', status: 'active' },
    ]
  },
  { 
    category: 'Logistics', 
    items: [
      { method: 'GET', path: '/shipments', description: 'Lister les livraisons', status: 'active' },
      { method: 'POST', path: '/shipments', description: 'Créer une livraison', status: 'active' },
      { method: 'GET', path: '/shipments/:id/tracking', description: 'Suivre un colis', status: 'active' },
      { method: 'PATCH', path: '/shipments/:id/status', description: 'Mettre à jour statut', status: 'active' },
    ]
  },
]

const codeExamples = {
  curl: `curl -X POST https://api.electron.africa/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "..."}'`,
  
  javascript: `const response = await fetch('https://api.electron.africa/v1/products', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();`,
  
  python: `import requests

response = requests.post(
  'https://api.electron.africa/v1/auth/login',
  json={'email': 'user@example.com', 'password': '...'}
)
data = response.json()`,
}

export default function APIDocumentation() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedCode, setSelectedCode] = useState('javascript')
  const [copied, setCopied] = useState('')

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
    setCopied(code)
    setTimeout(() => setCopied(''), 2000)
  }

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
              <Book className="w-8 h-8 mr-2 text-cyan-400" />
              Documentation API
            </h1>
            <p className="text-slate-400">Référence complète de l'API ELECTRON</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Rocket className="w-4 h-4 mr-2" />API_keys
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Terminal className="w-4 h-4 mr-2" />Console
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Endpoints', value: '32', icon: Globe },
            { label: 'Version', value: 'v1', icon: Zap },
            { label: 'Taux limite', value: '100/min', icon: Clock },
            { label: 'Status', value: 'Online', icon: Check },
          ].map((stat, i) => (
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
          {['overview', 'endpoints', 'authentication', 'errors', 'sdks'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'overview' && 'Vue d\'ensemble'}
              {tab === 'endpoints' && 'Endpoints'}
              {tab === 'authentication' && 'Auth'}
              {tab === 'errors' && 'Erreurs'}
              {tab === 'sdks' && 'SDKs'}
            </button>
          ))}
        </div>
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                Introduction
              </h3>
              <div className="text-slate-400 space-y-3">
                <p>L'API ELECTRON permet d'intégrer toutes les fonctionnalités de la plateforme:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gestion des produits et commandes</li>
                  <li>Paiements sécurisés</li>
                  <li>Suivi logistique</li>
                  <li>Gestion des utilisateurs</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                Base URL
              </h3>
              <div className="bg-slate-900 p-4 rounded-lg">
                <code className="text-cyan-400">https://api.electron.africa/v1</code>
              </div>
              <p className="text-slate-400 text-sm mt-4">Todas las peticiones deben usar HTTPS</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                Rate Limiting
              </h3>
              <div className="text-slate-400">
                <p>100 requests/minute par API key</p>
                <p className="mt-2 text-sm">Les limite headers:</p>
                <code className="bg-slate-900 px-2 py-1 rounded text-xs block mt-1">X-RateLimit-Remaining: 95</code>
                <code className="bg-slate-900 px-2 py-1 rounded text-xs block">X-RateLimit-Reset: 164</code>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Key className="w-5 h-5 mr-2 text-cyan-400" />
                Format de réponse
              </h3>
              <pre className="bg-slate-900 p-4 rounded-lg text-xs text-slate-300 overflow-x-auto">
{`{
  "success": true,
  "data": {...},
  "message": "Opération réussie"
}`}
              </pre>
            </motion.div>
          </div>
        </div>
      )}

      {/* Endpoints */}
      {activeTab === 'endpoints' && (
        <div className="px-4 pb-16">
          <div className="mb-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un endpoint..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            {endpoints.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
              >
                <div className="bg-slate-900/50 px-6 py-3 border-b border-slate-700">
                  <h3 className="text-white font-bold">{category.category}</h3>
                </div>
                <div className="divide-y divide-slate-700">
                  {category.items.map((endpoint, i) => (
                    <div key={i} className="p-4 hover:bg-slate-700/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                            endpoint.method === 'PATCH' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-cyan-400 font-mono text-sm">{endpoint.path}</code>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-slate-400 text-sm hidden md:block">{endpoint.description}</p>
                          <span className={`px-2 py-1 rounded text-xs ${
                            endpoint.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                          }`}>
                            {endpoint.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Authentication */}
      {activeTab === 'authentication' && (
        <div className="px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4">Authentification</h3>
            <p className="text-slate-400 mb-4">Utilisez un Bearer token dans le header:</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Code example ({selectedCode})</span>
                  <div className="flex gap-2">
                    {['curl', 'javascript', 'python'].map(lang => (
                      <button
                        key={lang}
                        onClick={() => setSelectedCode(lang)}
                        className={`px-2 py-1 rounded text-xs ${
                          selectedCode === lang ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <pre className="bg-slate-900 p-4 rounded-lg text-xs text-slate-300 overflow-x-auto">
                    {codeExamples[selectedCode]}
                  </pre>
                  <button 
                    onClick={() => handleCopy(codeExamples[selectedCode])}
                    className="absolute top-2 right-2 p-2 bg-slate-700 rounded hover:bg-slate-600"
                  >
                    {copied === codeExamples[selectedCode] ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Errors */}
      {activeTab === 'errors' && (
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
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Code</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Message</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 400, message: 'Bad Request', desc: 'Paramètres invalides' },
                    { code: 401, message: 'Unauthorized', desc: 'Token manquant ou invalide' },
                    { code: 403, message: 'Forbidden', desc: 'Accès refusé' },
                    { code: 404, message: 'Not Found', desc: 'Ressource non trouvée' },
                    { code: 429, message: 'Too Many Requests', desc: 'Limite de taux dépassée' },
                    { code: 500, message: 'Server Error', desc: 'Erreur serveur interne' },
                  ].map((error, i) => (
                    <tr key={i} className="border-t border-slate-700">
                      <td className="text-red-400 font-mono px-6 py-4">{error.code}</td>
                      <td className="text-white px-6 py-4">{error.message}</td>
                      <td className="text-slate-400 px-6 py-4">{error.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* SDKs */}
      {activeTab === 'sdks' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'JavaScript', icon: Code, install: 'npm install @electron/api', status: 'stable' },
              { name: 'Python', icon: Terminal, install: 'pip install electron-api', status: 'stable' },
              { name: 'Go', icon: Server, install: 'go get github.com/electron/api', status: 'beta' },
              { name: 'Ruby', icon: Globe, install: 'gem install electron-api', status: 'beta' },
              { name: 'PHP', icon: Zap, install: 'composer require electron/api', status: 'stable' },
              { name: 'Flutter', icon: Smartphone, install: 'flutter pub add electron', status: 'alpha' },
            ].map((sdk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <sdk.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-white font-bold text-lg">{sdk.name}</h3>
                <code className="text-cyan-400 text-xs block mt-2">{sdk.install}</code>
                <div className="flex items-center justify-between mt-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    sdk.status === 'stable' ? 'bg-green-500/20 text-green-400' :
                    sdk.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {sdk.status}
                  </span>
                  <button className="text-cyan-400 text-sm">Docs →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}