import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import Layout from '../common/Layout'

interface HeaderProps {
  isDark: boolean
  onThemeToggle: () => void
}

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout className="flex items-center justify-between h-16">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Portfolio
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => handleScroll(item)}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 capitalize font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        <motion.button
          onClick={onThemeToggle}
          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </motion.button>
      </Layout>
    </motion.header>
  )
}
