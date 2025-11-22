// function playGame(){
//     let wait = 0;
//     let clicked = false;
//     const target = document.getElementById("button");
//     target.clientX = Math.ceil(Math.random()*window.innerWidth);
//     target.clientY = Math.ceil(Math.random()*window.innerHeight);
//     target.addEventListener("click",(e) => {
//         clicked = true;
//     });
//     let hits = 0;
//     while(hits < 20){
//         if (clicked){
//             console.log("CLLLIIICK");
//             while(wait < 100){
//                 wait++;
//                 console.log("waiting");
//             }
//             button.x = Math.ceil(Math.random()*window.innerWidth);
//             button.y = Math.ceil(Math.random()*window.innerHeight);
//             hits++;
//             clicked = false;
//         }
//     }
// }

// document.getElementById("start").addEventListener("click",(e) => {
//     document.getElementById("start").style.display = "none";
//     playGame();
// });
let isStarted = false;
let clicked = false;
let body = document.body;

let textColor1 = '#ece586';
let textColor2 = '#545353';
let backgroundColors = [
    'linear-gradient(270deg, #000000, #424146)',
    'linear-gradient(270deg, #818181, #ffffff)'
];
let defaultText = 0;
let defaultBackground = 0;
let startButton = document.getElementById('start');
let themeSwapper = document.getElementById('themeSwitcher');
let theme = document.getElementById('themeSwitcher');
let info = document.getElementById('info');
let title = document.getElementById('titleText');
let type = document.getElementById('gameType');
let infoText = document.getElementById('info');
let targetsRemain = document.getElementById('targetsRemaining');
let spawnMenu = document.getElementById('spawnMenu');
let targetMenu = document.getElementById('targetMenu');
type.style.color = textColor1;
info.style.color = textColor1;
title.style.color = textColor1;
function themeSwap(){
    defaultBackground = (defaultBackground + 1) % backgroundColors.length;
    
}
// function themeSwap(){
//     body.style.background = backgroundColors[defaultBackground];
//     defaultBackground = (defaultBackground + 1) % backgroundColors.length;
// }
theme.addEventListener('click', themeSwap)
function beginning(){
    startButton.addEventListener("click",(e)=>{
        clicked = true;
        isStarted = true;
        console.log("Is started:" + isStarted)
    });
};
function revealingText(){
    startButton.addEventListener("click", (e)=>{
        infoText.style.visibility = 'hidden';
        spawnMenu.style.visibility = 'hidden';
        targetMenu.style.visibility = 'hidden';
        targetsRemain.style.visibility = 'visible';
        targetsRemain.textContent = `Targets remaining:`

        console.log('Hey I work too!');
    });
}
themeSwap()
beginning()
revealingText()