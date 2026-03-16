import { motion } from 'framer-motion'
import { Target, Users, Lightbulb } from 'lucide-react'
import Card from '../common/Card'
import Layout from '../common/Layout'
import myphoto from '../assests/myphoto.jpeg'

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'I approach complex problems with creative, efficient solutions focusing on user impact.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative developer who thrives in agile environments and mentors junior developers.',
    },
    {
      icon: Lightbulb,
      title: 'Innovator',
      description: 'Always exploring new technologies and best practices to deliver cutting-edge solutions.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
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
              About Me
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-4">
              Who I Am
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300">
                I'm Vivek Garg, a passionate Computer Science student with a keen interest in building scalable web applications. My journey into tech started with curiosity about how things work, which led me to pursue software development.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                With hands-on experience in full-stack development, I've built projects ranging from real-time applications to performance-optimized single-page apps. I believe in writing clean, maintainable code and constantly learning from the developer community.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Outside of coding, I enjoy contributing to open-source projects, writing technical blogs, and exploring emerging technologies like Web3 and AI/ML applications.
              </p>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border-2 border-blue-200 dark:border-blue-800 flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col items-center gap-4">
                  <img
                    src={myphoto}
                    alt="My photo"
                    className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    Vivek Garg
                  </p>
                </div>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-emerald-400/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <Card key={title} className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{description}</p>
                </motion.div>
              </Card>
            ))}
          </div>
        </motion.div>
      </Layout>
    </section>
  )
}
