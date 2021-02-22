import Nav from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'
import Head from 'next/head'
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})


export default function IndexPage({ episodes }) {
  const backgroundColour = 'bg-yellow'
  const latest = episodes[0]

  return (
    <>
      <Head>
        <title>Bengali Boost</title>
      </Head>
      <Nav />
      <div className={`w-full h-adjust overflow-auto px-10 ${backgroundColour}`}>
        <div className="flex mx-auto justify-center content-center min-h-adjust flex-wrap space-y-4 sm:space-y-10 lg:space-y-0 sm:flex-nowrap sm:py-5">
          <img src="/images/rocket.gif" className="m-auto w-2/5 h-2/5 min-w-image-sm sm:h-1/6 sm:w-1/6" />
          <div className="flex flex-col justify-center space-y-5 sm:space-y-10 mx-auto">
            <h1 className="mx-auto text-center md:text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg tracking-widest leading-tight text-xl sm:text-2xl md:text-4xl lg:text-5xl text-grey font-bold">
              a hub for bengali artists
            </h1>
            <Link href={`/episode/${latest['fields']['urlSlug']}`}>
              <button className="tracking-widest font-semibold text-base md:text-2xl text-white bg-red rounded-2xl p-2">
                listen to the latest episode
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}

export async function getStaticProps(context) {
  const episodes = await client.getEntries({
    'content_type': 'episodeBlock', 'order':'-sys.createdAt'
  })

  return {
    props: { 'episodes': episodes['items']}
  }
}

