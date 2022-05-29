const MyScore = document.getElementById('myScore');
const PCScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.choice button');
const PlayerHand = document.querySelector('.display i');
const PCHand = document.querySelector('.hand i');


let computerScore = 1;
let humanPoint = 1;

const rock = "fas fa-hand-rock";
const paper = "fas fa-hand-paper";
const scissors = "fas fa-hand-scissors";

const randomClasses = [rock, paper, scissors];

const output = document.getElementById('inst');


const lose = () => {
    output.innerHTML = "lose";
    output.style.color = 'red';
}

const draw = () => {
    output.innerHTML = "Draw";
    output.style.color = 'yellow';
}

const win = () => {
    output.innerHTML = "win";
    output.style.color = 'green';
}

const Start = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let butt = e.target.className;
            PlayerHand.className = butt;
            let pcChoice = Math.floor(Math.random() * randomClasses.length);
            PCHand.className = randomClasses[pcChoice];


            if (PlayerHand.className === PCHand.className) {
                MyScore.innerHTML = MyScore.innerHTML;
                PCScore.innerHTML = PCScore.innerHTML;
                draw();
            }
            else if (PlayerHand.className === rock && PCHand.className === scissors) {
                MyScore.innerHTML = humanPoint;
                humanPoint++;
                win();
            } else if (PlayerHand.className === rock && PCHand.className === paper) {
                PCScore.innerHTML = computerScore;
                computerScore++;
                lose();
            } else if (PlayerHand.className === paper && PCHand.className === scissors) {
                PCScore.innerHTML = computerScore;
                computerScore++;
                lose();
            } else if (PlayerHand.className === paper && PCHand.className === rock) {
                MyScore.innerHTML = humanPoint;
                humanPoint++;
                win();
            } else if (PlayerHand.className === scissors && PCHand.className === rock) {
                PCScore.innerHTML = computerScore;
                computerScore++;
                lose();
            } else if (PlayerHand.className === scissors && PCHand.className === paper) {
                MyScore.innerHTML = humanPoint;
                humanPoint++;
                win();
            }
        });
    });
}

Start();