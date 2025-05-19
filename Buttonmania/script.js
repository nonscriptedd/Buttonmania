const title = document.querySelector(".title");
const empty = document.querySelector(".empty");
const sound = new Audio('audio/ticks.mp3');
const music = new Audio("audio/sleep.mp3");

const btnman = document.querySelector(".btnman");
btnman.addEventListener("click", () => {
    alert("Nice Find!");
});

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
    btn1.textContent = "Nevermind"
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
    alert("Ouch!");
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
    btn3.textContent = "Press F12 and look at the console!"
    console.log("Button 3 did this!");
});

const btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", () => {
    title.textContent = "Loser!"
});

const btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", () => {
    const annoy = prompt("Did you click button 4 yet?");
    title.textContent = `${annoy}`;
    document.title = `${annoy}`;
});

const btn6 = document.querySelector(".btn6");
btn6.addEventListener("click", () => {
    const question = prompt("Enter some text here:")
    empty.textContent = `${question}`;
});

const btn7 = document.querySelector(".btn7");
btn7.addEventListener("click", () => {
    alert(`Close me, i dare you! (7/7)`);
    alert(`Close me, i dare you! (6/7)`)
    alert(`Close me, i dare you! (5/7)`)
    alert(`Close me, i dare you! (4/7)`)
    alert(`Close me, i dare you! (3/7)`)
    alert(`Close me, i dare you! (2/7)`)
    alert(`Close me, i dare you! (1/7)`)
    alert(`Fine, you win :( (0/7)`);
});
//! AI created btn8!

const btn8 = document.querySelector(".btn8");
btn8.addEventListener("click", () => {
    document.body.style.fontFamily = 'initial';
    const root = document.documentElement;
    root.style.setProperty('--gradient1', 'rgb(187, 187, 187)');
    root.style.setProperty('--backgradient', 'rgb(255, 255, 255)');
    root.style.setProperty('--textc', 'rgb(0, 0, 0)');
    empty.textContent = "This looks old..."
    document.querySelectorAll('*').forEach(el => {
        el.style.boxShadow = 'none';
        el.style.textShadow = 'none';
        el.style.transition = 'none';
        el.style.transform = 'none';
    });
    document.querySelectorAll('button').forEach(btn => {
        btn.style.fontFamily = 'initial';
    });
        document.querySelectorAll('div').forEach(div => {
        div.style.fontFamily = 'initial';
    });
});
//! AI created btn9!

const btn9 = document.querySelector(".btn9");
btn9.addEventListener("click", () => {
    btn9.textContent = "Get ready..."; // Only change this button
    setTimeout(() => {
        location.reload(true);   //! reloads website while ignoring cache because of (true)
    }, 10000); // Waits 10 seconds before reloading
    sound.play();
});

const btn10 = document.querySelector(".btn10");
btn10.addEventListener("click", () => {
    alert("Remember Button 3?");
    console.log("Button 3, you are not cool and special for being able to type in the terminal :/")
});

const btn11 = document.querySelector(".btn11");
btn11.addEventListener("click", () => {
    btn11.textContent = "😴"
    music.play();
});


const btn12 = document.querySelector(".btn12");


const btn13 = document.querySelector(".btn13");


const btn14 = document.querySelector(".btn14");


const btn15 = document.querySelector(".btn15");