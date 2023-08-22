import Head from 'next/head'
import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Layout({children}: any) {
    return(
        <>
            <Head>
                <title>CristianRM</title>
                <meta name='description' content='Portafolio personal de desarrollo web de CristianRM'/>
                <link rel='icon' href='/static/logo.png'/>
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}
