import Link from 'next/link'

const links = [
  { href: 'http://localhost:3000/about', label: 'about' },
  { href: 'http://localhost:3000/episodes', label: 'episodes' },
  { href: 'http://localhost:3000/contact', label: 'send us a message' }
]

export default function Nav() {
  return (
    <nav className="bg-white shadow-md px-16 py-5">
      <ul className="flex items-center justify-between">
        <li>
          <Link href="/">
            <a className="text-grey no-underline font-bold tracking-widest text-4xl">
              bengali boost
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-10">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="text-grey no-underline btn-blue font-bold tracking-widest text-xl">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
