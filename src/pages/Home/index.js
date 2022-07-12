////URL DA API: movie/now_playing?api_key=ca66c63b000212a33e0e85721c90c559&language=pt-BR

import {useEffect, useState} from "react";                          //useEffect busca algo, useState armazena algo
import api from '../../services/api';                               //Importa a API
import {Link} from 'react-router-dom';                              //Importa a rota
import './home.css'                                                 //Importa as configs css

function Home (){                                                   //Cria a lógica que determina a Home
    const [filmes, setFilmes] = useState([]);                       //Adiciona os filmes à lista
    const [loading, setLoading] = useState(true);                   //Checa se a página está carregando

    useEffect(()=>{                                                 //Faz a busca na API quando chamado
        async function loadFilmes(){                                //Cria a função asíncrona
            const response = await api.get("movie/now_playing",     //Direciona aonde os filmes devem ser buscados
            {
                params: {
                    api_key: "ca66c63b000212a33e0e85721c90c559",    //Linka a chave de API à minha conta
                    language: "pt-BR",                              //Determina as linguagens disponíveis
                    page: 1,                                        //Determina a página
                }
            })
        setFilmes(response.data.results.slice(0, 15))                //Determina quantos filmes serão dispostos na home
        setLoading(false);                                          //Após carregar os filmes, troca o estado de loading de true para false
        }
        loadFilmes();                                               //Carrega os filmes na home
    }, []);

    if(loading){
        return(
            <div className="loading">Carregando filmes...</div>
        );
    }


    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="{filme.title}" />
                            <Link to={`/Filme/${filme.id}`}>Acessar</Link>
                        </article>
            )
        })}
            </div>
        </div>
    );
}

export default Home;