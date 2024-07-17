const circles = document.querySelectorAll('.circle')

function separateCircles(){
    circles.forEach((circle, index) =>{
        circle.style.animationDelay = `${index * 0.1}s`
    })
}

separateCircles()