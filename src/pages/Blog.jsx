import React from 'react'

const Blog = () => {
  const articles = [
    { title: 'Comment vendre sur E-Expresse', date: '25 Avr 2025', cat: 'E-commerce' },
    { title: 'Livraison en Afrique: Guide complet', date: '24 Avr 2025', cat: 'Logistique' },
    { title: 'IA et E-commerce: L\'avenir', date: '23 Avr 2025', cat: 'Technologie' },
  ]

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Blog ELECTRON</h1>
        
        <div className="grid gap-6">
          {articles.map((a, i) => (
            <div key={i} className="card p-6 rounded-xl hover:bg-white/10 cursor-pointer">
              <span className="text-sm text-cyan-400">{a.cat}</span>
              <h2 className="text-xl font-bold text-white mt-2">{a.title}</h2>
              <p className="text-gray-400 text-sm mt-2">{a.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
