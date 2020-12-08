import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Contact() {
  const backgroundColour = 'bg-yellow'
  return (
    <>
      <div>
        <Nav />
        <div className={`h-adjust flex py-6 px-16 space-x-4 ${backgroundColour}`}>
          <div className="justify-center items-center space-y-10 py-60">
            <h1 className="tracking-wide text-4xl text-grey font-bold">
              send us a message
            </h1>
            <p className="text-grey font-bold">
            coming soon!
            </p>
          </div>
        </div>
        <Footer backgroundColour={backgroundColour} />
      </div>
    </>
  )
}
