import Link from 'next/link'

const links = [
  {
    href: '#',
    label: 'Apple',
    image: {
      dark: '/images/apple-logo.svg',
      light: '/images/apple-logo-white.svg'
    },
  },
  {
    href: '#',
    label: 'Spotify',
    image: {
      dark: '/images/spotify-logo.svg',
      light: '/images/spotify-logo-white.svg'
    }
  }
]

export default function Footer({ backgroundColour }) {
  let footerTextColour
  let logo

  if (backgroundColour !== 'bg-yellow') {
    footerTextColour = 'text-white'
    logo = 'light'
  } else {
    footerTextColour = 'text-grey'
    logo = 'dark'
  }
  
  return (
    <footer className={`${backgroundColour} flex justify-center space-x-2 sm:space-x-6 h-8`}>
        <p className={`text-lg font-bold ${footerTextColour} tracking-widest`}>listen on: </p>
        <ul className={`${footerTextColour} flex items-center space-x-4 sm:space-x-8`}>
          {links.map(({ href, label, image }) => (
            <li key={`${href}${label}`}>
              <div className="flex space-x-2">
                <img src={image[logo]} width="20px" />
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
