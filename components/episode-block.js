export default function EpisodeBlock() {
  return (
    // <div className="bg-white rounded p-3">
    //   <div className="group relative">
    //     <img src="/images/crowd.svg" className="bg-grey min-w-image-sm w-52 h-52 m-auto" />
    //     <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-52 h-52 top-0 flex items-center group-hover:opacity-100 transition justify-evenly m-auto">
    //       <p className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
    //         Hello there
    //       </p>
    //     </div>
    //   </div>
    //   <p className="w-52 text-center m-auto bg-yellow p-2 my-2">Play Episode</p>
    //   <p className="w-52 text-center m-auto">January 23, 2021</p>
    // </div>
    <div className="space-y-3">
      <img src="/images/crowd.svg" className="bg-grey min-w-image-sm w-60 h-60 m-auto" />
      <p className="w-60 text-black font-semibold text-center m-auto bg-yellow p-2 ">Play Episode</p>
      <p className="w-60 text-white font-semibold text-center m-auto">January 23, 2021</p>
    </div>
  )
}