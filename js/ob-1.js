const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");

// Done by onclick in html
function logToConsole() {
    console.log("Button 1 has been clicked!");
};

// Done by onclick of js
button2.onclick = function () {
    alert("Alert works!");
};

// Done by event listerener
button3.addEventListener("click", sendPrompt)

function sendPrompt() {
    prompt("Test, name?");
};

// Done by onclick of js
button4.onclick = function () {
    confirm("Press a button!\nEither OK or cancel.");
};

