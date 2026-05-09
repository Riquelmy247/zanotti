import { FiCheck, FiStar } from 'react-icons/fi'
import PropTypes from 'prop-types'
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig.js'
import { Section, SectionHeading, MotionInView, GlassCard } from './ui.jsx'

function PackageCard({ pack, index }) {
  const whatsappHref = buildWhatsAppLink(
    siteConfig.contact.whatsapp.phoneE164,
    `Olá! Tenho interesse no ${pack.label} — ${pack.name}. Podemos conversar?`,
  )

  const isFeatured = Boolean(pack.featured)

  return (
    <MotionInView delay={index * 0.04}>
      <GlassCard
        className={[
          'relative h-full p-7 sm:p-8',
          isFeatured
            ? 'border-[color:rgba(215,181,109,0.55)] bg-[color:rgba(215,181,109,0.10)]'
            : '',
        ].join(' ')}
      >
        {isFeatured ? (
          <div className="absolute -top-3 right-6 inline-flex items-center gap-2 rounded-full border border-[color:rgba(215,181,109,0.55)] bg-black/60 px-3 py-1 text-xs text-white">
            <FiStar />
            Mais escolhido
          </div>
        ) : null}

        <p className="text-xs tracking-[0.28em] uppercase text-white/60">
          {pack.label}
        </p>
        <h3 className="mt-3 text-2xl font-[500] tracking-tight text-white">
          {pack.name}
        </h3>

        <p className="mt-5 text-xs tracking-[0.28em] uppercase text-white/55">
          O que inclui
        </p>
        <ul className="mt-3 space-y-2">
          {pack.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/85">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[color:rgba(255,255,255,0.18)] bg-white/5">
                <FiCheck size={13} />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs tracking-[0.28em] uppercase text-white/55">
          Entregas
        </p>
        <ul className="mt-3 space-y-2">
          {pack.deliverables.map((d) => (
            <li key={d} className="text-sm text-[color:var(--z-muted)]">
              {d}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-white/55">
              Investimento
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              {pack.investment}
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={[
              'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium',
              'border transition-colors',
              isFeatured
                ? 'border-[color:rgba(215,181,109,0.65)] bg-[color:rgba(215,181,109,0.22)] text-white hover:bg-[color:rgba(215,181,109,0.30)]'
                : 'border-[color:var(--z-border)] bg-white/5 text-white/90 hover:bg-white/10',
            ].join(' ')}
          >
            Solicitar Orçamento
          </a>
        </div>
      </GlassCard>
    </MotionInView>
  )
}

PackageCard.propTypes = {
  pack: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    deliverables: PropTypes.arrayOf(PropTypes.string).isRequired,
    investment: PropTypes.string.isRequired,
    featured: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default function Packages() {
  return (
    <Section id="pacotes">
      <SectionHeading
        title={siteConfig.packages.title}
        subtitle="Escolha o pacote ideal para o seu dia, com entregas pensadas para emocionar."
      />

      <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
        {siteConfig.packages.items.map((pack, idx) => (
          <PackageCard key={pack.label} pack={pack} index={idx} />
        ))}
      </div>

      <MotionInView delay={0.08}>
        <div className="mt-10">
          <GlassCard className="p-7 sm:p-8">
            <p className="text-xs tracking-[0.28em] uppercase text-white/60">
              {siteConfig.packages.paymentTermsTitle}
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.packages.paymentTerms.map((t) => (
                <li key={t} className="text-sm text-[color:var(--z-muted)]">
                  {t}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </MotionInView>
    </Section>
  )
}

