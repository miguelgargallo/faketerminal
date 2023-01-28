## About the JS

```js
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
```

This style sheet sets the background color of the body to black, the text color to white, and the font-family to "Inconsolata", a monospace font.

The terminal element has a width of 80%, is centered on the page, has a padding of 20px, a black background and white text, and a border-radius of 10px.

The output element has a margin-bottom of 20px, padding of 20px, background color of black, text color of white, border-radius of 10px, and overflow property is set to auto with max-height of 300px.

The prompt element has display set to flex and align-items set to center.

The path element has font-size of 14px.

The input element has width of 100%, padding of 10px, border is set to none, border-radius of 10px, background color of black, text color of white, and font-family of 'Inconsolata', monospace.
