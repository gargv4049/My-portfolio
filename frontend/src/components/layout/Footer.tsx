import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Layout from '../common/Layout'

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/gargv4049', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gargv4049', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gargv4049@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-12">
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Computer Science student crafting beautiful, performant web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg bg-white dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © 2025 Computer Science Student. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-1">
              Terms <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-1">
              Privacy <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </Layout>
    </footer>
  )
}
