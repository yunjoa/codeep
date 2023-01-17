import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle";
import Image from "next/image";

export default function Header (){
    return(
        <>
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image
                        className="w-16 h-16 text-white p-2 bg-indigo-100 rounded-full"
                        src="/code.svg"
                        alt="code image"
                        width={100}
                        height={100}
                        quality={75}
                    />
                    <span className="ml-3 text-xl">CODEEP</span>                
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href="/projects">프로젝트</Link>
                    <Link className="mr-5 hover:text-gray-900" href="/learning">러닝로그</Link> 
                    <Link className="mr-5 hover:text-gray-900" href="/errors">에러로그</Link> 
                    <Link className="mr-5 hover:text-gray-900" href="/pins">핀</Link> 
                </nav>
                <DarkModeToggleButton/>
            </div>
            </header>        
        </>
    )
}