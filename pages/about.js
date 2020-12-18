import Nav from '../components/nav'
import Footer from '../components/footer'

export default function About() {
  const backgroundColour = 'bg-grey'
  return (
    <>
      <Nav />
        <div className={`w-full h-adjust px-3.5 sm:px-10 ${backgroundColour}`}>
          <div className="flex justify-center content-center min-h-adjust flex-wrap sm:flex-nowrap md:p-10">
            <div className="mx-auto flex flex-col justify-center content-center space-y-4 sm:space-y-5 px-4 py-8 lg:px-4 lg:py-0">
              <h1 className="text-center sm:text-left max-w-md tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-yellow font-bold">
                about
              </h1>
              <p className="mx-auto text-center sm:text-left max-w-md tracking-widest leading-tight text-sm md:text-base lg:text-2xl text-white font-bold">
                Bengali Boost is all about boosting 🚀 the people, stories, parts of our culture that inspire us.
              </p>
              <p className="mx-auto text-center sm:text-left max-w-md tracking-widest leading-tight text-xs md:text-xs lg:text-sm text-white font-bold">
                Bengali Boost was born in the weird times of 2020 when we found ourselves searching for community, masks and sanitizer, forgetting we were on mute, grappling with big issues like health, isolation, racism, and trying to figure out how our culture both helps us and hinders us. Despite the tough times we were inspired by the artists, innovators, storytellers and brave Bengalis who were and still are changing the world. Bengali Boost is about them and it's about figuring out what a future Bengali-diaspora culture could look like.
              </p>
            </div>
            <img src="/images/crowd.svg" className="sm:ml-4 m-auto min-w-image-sm sm:min-w-image-lg w-32 h-32 sm:h-2/6 sm:w-2/6" />
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
