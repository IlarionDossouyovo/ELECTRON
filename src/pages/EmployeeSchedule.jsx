import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, User, CheckCircle, XCircle } from 'lucide-react'

const employees = [
  { id: 1, name: 'Jean Dupont', role: 'Vendeur', color: 'cyan' },
  { id: 2, name: 'Marie Kouassi', role: 'Caissiere', color: 'purple' },
  { id: 3, name: 'Paul Okon', role: 'Livreur', color: 'green' },
]

const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const hours = ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h']

export default function EmployeeSchedule() {
  const [schedules, setSchedules] = useState({
    1: { 8: [1], 9: [1,2], 10: [1], 14: [3], 15: [3] },
    2: { 9: [2], 10: [2], 11: [2,3], 14: [1], 15: [1] },
    3: { 8: [3], 9: [3], 10: [1], 11: [1], 14: [2], 15: [2] },
  })

  const toggleShift = (dayIdx, hour) => {
    setSchedules(prev => {
      const key = dayIdx
      const hourShifts = prev[key] || {}
      const newShifts = { ...hourShifts }
      newShifts[hour] = newShifts[hour]?.length ? [] : [1]
      return { ...prev, [key]: newShifts }
    })
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
          <Calendar className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Planning <span className="text-cyan-400">Employes</span></h1>
          <p className="text-slate-400 mt-2">Gestion des horaires de l'equipe</p>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 overflow-x-auto">
          <div className="flex gap-4 mb-6">
            {employees.map(e => (
              <div key={e.id} className="flex items-center gap-2">
                <div className={`w-3 h-3 bg-${e.color}-500 rounded-full`}></div>
                <span className="text-white text-sm">{e.name}</span>
              </div>
            ))}
          </div>
          <table className="w-full min-w-800">
            <thead>
              <tr>
                <th className="text-slate-400 p-2 text-left">Heure</th>
                {days.map((d, i) => (<th key={i} className="text-slate-400 p-2 text-center">{d}</th>))}
              </tr>
            </thead>
            <tbody>
              {hours.map(h => {
                const hourNum = parseInt(h)
                return (
                  <tr key={h}>
                    <td className="text-slate-400 p-2 text-left">{h}</td>
                    {days.map((_, dayIdx) => {
                      const assigned = schedules[dayIdx]?.[hourNum] || []
                      return (
                        <td key={dayIdx} className="p-1">
                          <button onClick={() => toggleShift(dayIdx, hourNum)}
                            className={`w-full h-10 rounded-lg flex items-center justify-center gap-1 transition ${
                              assigned.length ? 'bg-cyan-500/20 border border-cyan-500' : 'bg-slate-700 hover:bg-slate-600'
                            }`}>
                            {assigned.map(empId => {
                              const emp = employees.find(e => e.id === empId)
                              return <div key={empId} className={`w-3 h-3 bg-${emp.color}-500 rounded-full`}></div>
                            })}
                          </button>
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  )
}