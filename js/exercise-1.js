const nameSpan = document.getElementById("persons-name");
const nameQuestion = document.getElementById("change-name");

let boardType = -1;

const musicTypeOne = document.getElementById("music-type-1");
musicTypeOne.addEventListener("click", function () { changeType(0) });
const musicTypeTwo = document.getElementById("music-type-2");
musicTypeTwo.addEventListener("click", function () { changeType(1) });
const musicTypeThree = document.getElementById("music-type-3");
musicTypeThree.addEventListener("click", function () { changeType(2) });

const audioOne = document.getElementById("a-1");
audioOne.addEventListener("click", function () { playNumber(0); });
const audioTwo = document.getElementById("a-2");
audioTwo.addEventListener("click", function () { playNumber(1); });
const audioThree = document.getElementById("a-3");
audioThree.addEventListener("click", function () { playNumber(2); });
const audioFour = document.getElementById("a-4");
audioFour.addEventListener("click", function () { playNumber(3); });
const audioFive = document.getElementById("a-5");
audioFive.addEventListener("click", function () { playNumber(4); });
const audioSix = document.getElementById("a-6");
audioSix.addEventListener("click", function () { playNumber(5); });
const audioSeven = document.getElementById("a-7");
audioSeven.addEventListener("click", function () { playNumber(6); });
const audioEight = document.getElementById("a-8");
audioEight.addEventListener("click", function () { playNumber(7); });
const audioNine = document.getElementById("a-9");
audioNine.addEventListener("click", function () { playNumber(8); });

import { popSounds } from './sounds/pop.js'
import { rockSounds } from './sounds/rock.js';
import { memeSounds } from './sounds/meme.js';

if (document.cookie.match("/^(.*;)?\s*name\s*=\s*[^;]+(.*)?$/")) {
    let name = prompt("What is your name?")
    document.cookie = `name=${name}`;
    nameSpan.textContent = `${name}`;
} else {
    const cookies = document.cookie.split(";");
    let name;
    cookies.forEach(element => {
        if (element.includes("name=")) {
            name = element.replace("name=", "");
        }
    });
    nameSpan.textContent = `${name}`;
}

nameQuestion.addEventListener("click", changeName);

function changeName() {
    let name = prompt("What is your name?")
    document.cookie = `name=${name}`;
    nameSpan.textContent = `${name}`;
}

function onLoadInitial() {
    musicTypeOne.classList.add("music-active");
    boardType = 0;
    switchSounds();
}

function changeType(number) {
    if (boardType !== number) {
        musicTypeOne.classList.remove("music-active");
        musicTypeTwo.classList.remove("music-active");
        musicTypeThree.classList.remove("music-active");
        switch (number) {
            case 0:
                musicTypeOne.classList.add("music-active");
                break;
            case 1:
                musicTypeTwo.classList.add("music-active");
                break;
            case 2:
                musicTypeThree.classList.add("music-active");
                break;
        }
        boardType = number;
        switchSounds();
    }
}

function switchSounds() {
    if (boardType === 0) {
        popSoundFunction();
    }
    else if (boardType === 1) {
        rockSoundFunction();
    } else {
        memeBoardSoundFunction();
    }
}

function popSoundFunction() {
    let count = 1;
    popSounds.forEach(element => {
        const audioButton = document.getElementById(`a-${count}`);
        audioButton.textContent = element.naam;
        audioButton.style.backgroundColor = element.color;
        audioButton.style.color = element.textColor;
        count++;
    });
}

function rockSoundFunction() {
    let count = 1;
    rockSounds.forEach(element => {
        const audioButton = document.getElementById(`a-${count}`);
        audioButton.textContent = element.naam;
        audioButton.style.backgroundColor = element.color;
        audioButton.style.color = element.textColor;
        count++;
    });
}

function memeBoardSoundFunction() {
    let count = 1;
    memeSounds.forEach(element => {
        const audioButton = document.getElementById(`a-${count}`);
        audioButton.textContent = element.naam;
        audioButton.style.backgroundColor = element.color;
        audioButton.style.color = element.textColor;
        count++;
    });
}

function playNumber(number) {
    console.log("HERE!");
    if (boardType === 0) {
        const sound = popSounds[number];
        sound.soundLink.play();
    } else if (boardType === 1) {
        const sound = rockSounds[number];
        sound.soundLink.play();
    } else {
        const sound = memeSounds[number];
        sound.soundLink.play();
    }
}

onLoadInitial();