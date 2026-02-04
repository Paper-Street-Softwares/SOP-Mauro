import { Instagram, Linkedin } from 'lucide-react'
import content from '../../content/content'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import SectionHeader from '../sectionElements/SectionHeader'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const sendToEmail = () => {
    setIsSubmitting(true)
    const validationErrors = {}

    if (!name) validationErrors.name = 'O campo Nome é obrigatório.'
    if (!phone) validationErrors.phone = 'O campo Telefone é obrigatório.'
    if (!email) validationErrors.email = 'O campo Email é obrigatório.'
    if (!message) validationErrors.message = 'O campo Mensagem é obrigatório.'

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    const templateParams = {
      name,
      phone,
      email,
      message,
    }

    emailjs
      .send(
        'service_zucfzjp', // substitua pelo seu Service ID
        'template_sfa6btl', // substitua pelo seu Template ID
        templateParams,
        'NNHBCrzRsLNcYMGdY', // substitua pela sua Public Key
      )
      .then(
        () => {
          alert('Mensagem enviada por email com sucesso!')
          gtag_report_conversion()

          setIsSubmitting(false)
          // Limpar campos
          setName('')
          setPhone('')
          setEmail('')
          setMessage('')
          setErrors({})
        },
        (error) => {
          alert('Erro ao enviar email: ' + error.text)
          setIsSubmitting(false)
        },
      )
  }

  return (
    <section className="w-full text-white py-16 font-secondFont bg-bgSectionDark">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12 items-center desktop1:items-start justify-between">
          <SectionHeader
            miniTitle={content.texts.form.minitag}
            sectionHeaderTitle={content.texts.form.title}
            sectionHeaderSubtitle={content.texts.form.subtitle}
            className="text-center"
            titleColorSet="text-white"
            subtitleColorSet="text-white/70"
          />

          {/* FORM */}
          <form className="space-y-6 w-full max-w-[500px] mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                {' '}
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full border font-mainFont italic border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value
                    setName(value.charAt(0).toUpperCase() + value.slice(1))
                  }}
                />
                {errors.name && (
                  <p className="text-red-500 mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                {' '}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border font-mainFont italic border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 mt-2">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full border border-gray-300 font-mainFont italic bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                id="phone"
                value={phone}
                onChange={(e) => {
                  let value = e.target.value

                  // Remove tudo que não seja número
                  value = value.replace(/\D/g, '')

                  // Limita a 11 dígitos (padrão celular brasileiro)
                  value = value.substring(0, 11)

                  // Aplica a formatação
                  if (value.length > 6) {
                    value = `(${value.substring(0, 2)}) ${value.substring(
                      2,
                      7,
                    )}-${value.substring(7)}`
                  } else if (value.length > 2) {
                    value = `(${value.substring(0, 2)}) ${value.substring(2)}`
                  } else if (value.length > 0) {
                    value = `(${value}`
                  }

                  setPhone(value)
                }}
              />
              {errors.phone && (
                <p className="text-red-500 mt-2">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Digite sua mensagem aqui..."
                className="w-full resize-none font-mainFont border italic border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                id="message"
                value={message}
                onChange={(e) => {
                  const value = e.target.value
                  setMessage(value.charAt(0).toUpperCase() + value.slice(1))
                }}
              />
              {errors.message && (
                <p className="text-red-500 mt-2">{errors.message}</p>
              )}
            </div>

            <button
              type="button"
              className="w-full bg-primary py-4 tracking-wide text-black transition duration-500 rounded-md hover:scale-105"
              onClick={sendToEmail}
              disabled={isSubmitting}
            >
              <p className="flex items-center gap-3 justify-center">
                {' '}
                <span>
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </span>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </p>
            </button>
          </form>

          {/* INFO */}
          {/* <div className="flex flex-col justify-start text-center desktop1:text-start space-y-3 text-sm desktop1:text-xl leading-relaxed text-gray-200">
            <p>
              {' '}
              <p>
                Av. Mendes Sá, 128, Sl. 202, Centro, <br />
                Rio de Janeiro - RJ, CEP: 20230-152
              </p>
            </p>

            <p>
              <span className="font-semibold">Email:</span>{' '}
              {content.texts.infos.emailSecundario}
            </p>

            <p>
              <span className="font-semibold">Tel:</span>{' '}
              {content.texts.infos.phone}
            </p>

            <div className="flex items-center m-auto desktop1:m-0 gap-4 pt-4">
              <a
                href={content.texts.links.instagram}
                aria-label="Instagram"
                className="transition hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="transition hover:text-blue-500"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
