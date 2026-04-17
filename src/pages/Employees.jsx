import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Users, Search, Plus, Filter, Download, MoreVertical,
  Building2, Mail, Phone, MapPin, Calendar, Briefcase,
  DollarSign, Clock, Award, GraduationCap, UserCheck
} from 'lucide-react'

const departments = [
  { id: 'tech', name: 'Technologie', head: 'Jean Dupont', employees: 24, color: 'cyan' },
  { id: 'sales', name: 'Ventes', head: 'Marie Kouassi', employees: 18, color: 'green' },
  { id: 'support', name: 'Support', head: 'Paul Obame', employees: 12, color: 'blue' },
  { id: 'hr', name: 'Ressources Humaines', head: 'Alice Sossa', employees: 5, color: 'purple' },
  { id: 'finance', name: 'Finance', head: 'Koffi Mensah', employees: 8, color: 'yellow' },
  { id: 'marketing', name: 'Marketing', head: 'Pierre Martin', employees: 10, color: 'pink' },
]

const employees = [
  { id: 1, name: 'Jean Dupont', email: 'jean@electron.africa', phone: '+229 01 123 456 78', department: 'tech', role: 'Lead Developer', salary: 450000, status: 'Actif', avatar: 'JD', joinDate: '15/01/2023' },
  { id: 2, name: 'Marie Kouassi', email: 'marie@electron.africa', phone: '+225 07 234 567 89', department: 'sales', role: 'Sales Manager', salary: 380000, status: 'Actif', avatar: 'MK', joinDate: '20/02/2023' },
  { id: 3, name: 'Paul Obame', email: 'paul@electron.africa', phone: '+241 07 345 678 90', department: 'support', role: 'Support Lead', salary: 320000, status: 'Actif', avatar: 'PO', joinDate: '10/03/2023' },
  { id: 4, name: 'Alice Sossa', email: 'alice@electron.africa', phone: '+229 01 456 789 01', department: 'hr', role: 'HR Manager', salary: 350000, status: 'Actif', avatar: 'AS', joinDate: '05/04/2023' },
  { id: 5, name: 'Koffi Mensah', email: 'koffi@electron.africa', phone: '+233 20 123 456 7', department: 'finance', role: 'Finance Manager', salary: 420000, status: 'Actif', avatar: 'KM', joinDate: '12/05/2023' },
  { id: 6, name: 'Pierre Martin', email: 'pierre@electron.africa', phone: '+33 6 12 34 56 78', department: 'marketing', role: 'Marketing Lead', salary: 380000, status: 'Actif', avatar: 'PM', joinDate: '18/06/2023' },
]

const leaves = [
  { id: 1, employee: 'Jean Dupont', type: 'Congé annuel', dates: '20-25 Avril', status: 'Approuvé' },
  { id: 2, employee: 'Marie Kouassi', type: 'Maladie', dates: '16 Avril', status: 'Approuvé' },
  { id: 3, employee: 'Paul Obame', type: 'Congé exceptionnel', dates: '28 Avril - 02 Mai', status: 'En attente' },
]

export default function Employees() {
  const [activeTab, setActiveTab] = useState('employees')
  const [searchTerm, setSearchTerm] = useState('')
  const [deptFilter, setDeptFilter] = useState('Tous')

  const stats = [
    { label: 'Total employés', value: '77', icon: Users, change: '+5' },
    { label: 'Présents', value: '72', icon: UserCheck, change: '93%' },
    { label: 'En congés', value: '5', icon: Calendar, change: '-2' },
    { label: 'Masse salariale', value: '28.5M', icon: DollarSign, change: '+2%' },
  ]

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
            <h1 className="text-3xl font-bold text-white">Employés</h1>
            <p className="text-slate-400">Gestion des employés et départements</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" />Exporter
            </button>
            <button className="px-4 py-2 gradient-bg text-white rounded-lg font-semibold flex items-center">
              <Plus className="w-4 h-4 mr-2" />Nouvel employé
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
            >
              <stat.icon className="w-5 h-5 text-cyan-400 mb-2" />
              <p className="text-white font-bold text-xl">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {['employees', 'departments', 'leaves', 'payroll'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'employees' && 'Employés'}
              {tab === 'departments' && 'Départements'}
              {tab === 'leaves' && 'Congés'}
              {tab === 'payroll' && 'Paie'}
            </button>
          ))}
        </div>
      </div>

      {/* Employees */}
      {activeTab === 'employees' && (
        <div className="px-4 pb-16">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500"
              />
            </div>
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white"
            >
              <option>Tous les départements</option>
              {departments.map(d => <option key={d.id}>{d.name}</option>)}
            </select>
          </div>

          {/* Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50">
                  <tr>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Employé</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Département</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Rôle</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Salaire</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Statut</th>
                    <th className="text-left text-slate-400 text-sm px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, i) => (
                    <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/30">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            {emp.avatar}
                          </div>
                          <div>
                            <p className="text-white font-medium">{emp.name}</p>
                            <p className="text-slate-400 text-sm">{emp.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                          {departments.find(d => d.id === emp.department)?.name}
                        </span>
                      </td>
                      <td className="text-white px-6 py-4">{emp.role}</td>
                      <td className="text-cyan-400 font-medium px-6 py-4">{emp.salary.toLocaleString()} XAF</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          emp.status === 'Actif' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {emp.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* Departments */}
      {activeTab === 'departments' && (
        <div className="px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${dept.color}-500/20 rounded-xl flex items-center justify-center`}>
                    <Building2 className={`w-6 h-6 text-${dept.color}-400`} />
                  </div>
                  <button className="text-slate-400 hover:text-white">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-white font-bold text-lg">{dept.name}</h3>
                <p className="text-slate-400 text-sm mb-4">Responsable: {dept.head}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center text-slate-400 text-sm">
                    <Users className="w-4 h-4 mr-1" /> {dept.employees} employés
                  </div>
                  <button className="text-cyan-400 text-sm hover:underline">Voir tout</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Leaves */}
      {activeTab === 'leaves' && (
        <div className="px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-6">Demandes de congés</h3>
            <div className="space-y-4">
              {leaves.map((leave, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">{leave.employee}</p>
                      <p className="text-slate-400 text-sm">{leave.type} • {leave.dates}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    leave.status === 'Approuvé' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {leave.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Payroll */}
      {activeTab === 'payroll' && (
        <div className="px-4 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-6">Masse salariale par département</h3>
            <div className="space-y-4">
              {departments.map((dept, i) => {
                const deptEmployees = employees.filter(e => e.department === dept.id)
                const totalSalary = deptEmployees.reduce((sum, e) => sum + e.salary, 0)
                return (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{dept.name}</p>
                      <p className="text-slate-400 text-sm">{deptEmployees.length} employés</p>
                    </div>
                    <p className="text-cyan-400 font-bold">{totalSalary.toLocaleString()} XAF</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}