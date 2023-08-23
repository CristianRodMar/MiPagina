import '@/styles/revealContainer.css'

export default function RevealContainer({children}: any) {
        var revealLimit:number = 175

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', visibleOrNot)
        }
        
        function visibleOrNot() {
            var toRevealContent = document.querySelectorAll('.reveal')
            toRevealContent.forEach(function (el) {
                if ((el.getBoundingClientRect().top) < (window.innerHeight - revealLimit)) {
                    el.classList.add('visible')
                }
            })
        }

    return(
        <div className="bg-white p-5 rounded-lg shadow-lg container reveal">
            {children}
        </div>
    )
}