import Nav from '../components/nav'
import Footer from '../components/footer'

export default function About() {
  const backgroundColour = 'bg-grey'
  return (
    <>
      <div>
        <Nav />
        <div className={`h-adjust flex py-6 px-16 space-x-4 ${backgroundColour}`}>
          <div className="flex flex-col justify-end space-y-10 py-60">
            <h1 className="tracking-wide text-4xl text-yellow font-bold">
              about
            </h1>
            <p className="text-white font-bold">
            we are a bunch of kids in Toronto that got super frustrated by the incredibly annoying opinions and negativity shown by Bengalis to other Bengalis so we decided to create a podcast that highlighted the amazingly cool things that Bengalis were doing so we can all be inspired and empowered and create the Bengali culture we wish to see in the world
            </p>
          </div>
          <img src="/images/girl-listening.svg" className="max-w-full h-full w-3/6 bg-yellow rounded-3xl" />
        </div>
        <Footer backgroundColour={backgroundColour} />
      </div>
    </>
  )
}
