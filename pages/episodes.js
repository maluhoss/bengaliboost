import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Episodes() {
  const backgroundColour = 'bg-red'
  return (
    <>
      <Nav />
        <div className={`w-full h-adjust px-10 ${backgroundColour}`}>
          <div className="flex justify-center content-center min-h-adjust my-auto">
            <div className="flex flex-col space-y-5 justify-center m-auto">
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
