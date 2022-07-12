import {Link} from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
        <div className="notfound">
            <h1>404</h1>
            <h2>Página não encontrada.</h2> <br/>
            <Link to="/">Veja todos os filmes disponíveis aqui!</Link>
        </div>
    );
}

export default Erro;