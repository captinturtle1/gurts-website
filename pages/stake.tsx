import Head from 'next/head'
import Link from 'next/link'

export default function Navbar() {
    return (
      <div>
        <Head>
            <title>Gurts</title>
            <meta name="description" content="Gurts webpage"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="z-[100] fixed top-0 w-screen flex h-16 bg-white text-black select-none">
            <div className="flex absolute h-16 ">
                <img src="YV_LOGO2.png" className="h-10 my-auto ml-16 cursor-pointer"/>
                <div className="font-bold my-auto text-2xl cursor-pointer">Gurts</div>
            </div>
            <div className="absolute right-0 h-16 hidden lg:flex mr-16">
                <Link href="/" className="m-auto bg-[#765050] hover:bg-[#8f6464] active:bg-[#5e3f3f] px-5 py-2 text-white rounded-full font-bold transition-all cursor-pointer">Home</Link>
            </div>
        </div>
        <div className="h-screen bg-[#765050] flex">
            <div className="bg-[#c0a9a9] w-full mx-64 my-32 drop-shadow-xl">
                yup
            </div>
        </div>
      </div>
    )
}