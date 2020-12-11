import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Episodes() {
  const backgroundColour = 'bg-red'
  return (
    <>
      <Nav />
        <div className={`w-full h-adjust px-10 py-6 ${backgroundColour}`}>
          <div className="flex flex-wrap space-y-10 sm:space-y-0 sm:flex-nowrap sm:p-10">
            <div className="flex flex-col justify-center space-y-5 mx-auto">
              <h1 className="text-center max-w-sm sm:max-w-md tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                episodes
              </h1>
              <p className="mx-auto text-center sm:text-left max-w-sm sm:max-w-sm tracking-widest leading-tight text-sm sm:text-base md:text-xl text-white font-bold">
              season 1 coming soon
              </p>
            </div>
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
