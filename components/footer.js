import Link from 'next/link'

const links = [
  { href: '#', label: 'Apple', image: '/images/apple-logo.svg' },
  { href: '#', label: 'Spotify', image: '/images/spotify-logo.svg' },
]

export default function Footer() {
  return (
    <footer className="bg-transparent flex justify-center py-2 space-x-6 max-h-8">
        <p className="font-bold text-grey tracking-widest">listen on: </p>
        <ul className="text-grey flex items-center space-x-8">
          {links.map(({ href, label, image }) => (
            <li key={`${href}${label}`}>
              <div className="flex space-x-2">
                <img src={image} width="24px" />
                <a href={href} className="text-grey no-underline font-bold">
                  {label}
                </a>
              </div>
            </li>
          ))}
        </ul>
    </footer>
  )
}
