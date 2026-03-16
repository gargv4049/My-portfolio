import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import Layout from '../common/Layout'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'gargv4049@gmail.com',
      link: 'mailto:gargv4049@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 800-588-4935',
      link: 'tel:8005884935',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jaipur, Rajasthan',
      link: 'https://www.bing.com/maps/directions?FORM=HDRSC6&style=r&rtp=pos.26.921039581298828_75.79435729980469__Jaipur%252C%2520RJ_%7Epos.22.718673706054688_75.855712890625__Indore%252C%2520MP_&mode=d&cp=24.808885%7E75.412885&lvl=7&sd=0',
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gargv4049', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gargv4049', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/vgarg5960', label: 'Twitter' },
    { icon: Mail, href: 'mailto:gargv4049@gmail.com', label: 'Email' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20">
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
              Get In Touch
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-4">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-4">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: submitted ? 1 : 0 }}
                    className="p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map(({ icon: Icon, title, value, link }) => (
                  <motion.a
                    key={title}
                    href={link}
                    className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    whileHover={{ translateX: 4 }}
                  >
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-emerald-500/10 hover:from-blue-500/20 hover:to-emerald-500/20 border border-blue-200 dark:border-blue-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title={label}
                    >
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Response Time */}
              <motion.div
                className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-200 dark:border-blue-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-slate-900 dark:text-white font-semibold mb-1">
                  Response Time
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  I typically respond within 24-48 hours. For urgent matters, please call.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Layout>
    </section>
  )
}
