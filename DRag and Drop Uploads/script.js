const hotspot = document.querySelector(".hotspot");
const input = document.querySelector(".hotspot input");
const instruction = document.querySelector(".instruction");
const progressBar = document.querySelector(".progressBar");

let files = [];

input.addEventListener("change", () => {
    hotspot.style.display = "none";
    upload();
});

hotspot.addEventListener("dragover", (e) => {
    e.preventDefault();
    instruction.innerHTML = "Drag to the location.";
    hotspot.classList.add("active");
});

hotspot.addEventListener("dragleave", (e) => {
    e.preventDefault();
    instruction.innerHTML = "Release at the  location.";
    hotspot.classList.remove("active");
});

hotspot.addEventListener("hotspot", (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    hotspot.style.display = "none";
    upload();
});

function upload() {
    let intervalCount = 0.25;
    progress.style.display = "block";
    progress.style.width = `${20 * intervalCount}%`;
    const interval = setInterval(() => {
        intervalCount += 0.25;
        progress.style.width = `${20 * intervalCount}%`;
        if (intervalCount == 5) {
            clearInterval(interval);
        }
    }, 100);
}
