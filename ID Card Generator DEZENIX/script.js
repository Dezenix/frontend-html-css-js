const firstname = document.getElementById('firstname');
const college = document.getElementById('college');
const num = document.getElementById('num');
const link = document.getElementById('link');
const idback = document.getElementById('idback');
const head1 =document.getElementById('head1');
const head2 =document.getElementById('head2');
const head3 =document.getElementById('head3');
const head4 =document.getElementById('head4');
const anchor =document.getElementById('anchor');
const img = document.getElementById("image");
    const  pic = document.getElementById("pic")

const generate = ()=>{
    head1.innerText =  firstname.value;
    head2.innerText =  college.value;
    head3.innerText =  num.value;
    let a = link.value
    anchor.setAttribute("href",
                `${a}`);
            anchor.textContent = `${head1.innerText}.com`;
const b = pic.value
            img.src = `${b}`;
}