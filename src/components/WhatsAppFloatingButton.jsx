import { FiMessageCircle } from 'react-icons/fi'
import { siteConfig, buildWhatsAppLink } from '../data/siteConfig.js'

export default function WhatsAppFloatingButton() {
  const href = buildWhatsAppLink(
    siteConfig.contact.whatsapp.phoneE164,
    siteConfig.contact.whatsapp.defaultMessage,
  )

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        'fixed bottom-5 right-5 z-50',
        'inline-flex items-center gap-2 rounded-full',
        'border border-[color:rgba(215,181,109,0.5)]',
        'bg-[color:rgba(215,181,109,0.18)] backdrop-blur-xl',
        'px-4 py-3 text-sm font-medium text-white',
        'shadow-[0_18px_60px_rgba(0,0,0,0.45)]',
        'hover:bg-[color:rgba(215,181,109,0.28)] hover:border-[color:rgba(215,181,109,0.75)]',
        'transition-colors',
      ].join(' ')}
      aria-label="Abrir conversa no WhatsApp"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/35">
        <FiMessageCircle size={18} />
      </span>
      <span className="hidden sm:inline">{siteConfig.hero.ctaPrimary}</span>
    </a>
  )
}

