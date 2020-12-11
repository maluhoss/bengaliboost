import Link from 'next/link'

const links = [
  { href: '#', label: 'Apple', image: '/images/apple-logo.svg' },
  { href: '#', label: 'Spotify', image: '/images/spotify-logo.svg' },
]

export default function Footer({ backgroundColour }) {
  const footerTextColour = (backgroundColour !== 'bg-yellow') ? 'text-white' : 'text-grey'

  return (
    <footer className={`${backgroundColour} flex justify-center py-2 space-x-6 h-8`}>
        <p className={`font-bold ${footerTextColour} tracking-widest`}>listen on: </p>
        <ul className={`${footerTextColour} flex items-center space-x-8`}>
          {links.map(({ href, label, image }) => (
            <li key={`${href}${label}`}>
              <div className="flex space-x-2">
                <img src={image} width="24px" />
                <a href={href} className={`${footerTextColour} no-underline font-bold`}>
                  {label}
                </a>
              </div>
            </li>
          ))}
        </ul>
    </footer>
  )
}
