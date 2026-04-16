import { motion } from 'framer-motion'
import { Users, Globe, Shield, Zap, Award,TrendingUp, MapPin, Calendar, Mail, Phone, Clock } from 'lucide-react'

const stats = [
  { value: '2019', label: 'Année de création' },
  { value: '30+', label: 'Pays couverts' },
  { value: '500+', label: 'Entreprises' },
  { value: '2M+', label: 'Transactions/an' },
]

const team = [
  { name: 'DOSSOU-YOVO ATTIOGBE Y.A. Ilarion', role: 'CEO & Fondateur', avatar: '👨‍💼', bio: 'Expert en systèmes d\'information et solutions numériques' },
]

const values = [
  { icon: Shield, title: 'Sécurité', desc: 'Protection des données et paiements avec standards internationaux' },
  { icon: Globe, title: 'Inclusion', desc: 'Accessibilité pour tous, partout en Afrique' },
  { icon: Zap, title: 'Innovation', desc: 'Technologies de pointe continues' },
  { icon: TrendingUp, title: 'Croissance', desc: 'Votre succès = notre priorité' },
]

const partners = [
  { name: 'MTN', logo: '📱' },
  { name: 'Orange', logo: '🟠' },
  { name: 'Wave', logo: '🌊' },
  { name: 'Stripe', logo: '💳' },
  { name: 'Visa', logo: '💳' },
  { name: 'Mastercard', logo: '💳' },
]

export default function About() {
  return (
    <div className="min-h-screen pt-16 hero-gradient">
      {/* Hero */}
      <div className="py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            À propos d'<span className="gradient-text">ELECTRON</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            La plateforme qui revolutionne les paiements et le commerce en Afrique
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Notre Mission</h2>
          <p className="text-slate-300 leading-relaxed">
            ELECTRON démocratise l'accès aux paiement numériques et aux outils de commerce pour 
            millions d'entreprises en Afrique et dans le monde. Nous croyons que chaque entrepreneur 
            mérite accès aux mêmes technologies que les grandes entreprises - sans complexité, 
            sans frais excessifs.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Fondée en 2019 au Bénin, ELECTRON est devenue la plateforme de référence 
            pour les paiements mobiles, le e-commerce et la logistique sur le continent.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center"
            >
              <v.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Notre Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center"
            >
              <div className="text-5xl mb-4">{m.avatar}</div>
              <h3 className="text-white font-bold">{m.name}</h3>
              <p className="text-cyan-400 text-sm mb-2">{m.role}</p>
              <p className="text-slate-500 text-xs">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Nos Partenaires</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((p, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3 flex items-center">
              <span className="text-2xl mr-2">{p.logo}</span>
              <span className="text-white font-medium">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Contactez-nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-white font-medium">Cotonou, Benin</p>
            <p className="text-slate-500 text-sm"> Rue de la Banque</p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-white font-medium">contact@electron.africa</p>
            <p className="text-slate-500 text-sm">Support</p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-white font-medium">+229 00 00 00 00</p>
            <p className="text-slate-500 text-sm">Lun-Ven 8h-18h</p>
          </div>
        </div>
      </div>
    </div>
  )
}