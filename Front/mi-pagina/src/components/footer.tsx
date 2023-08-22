import '@/styles/footer.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="flex sm:flex-row flex-col items-center sm:justify-around lg:justify-center lg:gap-20 gap-8 font-bold bg-gradient-to-b from-gray-900 to-gray-600">
            <Image className="select-none" src="/static/Logo.svg" width={85} height={85} alt="Logo"/>  
            <h1>Cristian Rodríguez Martín</h1>
            <div>
                Contenido
            </div>
        </footer>
    )
}