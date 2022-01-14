const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const nextbtn = document.querySelector('.next');
const tweetbtn = document.querySelector('.fa-brands');
const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const num= Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const authorname = item.author;
    text.innerText = quote;
    author.innerText = authorname;
    tweetbtn.href = `https://twitter.com/intent/tweet?text=${quote} ~ ${authorname}`;

    //console.log(item);
}

nextbtn.addEventListener('click',getQuote)

getQuote()