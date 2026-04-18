import { motion } from 'framer-motion'
import { useState } from 'react'
import { QrCode, Download, Copy, Check } from 'lucide-react'

const qrTypes = [
  { id: 'url', name: 'URL/Lien', icon: '🔗' },
  { id: 'text', name: 'Texte', icon: '📝' },
  { id: 'wifi', name: 'WiFi', icon: '📶' },
  { id: 'vcard', name: 'Contact', icon: '👤' },
  { id: 'payment', name: 'Paiement', icon: '💳' },
  { id: 'product', name: 'Produit', icon: '📦' },
]

export default function QRGenerator() {
  const [type, setType] = useState('url')
  const [content, setContent] = useState('')
  const [copied, setCopied] = useState(false)

  const generateQR = () => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(content || 'ELECTRON')}`
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
          <QrCode className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Generateur <span className="text-cyan-400">QR Code</span></h1>
          <p className="text-slate-400 mt-2">Creez des QR codes pour vos produits et liens</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4">Type de QR Code</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {qrTypes.map(t => (
                <button key={t.id} onClick={() => setType(t.id)} className={`p-3 rounded-lg text-center ${type === t.id ? 'bg-cyan-500/20 border-2 border-cyan-500' : 'bg-slate-700 hover:bg-slate-600'}`}>
                  <span className="text-2xl block mb-1">{t.icon}</span>
                  <span className="text-white text-xs">{t.name}</span>
                </button>
              ))}
            </div>

            <h3 className="text-white font-bold mb-4">Contenu</h3>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={4}
              placeholder={type === 'url' ? 'https://electron.africa' : type === 'wifi' ? 'WIFI:S:Electron;T:WPA;P:password;;' : 'Entrez votre contenu...'}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500" />
          </motion.div>

          <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-white font-bold mb-4 w-full">Apercu</h3>
            <div className="bg-white p-4 rounded-xl mb-4">
              <img src={generateQR()} alt="QR Code" className="w-48 h-48" />
            </div>
            <p className="text-slate-400 text-sm mb-4">{content || 'ELECTRON Business Suite'}</p>
            <div className="flex gap-3 w-full">
              <button onClick={handleCopy} className="flex-1 py-3 bg-slate-700 text-white rounded-lg flex items-center justify-center gap-2">
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Copie!' : 'Copier'}
              </button>
              <button className="flex-1 py-3 gradient-bg text-white font-bold rounded-lg flex items-center justify-center gap-2">
                <Download className="w-5 h-5" /> Telecharger
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}