import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'

export default function About() {
  const backgroundColour = 'bg-grey'
  return (
    <>
      <Head>
        <title>About | Bengali Boost</title>
      </Head>
      <Nav />
        <div className={`w-full h-adjust overflow-auto px-10 ${backgroundColour}`}>
          <div className="flex justify-center content-center min-h-adjust flex-wrap sm:flex-nowrap pb-5 md:p-10">
            <div className="mx-auto flex flex-col justify-center content-center space-y-4 sm:space-y-5 py-8 px-4 lg:py-0">
              <h1 className="text-center sm:text-left max-w-md tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-yellow font-bold">
                about
              </h1>
              <p className="mx-auto text-center sm:text-left max-w-md tracking-widest leading-tight text-base lg:text-xl text-white font-bold">
                Bengali Boost is all about boosting 🚀 the people, stories and parts of our culture that inspire us.
              </p>
              <p className="mx-auto text-center sm:text-left max-w-md tracking-widest leading-tight text-xs md:text-xs lg:text-sm text-white font-semibold">
              Bengali Boost was born in the weird times of 2020. After we stopped impulse-buying masks, sanitizer and toilet paper in bulk, we realized what we actually needed most was <span className="text-yellow font-bold">community.</span> <br/><br/> We were also grappling with big issues like health, racism, civic duty and trying to figure out how our <span className="text-yellow font-bold">culture</span> fits into it all. Despite the tough times we were inspired by the artists, innovators, storytellers and brave Bengalis making waves in the world. <br/><br/> Bengali Boost is about being recharged by their <span className="text-yellow font-bold">stories</span>, uplifting each other and figuring out what a future Bengali-diaspora culture could look like.
              </p>
            </div>
            <img src="/images/crowd.svg" className="sm:ml-4 m-auto min-w-image-sm sm:min-w-image-lg w-32 h-32 sm:h-2/6 sm:w-2/6" />
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
