import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//URL DA API: movie/now_playing?api_key=ca66c63b000212a33e0e85721c90c559&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;