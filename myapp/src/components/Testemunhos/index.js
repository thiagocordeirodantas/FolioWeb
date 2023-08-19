import './Testemunhos.css';

const Testemunhos = () => {
    return (
       <div className="testemunho-container">
            <section className="texto-titulo-container">
                <h2 className="titulo-testemunho">Some Generous Words</h2>
                <p className="subtitulo-testemunho">Some of my favorite testimonials from my clients</p>
            </section>
          <div className="testemunho-informacao-container">
            <section className="testemunho-conteudo">
                <p>I had grown a little bit disappointed when I realized that my work would not be taking me in any new, creative design directions. Thankfully, I found Shambhavi Mishra and his creativity that goes above and beyond, proving to be exactly what I needed to take.</p>
                <h5>Aika Chan</h5>
            </section>
            <section className="testemunho-conteudo">
                <p>Shambhavi Mishra is the best designer that I have ever worked with. He is seriously what you would call 'creative': he innovatively solves all sorts of problems and always delivers both prompt and high quality work. I can't recommend him enough!</p>

                <h5>Arakan Chan</h5>
            </section>
          </div>
            
       </div>
    )
}

export default Testemunhos;