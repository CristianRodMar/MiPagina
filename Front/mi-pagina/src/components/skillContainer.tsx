import styles from '@/styles/skillContainer.module.css'
import {useState, useEffect, useRef} from 'react'

export default function SkillContainer({children}: any) {

    const [visibleSkill, setVisibleSkill] = useState(false)
    const revealRef = useRef<HTMLDivElement>(null)
    const revealLimit:number = 50

    useEffect(() => {

        function visibleSkillOrNot() {
            if(revealRef.current) {
                const toRevealSkills = revealRef.current
                if ((toRevealSkills.getBoundingClientRect().top) < (window.innerHeight - revealLimit)) {
                    setVisibleSkill(true)
                } else {
                    setVisibleSkill(false)
                }
            }
        }

        window.addEventListener('scroll', visibleSkillOrNot)
        return () => {
            window.removeEventListener('scroll', visibleSkillOrNot)
        }

    }, [])


    return(
        <div ref={revealRef} className={`${visibleSkill ? styles['visible-skill'] : ''} bg-slate-50 p-2 rounded-lg shadow-lg ${styles['skill-container']} text-center font-bold`}>
            {children}
        </div>
    )
}