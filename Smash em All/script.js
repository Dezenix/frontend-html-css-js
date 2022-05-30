const playground = document.getElementById('playground')
const Time = document.getElementById('time')
const startButt = document.getElementById('startButt')
const containers = document.querySelectorAll('.container');
const Score = document.getElementById('score')
const selectOne = document.querySelectorAll('.selectOne');
let selected_emoji = {}
let score = 0
let sec = 0


startButt.addEventListener('click', () => containers[0].classList.add('glide'))

selectOne.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        selected_emoji = { src }
        containers[1].classList.add('glide')
        setTimeout(makeEmoj, 1000)
        gameOn()
    })
})

function gameOn() {
    setInterval(increaseTime, 2000)
}

function increaseTime() {
    let m = Math.floor(sec / 60)
    let s = sec % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    Time.innerHTML = `Time: ${m}:${s}`
    sec++
}

function makeEmoj() {
    const emoji = document.createElement('div')
    emoji.classList.add('trigger')
    const { x, y } = anyLocation()
    emoji.style.left = `${x}px`
    emoji.style.top = `${y}px`
    emoji.innerHTML = `<img src="${selected_emoji.src}"/>`

    emoji.addEventListener('click', smash)

    playground.appendChild(emoji)
}

function anyLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function smash() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    emoAdded()
}

function emoAdded() {
    setTimeout(makeEmoj, 1700)
    setTimeout(makeEmoj, 2000)
}

function increaseScore() {
    score++
    Score.innerHTML = `Score: ${score}`
}