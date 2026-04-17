import { motion } from 'framer-motion'
import { 
  Smartphone, Download, QrCode, Bell, Wifi, Camera, 
  Fingerprint, Scan, Package
} from 'lucide-react'

const features = [
  { icon: Download, title: 'Installable PWA', desc: 'Ajoutez à votre écran d\'accueil' },
  { icon: QrCode, title: 'QR Code Payments', desc: 'Scannez pour payer' },
  { icon: Fingerprint, title: 'Biometrics', desc: 'Face ID, Touch ID' },
  { icon: Bell, title: 'Push Notifications', desc: 'Alertes en temps réel' },
  { icon: Wifi, title: 'Offline Mode', desc: 'Fonctionne sans internet' },
  { icon: Camera, title: 'Scan OCR', desc: 'Scannez documents' },
  { icon: MessageCircle, title: 'In-App Chat', desc: 'Support 24/7' },
  { icon: MapPin, title: 'GPS Tracking', desc: 'Suivi livraison' },
]

const downloads = [
  { os: 'iOS', icon: '🍎', available: true, url: '#' },
  { os: 'Android', icon: '🤖', available: true, url: '#' },
  { os: 'APK Direct', icon: '📦', available: true, url: '#' },
]

export default function Mobile() {
  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Hero */}
      <div className="px-4 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Smartphone className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Application <span className="gradient-text">Mobile</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            ELECTRON dans votre poche - PWA installable sur iOS et Android
          </p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Fonctionnalités Mobile</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-cyan-500"
              >
                <f.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <p className="text-white font-bold text-sm">{f.title}</p>
                <p className="text-slate-400 text-xs mt-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Télécharger l'app</h2>
            <p className="text-slate-400 mb-6">Choisissez votre plateforme</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {downloads.map((d, i) => (
                <a
                  key={i}
                  href={d.url}
                  className={`px-8 py-4 rounded-xl flex items-center ${
                    d.available 
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600' 
                      : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span className="text-2xl mr-3">{d.icon}</span>
                  <span className="font-bold">{d.os}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">Ou scannez le QR code</p>
              <div className="w-32 h-32 bg-white rounded-lg mx-auto mt-4 flex items-center justify-center">
                <QrCode className="w-24 h-24 text-slate-900" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Aperçus</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[
              { name: 'Accueil', color: 'from-cyan-500 to-purple-600' },
              { name: 'Boutique', color: 'from-purple-500 to-pink-500' },
              { name: 'Panier', color: 'from-blue-500 to-cyan-500' },
              { name: 'Suivi', color: 'from-green-500 to-cyan-500' },
            ].map((screen, i) => (
              <div key={i} className="flex-shrink-0 w-48">
                <div className={`h-80 bg-gradient-to-br ${screen.color} rounded-2xl p-4`}>
                  <div className="h-full bg-black/20 rounded-xl flex items-center justify-center">
                    <Package className="w-12 h-12 text-white" />
                  </div>
                </div>
                <p className="text-white text-center mt-2">{screen.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}