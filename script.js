let score = 0;
let startT;
let endT;
const target = document.getElementById("button");
function check4win(){
    endT = Date.now();
    if(score >= 11){
        endGame();
    } else {
        score++;
        target.style.visibility = "hidden";
        setTimeout(teleport, 500);
        allTimes.push(endT-startT);
    }
}
allTimes = [];
function teleport(){
    target.style.top = Math.ceil(Math.random()*1300)+"px";
    target.style.left = Math.ceil(Math.random()*1300)+"px";
    target.style.visibility = "visible";
    startT = Date.now();
}

function playGame(){
    target.addEventListener("click", check4win);
    document.addEventListener("click",() => {
        totalClicks++;
    });
}
let totalClicks = 0;
function endGame(){
    target.removeEventListener("click", check4win);
    allTimes.shift();
    let average = (allTimes[0]+allTimes[1]+allTimes[2]+allTimes[3]+allTimes[4]+allTimes[5]+allTimes[6]+allTimes[7]+allTimes[8]+allTimes[9])/10;
    document.getElementById("reactionTime").innerHTML = `Your average reaction time was ${average/1000} seconds`;
    document.getElementById("missedClicks").innerHTML = `You missed ${totalClicks-12} clicks`;
}

document.getElementById("start").addEventListener("click",() => {
    document.getElementById("start").style.display = "none";
    playGame();
});