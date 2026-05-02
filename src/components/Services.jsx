import { FiAperture, FiCamera, FiFilm, FiHeart, FiSend } from 'react-icons/fi'
import { siteConfig } from '../data/siteConfig.js'
import { Section, SectionHeading, MotionInView, GlassCard } from './ui.jsx'

const ICONS = [FiFilm, FiHeart, FiSend, FiCamera, FiAperture]

export default function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        title={siteConfig.services.title}
        subtitle="Uma experiência completa — do pré-wedding ao grande dia, com linguagem cinematográfica."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.items.map((item, idx) => {
          const Icon = ICONS[idx % ICONS.length]
          return (
            <MotionInView key={item.title} delay={idx * 0.03}>
              <GlassCard className="h-full p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[color:rgba(215,181,109,0.35)] bg-[color:rgba(215,181,109,0.14)] text-white">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--z-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </MotionInView>
          )
        })}
      </div>
    </Section>
  )
}

