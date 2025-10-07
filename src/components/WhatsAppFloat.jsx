export default function WhatsAppFloat(){
  const phone = '+243990639382'
  const msg = encodeURIComponent('Bonjour SHIMLA, je vous contacte depuis le site web.')
  return (
    <a
      href={`https://wa.me/${phone.replace(/\D/g,'')}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-6 z-50 flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.478A11.873 11.873 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.116.555 4.082 1.603 5.826L0 24l6.39-1.66A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.98-.452-3.856-1.48-5.372z"/>
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
