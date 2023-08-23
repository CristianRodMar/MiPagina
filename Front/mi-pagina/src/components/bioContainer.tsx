import Image from "next/image"
import '@/styles/bioContainer.css'

export default function BioContainer({imagePath, children}:any) {

    var revealLimit:number = 500

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', visibleOrNotBio)
    }

    function visibleOrNotBio () {
        var toRevealContentBio = document.querySelector('.bio-reveal')
        
        if (toRevealContentBio !== null && (toRevealContentBio.getBoundingClientRect().top < (window.innerHeight - revealLimit))) {
            toRevealContentBio.classList.add('bio-visible')
        } else if (toRevealContentBio !==null) { 
            toRevealContentBio.classList.remove('bio-visible')
        }
    }
    
    return(
        <div className="flex flex-col items-center bio-reveal">
            <Image className='shadow-lg rounded-lg bio-pic' src={imagePath} width={200} height={200} alt='Foto' />
            <div className="shadow-lg bg-white rounded-lg sm:px-20 px-5 pb-5 pt-20 container">
                 {children}
            </div>
        </div>
    )
}