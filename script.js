let score;
let startT;
let endT;
let targets;
let waitTime;
let totalClicks = 0;
const target = document.getElementById("target");
function check4win(){
    endT = Date.now();
    if(score >= targets){
        endGame();
    } else {
        score++;
        target.style.visibility = "hidden";
        setTimeout(teleport, waitTime);
        allTimes.push(endT-startT);
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
}
function endGame(){
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

    document.getElementById("start").style.visibility = "visible";
    target.style.visibility = "hidden";
    target.style.top = "50%";
    target.style.top = "50%";
}

document.getElementById("start").addEventListener("click",() => {
    document.getElementById("start").style.visibility = "hidden";
    playGame();
});