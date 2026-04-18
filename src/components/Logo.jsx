import { motion } from 'framer-motion'

/**
 * ELECTRON Business Suite - Logo Component
 * 
 * Brand Identity:
 * - Letter "E" as main symbol
 * - Gradient: Cyan (#06b6d4) to Purple (#8b5cf6)
 * - Represents: Energy, Technology, Innovation
 */

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const sizes = {
    xs: 'w-6 h-6 text-sm',
    sm: 'w-8 h-8 text-lg',
    md: 'w-10 h-10 text-xl',
    lg: 'w-14 h-14 text-2xl',
    xl: 'w-20 h-20 text-4xl',
  }

  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-3xl',
  }

  // Logo variants
  const variants = {
    default: 'gradient-bg',
    cyan: 'bg-cyan-500',
    purple: 'bg-purple-500',
    dark: 'bg-slate-900',
    white: 'bg-white',
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`${sizes[size]} ${variants[variant]} rounded-xl flex items-center justify-center text-white font-bold ${className}`}
    >
      E
    </motion.div>
  )
}

// Full Logo with Text
export function LogoWithText({ size = 'md', className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={size} />
      <div>
        <h1 className={`font-bold text-white leading-none ${size === 'xl' ? 'text-3xl' : size === 'lg' ? 'text-xl' : 'text-base'}`}>
          ELECTRON
        </h1>
        <p className="text-cyan-400 text-xs font-medium">Business Suite</p>
      </div>
    </div>
  )
}

// Icon Logo (for sidebar/nav)
export function LogoIcon({ className = '' }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="electronGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        
        {/* Main square - rounded */}
        <rect
          x="2"
          y="2"
          width="36"
          height="36"
          rx="8"
          fill="url(#electronGradient)"
        />
        
        {/* Letter E */}
        <path
          d="M12 14h16v3H12V14zM12 20h14v3H12V20zM12 26h16v3H12V26z"
          fill="white"
        />
        {/* E vertical bar */}
        <path
          d="M12 14v15h3v-15h-3z"
          fill="white"
        />
      </svg>
    </div>
  )
}

// Minimal Icon (just the E)
export function LogoMinimal({ className = '' }) {
  return (
    <div className={`w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-xl ${className}`}>
      E
    </div>
  )
}

// Logo usage examples:
/* 
   // Basic usage
   import Logo from './components/Logo'
   
   <Logo size="lg" />
   
   // With text
   <LogoWithText size="lg" />
   
   // As icon in sidebar
   <LogoIcon />
*/

// Color palette reference:
// Primary: #06b6d4 (Cyan-500)
// Secondary: #8b5cf6 (Purple-500)
// Accent: #10b981 (Emerald-500)
// Background: #0f172a (Slate-900)
// Surface: #1e293b (Slate-800)
// Text: #f8fafc (Slate-50)
// Text Muted: #94a3b8 (Slate-400)