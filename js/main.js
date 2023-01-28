// grab the elements from the DOM
const input = document.getElementById("input");
const output = document.getElementById("output");

// listen to the enter key
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        const command = input.value;
        input.value = "";
        handleCommand(command);
    }
});

function handleCommand(command) {
    if (command === "about") {
        output.innerHTML = `
    # Miguel Gargallo

    I am a web developer since my 12ths, I began with small sites on html, css and javascript, then I started to learn PHP and MySQL, and I have been working with them since then.

    I have worked with many technologies, ultimately I have been working with React, Node, Svelte, PocketBase, Next.js, and many other technologies.

    I created the Sushi JS Framework, a fork of React with over 1K downloads per month, and I have been working with it for over 2 weeks.

    My last project was Zenix, a fork Framework of Astro, with over 2.2K downloads on the first week.
    `;
    } else {
        output.innerHTML = `<p>Command not found: ${command}</p>`;
    }
}
