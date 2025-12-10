export default function EscritoriosCard(props) {
  const { icon, title, paragraph, className, children, colorMode } = props

  // Definir classes de cor com base no modo
  const bgClasses = {
    dark: 'bg-buttonColor',
    light: 'bg-buttonColor',
    default: 'bg-buttonColor',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-black',
    default: 'text-black',
  }

  const bgClass = bgClasses[colorMode] || bgClasses.default
  const textClass = textClasses[colorMode] || textClasses.default

  return (
    <div
      className={`w-[250px] phone2:w-[305px] phone3:w-[360px] tablet1:h-auto tablet1:w-[390px] desktop1:max-w-[390px] flex flex-col items-center py-4 px-6 rounded-md bg-white shadow ${className}`}
    >
      <h1
        className={`h-auto mb-4 font-bold font-mainFont text-title1 text-center flex items-start  ${textClass}`}
      >
        {title}
      </h1>

      <p
        className={`text-center opacity-70 font-secondFont w-[90%] ${textClass}`}
      >
        {paragraph}
      </p>
      {children}
    </div>
  )
}
