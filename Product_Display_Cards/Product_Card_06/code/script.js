window.onload = function(){
    const card = document.getElementsByClassName('card');
    const select = document.querySelectorAll('.opt-img');
    const btn = document.getElementById('btn');
    const productImg = document.getElementById('product-img');
                
    select.forEach((div,index)=>{
                    div.addEventListener('click',function(){
        if(index==0){
                            productImg.src='assets/Product1.png';
                            btn.style.background='#1d9659';
                        }
        else if(index==1){
                            productImg.src='assets/Product2.png';
                            btn.style.background='rgb(206, 43, 32)';
                        }
        else if(index==2){
                            productImg.src='assets/Product3.png';
                            btn.style.background='#054146';
                        }
                    })
                })
            }