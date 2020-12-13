import Nav from '../components/nav'
import Footer from '../components/footer'


export default function IndexPage() {
  const backgroundColour = 'bg-yellow'
  return (
    <>
      <Nav />
      <div className={`w-full h-adjust px-10 ${backgroundColour}`}>
        <div className="flex mx-auto justify-center content-center min-h-adjust flex-wrap space-y-4 sm:space-y-10 lg:space-y-0 sm:flex-nowrap sm:py-10">
          <img src="/images/boost-carousel-unscreen.gif" className="m-auto w-32 h-64 min-w-image-sm sm:h-1/6 sm:w-1/6" />
          <div className="flex flex-col justify-center space-y-5 sm:space-y-10 mx-auto">
            <h1 className="mx-auto text-center lg:text-left max-w-xs sm:max-w-md tracking-widest leading-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl text-grey font-bold">
              discover the untold stories of Bengalis who are changing the world
            </h1>
            <button className="tracking-widest font-semibold text-base md:text-2xl text-white bg-red rounded-full p-2">listen to the latest episode</button>
          </div>
        </div>
      </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
