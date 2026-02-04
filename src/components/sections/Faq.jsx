import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Paragraphs from '../sectionElements/Paragraphs'
import SectionArea from '../sectionElements/SectionArea'
import SectionHeader from '../sectionElements/SectionHeader'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import SectionWrapper from '../sectionElements/SectionWrapper'
import AccordionExpandDefault from '../interactives/AcordionTwo'
import Button from '../interactives/Button'
import content from '../../content/content'

export default function Faq({ colorMode }) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // Classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgFixedLight',
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
    <SectionArea id="faq" className={`${bgClass}`}>
      <SectionHeader
        colorMode="dark"
        className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
        miniTitle={t('faq.miniTag')}
        sectionHeaderTitle={t('faq.title')}
        sectionHeaderSubtitle={t('faq.subtitle')}
        titleColorSet={titleColor}
        subtitleColorSet={titleColor}
      />
      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="flex justify-center w-full">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
            <AccordionExpandDefault />
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <Paragraphs className={`text-center transition`}>
            <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              }
              className="hoover:scale-0 desktop1:hover:scale-10 transition-all duration-300"
              label={t('faq.paragraph')}
              onClick={() => gtag_report_conversion()}
              colorMode={colorMode}
            />
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  )
}
