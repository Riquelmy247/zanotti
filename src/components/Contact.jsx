import { FiArrowUpRight, FiMapPin } from 'react-icons/fi'
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig.js'
import { Section, SectionHeading, MotionInView, GlassCard } from './ui.jsx'

export default function Contact() {
  const whatsappHref = buildWhatsAppLink(
    siteConfig.contact.whatsapp.phoneE164,
    siteConfig.contact.whatsapp.defaultMessage,
  )

  return (
    <Section id="contato">
      <SectionHeading title={siteConfig.contactSection.title} />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <MotionInView className="h-full min-h-0">
          <GlassCard className="flex h-full flex-col p-7 sm:p-8">
            <p className="text-xs tracking-[0.28em] uppercase text-white/60">
              {siteConfig.contactSection.ctaEyebrow}
            </p>
            <p className="mt-4 text-3xl font-[500] tracking-tight text-white sm:text-4xl">
              {siteConfig.contactSection.cta}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--z-muted)] sm:text-lg">
              {siteConfig.contactSection.secondary}
            </p>

            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:rgba(215,181,109,0.4)] bg-[color:rgba(215,181,109,0.18)] px-6 py-3 text-sm font-medium text-white hover:border-[color:rgba(215,181,109,0.7)] hover:bg-[color:rgba(215,181,109,0.26)] transition-colors"
              >
                {siteConfig.contactSection.primaryButton}
                <FiArrowUpRight />
              </a>
              <a
                href={siteConfig.contact.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--z-border)] bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
              >
                Instagram
                <FiArrowUpRight />
              </a>
            </div>
          </GlassCard>
        </MotionInView>

        <MotionInView delay={0.05} className="h-full min-h-0">
          <GlassCard className="flex h-full flex-col p-7 sm:p-8">
            <p className="text-xs tracking-[0.28em] uppercase text-white/60">
              Contatos
            </p>
            <div className="mt-5 grid flex-1 gap-4">
              <div className="rounded-2xl border border-[color:var(--z-border)] bg-white/5 p-5">
                <p className="text-xs tracking-[0.26em] uppercase text-white/55">
                  WhatsApp
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.contact.whatsapp.display}
                  <FiArrowUpRight />
                </a>
              </div>

              <div className="rounded-2xl border border-[color:var(--z-border)] bg-white/5 p-5">
                <p className="text-xs tracking-[0.26em] uppercase text-white/55">
                  Instagram
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
                  href={siteConfig.contact.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.contact.instagram.handle}
                  <FiArrowUpRight />
                </a>
              </div>

              <div className="rounded-2xl border border-[color:var(--z-border)] bg-white/5 p-5">
                <p className="text-xs tracking-[0.26em] uppercase text-white/55">
                  Localização
                </p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-white/90">
                  <FiMapPin />
                  {siteConfig.brand.location}
                </p>
              </div>
            </div>
          </GlassCard>
        </MotionInView>
      </div>
    </Section>
  )
}

