import Wave from '../public/wave3.svg';

export default function About() {
  return (
    <div className="relative h-[900px] grid grid-cols-10 z-[3]">
        <svg className="absolute w-screen h-[1080px] fill-blue-500 top-[-180px] left-0 drop-shadow-[0px_-10px_10px_rgba(0,0,0,0.25)]"><Wave/></svg>
        <img src="milkbox.png" className="absolute w-24 top-32 right-32 animate-wiggle"/>
        <div className="relative mx-24 my-36 col-span-5">
            <img src="Ex1.png" className="absolute top-0 left-20 w-96 rounded-full drop-shadow-lg"/>
            <img src="Ex2.png" className="absolute left-80 top-32 w-96 rounded-full drop-shadow-lg"/>
            <img src="Ex3.png" className="absolute top-72 left-24 w-96 rounded-full drop-shadow-lg"/>
            <div className="absolute top-[120px] right-0 w-2 h-96 bg-pink-200 rounded-full "></div>
        </div>
        <div className="m-auto z-[2]">
            <div className="text-5xl font-bold my-5 flex">About</div>
            <div className="w-[500px] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum tincidunt lectus luctus vestibulum. Donec mollis nisl nec elit vestibulum, ut rutrum purus aliquet. Donec aliquet felis id odio porta sollicitudin. Fusce ac quam finibus, tincidunt sapien id, condimentum mauris. Suspendisse turpis magna, pretium sed libero sed, hendrerit viverra odio. Donec auctor nisi turpis, ac blandit quam maximus quis. Nam vel sem porta, sagittis ante sit amet, consectetur tellus. Phasellus arcu erat, elementum ut ante id, luctus efficitur justo.</div>
        </div>
    </div>
  )
}