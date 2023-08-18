import './Header.css'

const Header =  () => {
    return (
       <header>
           <nav>
                <ul className="lista-links">
                    <li className="lista-item"><a href="#" className="lista-link-item">Home</a></li>
                    <li className="lista-item"><a href="#" className="lista-link-item">Work</a></li>
                    <li className="lista-item"><a href="#" className="lista-link-item">Testimonials</a></li>
                    <li className="lista-item"><a href="#" className="lista-link-item">About</a></li>
                </ul>
           </nav>
       </header>
    )
}

export default Header;  