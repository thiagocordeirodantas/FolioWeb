import './Main.css';

const Main = () => {
    return (
        <main>
            <h1 className="titulo">My Recent Work</h1>
            <div className="cards">
                <section className="card-container">
                    <aside className="card-conteudo">
                        <h3 className="titulo-card-1">Sheepify States</h3>
                        <p className="texto-card-1">Designed some empty state screens in kawaii style for the popular sheepify app </p>
                        <a className="link-card-1" href="#">View Case Study</a>
                    </aside>
                    <aside>
                        <img src="Home 1.png" className="imagem-1"/>
                    </aside>
                </section>

                <section className="card-container">
                    <aside className="card-conteudo">
                        <h3 className="titulo-card-1">HoneyBunny</h3>
                        <p className="texto-card-1">A colorful dashboard to manage your fictional projects and team, all in a single place.</p>
                        <a className="link-card-1" href="#">View Case Study</a>
                    </aside>
                    <aside>
                        <img src="Home 1.png" className="imagem-1"/>
                    </aside>
                </section>

                <section className="card-container">
                    <aside className="card-conteudo">
                        <h3 className="titulo-card-1">Memrise Redesign</h3>
                        <p className="texto-card-1">I redesigned the popular language learning app memrise in kawaii style to make it more cute. </p>
                        <a className="link-card-1" href="#">View Case Study</a>
                    </aside>
                    <aside>
                        <img src="Home 1.png" className="imagem-1"/>
                    </aside>
                </section>
            </div>
        </main>
    )
}

export default Main;