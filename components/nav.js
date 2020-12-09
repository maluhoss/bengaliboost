import Link from 'next/link'
import React, { useState } from 'react'

const links = [
  { href: '/about', label: 'about' },
  { href: '/episodes', label: 'episodes' },
  { href: '/contact', label: 'send us a message' }
]

export default function Nav() {
  const [showMe, setShowMe] = useState(false)

  const toggle = () => {
    setShowMe(!showMe)
  }

  // modified from: https://tailwindui.com/components/application-ui/navigation/navbars
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={toggle} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-grey hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`${(!showMe) ? 'block' : 'hidden' } h-6 w-6" xmlns="http://www.w3.org/2000/svg`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${(!showMe) ? 'hidden' : 'block' } h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="/images/apple-logo.svg" alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto" src="/images/apple-logo.svg" alt="Workflow" />
              <Link href="/">
                <a className="text-2xl lg:text-4xl text-grey no-underline font-bold tracking-widest">
                  bengali boost
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {links.map((link) => (
                  <a href={link.href} className="text-grey hover:bg-grey hover:bg-opacity-20 hover:text-grey px-3 py-2 rounded-md text-sm md:text-base lg:text-xl font-bold tracking-widest">{link.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${(!showMe) ? 'hidden' : 'block' } sm:${(!showMe) ? 'hidden' : 'block' }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-grey">
          {links.map((link) => (
            <a href={link.href} className="text-white hover:bg-black hover:bg-opacity-50 block px-3 py-2 rounded-md text-base font-semibold tracking-widest">{link.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
