import Link from 'next/link'
import Image from 'next/image'
import '@/styles/navbar.css'

export default function Navbar() {
    return (
        <nav className='shadow-lg bg-gradient-to-t from-gray-900 to-gray-600'>
            <div className='max-w-xs mx-auto'>
                <div className='font-bold grid sm:grid-cols-2 gap-3 text-lg text-center py-4'>
                    <Link className="select-none text-white text-opacity-50 hover:text-opacity-100 duration-100 navButton" href="/">Home</Link>
                    <Link className="select-none text-white text-opacity-50 hover:text-opacity-100 duration-100 navButton" href="/example">Example</Link>
                </div>
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2'>
                <svg className="filter drop-shadow-lg" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">  
                    <path d="M160 0C149.391 0 139.217 4.21427 131.716 11.7157C124.214 19.2172 120 29.3913 120 40C120 50.6087 115.786 60.7828 108.284 68.2843C100.783 75.7857 90.6087 80 80 80C69.3913 80 59.2172 75.7857 51.7157 68.2843C44.2143 60.7828 40 50.6087 40 40C40 29.3913 35.7857 19.2172 28.2843 11.7157C20.7828 4.21427 10.6087 0 0 0H160Z" fill="#121928" />       
                </svg>
                <Image className="select-none logo" src="/static/Logo.svg" width={65} height={65} alt="Logo"/>    
            </div>
        </nav>
    )
}