import Nav from '../components/nav'
import Footer from '../components/footer'
import EpisodeBlock from '../components/episode-block'
import Head from 'next/head'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'
// import Carousel from 'nuka-carousel'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
// import Carousel from 'react-bootstrap/Carousel'

export default function Episodes() {
  const backgroundColour = 'bg-red'

  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  const sliderItems = [
    {
      title: '20B+',
      message: 'Daily Online Interactions'
    },
    {
      title: '100K+',
      message: 'App Access through Syndication partnership'
    },
    {
      title: '2.4B+',
      message: 'Device Graph North America'
    },
    {
      title: '260+',
      message: 'Terabytes of Data Collected Monthly'
    },
    {
      title: '18M+',
      message: 'MAU Devices in Canada'
    }
  ]

  return (
    <>
      <Head>
        <title>Episodes | Bengali Boost</title>
        <script src="https://use.fontawesome.com/f900f4bcb1.js"></script>
      </Head>
      <Nav />
        <div className={`w-full h-adjust overflow-auto px-10 ${backgroundColour}`}>
          <div className="flex flex-col justify-center min-h-adjust py-10 sm:p-10 content-center my-auto">
            <div className="flex flex-col space-y-5 justify-center m-auto w-11/12">
              <h1 className="text-center tracking-widest leading-tight text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                episodes
              </h1>
              <div>
                <h2 className="text-center tracking-widest leading-tight text-xl md:text-2xl lg:text-3xl text-white font-bold">Season 1</h2>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 max-w-5xl m-auto">
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                  <div className="h-96 p-2"><EpisodeBlock /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer backgroundColour={backgroundColour} />
    </>
  )
}
