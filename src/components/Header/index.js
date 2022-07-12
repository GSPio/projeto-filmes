import './header.css'
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to="/" className="logo">Prime Flix</Link>
            <Link to="/Favoritos" className="favoritos">Meus filmes favoritos.</Link>
        </header>
    );
}

export default Header;