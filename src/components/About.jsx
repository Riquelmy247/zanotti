import { Section, SectionHeading, MotionInView, GlassCard } from './ui.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function About() {
  return (
    <Section id="quem-somos">
      <SectionHeading title={siteConfig.about.title} />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <MotionInView className="h-full min-h-0">
          <GlassCard className="flex h-full flex-col p-7 sm:p-8">
            <p className="text-base leading-relaxed text-[color:var(--z-muted)] sm:text-lg">
              {siteConfig.about.text}
            </p>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--z-muted)] sm:text-lg">
              {siteConfig.about.tagline}
            </p>
          </GlassCard>
        </MotionInView>
        <MotionInView delay={0.05} className="h-full min-h-0">
          <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-[color:var(--z-border)] bg-white/5 lg:min-h-0">
            <img
              src={siteConfig.about.imageSrc}
              alt={siteConfig.about.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.75) 100%)',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-xs tracking-[0.28em] uppercase text-white/70">
                Assinatura
              </p>
              <p className="mt-1 text-lg font-medium tracking-tight text-white sm:text-xl">
                {siteConfig.brand.signature}
              </p>
              <p className="mt-2 text-xs text-white/80 sm:text-sm">
                {siteConfig.brand.location}
              </p>
            </div>
          </div>
        </MotionInView>
      </div>
    </Section>
  )
}

