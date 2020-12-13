import Nav from '../components/nav'
import Footer from '../components/footer'

export default function About() {
  const backgroundColour = 'bg-grey'
  return (
    <>
      <Nav />
        <div className={`w-full h-adjust px-10 ${backgroundColour}`}>
          <div className="flex justify-center content-center min-h-adjust flex-wrap sm:flex-nowrap md:p-10">
            <div className="mx-auto flex flex-col justify-center content-center space-y-5 px-4 py-8 lg:px-4 lg:py-0">
              <h1 className="text-center lg:text-left max-w-sm sm:max-w-md tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-yellow font-bold">
                about
              </h1>
              <p className="mx-auto text-center lg:text-left max-w-sm tracking-widest leading-tight text-base md:text-lg lg:text-2xl text-white font-bold">
              we are a group of Bengali friends, creatives, dreamers, people who hashtag maybe a little to much, trying to figure out what parts of our past and culture to boost and what parts to move on from
              </p>
            </div>
            <img src="/images/crowd.svg" className="sm:ml-4 m-auto min-w-image-sm sm:min-w-image-lg w-64 h-64 sm:h-2/6 sm:w-2/6" />
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
