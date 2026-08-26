import { motion } from 'framer-motion'
import { ShieldCheck, Lightbulb, BookOpen, Compass } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const FOUNDATIONS = [
  {
    label: 'Safety First',
    icon: ShieldCheck,
    title: 'Safety & Real-World Readiness',
    description:
      'Safety is the foundation of everything I teach. You will learn risk management, scenario planning, and decision-making so flying is safe, confident, and applicable beyond the checkride.',
  },
  {
    label: 'Purposeful Learning',
    icon: Lightbulb,
    title: 'Understand the Why',
    description:
      'I help you understand the reason behind each maneuver and encourage questions, so your training builds real comprehension and stronger judgment in the cockpit.',
  },
  {
    label: 'Ground Support',
    icon: BookOpen,
    title: 'Preparation Outside the Airplane',
    description:
      'Flight training goes beyond cockpit time. Ground study, planning, and focused review make your lessons more efficient, effective, and enjoyable.',
  },
  {
    label: 'Flight Skills',
    icon: Compass,
    title: 'Stick-and-Rudder Skill & Decision Making',
    description:
      'You will sharpen your stick-and-rudder skills, develop precise energy management, and cultivate the feel and finesse of a truly skilled pilot.',
  },
]

export default function Training() {
  return (
    <SectionWrapper id="training" className="section-padding bg-sky-light">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-sky-primary font-semibold text-base uppercase tracking-widest mb-3">
            My Teaching Philosophy
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-sky-dark mb-4">
            The Four Foundations of Flight Training
          </h2>
          <p className="text-sky-dark/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Making pilots not only skilled at passing the checkride, but also skilled in real life and able to use risk management to handle scenarios.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {FOUNDATIONS.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group bg-white rounded-[32px] border border-sky-100 shadow-sm p-8 hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-sky-primary/10 text-sky-primary w-12 h-12 mb-4">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="inline-block text-xs uppercase tracking-[0.35em] text-sky-secondary bg-sky-secondary/10 rounded-full px-3 py-1 mb-4">
                  {item.label}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-sky-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sky-dark/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
