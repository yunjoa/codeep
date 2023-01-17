import Head from 'next/head'
import Layout from '@/components/layout'

export default function Projectss(){
    return(
        <>
            <Layout>
                <Head>
                    <title>CODEEP | 프로젝트</title>
                    <meta name="코딩일지" content="코딩일지" />
                    <link rel="ion" href="/favicon.ico" />
                </Head>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 md:w-1/2">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                {/* <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"> */}
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div class="flex items-center flex-wrap ">
                                    <span className="text-gray-500 text-sm">12 Jun 2019</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>   
            </Layout>        
        </>
    )
}