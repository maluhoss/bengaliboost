import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Head from 'next/head'
import Image from 'next/image'
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
        <div className="flex flex-col justify-center content-center min-h-adjust flex-wrap md:flex-nowrap md:p-10">
          <div className="p-7 sm:p-10 flex flex-col justify-center mx-auto space-y-7 sm:space-y-10 max-w-md sm:max-w-4xl">
            <div className="space-y-3">
              <h1 className="text-center tracking-widest leading-tight text-4xl sm:text-5xl text-yellow font-bold">
              {details['fields']['episodeTitle']}
              </h1>
              <p className="text-center text-2xl sm:text-3xl tracking-widest leading-tight text-yellow font-bold">
              {moment(details['fields']['publishedDate']).format('MMMM Do, YYYY')}
              </p>
            </div>
            <p className="text-center tracking-widest leading-tight text-lg text-white rounded-2xl font-semibold">
            {details['fields']['episodeDescription']}
            </p>
            <iframe className="rounded-2xl m-auto min-w-image-lg md:min-w-image-lg w-full md:w-full" src={details['fields']['embedPlayerUrl']} scrolling="no" width="100%" height="200" frameBorder="0"></iframe>
            <div className="text-center tracking-widest leading-tight text-xs md:text-xs lg:text-sm text-white font-semibold">
              <span>To start at a chapter, hover over the embed player, click on the </span>
              <Image className="m-auto inline-block mb-3" width="25" height="25" src="/images/list.png" />
              <span> icon and choose a chapter. If you can't see the </span>
              <Image className="m-auto inline-block mb-3" width="25" height="25" src="/images/list.png" />
              <span> icon, click </span><a className="hover:text-orange text-yellow" target="_blank" href={details['fields']['embedPlayerUrlBackup']}>here</a>
            </div>
            {(details['fields']['glossaryPost'] || details['fields']['recapPost']) ?
              <div className="space-y-4">
                {details['fields']['glossaryPost'] ?
                  <button className="block w-full tracking-widest font-semibold text-base md:text-2xl text-white bg-red rounded-2xl py-2 px-4">
                    Word Guide
                  </button>
                  : ''
                }
                {details['fields']['recapPost'] ?
                  <button className="block w-full tracking-widest font-semibold text-base md:text-2xl text-white bg-red rounded-2xl py-2 px-4">
                    Recap
                  </button>
                  : ''
                }
              </div>
              : ''
            }
            <p className="text-center text-2xl sm:text-3xl tracking-widest leading-tight text-yellow font-bold">
              Guest Info
            </p>
            <div className="sm:flex space-y-5 sm:space-y-0">
              <img src={`https:${details['fields']['guestPicture']['fields']['file']['url']}`} className="m-auto rounded-2xl w-full sm:w-5/12 sm:h-full mr-0 sm:mr-4" />
              <p className="tracking-widest leading-tight text-lg text-white rounded-2xl font-semibold text-center sm:text-left">
              {details['fields']['guestDescription']}
              </p>
            </div>
          </div>
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