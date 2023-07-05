// Create custom header element
class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <h1><a href="/index.html">Devin Padrón</a></h1>
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
                <a href="https://www.linkedin.com/in/devin-p/" target="_blank"><img src="/pics/linkedin.png" alt="LinkedIn logo" class="logos" id="linkedin"></a>
                <a href="https://github.com/devinpadron1" target="_blank"><img src="/pics/github.png" alt="GitHub logo" class="logos" id="github"></a>
            </section> 
        `
    }
}
customElements.define('my-footer', myFooter)