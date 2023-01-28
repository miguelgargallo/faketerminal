# Fake Terminal HTML

- [Fake Terminal HTML](#fake-terminal-html)
  - [Description](#description)
  - [Tree of the project](#tree-of-the-project)
  - [About the CSS](#about-the-css)
  - [About the JS](#about-the-js)
  - [Updates](#updates)
  - [License](#license)


## Description

We're looking to create a simple, single-page web application that mimics the look and feel of a terminal, and allows users to interact with it by entering commands.

For the lawet, we can use CSS to style the HTML elements to make it look like a terminal. we can use a monospace font and set the background color to black.

To create the command prompt, we can use a simple HTML input element, and use JavaScript to listen for the "enter" key press event.

To read the content of the about.md file, we can use JavaScript's fetch API or XMLHttpRequest to read the file as a text file, and then use the response to display the content in the browser.

To handle the different commands, we can create a JavaScript object that maps commands to functions, and then use the input value to determine which function to call.

To display the output of the command, we can create a new HTML element, such as a div, and use JavaScript to set its innerHTML to the output of the command.

To emulate the terminal experience we can use libraries like xterm.js which can handle terminal emulation in web applications.


## Tree of the project

```
.
├── commands
│   └── about.md
├── fonts
├── index.html
├── js
│   └── main.js
├── pages
├── public
└── style
    └── styles.css
```


## About the CSS

```css
body {
  background-color: #000;
  color: #fff;
  font-family: 'Inconsolata', monospace;
}

#terminal {
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
}

#output {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  overflow: auto;
  max-height: 300px;
}

#prompt {
  display: flex;
  align-items: center;
}

#path {
  font-size: 14px;
}

#input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  font-family: 'Inconsolata', monospace;
}
```


This style sheet sets the background color of the body to black, the text color to white, and the font-family to "Inconsolata", a monospace font.

The terminal element has a width of 80%, is centered on the page, has a padding of 20px, a black background and white text, and a border-radius of 10px.

The output element has a margin-bottom of 20px, padding of 20px, background color of black, text color of white, border-radius of 10px, and overflow property is set to auto with max-height of 300px.

The prompt element has display set to flex and align-items set to center.

The path element has font-size of 14px.

The input element has width of 100%, padding of 10px, border is set to none, border-radius of 10px, background color of black, text color of white, and font-family of 'Inconsolata', monospace.


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


## Updates

we can see the updates of the project in the [CHANGELOG.md](CHANGELOG.md) file.


## License

This project is licensed under the Pylar AI creative ML License - see the [LICENSE.md](LICENSE.md) file for details