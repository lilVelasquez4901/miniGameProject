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
let startButton = document.getElementById('start')
let isStarted = false;
let clicked = false;
function beginning(){
    startButton.addEventListener("click",(e)=>{
        clicked = true;
        isStarted = true;
        console.log("Is started:" + isStarted)
    });
};
function revealingText(){
    let infoText = document.getElementById('info')
    let targetsRemain = document.getElementById('targetsRemaining')
    let spawnMenu = document.getElementById('spawnMenu')
    let targetMenu = document.getElementById('targetMenu')

    startButton.addEventListener("click", (e)=>{
        infoText.style.visibility = 'hidden';
        spawnMenu.style.visibility = 'hidden';
        targetMenu.style.visibility = 'hidden';
        targetsRemain.style.visibility = 'visible';
        targetsRemain.textContent = `Targets remaining:`

        console.log('Hey I work too!');
    });
}
beginning()
revealingText()