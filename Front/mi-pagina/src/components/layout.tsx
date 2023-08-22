import Head from 'next/head'
import '@/styles/globals.css'

export default function Layout({children}: any) {
    return(
        <>
            <Head>
                <title>CristianRM</title>
                <meta name='description' content='Portafolio personal de desarrollo web de CristianRM'/>
                <link rel='icon' href='/static/favicon.ico'/>
            </Head>
            <main className='font-bold'> 
                {children}
            </main>
        </>
    )
}
