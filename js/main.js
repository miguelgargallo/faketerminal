const input = document.getElementById("input");
const output = document.getElementById("output");
const path = document.getElementById("path");

const commands = {
    "about": aboutCommand
};

function handleCommand(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const value = input.value;
        input.value = "";

        // Split the input value by space to get the command and arguments
        const parts = value.split(" ");
        const command = parts[0];
        const args = parts.slice(1);

        if (commands[command]) {
            // Call the function associated with the command
            commands[command](args);
        } else {
            output.innerHTML = "Command not found: " + command;
        }
    }
}

function aboutCommand(args) {
    fetch('commands/about.md')
        .then(res => res.text())
        .then(data => {
            output.innerHTML = data;
        })
        .catch(err => {
            console.log(err);
        });
}

input.addEventListener("keydown", handleCommand);
