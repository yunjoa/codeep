import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({projects}) {

    
    return(

        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
                <Head>
                    <title>CODEEP, 시간 날리기 전문가의 코딩 로그</title>
                    <meta name="description" content="코딩일지" />
                    <link rel="ion" href="/favicon.ico" />
                </Head>

                <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 : 
                    <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-12 gap-8 m-4 w-full"> 
                
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                        ))}
                </div>
            </div>
        </Layout>
    );
}


// 빌드 타임에 호출
export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            'Authorization' : `Bearer ${TOKEN}`
        },
        body: JSON.stringify({page_size: 100})
    };
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()



    const projectNames = projects.results.map((aProject) => (
        aProject.properties.Name.title[0].plain_text
    ))

    console.log(`projectNames: ${projectNames}`)

    return {
      props: {projects}, // will be passed to the page component as props
    }
}


