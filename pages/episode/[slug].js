import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Head from 'next/head'
import moment from 'moment'
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default function IndividualEpisode({ details }) {
  const backgroundColour = 'bg-grey'

  return (
    <>
      <Head>
        <title>{`${details['fields']['episodeTitle']} | Bengali Boost`}</title>
      </Head>
      <Nav />
      <div className={`w-full h-adjust overflow-auto px-10 ${backgroundColour}`}>
        <div className="flex justify-center content-center min-h-adjust flex-wrap md:flex-nowrap md:p-10">
          <div className="mx-auto flex flex-col justify-center content-center space-y-4 md:space-y-5 py-8 px-4 lg:py-0">
            <h1 className="text-center md:text-left max-w-md tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-yellow font-bold">
            {details['fields']['episodeTitle']}
            </h1>
            <p className="text-center md:text-left max-w-md text-base lg:text-xl tracking-widest leading-tight text-white font-bold">
            {moment(details['fields']['publishedDate']).format('MMMM Do, YYYY')}
            </p>
            <p className="text-center md:text-left max-w-md tracking-widest leading-tight text-xs md:text-xs lg:text-sm text-white font-semibold">
            {details['fields']['episodeDescription']}
            </p>
            <p className="text-center md:text-left max-w-md text-base lg:text-xl tracking-widest leading-tight text-yellow font-bold">
            Guest Info
            </p>
            <p className="text-center md:text-left max-w-md tracking-widest leading-tight text-xs md:text-xs lg:text-sm text-white font-semibold">
            {details['fields']['guestDescription']}
            </p>
            {(details['fields']['glossaryPost'] || details['fields']['recapPost']) ?
              <div className="pt-5 justify-center md:justify-start flex items-center space-x-4 md:space-x-8 my-auto">
                {details['fields']['glossaryPost'] ?
                  <button className="tracking-widest font-semibold text-base md:text-2xl text-white bg-red rounded-2xl py-2 px-4">
                    Glossary
                  </button>
                  : ''
                }
                {details['fields']['recapPost'] ?
                  <button className="tracking-widest font-semibold text-base md:text-2xl text-white bg-red rounded-2xl py-2 px-4">
                    Recap
                  </button>
                  : ''
                }
              </div>
              : ''
            }
          </div>
          <img src={`https:${details['fields']['guestPicture']['fields']['file']['url']}`} className="rounded-2xl md:ml-4 m-auto min-w-image-sm md:min-w-image-lg w-64 h-64 md:h-2/6 md:w-2/6" />
        </div>
        <div className="flex justify-center content-center flex-wrap md:flex-nowrap py-5 md:p-10">
          <div className="w-full sm:w-9/12 lg:w-6/12 xl:w-5/12 mx-auto flex flex-col justify-center content-center space-y-4 md:space-y-5 py-8 px-4 lg:py-0">
            <h1 className="text-center md:text-left max-w-md tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-yellow font-bold">
              Listen to the episode
            </h1>
            <p className="text-center md:text-left max-w-md tracking-widest leading-tight text-xs md:text-xs lg:text-sm text-white font-semibold">
            To start at a chapter, click on the list icon and choose a chapter
            </p>
            <p className="text-center md:text-left max-w-md tracking-widest leading-tight text-xs md:text-xs lg:text-sm text-white font-semibold">
            If you can't see the list icon, click <a className="hover:text-orange text-yellow" target="_blank" href={details['fields']['embedPlayerUrlBackup']}>here</a>
            </p>
          </div>
          <iframe className="rounded-2xl bg-white md:ml-4 m-auto min-w-image-lg md:min-w-image-lg w-96 md:w-2/6 mb-5" src={details['fields']['embedPlayerUrl']} scrolling="no" width="100%" height="200" frameBorder="0"></iframe>
        </div>
      </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}

export async function getStaticPaths() {
  const episodes = await client.getEntries()

  const paths = episodes.items.map((episode) => ({
    params: { slug: episode.fields.urlSlug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const episodes = await client.getEntries({'content_type': 'episodeBlock'})

  const [details] = episodes.items.filter((episode) => (
    episode.fields.urlSlug === params.slug
  ))

  return {
    props: { details }
  }
}