const words = document.getElementById("words");
const name = document.getElementById("name");

function dataFetch() {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            words.innerText = data.quote;
            name.innerText = `-${data.author}`;
        });
}
dataFetch();