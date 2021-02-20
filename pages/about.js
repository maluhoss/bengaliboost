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
              <p className="text-center sm:text-left max-w-md tracking-widest leading-tight text-base lg:text-xl text-white font-bold">
              We are a hub for Bengali artists*.
              </p>
              <p className="mx-auto text-center sm:text-left max-w-md tracking-widest leading-tight text-sm md:text-sm lg:text-base text-white font-semibold">
              We want to see more Bengalis make great stuff so we want to 1) make it easier for artists to learn from each other and 2) feel like there's a community  where they can share, make mistakes, get feedback, collab, learn, find support and just have fun. <br/><br/> Whether you've been making art for a while or just getting started, there's something here for you. 🎉
              </p>
              <p className="mx-auto text-center sm:text-left max-w-md tracking-widest leading-tight text-xs md:text-xs lg:text-sm text-white font-semibold">
              *Our definition of an artist is someone who adds their expression to something and it can be shared with the world
              </p>
            </div>
            <img src="/images/crowd.svg" className="sm:ml-4 m-auto min-w-image-sm sm:min-w-image-lg w-32 h-32 sm:h-2/6 sm:w-2/6" />
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
