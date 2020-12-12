import Nav from '../components/nav'
import Footer from '../components/footer'

export default function About() {
  const backgroundColour = 'bg-grey'
  return (
    <>
      <Nav />
        <div className={`w-full h-adjust px-10 ${backgroundColour}`}>
          <div className="flex mx-auto justify-center content-center min-h-adjust flex-wrap space-y-4 sm:space-y-10 lg:space-y-0 lg:flex-nowrap md:p-10">
            <div className="flex flex-col justify-center space-y-5 mx-auto px-4">
              <h1 className="text-center lg:text-left max-w-sm sm:max-w-md tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-yellow font-bold">
                about
              </h1>
              <p className="mx-auto text-center lg:text-left max-w-sm tracking-widest leading-tight text-sm md:text-base lg:text-xl text-white font-bold">
              we are a bunch of kids in Toronto that got super frustrated by the incredibly annoying opinions and negativity shown by Bengalis to other Bengalis so we decided to create a podcast that highlighted the amazingly cool things that Bengalis were doing so we can all be inspired and empowered and create the Bengali culture we wish to see in the world
              </p>
            </div>
            <img src="/images/girl-listening.svg" className="mx-auto w-64 md:w-2/6 bg-white" />
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
      {/* <Nav />
        <div className={`w-full h-screen px-10 py-6 ${backgroundColour}`}>
          <div className="flex flex-wrap space-x-10 space-y-10 sm:space-y-0 sm:flex-nowrap sm:py-10">
            <div className="flex flex-col justify-center space-y-5 mx-auto">
              <h1 className="text-center sm:text-left max-w-sm sm:max-w-md tracking-widest leading-tight text-xl sm:text-3xl md:text-4xl lg:text-4xl text-yellow font-bold">
                about
              </h1>
              <p className="mx-auto text-center sm:text-left max-w-sm sm:max-w-sm tracking-widest leading-tight text-sm sm:text-base md:text-xl text-white font-bold">
              we are a bunch of kids in Toronto that got super frustrated by the incredibly annoying opinions and negativity shown by Bengalis to other Bengalis so we decided to create a podcast that highlighted the amazingly cool things that Bengalis were doing so we can all be inspired and empowered and create the Bengali culture we wish to see in the world
              </p>
            </div>
            <img src="/images/girl-listening.svg" className="bg-white mx-auto w-64 sm:w-2/4" />
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} /> */}

      {/* <div>
        <Nav />
        <div className={`h-adjust flex py-6 px-16 space-x-4 ${backgroundColour}`}>
          <div className="flex flex-col justify-end space-y-10 py-60">
            <h1 className="tracking-wide text-4xl text-yellow font-bold">
              about
            </h1>
            <p className="text-white font-bold">
            
            </p>
          </div>
          <img src="/images/girl-listening.svg" className="max-w-full h-full w-3/6 bg-yellow rounded-3xl" />
        </div>
        <Footer backgroundColour={backgroundColour} />
      </div> */}
    </>
  )
}
