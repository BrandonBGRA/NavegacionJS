export default class Navegacion extends HTMLElement {
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
                nav {
                display:flex;
                background-color:#092421;
                }
                div {
                    color: white;
                    border-right: thin solid rgba(245, 40, 2, 0.5);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    cursor:pointer;
                }
                div:hover{
                    background-color: #27403C;
                }
                .text-content{
                    margin-right: 10px;
                }
                p {
                    margin:0;
                    padding: 9px;
                }

                #close{
                    border-radius: 50%;
                    width: 14px;
                    height: 14px;
                    margin-bottom: 2px;
                }
                #close:hover{
                    background-color: #1a2a27;
                }
                img{
                    width: 18px;
                    height: 18px;
                }
                #open {
                    border-radius: 50%;
                    width: 14px;
                    height: 14px;
                }
                #open:hover{
                    background-color: #27403C;
                }

                .contenedor{
                    color: black;
                    display: flex;
                    background-color: #27403C;
                    align-content: center;
                    align-items: center;
                }

                
                .menu-input {
                    width: 75rem;
                    margin: 8px 5px;
                }
                
                .menu-input-container {
                    width: 100%;
                    border-radius: 9rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #102A27;
                }
                
                .menu-input input {
                    width: 88%;
                    height: 1.6rem;
                    border: none;
                    outline: none;
                    border-radius: 9rem;
                    padding: .3rem .5rem;
                    font-size: 1rem;
                    background-color: #102A27;
                    color: white;
                }
                .menu-input input:hover{
                    background-color: #27403C;
                }

                .menu-input-container:hover{
                    background-color: #27403C;
                    border: 1px solid #102A27;
                }
                
                .img-search {
                    width: 1.2rem;
                    height: 1.2rem;
                    padding-left: .4rem;
                    padding-top: .1rem;
                }
                
                .menu-logo img {
                    width: 19rem;
                }
                .hover:hover{
                    background-color:#102A27;
                    border-radius: 50%;
                    width:19px;
                    height: 19px;
                }
                .perfil {
                    border-radius: 50%;
                }
            </style>
            
            <nav>
                <p id="open"><img src="./img/add.svg"></p>
                <div class="0">
                    <p class="text-content" id="0">Seccion Principal</p>
                </div>
            </nav>

            <section class="contenedor">
                <p class="hover"><img src="./img/izquierda.svg"></p>
                <p class="hover"><img src="./img/derecha.svg"></p>
                <p class="hover"><img src="./img/recargar.svg"></p>
                <section class="menu-input">
                    <section class="menu-input-container">
                        <a href="#">
                            <img src="./img/js.svg" class="img-search">
                        </a>
                        <input type="text" placeholder="Busca en google o escribe una URL" id="input" >
                        <a href="#">
                            <img src="./img/lenguaje.svg" class="img-search">
                        </a>
                        <a href="#">
                            <img src="./img/estrella.svg" class="img-search img-padding">
                        </a>
                    </section>
                </section>
                <p class="hover"><img src="./img/extension.svg"></p>
                <p class="hover"><img src="./img/descargar.svg"></p>
                <p class="hover"> <img src="https://lh3.googleusercontent.com/ogw/AF2bZyignI8DD2NZKkXsRTtedU0pDlBfaZhMeDkQgkpb_976Rzjk=s64-c-mo" alt="Foto perfil" class="perfil"></p>
                <p class="hover"><img src="./img/control.svg"></p>
            <section>
        `;

    }
}