

fetch('words.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {

        document.getElementById('cover').getElementsByTagName('img')[0].src = data.cVal.image

        document.getElementById('p1front').getElementsByTagName('img')[0].src = data.p1FrontVal.image

        document.getElementById('p1back').getElementsByTagName('img')[0].src = data.p1BackVal.image

        document.getElementById('p2front').getElementsByTagName('img')[0].src = data.p2FrontVal.image

        document.getElementById('p2back').getElementsByTagName('img')[0].src = data.p2BackVal.image

        document.getElementById('p3front').getElementsByTagName('img')[0].src = data.p3FrontVal.image

        document.getElementById('p3back').getElementsByTagName('img')[0].src = data.p3BackVal.image

        document.getElementById('p4front').getElementsByTagName('img')[0].src = data.p4FrontVal.image

        document.getElementById('p4back').getElementsByTagName('img')[0].src = data.p4BackVal.image

        document.getElementById('p5front').getElementsByTagName('img')[0].src = data.p5FrontVal.image

        document.getElementById('p5back').getElementsByTagName('img')[0].src = data.p5BackVal.image

        document.getElementById('p6front').getElementsByTagName('img')[0].src = data.p6FrontVal.image

        document.getElementById('p6back').getElementsByTagName('img')[0].src = data.p6BackVal.image

        document.getElementById('p7front').getElementsByTagName('img')[0].src = data.p7FrontVal.image

        document.getElementById('p7back').getElementsByTagName('img')[0].src = data.p7BackVal.image

        document.getElementById('p8front').getElementsByTagName('img')[0].src = data.p8FrontVal.image

        document.getElementById('p8back').getElementsByTagName('img')[0].src = data.p8BackVal.image

        document.getElementById('p9front').getElementsByTagName('img')[0].src = data.p9FrontVal.image

        document.getElementById('p9back').getElementsByTagName('img')[0].src = data.p9BackVal.image

        document.getElementById('p10front').getElementsByTagName('img')[0].src = data.p10FrontVal.image

        document.getElementById('p10back').getElementsByTagName('img')[0].src = data.p10BackVal.image
        
        document.getElementById('p11front').getElementsByTagName('img')[0].src = data.p11FrontVal.image

        document.getElementById('p11back').getElementsByTagName('img')[0].src = data.p11BackVal.image

        document.getElementById('p12front').getElementsByTagName('img')[0].src = data.p12FrontVal.image

        document.getElementById('p12back').getElementsByTagName('img')[0].src = data.p12BackVal.image

        document.getElementById('p13front').getElementsByTagName('img')[0].src = data.p13FrontVal.image

        document.getElementById('p13back').getElementsByTagName('img')[0].src = data.p13BackVal.image

        document.getElementById('p14front').getElementsByTagName('img')[0].src = data.p14FrontVal.image

        document.getElementById('p14back').getElementsByTagName('img')[0].src = data.p14BackVal.image

        document.getElementById('p15front').getElementsByTagName('img')[0].src = data.p15FrontVal.image

        document.getElementById('p15back').getElementsByTagName('img')[0].src = data.p15BackVal.image

        document.getElementById('p16front').getElementsByTagName('img')[0].src = data.p16FrontVal.image

        document.getElementById('p16back').getElementsByTagName('img')[0].src = data.p16BackVal.image

        document.getElementById('p17front').getElementsByTagName('img')[0].src = data.p17FrontVal.image

        document.getElementById('p17back').getElementsByTagName('img')[0].src = data.p17BackVal.image

        document.getElementById('p18front').getElementsByTagName('img')[0].src = data.p18FrontVal.image

        document.getElementById('p18back').getElementsByTagName('img')[0].src = data.p18BackVal.image

        document.getElementById('p19front').getElementsByTagName('img')[0].src = data.p19FrontVal.image

        document.getElementById('p19back').getElementsByTagName('img')[0].src = data.p19BackVal.image

        document.getElementById('p20front').getElementsByTagName('img')[0].src = data.p20FrontVal.image

        document.getElementById('p20back').getElementsByTagName('img')[0].src = data.p20BackVal.image

        document.getElementById('p21front').getElementsByTagName('img')[0].src = data.p21FrontVal.image

        document.getElementById('p21back').getElementsByTagName('img')[0].src = data.p21BackVal.image

        document.getElementById('p22front').getElementsByTagName('img')[0].src = data.p22FrontVal.image

        document.getElementById('p22back').getElementsByTagName('img')[0].src = data.p22BackVal.image

        document.getElementById('p23front').getElementsByTagName('img')[0].src = data.p23FrontVal.image

        document.getElementById('p23back').getElementsByTagName('img')[0].src = data.p23BackVal.image

        document.getElementById('p24front').getElementsByTagName('img')[0].src = data.p24FrontVal.image

        document.getElementById('p24back').getElementsByTagName('img')[0].src = data.p24BackVal.image

        document.getElementById('p25front').getElementsByTagName('img')[0].src = data.p25FrontVal.image

        document.getElementById('p25back').getElementsByTagName('img')[0].src = data.p25BackVal.image

    })

    

// GAME 2
    gameWindow2=()=>{
        window.open('T-Rex-Runner-game-/index.html','_self')
     }

    document.getElementById('c17').onclick=()=>{gameWindow2()}
    