import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeader from '../sectionElements/SectionHeader'
import { useTranslation } from 'react-i18next'
import CardsPilar from '../cards/CardsPilar'
import content from '../../content/content'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import { Eye, Gem, Target } from 'lucide-react'
import EscritoriosCard from '../cards/EscritoriosCard'

function Offices({ colorMode }) {
  const { t } = useTranslation()

  // Classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgSectionOpacityLight',
    default: 'bg-bgSectionDark',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-secondary',
    default: 'text-white',
  }

  const bgClass = bgClasses[colorMode] || bgClasses.default
  const titleColor = textClasses[colorMode] || textClasses.default

  return (
    <div>
      <SectionArea className={`${bgClass}`}>
        <SectionWrapper>
          <SectionHeader
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            miniTitle={t('office.miniTag')}
            sectionHeaderTitle={t('office.title')}
            type=""
            titleColorSet={titleColor}
          />

          <div className="flex flex-wrap gap-4 justify-center">
            <MotionDivDownToUp>
              <EscritoriosCard
                icon={<Target />}
                title={t('office.cards.card1.title')}
                paragraph={t('office.cards.card1.description')}
              ></EscritoriosCard>
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <EscritoriosCard
                icon={<Eye />}
                title={t('office.cards.card2.title')}
                paragraph={t('office.cards.card2.description')}
              ></EscritoriosCard>
            </MotionDivDownToUp>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  )
}

export default Offices
