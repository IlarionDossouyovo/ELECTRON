import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './components/Hero'

// Pages
import Ecommerce from './pages/Ecommerce'
import Logistics from './pages/Logistics'
import Payments from './pages/Payments'
import AI from './pages/AI'
import Analytics from './pages/Analytics'
import Recruitment from './pages/Recruitment'
import Industry from './pages/Industry'
import NGO from './pages/NGO'
import Services from './pages/Services'
import ElectronPay from './pages/ElectronPay'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Mobile from './pages/Mobile'
import SettingsPage from './pages/SettingsPage'

// Sector Pages
import SectorPage from './pages/SectorPage'
import Users from './pages/Users'
import Cart from './pages/Cart'
import CRM from './pages/CRM'
import AIServices from './pages/AIServices'
import Admin from './pages/Admin'
import Notifications from './pages/Notifications'
import Orders from './pages/Orders'
import Inventory from './pages/Inventory'
import Checkout from './pages/Checkout'
import PaymentGateway from './pages/PaymentGateway'
import Blog from './pages/Blog'
import Webhooks from './pages/Webhooks'
import Reports from './pages/Reports'
import Employees from './pages/Employees'
import Suppliers from './pages/Suppliers'
import i18nConfig from './pages/i18nConfig'
import ThemeCustomization from './pages/ThemeCustomization'
import EmailTemplates from './pages/EmailTemplates'
import InvoiceGenerator from './pages/InvoiceGenerator'
import APIDocumentation from './pages/APIDocumentation'
import Messaging from './pages/Messaging'
import ServicesPresentation from './pages/ServicesPresentation'
import Catalog from './pages/Catalog'
import EDAC from "./pages/EDAC"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/services" element={<Services />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/edac" element={<EDAC />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/flash-sales" element={<FlashSales />} />
          <Route path="/chat" element={<LiveChat />} />
          <Route path="/shipping" element={<ShippingCalculator />} />
          <Route path="/taxes" element={<TaxCalculator />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/schedule" element={<EmployeeSchedule />} />
          <Route path="/tickets" element={<SupportTickets />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/qrcode" element={<QRGenerator />} />
          <Route path="/payment-settings" element={<PaymentSettings />} />
          <Route path="/payments-dashboard" element={<PaymentDashboard />} />
          <Route path="/e-expresse" element={<EExpresse />} />
          <Route path="/e-battisseurs" element={<EBattisseurs />} />
          <Route path="/electron-pay" element={<ElectronPay />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/ai-services" element={<AIServices />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/webhooks" element={<Webhooks />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/i18n" element={<i18nConfig />} />
          <Route path="/theme" element={<ThemeCustomization />} />
          <Route path="/emails" element={<EmailTemplates />} />
          <Route path="/invoices" element={<InvoiceGenerator />} />
          <Route path="/api-docs" element={<APIDocumentation />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/services" element={<ServicesPresentation />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/edac" element={<EDAC />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/flash-sales" element={<FlashSales />} />
          <Route path="/chat" element={<LiveChat />} />
          <Route path="/shipping" element={<ShippingCalculator />} />
          <Route path="/taxes" element={<TaxCalculator />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/schedule" element={<EmployeeSchedule />} />
          <Route path="/tickets" element={<SupportTickets />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/qrcode" element={<QRGenerator />} />
          <Route path="/payment-settings" element={<PaymentSettings />} />
          <Route path="/payments-dashboard" element={<PaymentDashboard />} />
          <Route path="/e-expresse" element={<EExpresse />} />
          <Route path="/e-battisseurs" element={<EBattisseurs />} />
          
          {/* Sector Pages */}
          <Route path="/sector/:sector" element={<SectorPage />} />
          
          {/* Placeholder routes */}
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

// Home Page Component - Using Hero as main content
function HomePage() {
  return <Hero />
}

// Demo Placeholder
function DemoPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center hero-gradient">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Démo interactive</h1>
        <p className="text-slate-400 mb-8">Découvrez ELECTRON Business Suite en action</p>
        <div className="w-64 h-40 bg-slate-800/50 rounded-xl mx-auto border border-slate-700 flex items-center justify-center">
          <span className="text-slate-500">Vidéo de démo</span>
        </div>
      </div>
    </div>
  )
}

// Signup Placeholder
function SignupPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center hero-gradient">
      <div className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Créer votre compte</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
          <input type="password" placeholder="Mot de passe" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl">
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  )
}

// Contact Placeholder
function ContactPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center hero-gradient">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contactez-nous</h1>
        <p className="text-slate-400 mb-8">Une question ? Notre équipe est là pour vous aider</p>
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
          <p className="text-cyan-400">contact@electron.app</p>
          <p className="text-slate-400 mt-2">+229 01 23 45 67 89</p>
        </div>
      </div>
    </div>
  )
}

// Pricing Placeholder
function PricingPage() {
  const plans = [
    { name: 'Starter', price: ' Gratuit', features: ['1 utilisateur', 'Modules basiques', 'Support email'] },
    { name: 'Pro', price: '49€', featured: true, features: ['5 utilisateurs', 'Tous les modules', 'Support prioritaire', 'API access'] },
    { name: 'Enterprise', price: 'Sur mesure', features: ['Utilisateurs illimités', '部署 personnalisée', 'Support 24/7', 'Formation incluse'] },
  ]
  
  return (
    <div className="min-h-screen pt-16 hero-gradient">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-4">Tarifs flexibles</h1>
        <p className="text-slate-400 text-center mb-12">Choisissez le plan qui correspond à vos besoins</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border ${plan.featured ? 'bg-slate-800/50 border-cyan-500' : 'bg-slate-800/30 border-slate-700'}`}>
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold gradient-text mb-6">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-slate-400 text-sm">✓ {feature}</li>
                ))}
              </ul>
              <button className={`w-full mt-8 py-3 rounded-xl font-semibold ${plan.featured ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'bg-slate-700 text-white'}`}>
                Choisir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}