import { siteConfig } from '../data/siteConfig.js'
import { Section, SectionHeading, MotionInView, GlassCard } from './ui.jsx'

export default function Extras() {
  return (
    <Section id="extras">
      <SectionHeading
        title={siteConfig.extras.title}
        subtitle="Personalize seu pacote com opções complementares."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.extras.items.map((item, idx) => (
          <MotionInView key={item.title} delay={idx * 0.03}>
            <GlassCard className="p-6">
              <p className="text-base font-medium tracking-tight text-white">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-[color:var(--z-muted)]">
                {item.price}
              </p>
            </GlassCard>
          </MotionInView>
        ))}
      </div>

      <MotionInView delay={0.08}>
        <div className="mt-10">
          <GlassCard className="p-7 sm:p-8">
            <p className="text-xs tracking-[0.28em] uppercase text-white/60">
              {siteConfig.travel.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--z-muted)]">
              {siteConfig.travel.text}
            </p>
          </GlassCard>
        </div>
      </MotionInView>
    </Section>
  )
}

