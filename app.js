const slides = document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('mouseover', () => {
        ClearActiveClasses()

        slide.classList.add('active')
    }
    );
}

function ClearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}