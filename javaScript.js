//This is Variables
let startDiv = document.getElementById("start-div");
let newGameDiv = document.getElementById("newGame-div");
let newGameButton = document.getElementById("newGameButton");
let u1c1=document.getElementById("card00");
let u1c2=document.getElementById("card01");
let u2c1=document.getElementById("card10");
let u1c5=document.getElementById("card04");
let u1c3=document.getElementById("card03");
let u1c4=document.getElementById("card02");
let u2c2=document.getElementById("card11");
let u2c3=document.getElementById("card12");
let u2c4=document.getElementById("card13");
let u2c5=document.getElementById("card14");
let scoreU=document.getElementById("scoreU");
let scoreD=document.getElementById("scoreD");
let Hit=document.getElementById("Hit");
let Stay=document.getElementById("stay");
/*
0:"ace_of_clubs"        1:"king_of_clubs"       2:"queen_of_clubs"      3:"jack_of_clubs"
4:"10_of_clubs"         5:"9_of_clubs"          6:"8_of_clubs"          7:"7_of_clubs"
8:"6_of_clubs"          9:"5_of_clubs"          10:"4_of_clubs"         11:"3_of_clubs"
12:"2_of_clubs"         13:"ace_of_diamonds"    14:"king_of_diamonds"   15:"queen_of_diamonds"
16:"jack_of_diamonds"   17:"10_of_diamonds"     18:"9_of_diamonds"      19:"8_of_diamonds"
20:"7_of_diamonds"      21:"6_of_diamonds"      22:"5_of_diamonds"      23:"4_of_diamonds"
24:"3_of_diamonds"      25:"2_of_diamonds"      26:"ace_of_hearts"      27:"king_of_hearts"
28:"queen_of_hearts"    29:"jack_of_hearts"     30:"10_of_hearts"       31:"9_of_hearts"
32:"8_of_hearts"        33:"7_of_hearts"        34:"6_of_hearts"        35:"5_of_hearts"
36:"4_of_hearts"        37:"3_of_hearts"        38:"2_of_hearts"        39:"ace_of_spades"
40:"king_of_spades"     41:"queen_of_spades"    42:"jack_of_spades"     43:"10_of_spades"
44:"9_of_spades"        45:"8_of_spades"        46:"7_of_spades"        47:"6_of_spades"
48:"5_of_spades"         49:"4_of_spades"        50:"3_of_spades"       51:"2_of_spades"*/
let deck =["ace_of_clubs", "king_of_clubs", "queen_of_clubs",
    "jack_of_clubs", "10_of_clubs", "9_of_clubs", "8_of_clubs",
    "7_of_clubs", "6_of_clubs", "5_of_clubs", "4_of_clubs", "3_of_clubs",
    "2_of_clubs", "ace_of_diamonds", "king_of_diamonds", "queen_of_diamonds",
    "jack_of_diamonds", "10_of_diamonds", "9_of_diamonds", "8_of_diamonds",
    "7_of_diamonds", "6_of_diamonds", "5_of_diamonds", "4_of_diamonds",
    "3_of_diamonds", "2_of_diamonds", "ace_of_hearts", "king_of_hearts",
    "queen_of_hearts", "jack_of_hearts", "10_of_hearts", "9_of_hearts", "8_of_hearts",
    "7_of_hearts", "6_of_hearts", "5_of_hearts", "4_of_hearts", "3_of_hearts",
    "2_of_hearts", "ace_of_spades", "king_of_spades", "queen_of_spades",
    "jack_of_spades", "10_of_spades", "9_of_spades", "8_of_spades", "7_of_spades",
    "6_of_spades", "5_of_spades", "4_of_spades", "3_of_spades", "2_of_spades"];
let gameValue=false,stayD=false,stayU=false;
let i,j,temp,score;
let c=[randomCards(),randomCards(),randomCards(),randomCards(),randomCards(),
    randomCards(),randomCards(),randomCards(),randomCards(),randomCards()];

let score1=(scoreOfCards(deck[c[0]].split('_')[0])+scoreOfCards(deck[c[1]].split('_')[0]));
let score2=(scoreOfCards(deck[c[2]].split('_')[0])+scoreOfCards(deck[c[3]].split('_')[0]));



//Random Card function
function randomCards(){
        return Math.floor(Math.random()*52)
}

//function for starting the game
function startGame(){
    gameValue=true;
    u1c1.src='src/PNG-cards/'+deck[c[0]]+'.png';
    u1c2.src='src/PNG-cards/'+deck[c[1]]+'.png';
    u2c1.src='src/PNG-cards/'+deck[c[2]]+'.png';
    u2c2.src='src/PNG-cards/'+deck[c[3]]+'.png';
    scoreD.innerText="Score:"+score1;
    scoreU.innerText="Score:"+score2;
}

//function for Score
function scoreOfCards(card) {
    switch (card){
        case 'ace':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        default:
            return 10;
    }
}

//function for ending the Game
function isEndOfGame(){
    if(score1===score2){
        alert("Match Draw");
    }
    else if(score1>score2){
        alert("Dealer's Win")
    }
    else {
        alert("You Win")
    }
}

//Dealer's AI
function dealerAI(){
    let randomAi=Math.floor(Math.random() * (21 - 15)) + 15;
    while(!stayD) {
        if (score1>0 && score1<randomAi) {
            u1c3.src = 'src/PNG-cards/' + deck[c[4]] + '.png';
            score1 += scoreOfCards(deck[c[4]].split('_')[0]);
            scoreD.innerText = "Score:" + score1;
            dealerAI();
        }
        else if (score1 >= randomAi && score1<21) {
            scoreD.innerText = "Score:" + score1 + " (STAYED)";
            stayD = true;
        }
        else if (score1 === 21) {
            scoreD.innerText = "Score:" + score1 + " **WINNER_BlackJack**";
            stayD = true;
        }
        else {
            scoreD.innerText = "Score:" + score1 + " ..LOSER..";
            stayD = true;
        }
    }
}

newGameButton.addEventListener("click", function () {
    startDiv.style.display="none";
    newGameDiv.style.display="inline";
    startGame();
    console.log()
});

Hit.addEventListener("click", function () {
    dealerAI();
    u2c3.src = 'src/PNG-cards/' + deck[c[5]] + '.png';
    score2 += scoreOfCards(deck[c[5]].split('_')[0]);
    if (score2>0 && score2<21) {
        scoreU.innerText = "Score:" + score2;
    }
    else if(score2===21){
        scoreU.innerText = "Score:" + score2 + " **WINNER_BlackJack**";
    }
    else if(score2>21){
        scoreU.innerText = "Score:" + score2+"..LOSER..";
    }

});

Stay.addEventListener("click",function () {
    dealerAI();
    scoreU.innerText = "Score:" + score2 + " (STAYED)";
    isEndOfGame();
});