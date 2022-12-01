const ageReply = document.getElementById("age-check-reply");
const loopReply = document.getElementById("loop-reply");

function ageCheck(number) {
    if (number < 18) {
        ageReply.textContent = "Je bent te jong.";
    } else if (number > 100) {
        ageReply.textContent = "Je bent oud!";
    } else {
        ageReply.textContent = "Ouder of gelijk als 18!";
    }
}

function timesLoop(number) {
    let count = 0;
    for (var x = 0; x < number; x++) {
        count++;
    };
    loopReply.textContent = "Looped: " + count + " times!";
}