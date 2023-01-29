const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        const command = input.value.toLowerCase();
        input.value = "";
        handleCommand(command);
    }
});

async function handleCommand(command) {
    output.innerHTML = "";
    try {
        const response = await fetch('https://raw.githubusercontent.com/superdatas/terminal-text/main/commands.json');
        const commands = await response.json();
        if (commands.commands[command]) {
            commands.commands[command].text.forEach(function (text) {
                output.innerHTML += `<p>${text}</p>`;
            });
        } else {
            output.innerHTML = `<p>Command not found: ${command}</p>`;
        }
    } catch (error) {
        console.error(error);
        output.innerHTML = '<p>An error occurred while loading commands</p>';
    }
}
