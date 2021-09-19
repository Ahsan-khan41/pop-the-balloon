let scorecc = 0;
var livecc = 3;

var livesCount = document.getElementById("livesDiv");
var score = document.getElementById("scoreDiv");

document.addEventListener("mouseover", function(e) {
    if (e.target.className === "smash-balloon") {
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        scorecc++;
        scoreCount(scorecc);
    } else if (e.target.className === "balloon") {
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "WRONG POP!";
        livecc--;

        if (livecc === 0) {
            location.replace('./game-over.html');
        }
        livesfunc(livecc);
    }
});

function scoreCount(count) {
    score.innerHTML = `${count}`;
    if (count == 6) {
        alert("You Win!");
        location.replace("./level-2.html");
    }
}

function livesfunc(lives) {
    livesCount.innerHTML = ` ${lives}`;
}