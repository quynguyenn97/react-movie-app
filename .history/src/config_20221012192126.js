export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "5b6bd71d2eb24fb649d55629a64802ff";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointTV = "https://api.themoviedb.org/3/tv";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
const tmdbEndpointSearchTV = "https://api.themoviedb.org/3/search/tv";
export const tmdbAPI = {
    getMovieList: (type, page = 1) =>
        `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetails: (movieId) =>
        `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) =>
        `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
    getMovieSearch: (query, page) =>
        `${tmdbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
    getTVList: (type, page = 1) =>
        `${tmdbEndpointTV}/${type}?api_key=${apiKey}&page=${page}`,
    getTVSearch: (query, page) =>
        `${tmdbEndpointSearchTV}?api_key=${apiKey}&query=${query}&page=${page}`,

    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
