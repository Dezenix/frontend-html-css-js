var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);
window.onresize = function() {showSliderValue()};

function showSliderValue () {

    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value / rangeSlider.max);
    var width = document.getElementById("rs-range-line").offsetWidth;
    rangeBullet.style.left = (bulletPosition * width) + "px";
}