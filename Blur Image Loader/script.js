const percentage = document.querySelector('.percentage');
const image = document.querySelector('.image');

let load = 0
let int = setInterval(blurring, 30)

function blurring(){
    load ++

    if (load >99){
        clearInterval(int)
    }
percentage.innerText = `${load}`
percentage.style.opacity = scale(load,0,100,1,0)
    image.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}