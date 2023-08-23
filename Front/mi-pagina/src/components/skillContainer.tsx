import '@/styles/skillContainer.css'

export default function SkillContainer({children}: any) {

    var revealLimit:number = 50

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', visibleSkillOrNot)
    }

    function visibleSkillOrNot() {
        var toRevealSkills = document.querySelectorAll('.skill-container')
        toRevealSkills.forEach(function(el) {
            if((el.getBoundingClientRect().top) < (window.innerHeight -revealLimit)) {
                el.classList.add('visible-skill')
            } else {
                el.classList.remove('visible-skill')
            }
        })

    }

    return(
        <div className='bg-slate-50 p-2 rounded-lg shadow-lg skill-container text-center font-bold'>
            {children}
        </div>
    )
}