import { motion } from 'framer-motion'
import Card from '../common/Card'
import Layout from '../common/Layout'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 65 },
        { name: 'TypeScript', level: 35 },
        { name: 'Tailwind CSS', level:40 },
        { name: 'Framer Motion', level: 25 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 30 },
        { name: 'Express.js', level: 15 },
        { name: 'PostgreSQL', level: 30 },
        { name: 'MongoDB', level: 55 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'REST APIs', level: 90 },
        { name: 'Docker', level: 5 },
        { name: 'AWS', level: 5 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20">
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
              My Skills
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-4">
              Technologies I Master
            </h2>
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {skillCategories.map((category) => (
              <motion.div key={category.category} variants={itemVariants}>
                <Card className="h-full p-8">
                  <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              'JavaScript',
              'HTML/CSS',
              'Git',
              'Vite',
              'Web Performance'
            ].map((skill) => (
              <motion.div
                key={skill}
                className="p-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-center font-medium text-blue-900 dark:text-blue-100"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Layout>
    </section>
  )
}
