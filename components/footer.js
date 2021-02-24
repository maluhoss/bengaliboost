const links = [
  // when other podcast platforms approve
  {
    href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNjI4OTk1LnJzcw==',
    label: 'Google',
    image: {
      dark: '/images/googlepod-logo.svg',
      light: '/images/googlepod-logo-white.svg'
    },
  },
  {
    href: 'https://podcasts.apple.com/ca/podcast/bengali-boost/id1554784486',
    label: 'Apple',
    image: {
      dark: '/images/applepod-logo.svg',
      light: '/images/applepod-logo-white.svg'
    },
  },
  {
    href: 'https://open.spotify.com/show/4ja6SVgUoUOPeCG3grIHzB',
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
    <footer className={`${backgroundColour} flex justify-center space-x-2 sm:space-x-6 h-10 max-h-10`}>
      <p className={`text-base sm:text-lg font-bold ${footerTextColour} tracking-widest my-auto`}>listen on: </p>
      <div className={`${footerTextColour} flex items-center space-x-4 sm:space-x-8 my-auto`}>
        {links.map(({ href, label, image }) => (
            <div key={label} className="flex">
              <a target="_blank" href={href} className={`${footerTextColour} flex text-base sm:text-lg no-underline font-bold my-auto`}>
                <img src={image[logo]} className="w-6 h-6 mr-2" />
                <p>{label}</p>
              </a>
            </div>
        ))}
      </div>
    </footer>
  )
}
