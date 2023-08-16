import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logotipo" src="fox.png" alt="Logo do site"/>
            <div>
                <ul className="lista-links">
                    <li className="lista-item"><a className="lista-link" href="#">home</a></li>
                    <li className="lista-item"><a className="lista-link" href="#">About</a></li>
                    <li className="lista-item"><a className="lista-link" href="#">Lab</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;