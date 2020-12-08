import Nav from '../components/nav'
import Footer from '../components/footer'

export default function IndexPage() {
  const backgroundColour = 'bg-yellow'
  return (
    <>
      <div>
        <Nav />
        <div className={`h-adjust flex py-6 px-16 space-x-4 ${backgroundColour}`}>
          <img src="/images/girl-listening.svg" className="max-w-full h-full w-3/6" />
          <div className="flex flex-col justify-center space-y-10 py-60">
            <h1 className="tracking-wide text-5xl text-grey font-bold">
              discover the untold stories of Bengalis who are changing the world
            </h1>
            <button className="button-cta w-96">listen to the latest episode</button>
          </div>
        </div>
        <Footer backgroundColour={backgroundColour} />
      </div>
    </>
  )
}
