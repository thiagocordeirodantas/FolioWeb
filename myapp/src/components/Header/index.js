import './Header.css'

const Header =  () => {
    return (
       <header className="cabecalho">
           <nav>
                <ul className="lista-links">
                    <li className="lista-item"><a href="#" className="lista-link-item">Home</a></li>
                    <li className="lista-item"><a href="#" className="lista-link-item">Work</a></li>
                    <li className="lista-item"><a href="#" className="lista-link-item">Testimonials</a></li>
                    <li className="lista-item"><a href="#" className="lista-link-item">About</a></li>
                </ul>
           </nav>
            <section className="conteudo-container">
                <section className="conteudo">
                    <h1 className="mini-card">🤗 Hello All</h1>
                    <h1 className="titulo-conteudo">I’m Shambhavi, A Product Designer and Problem Solver</h1>
                    <aside className="botoes">
                        <a href="#" className="botao-1">View My Work</a>
                        <a href="#" className="botao-2">Contact Me</a>
                    </aside>
                </section>
                    <img className="imagem" src="imagem-main.png" alt="Imagem do conteudo"/>
            </section>
          
       </header>
       
    )
}

export default Header;  