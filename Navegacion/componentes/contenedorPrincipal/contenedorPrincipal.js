export default class ContenedorPrincipal extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `

            <style>
                h1 {
                    text-align:center;
                    margin: 10% 0;
                    border-radius: 10px;
                    background-color: cadetblue;
                    padding: 90px;
                }
            </style>

            <h1>Seccion Principal</h1>
        `;

    }
}