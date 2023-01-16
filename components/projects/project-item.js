import Image from "next/image"

export default function ProjectItem({data}) {
    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.깃허브.url
    const 설명 = data.properties.설명.rich_text[0].plain_text
    const 작업기간시작 = data.properties.작업기간.date.start
    const 작업기간끝 = data.properties.작업기간.date.end
    const 태그 = data.properties.태그.multi_select
    const imgSrc =data.cover.file?.url || data.cover.external.url 
    // const github = data.properties.깃허브.url
    // console.log(태그.name)
    
    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl "
                src={imgSrc}
                alt="cover image"
                width={100}
                height={60}
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="mt-2 text-lg">{설명}</p>
                <a href={github}>깃허브 바로가기</a>
                <p>{작업기간시작} ~ {작업기간끝}</p>
                <div className="flex items-start mt-2">
                    {태그.map((태그하나) => (
                        <h1 
                            className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" 
                            key={태그하나.id}>
                                {태그하나.name}
                        </h1>
                    ))}
                </div>
            </div>
            
        </div>
    )
}