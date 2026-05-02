import { Section, SectionHeading, MotionInView, GlassCard } from './ui.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function About() {
  return (
    <Section id="quem-somos">
      <SectionHeading title={siteConfig.about.title} />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <MotionInView>
          <GlassCard className="p-7 sm:p-8">
            <p className="text-base leading-relaxed text-[color:var(--z-muted)] sm:text-lg">
              {siteConfig.about.text}
            </p>
          </GlassCard>
        </MotionInView>
        <MotionInView delay={0.05}>
          <GlassCard className="p-7 sm:p-8">
            <p className="text-xs tracking-[0.28em] uppercase text-white/55">
              Assinatura
            </p>
            <p className="mt-3 text-xl font-medium tracking-tight text-white">
              {siteConfig.brand.signature}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--z-muted)]">
              Uma dupla que acredita em filmes com verdade, estética e emoção — sem
              excessos, com intenção.
            </p>
            <p className="mt-6 text-xs tracking-[0.28em] uppercase text-white/55">
              Localização
            </p>
            <p className="mt-2 text-sm text-white/90">
              {siteConfig.brand.location}
            </p>
          </GlassCard>
        </MotionInView>
      </div>
    </Section>
  )
}

