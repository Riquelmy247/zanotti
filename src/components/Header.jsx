import { useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  const whatsappHref = useMemo(() => {
    return buildWhatsAppLink(
      siteConfig.contact.whatsapp.phoneE164,
      siteConfig.contact.whatsapp.defaultMessage,
    )
  }, [])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    globalThis.addEventListener('keydown', onKeyDown)
    return () => globalThis.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--z-border)] bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group inline-flex items-center gap-3 text-left"
          aria-label={`${siteConfig.brand.name} - Início`}
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[color:var(--z-border)] bg-white/5 sm:h-11 sm:w-11">
            <img
              src={siteConfig.brand.logoSrc}
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-contain p-1"
              decoding="async"
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-white">
              {siteConfig.brand.name}
            </p>
            <p className="text-xs tracking-wide text-[color:var(--z-muted)]">
              {siteConfig.brand.signature}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--z-muted)] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[color:rgba(215,181,109,0.35)] bg-[color:var(--z-gold-soft)] px-4 py-2 text-sm font-medium text-white hover:border-[color:rgba(215,181,109,0.6)] hover:bg-[color:rgba(215,181,109,0.22)] transition-colors"
          >
            Solicitar Orçamento
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-[color:var(--z-border)] bg-white/5 p-2 text-white lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-[color:var(--z-border)] bg-black/60 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-transparent px-3 py-2 text-sm text-white/90 hover:border-[color:var(--z-border)] hover:bg-white/5 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-xl border border-[color:rgba(215,181,109,0.35)] bg-[color:var(--z-gold-soft)] px-4 py-3 text-sm font-medium text-white hover:border-[color:rgba(215,181,109,0.6)] hover:bg-[color:rgba(215,181,109,0.22)] transition-colors"
                onClick={() => setOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

