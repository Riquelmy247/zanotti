import { Helmet } from 'react-helmet-async'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Packages from '../components/Packages.jsx'
import Extras from '../components/Extras.jsx'
import InstagramFeed from '../components/InstagramFeed.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
      </Helmet>

      <div className="min-h-dvh">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Packages />
          <Extras />
          <InstagramFeed />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </>
  )
}

