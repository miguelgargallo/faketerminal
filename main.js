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
                    window.location.href = actions.actions[input].link[0];
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
