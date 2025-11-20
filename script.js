function playGame(){
    const button = document.getElementById("button");
    button.x = Math.ceil(Math.random()*window.innerWidth);
    button.y = Math.ceil(Math.random()*window.innerHeight);
    while(hits < 20){
        button.addEventListener("click",(e) => {
            while(wait < 100){
                wait++
            }
            button.x = Math.ceil(Math.random()*window.innerWidth);
            button.y = Math.ceil(Math.random()*window.innerHeight);
            hits++;
        });
    }
}

document.addEventListener("click",(e) => {
    playGame();
});