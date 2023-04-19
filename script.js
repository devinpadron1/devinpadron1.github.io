// Create custom header element
class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <h1><a href="/index.html">Devin Padrón</a></h1>
                <p><a href="/aboutMe.html">About Me</a></p>
            </header>
        `
    }
}
customElements.define('my-header', myHeader)

// Create custom footer element
class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="footer">
                <a href="https://www.linkedin.com/in/devin-p/" target="_blank"><img src="/pics/linkedin.png" alt="LinkedIn logo" class="logos"></a>
                <a href="https://github.com/devinpadron1" target="_blank"><img src="/pics/github.png" alt="GitHub logo" class="logos"></a>
                <a href="https://twitter.com/devinpadron_" target="_blank"><img src="/pics/twitter.png" alt="Twitter logo" class="logos"></a>
            </section> 
        `
    }
}
customElements.define('my-footer', myFooter)