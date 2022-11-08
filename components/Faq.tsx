import Wave from '../public/wave2.svg';

export default function Faq() {
    return (
        <div className="relative h-[900px] grid grid-cols-2 z-[3]">
            <svg className="absolute w-[1920px] h-[1080px] fill-emerald-500 left-0 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)]"><Wave/></svg>
            <img src="yogurt.png" className="absolute w-24 bottom-0 left-32 animate-wiggle"/>
            <div className="m-auto z-[2]">
                <div className="text-8xl font-bold flex just justify-center drop-shadow-lg">Faq</div>
                <div className="w-full h-4 bg-[#8f6464] rounded-full my-5"></div>
                <div className="w-[500px] font-semibold text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum tincidunt lectus luctus vestibulum. Donec mollis nisl nec elit vestibulum, ut rutrum purus aliquet.</div>
            </div>
            <div className="m-auto grid grid-cols-2 gap-3 font-bold text-xl">
                <div className="z-[2] flex flex-col gap-3">
                    <div className="bg-[#8f6464] py-3 px-10 rounded-full">Lorem ipsum</div>
                    <div className="bg-[#8f6464] py-3 px-10 rounded-full">Lorem ipsum</div>
                    <div className="bg-[#8f6464] py-3 px-10 rounded-full">Lorem ipsum</div>
                </div>
                <div className="z-[2] flex flex-col gap-3">
                    <div className="bg-[#8f6464] py-3 px-10 rounded-full">Lorem ipsum</div>
                    <div className="bg-[#8f6464] py-3 px-10 rounded-full ">Lorem ipsum</div>
                    <div className="bg-[#8f6464] py-3 px-10 rounded-full">Lorem ipsum</div>
                </div>
            </div>
        </div>
    )
}