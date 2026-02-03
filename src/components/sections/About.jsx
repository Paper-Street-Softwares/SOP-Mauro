import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionArea from '../sectionElements/SectionArea'
import 'react-image-gallery/styles/css/image-gallery.css'
import SectionHeader from '../sectionElements/SectionHeader'
import AboutModal from '../sectionElements/about/AboutModal'
import SectionWrapper from '../sectionElements/SectionWrapper'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import ParagraphSemFading from '../sectionElements/about/ParagraphSemFading'
import ParagraphWithFading from '../sectionElements/about/ParagraphWithFading'
import content from '../../content/content'
import GalleryAbout from '../sectionElements/about/GalleryAbout'
import Button from '../interactives/Button'
import ParagraphSemFadingSecundario from '../sectionElements/about/ParagraphSemFadingSecundario'

export default function About({ modal = true, showGallery, colorMode }) {
  const { t } = useTranslation()

  // Classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgFixedLight',
    default: 'bg-bgSectionDark',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-secondary',
    default: 'text-white',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const titleColor = textClasses[colorMode] || textClasses.default
  const subtitleColor =
    colorMode === 'light' ? 'text-secondary/80' : 'text-white/80'

  // Puxando apenas textos via i18n
  const aboutText = t('about', { returnObjects: true })

  return (
    <SectionArea
      id="about"
      className={`${bgClass} transition-colors duration-1000`}
    >
      <SectionWrapper className="flex flex-col  gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <SectionHeader
          className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
          miniTitle={aboutText.miniTag}
          sectionHeaderTitle={aboutText.title}
          sectionHeaderSubtitle={aboutText.subtitle}
          color={colorMode}
          type=""
          titleColorSet={titleColor}
          subtitleColorSet={subtitleColor}
        />
        <div className="flex flex-col desktop1:flex-row gap-12 w-full justify-around items-center">
          <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
            {showGallery ? (
              <GalleryAbout />
            ) : (
              <picture>
                <source
                  srcSet={content.texts.about.imagem.imagemMobile}
                  media="(max-width: 424px)"
                />
                <img
                  src={content.texts.about.imagem.img}
                  alt={content.texts.about.imagem.alt}
                  width="576"
                  height="595"
                  className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/20"
                />
              </picture>
            )}
          </MotionDivDownToUp>

          <div className="desktop1:w-[550px] desktop2:w-[570px]">
            <MotionDivDownToUp>
              {modal ? (
                // <ParagraphWithFading colorMode={colorMode} />
                <ParagraphSemFading colorMode={colorMode} />
              ) : (
                <ParagraphSemFading colorMode={colorMode} />
              )}
              {modal && <AboutModal colorMode={colorMode} />}
            </MotionDivDownToUp>
          </div>
        </div>

        {/* <div className="flex flex-col desktop1:flex-row-reverse gap-12 mt-6 desktop1:mt-24 w-full justify-between items-center">
          <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
            {showGallery ? (
              <GalleryAbout />
            ) : (
              <picture>
                <source
                  srcSet={
                    content.texts.about.galeria.slide2.imgMobile.imgMobile2
                  }
                  media="(max-width: 424px)"
                />
                <img
                  src={content.texts.about.galeria.slide2.img.img2}
                  alt={content.texts.about.galeria.slide2.alt}
                  width="576"
                  height="595"
                  className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/20"
                />
              </picture>
            )}
          </MotionDivDownToUp>

          <div className="desktop1:w-[550px] desktop2:w-[570px]">
            <MotionDivDownToUp>
              {modal ? (
                // <ParagraphWithFading colorMode={colorMode} />
                <ParagraphSemFadingSecundario colorMode={colorMode} />
              ) : (
                <ParagraphSemFadingSecundario colorMode={colorMode} />
              )}
              {modal && <AboutModal colorMode={colorMode} />}
            </MotionDivDownToUp>
          </div>
        </div> */}
      </SectionWrapper>
    </SectionArea>
  )
}
