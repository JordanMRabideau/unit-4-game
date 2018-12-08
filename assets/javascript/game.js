var randomNum = $(".randomNum");
var redGem = $("#redGem");
var greenGem = $("#greenGem");
var yellowGem = $("#yellowGem");
var blueGem = $("#blueGem");
var score = $("#currentScore");
var scoreHolder = 0;
var wins = 0;
var losses = 0;


// Generates a new random number between 19 and 121 for the goal, and between 1 and 12 for each crystal button
function newNumbers() {
    randomNum.text(Math.floor((Math.random() * 103) + 19));
    redGem.val(Math.floor((Math.random() * 12) + 1));
    greenGem.val(Math.floor((Math.random() * 12) + 1));;
    yellowGem.val(Math.floor((Math.random() * 12) + 1));
    blueGem.val(Math.floor((Math.random() * 12) + 1));
}

function checkWin() {
    if (scoreHolder == randomNum.text()) {
        $("#winNum").text(wins += 1);
        alert('You win!');
        newNumbers();
        scoreHolder = 0;
        score.text("");
    } else if (parseInt(randomNum.text()) < scoreHolder) {
        $("#lossNum").text(losses += 1);
        alert('You lose.');
        newNumbers();
        scoreHolder = 0;
        score.text("")
    };
}
// Click event that differentiates between buttons and adds the value of each button to the score
$(".gems").on("click", function(evt) {
    if (evt.target.id === 'redGem') {
        score.text(scoreHolder += parseInt(redGem.val()));
    } else if (evt.target.id === 'greenGem') {
        score.text(scoreHolder += parseInt(greenGem.val()));
    } else if (evt.target.id === "yellowGem") {
        score.text(scoreHolder += parseInt(yellowGem.val()));
    } else if (evt.target.id === 'blueGem') {
        score.text(scoreHolder += parseInt(blueGem.val()));
    };
    checkWin();
    
});

function newGame() {
    newNumbers();
    $("#winNum").text(wins);
    $("#lossNum").text(losses);
}

newGame();
console.log(parseInt(randomNum.text()))