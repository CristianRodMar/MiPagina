import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import styles from '@/styles/revealNavbar.module.css'

export default function RevealNavbar() {
    const [visibleNav, setVisibleNav] = useState(false)
    
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 10) {
                setVisibleNav(true)
            } else {
                setVisibleNav(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        };
      }, [])

    return (
        <nav className={'shadow-lg bg-gradient-to-t from-gray-900 to-gray-600 sticky top-0 z-10 ' + (visibleNav ? styles['visible-nav'] : '')} id={styles["second-nav"]}>
            <div className='max-w-2xl mx-auto'>
                <div className='font-bold grid sm:grid-cols-4 gap-5 text-lg text-center py-4'>
                    <h1 className="select-none text-white">¡En construcción!</h1>
                    <Link className={"select-none text-white text-opacity-50 hover:text-opacity-100 duration-100 " + (styles['navButton'])} href="/">Inicio</Link>
                    <Link className={"select-none text-white text-opacity-50 hover:text-opacity-100 duration-100 " + (styles['navButton'])} href="/info">Información</Link>
                    <Link className="select-none text-white text-opacity-50 hover:text-opacity-100 duration-100" href="/myShop">Ejemplo</Link>
                </div>
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2'>
                <svg className="filter drop-shadow-lg" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">  
                    <path d="M160 0C149.391 0 139.217 4.21427 131.716 11.7157C124.214 19.2172 120 29.3913 120 40C120 50.6087 115.786 60.7828 108.284 68.2843C100.783 75.7857 90.6087 80 80 80C69.3913 80 59.2172 75.7857 51.7157 68.2843C44.2143 60.7828 40 50.6087 40 40C40 29.3913 35.7857 19.2172 28.2843 11.7157C20.7828 4.21427 10.6087 0 0 0H160Z" fill="#121928" />       
                </svg>
                <Image className={"select-none " + (styles['logo'])} src="/static/Logo.svg" width={65} height={65} alt="Logo"/>    
            </div>
        </nav>
    )
}