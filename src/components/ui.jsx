import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={[
        'relative px-4 sm:px-6 lg:px-8',
        'py-16 sm:py-20 lg:py-24',
        className,
      ].join(' ')}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-12">
      {eyebrow ? (
        <p className="text-xs tracking-[0.28em] uppercase text-[color:var(--z-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl sm:text-4xl font-[500] tracking-tight text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[color:var(--z-muted)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export function GlassCard({ children, className = '' }) {
  return (
    <div
      className={[
        'rounded-2xl border border-[color:var(--z-border)]',
        'bg-[color:var(--z-surface)] backdrop-blur-xl',
        'shadow-[0_20px_70px_rgba(0,0,0,0.35)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export function MotionInView({ children, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.61, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

MotionInView.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
}

