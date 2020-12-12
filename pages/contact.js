import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Contact() {
  const backgroundColour = 'bg-yellow'
  return (
    <>
      <Nav />
        <div className={`w-full h-adjust px-10 ${backgroundColour}`}>
          <div className="flex flex-wrap min-h-adjust space-y-10 sm:space-y-0 sm:flex-nowrap sm:p-10">
            <div className="flex flex-col justify-center mx-auto space-y-10">
              <div className=" space-y-7 lg:space-y-10">
                <h1 className="text-center max-w-sm sm:max-w-lg tracking-widest leading-tight text-4xl sm:text-5xl text-grey font-bold">
                  got something to say?
                </h1>
                <p className="mx-auto text-center max-w-sm sm:max-w-md tracking-widest leading-tight text-base sm:text-lg md:text-xl text-grey font-bold">
                  reach out to us whichever way works for you
                </p>
              </div>
              <div className="flex justify-center content-center justify-evenly">
                <a href="https://www.instagram.com/bengaliboost/" target="_blank">
                  <div className="p-5 sm:p-10 bg-white rounded-2xl">
                    <img src="/images/instagram-logo.svg" className="w-20" />
                  </div>
                </a>
                <a href="mailto:thebengaliboost@gmail.com">
                  <div className="p-5 sm:p-10 bg-white rounded-2xl">
                    <img src="/images/email-logo.svg" className="w-20" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
