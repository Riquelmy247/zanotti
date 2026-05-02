import { FiArrowUpRight, FiInstagram } from 'react-icons/fi'
import { siteConfig } from '../data/siteConfig.js'
import { Section, SectionHeading, MotionInView, GlassCard } from './ui.jsx'

export default function InstagramFeed() {
  return (
    <Section id="instagram">
      <SectionHeading
        title={siteConfig.instagram.title}
        subtitle={siteConfig.instagram.subtitle}
      />

      <div className="mx-auto w-full max-w-7xl">
        <MotionInView>
          <GlassCard className="overflow-hidden bg-black/30">
            <div className="grid lg:grid-cols-[380px_1fr]">
              <div className="border-b border-[color:var(--z-border)] p-6 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
                    <FiInstagram className="h-10 w-10 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {siteConfig.instagram.profileTitle ??
                        siteConfig.contact.instagram.handle}
                    </h3>
                    <p className="text-sm text-white/65">
                      {siteConfig.instagram.profileSubtitle ??
                        siteConfig.brand.name}
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-white/70">
                  Acompanhe nossos bastidores, filmes mais recentes e histórias que emocionam.
                </p>

                <a
                  href={siteConfig.contact.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-3 text-sm font-medium text-white transition-all hover:from-pink-600 hover:to-purple-700"
                >
                  <FiInstagram className="h-5 w-5" />
                  {siteConfig.instagram.buttonLabel}
                  <FiArrowUpRight />
                </a>
              </div>

              <div className="p-4 sm:p-6">
                <div className="overflow-hidden rounded-2xl border border-[color:var(--z-border)] bg-black/40">
                  <iframe
                    src={siteConfig.instagram.embedUrl}
                    title="Instagram Feed"
                    className="block h-[520px] w-full sm:h-[650px] lg:h-[720px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        </MotionInView>
      </div>
    </Section>
  )
}
