import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeader from '../sectionElements/SectionHeader'
import { useTranslation } from 'react-i18next'
import CardsPilar from '../cards/CardsPilar'
import content from '../../content/content'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import { Eye, Gem, Target } from 'lucide-react'

function Pilares({ colorMode }) {
  const { t } = useTranslation()

  // Classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgSectionOpacityLight',
    default: 'squares',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-secondary',
    default: 'text-black',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const titleColor = textClasses[colorMode] || textClasses.default

  return (
    <SectionArea className={`${bgClass}`}>
      <SectionWrapper>
        <SectionHeader
          className=" text-center  mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
          miniTitle={t('pilares.miniTag')}
          sectionHeaderTitle={t('pilares.title')}
          type=""
          miniTitleTextColor={`text-bgSectionDark`}
          titleColorSet={titleColor}
        />

        <div className="flex flex-wrap gap-4 justify-center">
          <MotionDivDownToUp>
            <CardsPilar
              icon={<Target />}
              title={t('pilares.cards.card1.cardTitle')}
              paragraph={t('pilares.cards.card1.cardDescription')}
            ></CardsPilar>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <CardsPilar
              icon={<Eye />}
              title={t('pilares.cards.card2.cardTitle')}
              paragraph={t('pilares.cards.card2.cardDescription')}
            ></CardsPilar>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <CardsPilar
              icon={<Gem />}
              title={t('pilares.cards.card3.cardTitle')}
              paragraph={t('pilares.cards.card3.cardDescription')}
            ></CardsPilar>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  )
}

export default Pilares
