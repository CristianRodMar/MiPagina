import '@/styles/container.css'

export default function RevealContainer({children}: any) {
        var revealLimit:number = 175

        window.addEventListener('load', visibleOrNot)
        window.addEventListener('scroll', visibleOrNot)
        
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