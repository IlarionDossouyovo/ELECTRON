import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Search, Filter, Grid, List, Heart, ShoppingCart, 
  Star, Eye, Plus, Minus, Tag, Zap, Truck, Shield,
  CheckCircle, ArrowRight, ChevronDown
} from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'Smartphones',
    price: 850000,
    originalPrice: 950000,
    image: '📱',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    isNew: true,
    isSale: true,
    description: 'iPhone 15 Pro avec Dynamic Island,钛金属设计 etAppareil photo 48MP.',
    features: ['256GB', '5G', 'Face ID', 'A17 Pro']
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    category: 'Ordinateurs',
    price: 680000,
    originalPrice: null,
    image: '💻',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: false,
    description: 'Portable ultrafin avecpuissance M3 etautonomie toute la journée.',
    features: ['M3', '8GB RAM', '256GB SSD', '13.6"']
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    name: 'AirPods Pro 2',
    price: 185000,
    originalPrice: 220000,
    image: '🎧',
    rating: 4.7,
    reviews: 412,
    inStock: true,
    isNew: false,
    isSale: true,
    description: 'Réduction de bruit active etmode Transparence adaptative.',
    features: ['ANC', 'USB-C', '6h autonomy', 'H2 chip']
  },
  {
    id: 4,
    name: 'Apple Watch Ultra 2',
    category: 'Wearables',
    price: 420000,
    originalPrice: null,
    image: '⌚',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    isNew: true,
    isSale: false,
    description: 'La montre la plus robuste et multifonctionnellejamais créée.',
    features: ['49mm', 'GPS+Cellular', '36h battery', 'S9 chip']
  },
  {
    id: 5,
    name: 'iPad Pro 12.9"',
    category: 'Tablettes',
    price: 720000,
    originalPrice: 800000,
    image: '📱',
    rating: 4.8,
    reviews: 178,
    inStock: true,
    isNew: false,
    isSale: true,
    description: 'iPad extreme withM4 chip et Liquid Retina XDR display.',
    features: ['M4', '256GB', '12.9"', 'Face ID']
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24',
    category: 'Smartphones',
    price: 580000,
    originalPrice: null,
    image: '📱',
    rating: 4.6,
    reviews: 321,
    inStock: true,
    isNew: true,
    isSale: false,
    description: 'Galaxy AI intégré avecAppareil photo 200MP.',
    features: ['AI Circle', '200MP', 'Galaxy AI', '5G']
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5',
    price: 245000,
    originalPrice: 280000,
    image: '🎧',
    rating: 4.8,
    reviews: 567,
    inStock: true,
    isNew: false,
    isSale: true,
    description: 'Meilleur réduction de bruit de l-industrie avec30h battery.',
    features: ['ANC', '30h battery', 'Multipoint', 'LDAC']
  },
  {
    id: 8,
    name: 'Canon EOS R50',
    category: 'Photo',
    price: 450000,
    originalPrice: null,
    image: '📷',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    isNew: true,
    isSale: false,
    description: 'Appareil photo mirrorless avecRF-S 18-45mm kit.',
    features: ['24.2MP', '4K30p', 'RF mount', 'Compact']
  },
]

const categories = [
  { name: 'Tous', count: 42 },
  { name: 'Smartphones', count: 12 },
  { name: 'Ordinateurs', count: 8 },
  { name: 'Tablettes', count: 5 },
  { name: 'Audio', count: 9 },
  { name: 'Wearables', count: 4 },
  { name: 'Photo', count: 4 },
]

const brands = ['Apple', 'Samsung', 'Sony', 'Canon', 'Dell', 'HP']

export default function Catalog() {
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popular')
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === 'Tous' || p.category === selectedCategory
    return matchCategory
  })

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'XAF',
      maximumFractionDigits: 0 
    }).format(price)
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      {/* Hero Banner */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre <span className="text-cyan-400">Catalogue</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Découvrez notre sélection de produits technologiques au meilleur prix
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            {/* Categories */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-cyan-400" />
                Catégories
              </h3>
              <div className="space-y-2">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full px-3 py-2 rounded-lg text-left flex items-center justify-between ${
                      selectedCategory === cat.name 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4">Prix</h3>
              <div className="space-y-3">
                <input 
                  type="range" 
                  min="0" 
                  max="1000000" 
                  value={priceRange[1]}
                  className="w-full accent-cyan-400"
                />
                <div className="flex justify-between text-slate-400 text-sm">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4">Marques</h3>
              <div className="space-y-2">
                {brands.map((brand, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-cyan-400" />
                    <span className="text-slate-400 hover:text-white">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4">Services</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-400">Livraison gratuite</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-slate-400">Garantie 2 ans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-slate-400">Livraison express</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <p className="text-slate-400">
                <span className="text-white font-bold">{filteredProducts.length}</span> produits trouvés
              </p>
              
              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 w-64"
                  />
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white"
                >
                  <option value="popular">Plus populaires</option>
                  <option value="price_asc">Prix croissant</option>
                  <option value="price_desc">Prix décroissant</option>
                  <option value="new">Nouveautés</option>
                  <option value="rating">Mieux notés</option>
                </select>

                {/* View Mode */}
                <div className="flex bg-slate-800 border border-slate-700 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-4'
            }>
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className={`bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${viewMode === 'list' ? 'w-48' : 'aspect-square'} bg-slate-900 flex items-center justify-center text-6xl relative`}>
                    {product.isNew && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-cyan-500 text-white text-xs font-bold rounded">
                        NOUVEAU
                      </span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                        SOLDES
                      </span>
                    )}
                    <span className="text-6xl">{product.image}</span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-cyan-400 text-xs">{product.category}</p>
                        <h3 className="text-white font-bold">{product.name}</h3>
                      </div>
                      <button className="text-slate-400 hover:text-red-400">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-slate-400 text-sm mb-3">{product.description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star 
                            key={j} 
                            className={`w-4 h-4 ${j < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-slate-400 text-sm">({product.reviews})</span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.features.map((f, j) => (
                        <span key={j} className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded">
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Price & Cart */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold text-lg">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-slate-500 text-sm line-through ml-2">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <button className="px-4 py-2 gradient-bg text-white rounded-lg text-sm font-medium flex items-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Ajouter
                      </button>
                    </div>

                    {/* Stock Status */}
                    <div className="flex items-center gap-2 mt-3">
                      <CheckCircle className={`w-4 h-4 ${product.inStock ? 'text-green-400' : 'text-red-400'}`} />
                      <span className={product.inStock ? 'text-green-400 text-sm' : 'text-red-400 text-sm'}>
                        {product.inStock ? 'En stock' : 'Rupture'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}