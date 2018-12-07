var randomNum = 0
function newNum() {
    randomNum = Math.floor((Math.random() * 103) + 19);
    $(".randomNum").text(randomNum);
}

newNum();