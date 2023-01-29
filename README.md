# Fake Terminal HTML

- [Fake Terminal HTML](#fake-terminal-html)
  - [Description](#description)
  - [About gh 0.0.11 Update](#about-gh-0011-update)
  - [Tree of the project](#tree-of-the-project)
  - [About the JS](#about-the-js)
  - [About the CSS](#about-the-css)
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

The index.html file is the main file of a website, it's where the HTML code for the website is located. It starts with a doctype declaration, which is used to indicate that the document is an HTML document. Then it has a head section which includes the title of the website, a link to the styles.css file, a link to a Google font, and a meta tag for the viewport. The body section includes the structure of the website and includes a div with an id of "terminal" which contains the elements of the website such as the heading, output, prompt and input elements. The script src is also included at the bottom of the file linking the main.js file.

The main.js file is a JavaScript file that is used to add interactivity to the website. It starts by grabbing elements from the DOM (Document Object Model) using the getElementById method, and adding an event listener to the input element that listens for the enter key. When the enter key is pressed, it calls the handleCommand function and passes the input value as an argument. The handleCommand function checks the command value and depending on the command, it updates the output element's innerHTML with the corresponding text.

The styles.css file is a file that is used to style the website. It includes CSS code that styles the elements in the website such as the body, output, terminal, and input elements. It uses CSS selectors to target specific elements and apply styles to them. It also includes media queries which are used to change the styles of elements based on the screen size.


## About gh 0.0.11 Update

In this version, the commands and the content of the about page are stored remotely, so you can add more commands and content without having to update the code. This also improves the security of the website, since the content is not stored in the source code. Performance is also improved, since the content is loaded only when the user requests it.


## Tree of the project

```
* Terminal Site
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── index.html
├── main.js
└── styles.css
```


## About the JS

```js
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
```


## About the CSS

```css
#output,
#terminal,
body {
    background-color: #000;
    color: #fff
}

body {
    font-family: "Inconsolata", monospace
}

h1 {
    font-size: 2em;
    text-align: center
}

#terminal {
    width: 80%;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px
}

#output {
    margin-bottom: 20px;
    overflow: auto;
    max-height: 300px
}

#prompt {
    display: flex;
    align-items: center
}

#path {
    font-size: 14px
}

#input {
    width: 100%;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    font-family: "Inconsolata", monospace
}

@media only screen and (min-width:375px) {
    #terminal {
        font-size: 1.2em
    }
}

@media only screen and (min-width:414px) {
    #terminal {
        font-size: 1.4em
    }
}

@media only screen and (min-width:390px) {
    #terminal {
        font-size: 1.4em
    }
}

@media only screen and (min-width:428px) {
    #terminal {
        font-size: 1.6em
    }
}

@media only screen and (min-width:810px) {
    #terminal {
        font-size: 1.8em
    }
}

@media only screen and (min-width:384px) {
    #terminal {
        font-size: 1.6em
    }
}

@media only screen and (min-width:412px) {
    #terminal {
        font-size: 1.8em
    }
}

@media only screen and (min-width:30px) {
    #terminal {
        font-size: 1.8em
    }
}
```


## Updates

we can see the updates of the project in the [CHANGELOG.md](CHANGELOG.md) file.


## License

This project is licensed under the Pylar AI creative ML License - see the [LICENSE.md](LICENSE.md) file for details