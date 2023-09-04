import Image from "next/image"
import {useState, useEffect} from 'react'
import styles from '@/styles/bioContainer.module.css'

export default function BioContainer({imagePath, children}:any) {

    const [visibleBio, setVisibleBio] = useState(false)

    const revealLimit:number = 500


    //Revisar solución de reveal container con useRef, aaunque a priori no es necesario aqui
    useEffect(() => {
        function visibleOrNotBio () {
            var toRevealContentBio = document.querySelector(`.${styles['bio-reveal']}`)   
            if (toRevealContentBio !== null && (toRevealContentBio.getBoundingClientRect().top < (window.innerHeight - revealLimit))) {
                setVisibleBio(true)
            } else if (toRevealContentBio !==null) { 
                setVisibleBio(false)
            }
        }

        window.addEventListener('scroll', visibleOrNotBio)
        return () => {
            window.removeEventListener('scroll', visibleOrNotBio)
        }
    }, [])

    
    return(
        <div className={`flex flex-col items-center ${styles['bio-reveal']} ${visibleBio ? styles['bio-visible'] : ''}`}>
            <Image className={'shadow-lg rounded-lg ' + (styles['bio-pic'])} src={imagePath} width={200} height={200} alt='Foto' />
            <div className={"shadow-lg bg-white rounded-lg sm:px-20 px-5 pb-5 pt-20 "+ (styles["container"])}>
                 {children}
            </div>
        </div>
    )
}