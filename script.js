// Esaih's coding
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
        target.style.background = textColor1;
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
        target.style.background = textColor2;
    };
})
theme.addEventListener('click', themeSwap)
function revealingText(){
    startButton.addEventListener("click", (e)=>{
        infoText.style.visibility = 'hidden';
        spawnMenu.style.visibility = 'hidden';
        targetMenu.style.visibility = 'hidden';
        targetsRemain.style.visibility = 'visible';
    });
}
// Josiah's coding
let score;
let startT;
let endT;
let targets;
let waitTime;
let totalClicks = 0;
let remainTargets
const target = document.getElementById("target");
function check4win(){
    // PUT THE TARGET CLICK SOUND HERE!
    endT = Date.now();
    if(score >= targets){
        endGame();
    } else {
        score++;
        target.style.visibility = "hidden";
        setTimeout(teleport, waitTime);
        allTimes.push(endT-startT);
        remainTargets--;
        document.getElementById("targetsRemaining").innerHTML = `Targets Remaining: ${remainTargets}`;
    }
}
let allTimes = [];
function teleport(){
    target.style.top = Math.ceil(Math.random()*800)+"px";
    target.style.left = Math.ceil(Math.random()*1300)+"px";
    target.style.visibility = "visible";
    startT = Date.now();
}

function playGame(){
    // MAKE THE UI DISSAPPEAR
    score = 0;
    totalClicks = 0;
    allTimes.length = 0;
    let numRadio = document.getElementsByName('selectTargetAmount');
    if (numRadio[0].checked){
        targets = 6;
    } else if (numRadio[2].checked){
        targets = 21;
    } else {
        targets = 11;
    }
    remainTargets = targets
    let timeRadio = document.getElementsByName('selectSpawnDelay');
    if (timeRadio[0].checked){
        waitTime = 0;
    } else if (timeRadio[2].checked){
        waitTime = 2000;
    } else {
        waitTime = 1000;
    }
    target.addEventListener("click", check4win);
    target.style.visibility = "visible";
    document.addEventListener("click", addClick);
}
function addClick(){
    totalClicks++;
    // OPTIONAL: a regular click sound effect
}
function endGame(){
    // GAME COMPLETED music thing
    target.removeEventListener("click", check4win);
    document.removeEventListener("click", addClick);
    allTimes.shift();
    let average = 0;
    for (i=0;i<(targets-1);i++){
        average += allTimes[i];
    }
    average /= (targets-1);
    document.getElementById("reactionTime").innerHTML = `Your average reaction time was ${average/1000} seconds`;
    document.getElementById("reactionTime").style.visibility = "visible";
    document.getElementById("missedClicks").innerHTML = `You missed ${totalClicks-targets-1} clicks`;
    document.getElementById("missedClicks").style.visibility = "visible";
    // MAKE UI REAPPEAR

    document.getElementById("start").style.visibility = "visible";
    target.style.visibility = "hidden";
    target.style.top = "50%";
    target.style.left = "50%";
}

document.getElementById("start").addEventListener("click",() => {
    document.getElementById("start").style.visibility = "hidden";
    playGame();
});
themeSwap()
revealingText()