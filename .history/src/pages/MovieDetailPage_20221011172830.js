import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import { apiKey } from "../config";
const MovieDetailPage = () => {
    const { movieId } = useParams();
    console.log(movieId);
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
        fetcher
    );
    console.log(data);
    const movies = data?.results || [];
    return (
        <>
            <div></div>;
        </>
    );
};

export default MovieDetailPage;
