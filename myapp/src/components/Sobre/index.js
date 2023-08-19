import './Sobre.css';

const Sobre = () => {
    return (
        <div className="sobre-container">

            <section className="sobre-conteudo-container">
            <section>   
                <h1 className="sobre-mim-titulo">A Little Bit About Me</h1>
                <p className="sobre-mim-paragrafo">I am Shambhavi Mishra from Lucknow, India. I am working in an Indian Startup as a Product Designer for the past one year.</p>

                <p className="sobre-mim-paragrafo">I got featured various times on many big and small marketplaces, portfolio websites and blogs. I also received some awards and recognitions from   some of the big and small award companies.
                Besides designing, I like to write poems, stories and sing songs.</p>

                <a href="#" className="link-sobre-mim-contato">Contact Me</a>
            </section>
            <section >
                <img className="imagem-sobre" src="imagem-sobre.png" alt="imagem sobre mim"/>
            </section>
            </section>
           
           
        </div>
    )
}


export default Sobre;