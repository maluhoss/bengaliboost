import Nav from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'


export default function IndexPage() {
  const backgroundColour = 'bg-yellow'
  return (
    <>
      <Nav />
      <div className={`w-full h-adjust px-10 ${backgroundColour}`}>
        <div className="flex mx-auto justify-center content-center min-h-adjust flex-wrap space-y-4 sm:space-y-10 lg:space-y-0 sm:flex-nowrap sm:py-10">
          <img src="/images/people-carousel.gif" className="m-auto w-2/5 h-2/5 min-w-image-sm sm:h-1/6 sm:w-1/6" />
          <div className="flex flex-col justify-center space-y-5 sm:space-y-10 mx-auto">
            <h1 className="mx-auto text-center lg:text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg tracking-widest leading-tight text-xl sm:text-2xl md:text-4xl lg:text-5xl text-grey font-bold">
              discover the untold stories of Bengalis who are changing the world
            </h1>
            <Link href="/episodes">
              <button className="tracking-widest font-semibold text-base md:text-2xl text-white bg-red rounded-full p-2">
                listen to the latest episode
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
