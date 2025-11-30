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
let defaultBackground = 0;
let startButton = document.getElementById('start');
let themeSwapper = document.getElementById('themeSwitcher');
let theme = document.getElementById('themeSwitcher');
let clickedAmount = 0;
let info = document.getElementById('info');
let title = document.getElementById('titleText');
let type = document.getElementById('gameType');
let infoText = document.getElementById('info');
let targetsRemain = document.getElementById('targetsRemaining');
let spawnMenu = document.getElementById('spawnMenu');
let targetMenu = document.getElementById('targetMenu');
let label1 = document.getElementById('1Respawn');
let label2 = document.getElementById('2Respawn');
let label3 = document.getElementById('3Respawn');
let label4 = document.getElementById('5Targets');
let label5 = document.getElementById('10Targets');
let label6 = document.getElementById('20Targets');
let misclicks = document.getElementById('missedClicks');
let reactionTiming = document.getElementById('reactionTime');
function themeSwap(){
    body.style.background = backgroundColors[defaultBackground];
    defaultBackground = (defaultBackground + 1) % backgroundColors.length;
}
themeSwapper.addEventListener('click', e=>{
    clickedAmount++
    if(clickedAmount % 2 == 0){
        themeSwapper.textContent = 'Light Mode'
        body.style.background = backgroundColors[defaultBackground]
        type.style.color = textColor1;
        info.style.color = textColor1;
        title.style.color = textColor1;
        targetsRemain.style.color = textColor1;
        spawnMenu.style.color = textColor1;
        targetMenu.style.color = textColor1;
        label1.style.color = textColor1;
        label2.style.color = textColor1;
        label3.style.color = textColor1;
        label4.style.color = textColor1;
        label5.style.color = textColor1;
        label6.style.color = textColor1;
        misclicks.style.color = textColor1;
        reactionTiming.style.color = textColor1;
    } else {
        themeSwapper.textContent = 'Dark Mode'
        body.style.background = backgroundColors[defaultBackground + 1]
        type.style.color = textColor2;
        info.style.color = textColor2;
        title.style.color = textColor2;
        targetsRemain.style.color = textColor2;
        spawnMenu.style.color = textColor2;
        targetMenu.style.color = textColor2;
        label1.style.color = textColor2;
        label2.style.color = textColor2;
        label3.style.color = textColor2;
        label4.style.color = textColor2;
        label5.style.color = textColor2;
        label6.style.color = textColor2;
        misclicks.style.color = textColor2;
        reactionTiming.style.color = textColor2;
    };
})
theme.addEventListener('click', themeSwap)
function beginning(){
    startButton.addEventListener("click",(e)=>{
        clicked = true;
        isStarted = true;
    });
};
function revealingText(){
    startButton.addEventListener("click", (e)=>{
        infoText.style.visibility = 'hidden';
        spawnMenu.style.visibility = 'hidden';
        targetMenu.style.visibility = 'hidden';
        targetsRemain.style.visibility = 'visible';
        targetsRemain.textContent = `Targets remaining:`
    });
}
themeSwap()
beginning()
revealingText()