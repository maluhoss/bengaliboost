const links = [
  // when other podcast platforms approve
  // {
  //   href: '#',
  //   label: 'Apple',
  //   image: {
  //     dark: '/images/apple-logo.svg',
  //     light: '/images/apple-logo-white.svg'
  //   },
  // },
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
              <img src={image[logo]} className="w-6 h-6 mr-2" />
              <a href={href} className={`${footerTextColour} text-base sm:text-lg no-underline font-bold my-auto`}>
                {label}
              </a>
            </div>
        ))}
      </div>
    </footer>
  )
}
