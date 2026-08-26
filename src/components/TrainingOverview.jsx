import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const TRAINING_OVERVIEW_ITEMS = [
  {
    title: 'Private Pilot Certificate (PPL)',
    description:
      'The primary foundation for general aviation. Earn the freedom to fly yourself, friends, and family across the country in visual weather conditions.',
  },
  {
    title: 'Instrument Rating (IR)',
    description:
      'Fly by reference to cockpit instruments under IFR flight plans, unlocking cloud layer capability and deeper precision.',
  },
  {
    title: 'Commercial Pilot Certificate (CPL)',
    description:
      'Master advanced commercial flight maneuvers and earn professional qualifications allowing you to fly aircraft for compensation or hire under FAR Part 61.',
  },
  {
    title: 'Flight Review (BFR / FAR 61.56)',
    description:
      'Meet FAA biennial flight review requirements, brush up on regulations, and sharpen handling skills in a supportive, stress-free environment.',
  },
  {
    title: 'Instrument Proficiency Check (IPC / FAR 61.57)',
    description:
      'Restore IFR currency and build confidence executing precision approaches, holding patterns, and emergency instrument procedures.',
  },
  {
    title: 'Flying Club Aircraft Checkout',
    description:
      'Required orientation and checkout training for new or returning pilots renting aircraft through Advantage Aviation at Palo Alto Airport.',
  },
]

export default function TrainingOverview() {
  const [open, setOpen] = useState(false)

  return (
    <SectionWrapper id="flight-training" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-sky-primary font-semibold text-base uppercase tracking-widest mb-3">
            Flight Training
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-sky-dark mb-4">
            Training Overview
          </h2>
          <p className="text-sky-dark/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the flight training path that starts with your first lesson and continues through certificates, ratings, recurring checks, and aircraft checkout support.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group rounded-[32px] border border-sky-100 bg-sky-primary/5 shadow-sm p-8 mb-10"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex flex-wrap gap-2 items-center text-sky-primary text-xs uppercase tracking-[0.35em] font-semibold mb-4">
                <span className="rounded-full bg-white/80 px-3 py-1 text-sky-primary">Start Here</span>
                <span className="rounded-full bg-white/80 px-3 py-1 text-sky-primary">First Flight</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-sky-dark mb-4">
                Discovery Flight & Your First Lesson
              </h3>
              <p className="text-sky-dark/75 text-lg leading-relaxed">
                Thinking about learning to fly? A Discovery Flight is your hands-on introduction to taking control of a real airplane at Reid Hillview Airport with zero pressure or long-term commitment.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 self-start rounded-full border border-sky-primary bg-white px-5 py-3 text-sm font-semibold text-sky-primary shadow-sm transition-colors duration-200 hover:bg-sky-primary/10"
            >
              <span>{open ? 'Show less' : 'Show more'}</span>
              <ChevronDown className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={18} />
            </button>
          </div>

          {open && (
            <div className="mt-8 border-t border-sky-100 pt-8 text-sky-dark/80">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[28px] border border-sky-100 bg-sky-dark/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-primary text-white font-semibold">
                      01
                    </div>
                    <div>
                      <p className="text-sky-primary text-xs uppercase tracking-[0.35em] font-semibold mb-1">
                        Before the Flight
                      </p>
                      <h4 className="text-xl font-semibold text-sky-dark">
                        Ground Briefing & Preparation
                      </h4>
                    </div>
                  </div>
                  <ul className="space-y-4 text-sky-dark/80">
                    <li>
                      <span className="font-semibold text-sky-dark">Warm Introductions:</span> Discuss your aviation goals, personal timeline, and what you hope to get out of flying.
                    </li>
                    <li>
                      <span className="font-semibold text-sky-dark">Aircraft Familiarization:</span> Walk around our Cessna 172 and learn how its components operate.
                    </li>
                    <li>
                      <span className="font-semibold text-sky-dark">Flight Controls Overview:</span> Discover how the yoke, rudder pedals, and throttle control the airplane in three dimensions.
                    </li>
                    <li>
                      <span className="font-semibold text-sky-dark">Basic Aerodynamics:</span> Simple, intuitive introduction to how lift, drag, thrust, and weight work together.
                    </li>
                    <li>
                      <span className="font-semibold text-sky-dark">Safety Procedures:</span> Review passenger safety, emergency equipment, and comfortable cockpit entry.
                    </li>
                  </ul>
                </div>

                <div className="rounded-[28px] border border-sky-100 bg-sky-dark/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-sky-dark font-semibold">
                      02
                    </div>
                    <div>
                      <p className="text-amber-500 text-xs uppercase tracking-[0.35em] font-semibold mb-1">
                        During the Flight
                      </p>
                      <h4 className="text-xl font-semibold text-sky-dark">
                        Hands-On Flying Experience
                      </h4>
                    </div>
                  </div>
                  <ul className="space-y-4 text-sky-dark/80">
                    <li>
                      <span className="font-semibold text-sky-dark">Preflight Inspection:</span> Perform an authentic preflight walkaround checklist together on the ramp.
                    </li>
                    <li>
                      <span className="font-semibold text-sky-dark">Taxi Procedures:</span> Guide the aircraft on the ground to San Jose Runway 31/13 using rudder steering.
                    </li>
                    <li>
                      <span className="font-semibold text-sky-dark">Straight-and-Level Flight:</span> Feel the airplane respond smoothly as you maintain altitude and heading over the Bay Area.
                    </li>
                    <li>
                      <span className="font-semibold text-sky-dark">Climbs, Descents & Turns:</span> Practice gentle pitch and bank maneuvers while enjoying stunning views of Northern California.
                    </li>
                    <li>
                      <span className="font-semibold text-sky-dark">Intro to Landing Procedures:</span> Observe how we set up a stabilized approach and pattern landing back at RHV.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="mb-8">
          <p className="text-sky-primary font-semibold text-sm uppercase tracking-[0.4em] mb-4">
            Certificates, Ratings & Flight Reviews
          </p>
          <p className="text-sky-dark/70 max-w-2xl leading-relaxed">
            Explore requirements, target audiences, and training expectations for each certificate or review program under FAR Part 61.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {TRAINING_OVERVIEW_ITEMS.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[28px] border border-sky-400 bg-sky-700 p-7 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-sky-50 mb-3">
                {item.title}
              </h3>
              <p className="text-sky-100 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/pricing.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sky-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-primary focus:ring-offset-2"
          >
            View Pricing PDF
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
