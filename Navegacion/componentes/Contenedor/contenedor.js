import Navegacion from "../navegacion/navegacion.js";
import ContenedorPrincipal from "../contenedorPrincipal/contenedorPrincipal.js";

customElements.define('contenedor-navegacion', Navegacion);
customElements.define('contenedor-principal-texto', ContenedorPrincipal);

export default class Contenedor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.clickCount = 0;
    }

    connectedCallback() {
        this.render();
        this.agregarPagina();
        this.eliminarPagina();
        this.paginaActual();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                }
            </style>

            <contenedor-navegacion></contenedor-navegacion> 
            <contenedor-principal-texto></contenedor-principal-texto>
        `;
    }

    agregarPagina() {
        this.clickCount++;
        const contenedorNavegacion = this.shadowRoot.querySelector('contenedor-navegacion').shadowRoot;
        const open = contenedorNavegacion.getElementById("open");
        const nav = contenedorNavegacion.querySelector("nav");
        const contenedorP = this.shadowRoot.querySelector('contenedor-principal-texto').shadowRoot.querySelector("h1");

        open.addEventListener('click', () => {
            nav.innerHTML += `
                <div>
                    <p class="text-content" id="${this.clickCount}">Seccion Principal ${this.clickCount}</p>
                    <p id="close"><img src="./img/close.svg"></p>
                </div>
            `;

            contenedorP.textContent = `Estas en la pagina ${this.clickCount}`;
            this.eliminarPagina();
            this.agregarPagina(); 
            this.paginaActual();
        });
    }

    eliminarPagina(){
        const contenedorNavegacion = this.shadowRoot.querySelector('contenedor-navegacion');
        const botonCerrar = contenedorNavegacion.shadowRoot.querySelectorAll("#close");
        let textoContenedor = this.shadowRoot.querySelector('contenedor-principal-texto').shadowRoot.querySelector("h1");
        
        botonCerrar.forEach(cerrar => {
            cerrar.addEventListener('click', () => {
                this.clickCount--; // Decrementar en 1
                const decremento = this.clickCount - 1;
                const parentDiv = cerrar.parentNode;
                parentDiv.remove();
                if(decremento === 0){
                  textoContenedor.textContent = "Seccion Principal";  
                }else {
                textoContenedor.textContent = `Estas en la pagina ${decremento}`;
                }   
            });    
        });
    }

    paginaActual() {
        const contenedorNavegacion = this.shadowRoot.querySelector('contenedor-navegacion');
        const paginaActual = contenedorNavegacion.shadowRoot.querySelectorAll(".text-content");
        let textoContenedor = this.shadowRoot.querySelector('contenedor-principal-texto').shadowRoot.querySelector("h1");
    
        paginaActual.forEach(actual => {
            actual.addEventListener('click', () => {
                const id = actual.id;
                if (id === "0") {
                    textoContenedor.textContent = "Seccion Principal";
                } else {
                    textoContenedor.textContent = `Estas en la pagina ${id}`;
                }
            });
        });
    }
    
     
}

    
