import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'

export default function Navbar() {
    return (
      <div className="z-[100] fixed top-0 w-screen flex h-16 bg-white text-black select-none">
        <ScrollLink to="Landing" spy={true} smooth={true} offset={0} duration={600} className="flex absolute h-16 ">
            <img src="YV_LOGO2.png" className="h-10 my-auto ml-16 cursor-pointer"/>
            <div className="font-bold my-auto text-2xl cursor-pointer">Gurts</div>
        </ScrollLink>
        <div className="m-auto hidden lg:flex gap-5 font-bold">
            <ScrollLink to="Mint" spy={true} smooth={true} offset={0} duration={600} className="text-black hover:text-zinc-500 active:text-zinc-600 transition-all cursor-pointer">mint</ScrollLink>
            <ScrollLink to="About" spy={true} smooth={true} offset={0} duration={600} className="text-black hover:text-zinc-500 active:text-zinc-600 transition-all cursor-pointer">about</ScrollLink>
            <ScrollLink to="Faq" spy={true} smooth={true} offset={0} duration={600} className="text-black hover:text-zinc-500 active:text-zinc-600 transition-all cursor-pointer">faq</ScrollLink>
        </div>
        <div className="absolute right-0 h-16 hidden lg:flex mr-16">
            <Link href="/stake" className="m-auto bg-[#765050] hover:bg-[#8f6464] active:bg-[#5e3f3f] px-5 py-2 text-white rounded-full font-bold transition-all cursor-pointer">Stake</Link>
        </div>
        <div className="absolute right-0 h-16 flex lg:hidden mr-16 cursor-pointer">
            <AiOutlineMenu className="m-auto text-2xl"/>
        </div>
      </div>
    )
  }
  