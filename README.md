# Zanotti Filmes — Site Institucional (Front-end)

Site institucional premium, moderno e responsivo para **Zanotti Filmes**, com estética cinematográfica (tons escuros + dourado), animações suaves e foco em conversão para WhatsApp.

## Stack

- **React** (Vite)
- **Tailwind CSS v4** (via plugin `@tailwindcss/vite`)
- **Framer Motion** (animações)
- **react-helmet-async** (SEO básico)
- **react-icons** (ícones)

## Como executar

Pré-requisitos: **Node.js** (recomendado LTS) e **npm**.

Instalar dependências:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Pré-visualizar o build:

```bash
npm run preview
```

## Onde editar o conteúdo do site

Todo o conteúdo textual e dados editáveis do site ficam centralizados em:

- `src/data/siteConfig.js`

Isso inclui:
- nome/slogan/assinatura
- links de WhatsApp e Instagram
- textos das seções
- serviços, pacotes, extras e condições de pagamento
- textos de deslocamento, CTA e rodapé

## Estrutura (principal)

```text
src/
 ├── assets/
 ├── components/
 ├── data/
 │   └── siteConfig.js
 ├── pages/
 │   └── Home.jsx
 ├── App.jsx
 └── main.jsx
```

## Observações

- Projeto **somente front-end** (sem back-end e sem banco).
- SEO básico está configurado em `index.html` e complementado via Helmet nos componentes/páginas.
