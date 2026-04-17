import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Package, Search, Filter, Plus, Download, AlertTriangle,
  CheckCircle, XCircle, TrendingUp, TrendingDown, BarChart3,
  Box, Archive, Truck, Clock
} from 'lucide-react'

const products = [
  { id: 'PRD-001', name: 'iPhone 15 Pro', sku: 'IPP-15-PRO-256', category: 'Smartphones', stock: 45, minStock: 10, price: 850000, status: 'In Stock', supplier: 'Apple Africa' },
  { id: 'PRD-002', name: 'iPhone 15', sku: 'IPP-15-128', category: 'Smartphones', stock: 8, minStock: 15, price: 650000, status: 'Low Stock', supplier: 'Apple Africa' },
  { id: 'PRD-003', name: 'MacBook Air M2', sku: 'MBA-M2-256', category: 'Computers', stock: 0, minStock: 5, price: 680000, status: 'Out of Stock', supplier: 'Apple Africa' },
  { id: 'PRD-004', name: 'AirPods Pro 2', sku: 'APP-PRO-2', category: 'Audio', stock: 124, minStock: 20, price: 145000, status: 'In Stock', supplier: 'Apple Africa' },
  { id: 'PRD-005', name: 'Watch Ultra', sku: 'WU-49MM', category: 'Wearables', stock: 23, minStock: 10, price: 520000, status: 'In Stock', supplier: 'Apple Africa' },
  { id: 'PRD-006', name: 'iPad Pro 12.9', sku: 'IPDP-12-256', category: 'Tablets', stock: 12, minStock: 8, price: 720000, status: 'In Stock', supplier: 'Apple Africa' },
  { id: 'PRD-007', name: 'Magic Keyboard', sku: 'MK-TOUCH', category: 'Accessories', stock: 67, minStock: 15, price: 89000, status: 'In Stock', supplier: 'Apple Africa' },
  { id: 'PRD-008', name: 'iPad Air', sku: 'IPA-10-64', category: 'Tablets', stock: 5, minStock: 10, price: 420000, status: 'Low Stock', supplier: 'Apple Africa' },
]

const categories = ['Tous', 'Smartphones', 'Computers', 'Audio', 'Wearables', 'Tablets', 'Accessories']

const inventorySummary = {
  totalProducts: 847,
  totalValue: '245M XAF',
  lowStock: 12,
  outOfStock: 3,
  incoming: 45
}

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Tous')
  const [statusFilter, setStatusFilter] = useState('Tous')

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = categoryFilter === 'Tous' || product.category === categoryFilter
    const matchStatus = statusFilter === 'Tous' || 
                       (statusFilter === 'In Stock' && product.status === 'In Stock') ||
                       (statusFilter === 'Low Stock' && product.status === 'Low Stock') ||
                       (statusFilter === 'Out of Stock' && product.status === 'Out of Stock')
    return matchSearch && matchCategory && matchStatus
  })

  const getStatusBadge = (status) => {
    switch (status) {
      case 'In Stock':
        return <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">En stock</span>
      case 'Low Stock':
        return <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Stock faible</span>
      case 'Out of Stock':
        return <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Rupture</span>
      default:
        return null
    }
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
            <h1 className="text-3xl font-bold text-white">Inventaire</h1>
            <p className="text-slate-400">Gestion des produits et stocks</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" />Exporter
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Ajouter produit
            </button>
          </div>
        </motion.div>
      </div>

      {/* Summary Cards */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'Total Produits', value: inventorySummary.totalProducts, icon: Package, color: 'cyan' },
            { label: 'Valeur Stock', value: inventorySummary.totalValue, icon: Archive, color: 'green' },
            { label: 'Stock Faible', value: inventorySummary.lowStock, icon: AlertTriangle, color: 'yellow' },
            { label: 'Rupture', value: inventorySummary.outOfStock, icon: XCircle, color: 'red' },
            { label: 'Entrant', value: inventorySummary.incoming, icon: Truck, color: 'blue' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
            >
              <stat.icon className={`w-5 h-5 text-${stat.color}-400 mb-2`} />
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white"
          >
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white"
          >
            <option>Tous les statuts</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
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
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Produit</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">SKU</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Catégorie</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Stock</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Prix</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                  <th className="text-left text-slate-400 text-sm px-6 py-3">Fournisseur</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, i) => (
                  <motion.tr 
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className="border-t border-slate-700 hover:bg-slate-700/30"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mr-3">
                          <Package className="w-5 h-5 text-cyan-400" />
                        </div>
                        <span className="text-white font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="text-slate-400 font-mono text-sm px-6 py-4">{product.sku}</td>
                    <td className="text-slate-400 px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`text-white font-bold ${
                          product.stock === 0 ? 'text-red-400' :
                          product.stock < product.minStock ? 'text-yellow-400' : 'text-white'
                        }`}>
                          {product.stock}
                        </span>
                        <span className="text-slate-500 text-sm">/ {product.minStock}</span>
                      </div>
                    </td>
                    <td className="text-cyan-400 font-medium px-6 py-4">{product.price.toLocaleString()} XAF</td>
                    <td className="px-6 py-4">{getStatusBadge(product.status)}</td>
                    <td className="text-slate-400 px-6 py-4">{product.supplier}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-slate-700">
            <p className="text-slate-400 text-sm">Affichage de {filteredProducts.length} produits</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}