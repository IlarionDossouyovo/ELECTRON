import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Palette, Upload, Save, Eye, Check, X, Image,
  Type, Layout, Smartphone, Monitor, Tablet,
  Moon, Sun, RotateCcw, Download, Share2
} from 'lucide-react'

const colorPresets = [
  { name: 'ELECTRON Default', primary: '#06b6d4', secondary: '#8b5cf6', accent: '#10b981', bg: '#0f172a' },
  { name: 'Ocean Blue', primary: '#0ea5e9', secondary: '#06b6d4', accent: '#14b8a6', bg: '#0c1929' },
  { name: 'Forest Green', primary: '#22c55e', secondary: '#16a34a', accent: '#84cc16', bg: '#0f1f12' },
  { name: 'Sunset Orange', primary: '#f97316', secondary: '#ef4444', accent: '#f59e0b', bg: '#1f1009' },
  { name: 'Royal Purple', primary: '#a855f7', secondary: '#7c3aed', accent: '#ec4899', bg: '#1a0a1f' },
  { name: 'Dark Steel', primary: '#64748b', secondary: '#475569', accent: '#94a3b8', bg: '#0f1419' },
]

const fonts = [
  { name: 'Inter', category: 'Sans-serif', preview: 'The quick brown fox' },
  { name: 'Roboto', category: 'Sans-serif', preview: 'The quick brown fox' },
  { name: 'Open Sans', category: 'Sans-serif', preview: 'The quick brown fox' },
  { name: 'Montserrat', category: 'Sans-serif', preview: 'The quick brown fox' },
  { name: 'Playfair Display', category: 'Serif', preview: 'The quick brown fox' },
]

export default function ThemeCustomization() {
  const [activeTab, setActiveTab] = useState('colors')
  const [colors, setColors] = useState({
    primary: '#06b6d4',
    secondary: '#8b5cf6',
    accent: '#10b981',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  })
  const [logo, setLogo] = useState(null)
  const [selectedPreset, setSelectedPreset] = useState(0)

  const handleColorChange = (key, value) => {
    setColors({ ...colors, [key]: value })
    setSelectedPreset(-1)
  }

  const applyPreset = (index) => {
    const preset = colorPresets[index]
    setColors({
      primary: preset.primary,
      secondary: preset.secondary,
      accent: preset.accent,
      background: preset.bg,
      surface: '#1e293b',
      text: '#f8fafc',
      textMuted: '#94a3b8',
    })
    setSelectedPreset(index)
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
              <Palette className="w-8 h-8 mr-2 text-cyan-400" />
              Personnalisation du Thème
            </h1>
            <p className="text-slate-400">Configurez l'apparence de votre plateforme</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Eye className="w-4 h-4 mr-2" />Aperçu
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Save className="w-4 h-4 mr-2" />Enregistrer
            </button>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {['colors', 'logo', 'fonts', 'layout', 'preview'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'colors' && 'Couleurs'}
              {tab === 'logo' && 'Logo'}
              {tab === 'fonts' && 'Polices'}
              {tab === 'layout' && 'Mise en page'}
              {tab === 'preview' && 'Aperçu'}
            </button>
          ))}
        </div>
      </div>

      {/* Colors Tab */}
      {activeTab === 'colors' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Presets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Préréglages de couleurs</h3>
              <div className="grid grid-cols-2 gap-3">
                {colorPresets.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => applyPreset(i)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedPreset === i 
                        ? 'border-cyan-400 bg-slate-700' 
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 rounded-full" style={{ background: preset.primary }} />
                      <div className="w-4 h-4 rounded-full" style={{ background: preset.secondary }} />
                      <div className="w-4 h-4 rounded-full" style={{ background: preset.accent }} />
                    </div>
                    <span className="text-white text-sm">{preset.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Custom Colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Couleurs personnalisées</h3>
              <div className="space-y-4">
                {[
                  { key: 'primary', label: 'Couleur primaire', icon: '🎨' },
                  { key: 'secondary', label: 'Couleur secondaire', icon: '🎭' },
                  { key: 'accent', label: 'Couleur d\'accent', icon: '✨' },
                  { key: 'background', label: 'Arrière-plan', icon: '🌑' },
                  { key: 'surface', label: 'Surface', icon: '⬜' },
                  { key: 'text', label: 'Texte principal', icon: '📝' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <label className="text-slate-400 flex items-center">
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={colors[item.key]}
                        onChange={(e) => handleColorChange(item.key, e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={colors[item.key]}
                        onChange={(e) => handleColorChange(item.key, e.target.value)}
                        className="w-24 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-sm font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Logo Tab */}
      {activeTab === 'logo' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Logo principal</h3>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center">
                {logo ? (
                  <div>
                    <img src={logo} alt="Logo" className="h-24 mx-auto mb-4" />
                    <button className="text-red-400 text-sm">Supprimer</button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                    <p className="text-slate-400 mb-2">Glissez une image ou cliquez pour parcourir</p>
                    <p className="text-slate-500 text-sm">PNG, JPG - Max 2MB</p>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Favicon</h3>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center">
                <Image className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-400">Icône pour les onglets (32x32)</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Fonts Tab */}
      {activeTab === 'fonts' && (
        <div className="px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4">Polices du site</h3>
            <div className="space-y-3">
              {fonts.map((font, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{font.name}</p>
                    <p className="text-slate-400 text-sm">{font.category}</p>
                  </div>
                  <p className="text-slate-300 text-lg" style={{ fontFamily: font.name }}>{font.preview}</p>
                  <button className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm">
                    Sélectionner
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Layout Tab */}
      {activeTab === 'layout' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Monitor, name: 'Desktop', desc: 'Mode ordinateur' },
              { icon: Tablet, name: 'Tablette', desc: 'Mode tablette' },
              { icon: Smartphone, name: 'Mobile', desc: 'Mode mobile' },
            ].map((device, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
              >
                <device.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-bold">{device.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{device.desc}</p>
                <button className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm">
                  Configurer
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Preview Tab */}
      {activeTab === 'preview' && (
        <div className="px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-6">Aperçu en direct</h3>
            <div 
              className="rounded-xl p-8 border-2 border-slate-700"
              style={{ background: colors.background }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ background: colors.primary }}
                >
                  E
                </div>
                <h2 className="text-2xl font-bold" style={{ color: colors.text }}>ELECTRON Business Suite</h2>
              </div>
              <div className="space-y-4 mb-8">
                <button 
                  className="px-6 py-3 rounded-lg font-semibold text-white"
                  style={{ background: colors.primary }}
                >
                  Bouton primaire
                </button>
                <button 
                  className="px-6 py-3 rounded-lg font-semibold"
                  style={{ background: colors.secondary, color: colors.text }}
                >
                  Bouton secondaire
                </button>
              </div>
              <div className="flex gap-3">
                {['Success', 'Warning', 'Error'].map((badge, i) => (
                  <span 
                    key={badge}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      background: [colors.accent, '#f59e0b', '#ef4444'][i] + '20',
                      color: [colors.accent, '#f59e0b', '#ef4444'][i]
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}