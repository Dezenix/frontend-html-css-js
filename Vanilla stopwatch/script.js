let Ms = 0;
let Min = 0;
let Hour = 0;
let Sec = 0;

let MsString = document.getElementById('Ms');
let SecString = document.getElementById('Sec');
let HourString = document.getElementById('Hour');
let MinString = document.getElementById('Min');

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let ResetBtn = document.getElementById('Reset');

let interval;

function stopw(){
    Ms++;
    if(Ms == 100){
        Ms = 0;
        Sec++;
        MsString.innerHTML = Ms;
    }
    if(Sec == 60){
        Sec = 0;
        Min++;
        SecString.innerHTML = Sec;
    }
    if(Min == 60){
        Min = 0;
        Hour++;
        MinString.innerHTML = Min;
    }
    if(Ms < 10){
        MsString.innerHTML = '0' + Ms;
    }
    else{
        MsString.innerHTML = Ms;
    }
    if(Sec < 10){
        SecString.innerHTML = '0' + Sec;
    }
    else{
        SecString.innerHTML = Sec;
    }
    if(Min < 10){
        MinString.innerHTML = '0' + Min;
    }
    else{
        MinString.innerHTML = Min;
    }
    if(Hour < 10){
        HourString.innerHTML = '0' + Hour;
    }
    else{
        HourString.innerHTML = Hour;
    }
}
function startTimer(){
    clearInterval(interval);
    interval = setInterval(stopw, 10);
}
function stopTimer(){
    clearInterval(interval);
    
}

function resetTimer(){
    clearInterval(interval);
    Ms = 0;
    Sec = 0;
    Min = 0;
    Hour = 0;

    MsString.innerHTML = '00';
    SecString.innerHTML = '00';
    MinString.innerHTML = '00';
    HourString.innerHTML = '00';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
ResetBtn.addEventListener('click', resetTimer);