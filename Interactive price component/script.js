const rangeInputs = document.querySelectorAll('input[type="range"]');

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
});
var valueMoney = document.getElementById('money');
var valuePeople = document.getElementById('people');
var disMoney = document.getElementById('Ymoney');

var Money = 32;
var Ymoney = 384;
var People = 200;
var Ypeople = rangeInputs[0].value / 100 * 2400;
var i = true;

var yearM = rangeInputs[0].value / 100 * Ymoney;
var MoneyDis = yearM * 0.75;

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== 'range') {
    target = document.getElementById('range');
  } 
  const min = target.min;
  const max = target.max;
  const val = target.value;
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
  
  var cMoney = target.value / 100 * Money ;
  var cPeople = target.value / 100 * People;
  var uang1 = target.value / 100 * 384;
  var uang2 = uang1 * 0.75;
  var people1 = target.value / 100 * 2400;;
  if (i == true) {
  valueMoney.innerHTML = formatter.format(cMoney);
  valuePeople.innerHTML = cPeople;
  }  
  if (i == false){
  valuePeople.innerHTML = people1;
  disMoney.innerHTML = formatter.format(uang1);
  }
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
});

var toggle = document.querySelectorAll('.border-toggle div');
var myToggle = document.getElementsByClassName('border-toggle');
var fontMoney = document.getElementsByClassName('flex1-big')[0];
var Ybig = document.getElementsByClassName('Ybig')[0];
myToggle[0].addEventListener('click' , () => {
  if (i == true) {
  toggle[0].style.left = '30px';
  
  disMoney.innerHTML = formatter.format(MoneyDis);

  fontMoney.style.fontSize = '20px';
  fontMoney.style.color = 'hsl(225, 20%, 60%)';
  fontMoney.style.textDecorationLine = 'line-through';
  document.getElementsByClassName('flex1-smal')[1].innerHTML= '/ YEAR';
  Ybig.style.display = 'inline-block';
  
  fontMoney.innerHTML = '25%';

  valuePeople.innerHTML = Ypeople;

  i=false;
  } else {
    document.location.reload();
    i=true;
  }
});