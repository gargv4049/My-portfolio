import { motion } from 'framer-motion'
import { ArrowRight, Code2, Zap } from 'lucide-react'
import Button from '../common/Button'
import Layout from '../common/Layout'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <Layout>
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800"
          >
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-slate-900 dark:text-white mb-2">
              Hi, I'm Vivek Garg
            </span>
            <span className="block text-slate-900 dark:text-white mb-2">
              Full-Stack Developer
            </span>
            <span className="animate-text text-3xl sm:text-4xl lg:text-5xl">
              & Problem Solver
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Building high-performance, user-centric applications with React, TypeScript, and modern web technologies. Excited about solving complex problems at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-8 py-12 border-y border-slate-200 dark:border-slate-700"
          >
            {[
              { number: '15+', label: 'Projects' },
              { number: '1+', label: 'Years' },
              { number: '5+', label: 'Technologies' },
            ].map(({ number, label }) => (
              <motion.div key={label} whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Icon */}
          <motion.div
            className="mt-12 inline-block p-4 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full border border-blue-200 dark:border-blue-800"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
        </motion.div>
      </Layout>
    </section>
  )
}
