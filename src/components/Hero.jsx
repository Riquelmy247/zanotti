import { motion } from 'framer-motion'
import { FiArrowUpRight, FiPlay } from 'react-icons/fi'
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig.js'
import { MotionInView } from './ui.jsx'

export default function Hero() {
  const whatsappHref = buildWhatsAppLink(
    siteConfig.contact.whatsapp.phoneE164,
    siteConfig.contact.whatsapp.defaultMessage,
  )

  return (
    <section id="inicio" className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--z-border)] bg-white/5">
          <div className="absolute inset-0">
            {siteConfig.hero.background?.imageSrc ? (
              <img
                src={siteConfig.hero.background.imageSrc}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
              />
            ) : null}
            <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(215,181,109,0.18),transparent_55%),radial-gradient(900px_500px_at_85%_15%,rgba(255,255,255,0.10),transparent_60%)]" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.78) 70%, rgba(0,0,0,0.92))',
              }}
            />
          </div>

          <div className="relative grid gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-14 lg:py-20">
            <div>
              <MotionInView>
                <p className="text-xs tracking-[0.28em] uppercase text-[color:var(--z-muted)]">
                  {siteConfig.brand.location}
                </p>
              </MotionInView>

              <MotionInView delay={0.05}>
                <h1 className="mt-5 text-4xl font-[500] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {siteConfig.hero.headline}
                </h1>
              </MotionInView>

              <MotionInView delay={0.1}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--z-muted)] sm:text-lg">
                  {siteConfig.hero.subheadline}
                </p>
              </MotionInView>

              <MotionInView delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:rgba(215,181,109,0.4)] bg-[color:rgba(215,181,109,0.18)] px-6 py-3 text-sm font-medium text-white hover:border-[color:rgba(215,181,109,0.7)] hover:bg-[color:rgba(215,181,109,0.26)] transition-colors"
                  >
                    {siteConfig.hero.ctaPrimary}
                    <FiArrowUpRight />
                  </a>

                  <a
                    href="#pacotes"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--z-border)] bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
                  >
                    {siteConfig.hero.ctaSecondary}
                    <FiPlay />
                  </a>
                </div>
              </MotionInView>

              <MotionInView delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-2">
                  {siteConfig.hero.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center rounded-full border border-[color:var(--z-border)] bg-black/30 px-3 py-1 text-xs text-white/85"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </MotionInView>
            </div>

            <MotionInView delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl border border-[color:var(--z-border)] bg-black/40 p-5 sm:p-6">
                  <p className="text-sm text-white/90">
                    <span className="text-[color:var(--z-gold)]">
                      {siteConfig.brand.slogan}
                    </span>
                    <span className="text-white/55"> — </span>
                    <span className="text-white/80">
                      {siteConfig.brand.signature}
                    </span>
                  </p>
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-xl border border-[color:var(--z-border)] bg-white/5 px-4 py-3">
                      <p className="text-xs tracking-[0.26em] uppercase text-white/55">
                        Instagram
                      </p>
                      <a
                        className="mt-1 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
                        href={siteConfig.contact.instagram.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {siteConfig.contact.instagram.handle}
                        <FiArrowUpRight />
                      </a>
                    </div>
                    <div className="rounded-xl border border-[color:var(--z-border)] bg-white/5 px-4 py-3">
                      <p className="text-xs tracking-[0.26em] uppercase text-white/55">
                        WhatsApp
                      </p>
                      <a
                        className="mt-1 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {siteConfig.contact.whatsapp.display}
                        <FiArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>

                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(215,181,109,0.55), rgba(215,181,109,0.0) 60%)',
                    filter: 'blur(2px)',
                  }}
                  animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </MotionInView>
          </div>
        </div>
      </div>
    </section>
  )
}

