const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        const command = input.value.toLowerCase(); // convert the input value to lowercase
        input.value = "";
        handleCommand(command);
    }
});

function handleCommand(command) {
    if (command === "acerca") {
        output.innerHTML = `
        Soy una persona apasionada por el desarrollo y las nuevas tecnologías, con una gran experiencia en lenguajes de programación como HTML, CSS, PHP, Java, Javascript, C, C++, Swift, Shell, Solidity y herramientas como Visual Studio 2019, 2022, Visual Studio Code, Xcode, Github Desktop.
        
        Mi experiencia profesional se basa en trabajar con VPS, Servidores de Amazon AWS, Microsoft Azure con SO Ubuntu y Windows Server, Email AWS y Buckets AWS, y en configurar y administrar Ubuntu 18.04 y 20.04 LTS, Windows Server Datacenter 2019 y 2022, Web estática con DNS Route 53 de Amazon AWS y archivos en Github, PowerDNS + Admin, Cockpit, WHCMS, Plesk, phpIPAM, Wordpress y Minecraft Server.
        
        Además, tengo experiencia en proyectos innovadores como montar una web con panel dns en la blockchain, un portal que alquila dominios web con extensiones descentralizadas en la blockchain de Handshake, un panel de Plesk en la blockchain y un Wordpress con panel de Plesk en la blockchain. Mi interés por la tecnología se despertó desde pequeño, y a lo largo de mi vida he cursado estudios en Administración y Dirección de Empresas y en Marketing y Comunicación Digital para desarrollar una base sólida en empresariales y márketing.
        
        Actualmente soy el primer español en montar una web con panel dns en la blockchain y estoy enfocado en seguir innovando en este campo.    `;
    } else if (command === "about") {
        output.innerHTML = `
        I am a passionate person about development and new technologies, with great experience in programming languages such as HTML, CSS, PHP, Java, Javascript, C, C++, Swift, Shell, Solidity and tools such as Visual Studio 2019, 2022, Visual Studio Code, Xcode, Github Desktop.
        
        My professional experience is based on working with VPS, Amazon AWS Servers, Microsoft Azure with Ubuntu and Windows Server, AWS Email and Buckets, and configuring and managing Ubuntu 18.04 and 20.04 LTS, Windows Server Datacenter 2019 and 2022, Static Web with Amazon AWS Route 53 DNS and files on Github, PowerDNS+ Admin, Cockpit, WHCMS, Plesk, phpIPAM, Wordpress and Minecraft Server.
        
        Additionally, I have experience in innovative projects such as setting up a web with a dns panel on the blockchain, a portal that rents web domains with decentralized extensions on the Handshake blockchain, a Plesk panel on the blockchain and a Wordpress with Plesk panel on the blockchain. My interest in technology was awakened from a young age, and throughout my life I have studied Business Administration and Management and Digital Marketing and Communication to develop a solid foundation in business and marketing.
        
        Currently, I am the first Spanish person to set up a web with a dns panel on the blockchain and I am focused on continuing to innovate in this field.   `;
    } else if (command === "help") {
        output.innerHTML = `You can type "about" or "acerca" to know more about me in english or spanish`;
    } else {
        output.innerHTML = `<p>Command not found: ${command}</p>`;
    }

}
