import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const modules = [
    { name: 'E-commerce', path: '/ecommerce' },
    { name: 'Logistique', path: '/logistics' },
    { name: 'Paiements', path: '/payments' },
    { name: 'Intelligence Artificielle', path: '/ai' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Recrutement', path: '/recruitment' },
  ]

  const sectors = [
    { name: 'Retail & Mode', path: '/sector/retail' },
    { name: 'Industrie', path: '/sector/industry' },
    { name: 'Services', path: '/sector/services' },
    { name: 'Éducation', path: '/sector/education' },
    { name: 'ONG', path: '/sector/ong' },
    { name: 'Collectivités', path: '/sector/public' },
  ]

  const company = [
    { name: 'À propos', path: '/about' },
    { name: 'Carrières', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  const legal = [
    { name: 'Confidentialité', path: '/privacy' },
    { name: 'Conditions', path: '/terms' },
    { name: 'Cookies', path: '/cookies' },
  ]

  const paymentMethods = [
    { name: 'Visa', color: 'bg-blue-600' },
    { name: 'Mastercard', color: 'bg-red-600' },
    { name: 'PayPal', color: 'bg-blue-500' },
    { name: 'MTN Mobile', color: 'bg-yellow-500' },
    { name: 'Orange Money', color: 'bg-orange-500' },
    { name: 'Wave', color: 'bg-purple-600' },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ELECTRON</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Plateforme digitale complète intégrant e-commerce, logistique, marketing, IA, recrutement et contenus personnalisés pour tous les secteurs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <span>electronbusiness07@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <span>+229 01 23 45 67 89</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                <span>Cotonou, République du Bénin</span>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div>
            <h4 className="text-white font-semibold mb-4">Modules</h4>
            <ul className="space-y-3">
              {modules.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Secteurs</h4>
            <ul className="space-y-3">
              {sectors.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {company.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-3">
              {legal.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods & Social */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Globe className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-sm">Moyens de paiement acceptés:</span>
            <div className="flex items-center space-x-2 ml-2">
              {paymentMethods.map((method, idx) => (
                <span key={idx} className={`px-2 py-1 ${method.color} text-white text-xs rounded`}>
                  {method.name}
                </span>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            © {currentYear} ELECTRON Business Suite. Tous droits réservés.
          </p>
          <p className="text-slate-500 text-sm mt-2 md:mt-0">
            Fait avec ❤️ au Bénin, Afrique
          </p>
        </div>
      </div>
    </footer>
  )
}