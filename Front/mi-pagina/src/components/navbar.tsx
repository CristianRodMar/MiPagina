import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/navbar.module.css'

export default function Navbar() {

    return(
        <nav className={'max-w-7xl mx-auto ' + (styles['myNav'])}>
            <div className='flex sm:flex-row flex-col items-center justify-between px-2'>
                <Image className='select-none m-5' src='/static/Logo.svg' width={65} height={65} alt='Logo'/>
                <div className='flex sm:flex-row flex-col gap-7 font-bold text-lg items-center'>
                    <h1 className="select-none text-white">¡En construcción!</h1>
                    <Link className="select-none text-white text-opacity-50 hover:text-opacity-100 duration-100" href="/">Inicio</Link>
                    <Link className="select-none text-white text-opacity-50 hover:text-opacity-100 duration-100" href="/example">Ejemplo</Link>
                </div>
            </div>
        </nav>
    )
}