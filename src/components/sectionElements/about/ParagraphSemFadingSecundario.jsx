import Paragraphs from '../Paragraphs'
import { useTranslation, Trans } from 'react-i18next'

export default function ParagraphSemFadingSecundario() {
  const { t } = useTranslation()

  return (
    <Paragraphs className="text-white text-opacity-80 text-paragraph2 desktop1:text-paragraph3">
      <Trans i18nKey="about.modalSecundario" components={{ br: <br /> }} />
    </Paragraphs>
  )
}
