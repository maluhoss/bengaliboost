import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import Link from 'next/link'
import moment from 'moment'
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})


export default function Episodes({ episodes }) {
  const backgroundColour = 'bg-red'

  const episodeBlockStyle = (episodes.length < 3) ? 'flex justify-center' : ''

  return (
    <>
      <Head>
        <title>Episodes | Bengali Boost</title>
      </Head>
      <Nav />
        <div className={`w-full h-adjust overflow-auto px-5 md:px-10 ${backgroundColour}`}>
          <div className="flex flex-col min-h-adjust justify-center py-10 sm:p-10 content-center my-auto">
            <div className="flex flex-col space-y-5 justify-center m-auto w-11/12">
              <h1 className="text-center tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                episodes
              </h1>
              <div className="w-full mx-auto space-y-3">
                <h2 className="text-center tracking-widest leading-tight text-xl md:text-2xl lg:text-3xl text-white font-bold">Season 1</h2>
                <div className={`mx-auto max-w-3xl ${episodeBlockStyle}`}>
                {episodes.map((entry) => (
                    <div key={entry['fields']['urlSlug']} className="px-2 py-4 space-y-3 w-full md:w-1/2 lg:w-1/3 inline-block">
                      <Link href={`/episode/${entry['fields']['urlSlug']}`}>
                        <a className="block">
                          <img src={`https:${entry['fields']['titleWithImage']['fields']['file']['url']}`} className="rounded-t-2xl bg-grey max-w-xs w-60 h-60 m-auto" />
                        </a>
                      </Link>
                      <Link href={`/episode/${entry['fields']['urlSlug']}`}>
                        <a className="block">
                          <button className="rounded-b-2xl block w-60 text-black font-semibold text-center m-auto bg-yellow p-2 no-underline">{entry['fields']['episodeTitle']}</button>
                        </a>
                      </Link>
                      <p className="w-60 text-white font-semibold text-center m-auto">{moment(entry['fields']['publishedDate']).format('MMMM Do, YYYY')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}


export async function getStaticProps(context) {
  const episodes = await client.getEntries({'content_type': 'episodeBlock'})

  return {
    props: { 'episodes': episodes['items']}
  }
}