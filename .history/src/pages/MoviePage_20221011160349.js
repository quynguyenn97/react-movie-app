import React from "react";
import useSWR from "swr";

const MoviePage = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/popular?api_key=5b6bd71d2eb24fb649d55629a64802ff`,
        fetcher
    );
    const movies = data?.results || [];
    return <div></div>;
};

export default MoviePage;
