import Head from 'next/head'
import Layout from '@/components/layout'

export default function Errors(){
    return(
        <>
            <Layout>
                <Head>
                    <title>CODEEP | 에러로그</title>
                    <meta name="코딩일지" content="코딩일지" />
                    <link rel="ion" href="/favicon.ico" />
                </Head>
                <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                    Errors
                </section>    
            </Layout>        
        </>
    )
}