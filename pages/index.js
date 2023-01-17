import Head from 'next/head'
import Layout from '@/components/layout'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@/components/home/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>CODEEP | 코딩로그</title>
        <meta name="코딩일지" content="코딩일지" />
        <link rel="ion" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-center text-gray-600 body-font"> 
        {/* min-h-screen */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero/>
        </div>
      </section>    
    </Layout>
  )
}
