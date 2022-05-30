document.querySelector('form').onsubmit = (e) => {
    e.preventDefault()

    let number = parseInt(document.querySelector('#txtNumber').value),
        output = document.querySelector('.output')

    result = number.toString(2)
    output.classList.remove("hidden")
    output.innerHTML = 'Binary Value: ' + result
}