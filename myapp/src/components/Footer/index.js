import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-conteudo">
                <h1 className="footer-titulo">Let’s work together and make everything super cute and super useful.</h1>
                <a className="link-footer" href="#">Contact Me</a>
                
                <ul className="lista-icones-footer">
                <li className="lista-icones-item"><a href="#"><img src="Dribbble.svg"></img></a></li>
                <li className="lista-icones-item"><a href="#"><img src="Instagram.svg"></img></a></li>
                <li className="lista-icones-item"><a href="#"><img src="Pinterest.svg"></img></a></li>
                <li className="lista-icones-item"><a href="#"><img src="Linkedin.svg"></img></a></li>
                </ul>
            </section>
          
        </div>
    )
}

export default Footer;