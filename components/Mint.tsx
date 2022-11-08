export default function Navbar() {
    return (
      <div className="relative h-[900px] bg-gradient-to-br from-pink-200 to-fuchsia-400 grid grid-cols-3">
        <div className="relative col-span-1">
            <img src="bgyogurtformint2.png" className="absolute bottom-0 left-16 w-[600px]"/>
        </div>
        <div className="col-span-2 flex">
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
  