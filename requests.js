const API_KEY = "835e748bbc6894c04e8f7dd9d88654ba";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetfixOriginals: `/discover/tv?api_key=${API_KEY}&with_metwork=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fectchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fectchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fectchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fectchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


export default requests;

