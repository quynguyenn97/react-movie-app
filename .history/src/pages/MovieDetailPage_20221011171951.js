import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import { apiKey } from "../config";
const MovieDetailPage = () => {
    const { movieId } = useParams();
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${moiveId}?api_key=${apiKey}`,
        fetcher
    );
    const movies = data?.results || [];
    return <div></div>;
};

export default MovieDetailPage;
