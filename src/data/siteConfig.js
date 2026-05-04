export const siteConfig = {
  brand: {
    name: 'Zanotti Filmes',
    logoSrc: './logo.png',
    signature: 'Por Pablo e Mari',
    slogan: 'Filmes de casamento que captam a essência',
    location: 'Uberlândia e região',
  },
  seo: {
    title: 'Zanotti Filmes | Filmes de casamento que captam a essência',
    description:
      'Produções cinematográficas emocionais e atemporais para casamentos em Uberlândia e região. Filme com olhar artístico, sensível e cinematográfico.',
  },
  contact: {
    whatsapp: {
      phoneE164: '5534999904471',
      display: '+55 34 99990-4471',
      defaultMessage:
        'Olá! Gostaria de solicitar um orçamento para filme de casamento. Podemos conversar?',
    },
    instagram: {
      handle: '@zanottifilmes',
      url: 'https://www.instagram.com/zanottifilmes',
    },
  },
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Pacotes', href: '#pacotes' },
    { label: 'Extras', href: '#extras' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contato', href: '#contato' },
  ],
  hero: {
    headline: 'Transformamos momentos únicos em filmes eternos.',
    subheadline:
      'Produções cinematográficas que eternizam a essência do seu grande dia.',
    ctaPrimary: 'Falar no WhatsApp',
    ctaSecondary: 'Ver pacotes',
    background: {
      type: 'image',
      imageSrc: './foto1.JPEG',
      overlayOpacity: 0.62,
    },
    highlights: [
      'Olhar cinematográfico',
      'Sensibilidade e romantismo',
      'Entrega premium',
    ],
  },
  about: {
    title: 'Quem Somos',
    text:
      'A Zanotti Filmes é especializada na criação de filmes emocionais e atemporais, registrando momentos únicos com um olhar artístico, sensível e cinematográfico. Cada projeto é tratado de forma exclusiva, garantindo um resultado sofisticado e autêntico.',
    tagline:
      'Uma dupla que acredita em filmes com verdade, estética e emoção — sem excessos, com intenção.',
    imageSrc: './fotoCasal.PNG',
    imageAlt: 'Pablo e Mari — Zanotti Filmes',
  },
  services: {
    title: 'Serviços',
    items: [
      { title: 'Filmes de Casamento', description: 'Narrativas emocionais, estética cinematográfica e ritmo que prende do início ao fim.' },
      { title: 'Pré-Wedding', description: 'Uma sessão leve e romântica para contar o começo da história com poesia e verdade.' },
      { title: 'Save the Date', description: 'Um convite em forma de filme, com a identidade do casal e clima de cinema.' },
      { title: 'Making Of', description: 'A beleza dos bastidores, detalhes e emoções antes do “sim” — com cuidado e sensibilidade.' },
      { title: 'Reels Cinematográficos', description: 'Clipes verticais com linguagem moderna, elegantes e perfeitos para compartilhar.' },
      { title: 'Same Day Edit', description: 'Edição no mesmo dia para emocionar na recepção com uma prévia inesquecível.' },
      { title: 'Captação com Drone', description: 'Planos aéreos que ampliam a narrativa e elevam a experiência cinematográfica.' },
    ],
  },
  packages: {
    title: 'Pacotes',
    paymentTermsTitle: 'Condições de Pagamento',
    paymentTerms: [
      '20% no ato da assinatura do contrato',
      'Saldo restante na semana do casamento',
    ],
    items: [
      {
        name: 'Essencial',
        label: 'Pacote 01',
        features: ['2 cinegrafistas', '2 câmeras 4K', 'Making of da noiva', 'Cerimônia'],
        deliverables: ['Vídeo do making of (3–5 min)', 'Cerimônia completa', 'Short film (3–5 min)', 'Reels (até 1 min)'],
        investment: 'R$ 2.800,00',
        accent: 'gold',
      },
      {
        name: 'Premium',
        label: 'Pacote 02',
        features: ['2 cinegrafistas', '3 câmeras 4K', 'Ensaio pré-wedding', 'Making of do casal', 'Cerimônia', 'Recepção'],
        deliverables: ['Vídeo do ensaio (2–3 min)', 'Vídeo do making of (3–5 min)', 'Cerimônia completa', 'Vídeo da recepção (15–20 min)', 'Short film (3–5 min)'],
        investment: 'R$ 3.500,00',
        accent: 'gold',
        featured: true,
      },
      {
        name: 'Exclusive',
        label: 'Pacote 03',
        features: ['2 cinegrafistas', '3 câmeras 4K', 'Ensaio pré-wedding', 'Making of do casal', 'Cerimônia', 'Recepção'],
        deliverables: ['Save the Date (até 1 min)', 'Vídeo do ensaio (2–3 min)', 'Vídeo do making of (3–5 min)', 'Cerimônia completa', 'Vídeo da recepção (20–25 min)', 'Short film (3–5 min)', 'Reels do casamento (até 1 min)'],
        investment: 'R$ 4.500,00',
        accent: 'gold',
      },
    ],
  },
  extras: {
    title: 'Serviços Extras',
    items: [
      { title: 'Casamento civil em cartório', price: 'R$ 700,00' },
      { title: 'Civil + recepção', price: 'R$ 1.400,00' },
      { title: 'Drone', price: 'R$ 800,00' },
      { title: 'Same Day Edit', price: 'R$ 1.200,00' },
      { title: 'Reels adicional', price: 'R$ 200,00' },
      { title: 'Pré-Wedding avulso', price: 'R$ 800,00' },
    ],
  },
  travel: {
    title: 'Deslocamento',
    text:
      'Atendemos Uberlândia e região sem cobrança de taxa extra. Para outras localidades, avaliamos o deslocamento de acordo com a distância e custos envolvidos, sempre buscando a melhor solução para nossos clientes.',
  },
  instagram: {
    title: 'Instagram',
    subtitle: 'Acompanhe bastidores e histórias no nosso perfil oficial.',
    profileTitle: '@zanottifilmes',
    profileSubtitle: 'Zanotti Filmes',
    embedUrl: 'https://www.instagram.com/zanottifilmes/embed',
    buttonLabel: 'Ver no Instagram',
  },
  portfolio: {
    title: 'Portfólio',
    subtitle: 'Uma amostra do nosso olhar cinematográfico.',
    items: [
      {
        title: 'Filme de Casamento — Highlight',
        type: 'video',
        provider: 'youtube',
        url: '',
      },
      {
        title: 'Pré-Wedding — Teaser',
        type: 'video',
        provider: 'youtube',
        url: '',
      },
      {
        title: 'Same Day Edit — Reação',
        type: 'video',
        provider: 'youtube',
        url: '',
      },
    ],
  },
  testimonials: {
    title: 'Depoimentos',
    subtitle: 'Estrutura pronta para inserir depoimentos reais.',
    items: [
      {
        name: 'Cliente',
        role: 'Noivos',
        quote:
          'Depoimento em breve. A estrutura está pronta para você inserir avaliações reais do Instagram ou WhatsApp.',
      },
    ],
  },
  contactSection: {
    title: 'Contato',
    ctaEyebrow: 'Mensagem',
    cta: 'Vamos contar sua história em filme.',
    secondary:
      'Clique no WhatsApp para conversar com a gente e receber um orçamento personalizado.',
    primaryButton: 'Solicitar Orçamento',
  },
  footer: {
    quickLinksTitle: 'Links rápidos',
    socialTitle: 'Redes',
    copyrightPrefix: '©',
  },
}

export function buildWhatsAppLink(phoneE164, message) {
  const text = encodeURIComponent(message || '')
  const query = text ? `?text=${text}` : ''
  return `https://wa.me/${phoneE164}${query}`
}

