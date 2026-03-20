import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import Layout from '../common/Layout'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'EMI-CALCULATOR',
      description: 'A web application that calculates Equated Monthly Installments (EMI) for loans, providing users with a clear breakdown of payment schedules and interest rates.',
      image: '💰',
      tags: ['HTMLS','CSS','JS'],
      category: 'frontend',
      link: 'https://emi-calculator-xi-seven.vercel.app/',
      github: 'https://github.com/gargv4049/EMI-Calculator',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and advanced filtering.',
      image: '✅',
      tags: ['React', 'Firebase', 'Tailwind CSS','Node.js'],
      category: 'frontend',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasting and beautiful UI animations.',
      image: '⛅',
      tags: ['React', 'API Integration', 'Framer Motion'],
      category: 'frontend',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Smart Resume Analyzer',
      description: 'An application that analyzes resumes and provides insights on candidate qualifications and fit for specific roles.',
      tags: ['TypeScript', 'Node.js', 'Express', 'Express', 'MySQL'],
      category: 'fullstack',
      link: '#',
      github: '#',
    },
  ]

  const filters = ['all', 'frontend', 'backend', 'fullstack']
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Work
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-4">
              My Projects
            </h2>
          </div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    {/* Project Image */}
                    <div className="h-48 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 flex items-center justify-center text-6xl border-b border-slate-200 dark:border-slate-700">
                      {project.image}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.link}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View <ExternalLink className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg font-semibold transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Code <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Want to see more? Check out my GitHub profile for additional projects and contributions.
            </p>
            <Button variant="secondary" size="lg">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </Layout>
    </section>
  )
}
