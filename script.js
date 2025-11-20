function playGame(){
    let wait = 0;
    let clicked = false;
    const target = document.getElementById("button");
    target.clientX = Math.ceil(Math.random()*window.innerWidth);
    target.clientY = Math.ceil(Math.random()*window.innerHeight);
    target.addEventListener("click",(e) => {
        clicked = true;
    });
    let hits = 0;
    while(hits < 20){
        if (clicked){
            console.log("CLLLIIICK");
            while(wait < 100){
                wait++;
                console.log("waiting");
            }
            button.x = Math.ceil(Math.random()*window.innerWidth);
            button.y = Math.ceil(Math.random()*window.innerHeight);
            hits++;
            clicked = false;
        }
    }
}

document.getElementById("start").addEventListener("click",(e) => {
    document.getElementById("start").style.display = "none";
    playGame();
});