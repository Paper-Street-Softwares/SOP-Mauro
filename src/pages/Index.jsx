import { lazy } from 'react'
import Hero from '../components/sections/Hero'

import Navbar from '../components/sections/NavbarSocial'

import { useTranslation } from 'react-i18next'
import './../i18n'

import { useColorMode } from '../assets/context/ColorModeContext'
import Pilares from '../components/sections/Pilares'
import Offices from '../components/sections/Offices'
import FooterNovoTemplate from '../components/sections/FooterNovo'
import ContactForm from '../components/sections/ContactForm'

const Features = lazy(() => import('../components/sections/Features'))
const About = lazy(() => import('../components/sections/About'))
const Steps = lazy(() => import('../components/sections/Steps'))
const AboutInstagram = lazy(
  () => import('../components/sections/AboutInstagram'),
)
const BackToTopButton = lazy(
  () => import('../components/interactives/BackToTopButton'),
)
const BlogPosts = lazy(() => import('../components/sections/BlogPosts'))
const CtaSecondary = lazy(() => import('../components/sections/CtaSecondary'))
const FooterSocial = lazy(() => import('../components/sections/FooterSocial'))
const FloatingWhatsappButton = lazy(
  () => import('../components/interactives/FloatingWhatsappButton'),
)
const Faq = lazy(() => import('../components/sections/Faq'))

export default function Index() {
  const { colorMode, setColorMode } = useColorMode()
  const { t, i18n } = useTranslation()

  return (
    <>
      <Navbar colorMode={colorMode} />

      <main>
        {' '}
        <Hero
          colorMode={colorMode}
          appDownloadButtons={false}
          defaultHero={true}
          influencer={false}
          panoramica={false}
        />
        <Features
          colorMode={colorMode}
          defaultFeature={false}
          button={false}
          modalWithCards={false}
          paragraphs={false}
          sixCards={false}
          paragraphsModal={true}
          iconsWithModal={false}
        />
        <About modal={false} showGallery={false} colorMode={colorMode} />
        <Pilares />
        <AboutInstagram colorMode={colorMode} socialPrint={false} />
        {/* <Team /> */}
        <CtaSecondary colorMode={colorMode} />
        <ContactForm />
        <Steps colorMode={colorMode} />
        <BlogPosts />
        <Faq colorMode={colorMode} />
        <Offices />
        {/* <Maps colorMode={colorMode} /> */}
        {/* <FooterSocial
          colorMode={colorMode}
          addres={true}
          obs={false}
          expediente={true}
        /> */}
        <FooterNovoTemplate
          colorMode={colorMode}
          adress={true}
          adressTwo={true}
          expediente={true}
          fraseFooter={true}
        />
        <FloatingWhatsappButton />
        <BackToTopButton />
      </main>
    </>
  )
}
