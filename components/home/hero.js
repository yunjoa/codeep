import Animation from "./animation"
import Link from 'next/link'

export default function Hero (){
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> 
                안녕하세요
                <br className="hidden lg:inline-block"/>
                시간날리기전문가입니다.
                </h1>
                <p className="mb-8 leading-relaxed">
                그림자는 생생하며, 열락의 약동하다. 어디 날카로우나 천지는 뛰노는 듣는다. 실현에 발휘하기 갑 하였으며, 철환하였는가? 뜨고, 가진 못하다 때까지 소담스러운 얼마나 바이며, 바이며, 그들의 이것이다. 얼음과 인생에 안고, 내려온 그러므로 이는 주며, 그들은 인간이 아름다우냐? 가는 힘차게 뼈 인생에 가치를 찬미를 타오르고 피다. 가는 없으면 얼마나 아름답고 청춘을 위하여서. 스며들어 이상이 영락과 위하여서 아니더면, 길지 청춘 인생을 뿐이다. 오직 구하기 같이 인도하겠다는 위하여서.
                </p>
                <div className="flex justify-center">
                <Link href="/projects" className="btn-project">
                    프로젝트 보러가기
                </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    )
}