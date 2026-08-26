import { motion } from 'framer-motion'
import { Heart, User } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const CERTS = [
  { label: 'Flight Instructor – Airplane Single Engine (CFI)' },
  { label: 'Flight Instructor – Instrument Airplane (CFII)' },
  {
    label: 'Commercial Pilot',
    sub: ['Airplane Single Engine Land', 'Instrument Airplane'],
  },
  { label: 'Ground Instructor – Advanced' },
]

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="font-heading text-5xl sm:text-6xl font-bold text-sky-dark mb-12">
          Why learn to fly with me?
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[3/4] bg-sky-light">
              <img
                src="/julia.webp"
                alt="Julia Sutter, Certified Flight Instructor, in the cockpit"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm border border-sky-100 text-sky-dark text-sm font-medium">
                  <User size={14} className="text-sky-primary" />
                  Julia Sutter
                </div>
                <p className="mt-2 text-sm text-white/90">
                  Flight Instructor · CFI &amp; CFII
                </p>
              </div>
            </div>
            <div
              className="absolute -top-4 -left-4 w-28 h-28 rounded-full bg-sky-light -z-10"
              aria-hidden="true"
            />
          </motion.div>

          {/* Bio + Certs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="text-sky-dark/80 text-lg leading-relaxed mb-5">
              Flight training should be efficient, safe, and rewarding. I customize every flight to your individual goals and schedule, prioritizing practical risk management from day one. By teaching the core principles behind aerodynamics and aircraft systems among other focuses, not just rote steps, I ensure you gain deep understanding of material applicable to your training goal. I pride myself on a patient and supportive cockpit environment where students feel both welcomed and challenged to grow.   
            </p> 
            <p className="text-sky-dark/80 text-lg leading-relaxed mb-5">
              Earning my aviation degree at San Jose State University and serving as President of Women in Aviation SJSU proved how transformative quality mentorship is. As a first-generation aviator, I understand the importance of a competent flight instructor who can guide you to your goals in a timely and efficient manner. Nothing is more rewarding to me than watching a student master a tough skill and build real confidence in the cockpit.           
            </p>

            {/* Certificates */}
            {/* <div>
              <p className="font-heading font-semibold text-sky-dark text-base uppercase tracking-widest mb-4">
                Certificates &amp; Ratings
              </p>
              <ul className="space-y-2">
                {CERTS.map((cert) => (
                  <li key={cert.label}>
                    <div className="flex items-start gap-2 text-sky-dark/80 text-base">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-primary flex-shrink-0" aria-hidden="true" />
                      {cert.label}
                    </div>
                    {cert.sub && (
                      <ul className="mt-1.5 ml-6 space-y-1">
                        {cert.sub.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sky-dark/60 text-base">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-primary flex-shrink-0" aria-hidden="true" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div> */}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
