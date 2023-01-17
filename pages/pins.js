import Head from 'next/head'
import Layout from '@/components/layout'

export default function Pins(){
    return(
        <>
            <Layout>
                <Head>
                    <title>CODEEP | 핀</title>
                    <meta name="코딩일지" content="코딩일지" />
                    <link rel="ion" href="/favicon.ico" />
                </Head>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p class="leading-relaxed text-base pb-2">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                <span className="text-gray-500 text-sm">12 Jun 2019</span>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p class="leading-relaxed text-base pb-2">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                <span className="text-gray-500 text-sm">12 Jun 2019</span>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p class="leading-relaxed text-base pb-2">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                <span className="text-gray-500 text-sm">12 Jun 2019</span>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p class="leading-relaxed text-base pb-2">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                                <span className="text-gray-500 text-sm">12 Jun 2019</span>
                            </div>
                        </div>
                       
                        </div>
                    </div>
                </section>
            </Layout>        
        </>
    )
}