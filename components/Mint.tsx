import Wave from '../public/wave.svg';

export default function Navbar() {
    return (
      <div className="relative h-[1100px] grid grid-cols-3">
        <svg className="absolute h-[1080px] w-[1920px] fill-pink-200 z-[1] drop-shadow-[0px_-10px_10px_rgba(0,0,0,0.25)]"><Wave/></svg>
        <div className="relative col-span-1 z-[2]">
            <img src="bgyogurtformint2.png" className="absolute bottom-10 left-16 w-[600px]"/>
        </div>
        <div className="col-span-2 flex z-[2]">
            <div className="bg-white w-[1000px] h-[600px] m-auto rounded-3xl drop-shadow-xl flex flex-col">
              <img src="strawberry.png" className="absolute w-16 bottom-16 right-16 animate-wiggle"/>
              <div className="text-black mx-auto my-[10%] font-bold text-3xl">Mint</div>
              <div className="text-black mx-auto font-bold">mint is live</div>
              <div className="flex mx-auto mt-5 gap-5">
                <div className="w-10 h-10 bg-zinc-900 rounded-full"></div>
                <div className="w-24 h-10 bg-zinc-900"></div>
                <div className="w-10 h-10 bg-zinc-900 rounded-full"></div>
              </div>
            </div>
        </div>
      </div>
    )
}
  