import { FiArrowUpRight } from 'react-icons/fi'
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = buildWhatsAppLink(
    siteConfig.contact.whatsapp.phoneE164,
    siteConfig.contact.whatsapp.defaultMessage,
  )

  return (
    <footer className="border-t border-[color:var(--z-border)] bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-lg font-medium tracking-tight text-white">
              {siteConfig.brand.name}
            </p>
            <p className="mt-2 text-sm text-[color:var(--z-muted)]">
              {siteConfig.brand.slogan}
            </p>
            <p className="mt-4 text-xs tracking-[0.28em] uppercase text-white/55">
              {siteConfig.brand.signature}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-white/60">
              {siteConfig.footer.quickLinksTitle}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-white/60">
              {siteConfig.footer.socialTitle}
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                href={siteConfig.contact.instagram.url}
                target="_blank"
                rel="noreferrer"
              >
                Instagram {siteConfig.contact.instagram.handle}
                <FiArrowUpRight />
              </a>
              <a
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp {siteConfig.contact.whatsapp.display}
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[color:var(--z-border)] pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteConfig.footer.copyrightPrefix} {year} {siteConfig.brand.name}. Todos
            os direitos reservados.
          </p>
          <p>{siteConfig.brand.location}</p>
        </div>
      </div>
    </footer>
  )
}

