import styles from '@/styles/revealContainer.module.css'
import {useState, useEffect, useRef} from 'react'

export default function RevealContainer({children}: any) {

        const [visible, setVisible] = useState(false)
        const revealRef = useRef<HTMLDivElement>(null)

        const revealLimit:number = 175
        
        //Revisar solución de reveal container con useRef, aaunque a priori no es necesario aqui
        useEffect(() => {
            function visibleOrNot() {
                if(revealRef.current) {
                    const toRevealContent = revealRef.current
                    if ((toRevealContent.getBoundingClientRect().top) < (window.innerHeight - revealLimit) && window.scrollY !== 0) {
                        setVisible(true)
                    } else {
                        setVisible(false)
                    }   
                }
 
            }

            window.addEventListener('scroll', visibleOrNot)
            return () => {
                window.removeEventListener('scroll', visibleOrNot)
            }
        }, [])


    return(
        <div ref={revealRef} className={`bg-white p-5 rounded-lg shadow-lg ${styles['container']} ${styles['reveal']} ${visible ? styles['visible'] : ''}`}>
                {children}
        </div>
    )
}