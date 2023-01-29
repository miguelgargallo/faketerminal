const input = document.getElementById("input");
const output = document.getElementById("output");

var c = document.getElementById("matrix");
var ctx = c.getContext("2d");
var symbols = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
c.height = window.innerHeight;
c.width = window.innerWidth;

var font_size = 10;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";
    for (var i = 0; i < drops.length; i++) {
        var text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

if (window.innerWidth < 600) {
    h1.innerHTML = "Miguel <br> Gargallo's <br> Terminal";
}

let intervalId;

window.onload = function () {
    matrixTextEffect();
}

function matrixTextEffect() {
    let h1 = document.querySelector("h1");
    let possibleChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let text = h1.textContent;
    intervalId = setInterval(() => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            newText += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }
        h1.textContent = newText;
    }, 50);

    setTimeout(() => {
        clearInterval(intervalId);
        h1.textContent = "Miguel Gargallo's Terminal";
    }, 3000);
}


input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        const command = input.value.toLowerCase();
        input.value = "";
        handleCommand(command);
    }
});

async function handleCommand(input) {
    output.innerHTML = "";
    try {
        const commandsResponse = await fetch('https://raw.githubusercontent.com/superdatas/terminal-text/main/commands.json');
        const commands = await commandsResponse.json();
        if (commands.commands[input]) {
            commands.commands[input].text.forEach(function (text) {
                output.innerHTML += `<p>${text}</p>`;
            });
        } else {
            const actionsResponse = await fetch('https://raw.githubusercontent.com/superdatas/terminal-text/main/actions.json');
            const actions = await actionsResponse.json();
            if (actions.actions[input]) {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    window.location.replace(actions.actions[input].link[0]);
                } else {
                    window.open(actions.actions[input].link[0]);
                }
            } else {
                output.innerHTML = `<p>Command or action not found: ${input}</p>`;
            }
        }
    } catch (error) {
        console.error(error);
        output.innerHTML = '<p>An error occurred while loading commands and actions</p>';
    }
}
