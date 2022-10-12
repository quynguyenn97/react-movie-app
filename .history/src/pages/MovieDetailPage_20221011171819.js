import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
const MovieDetailPage = () => {
    const { movieId } = useParams();
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${moiveID}?api_key=5b6bd71d2eb24fb649d55629a64802ff`,
        fetcher
    );
    const movies = data?.results || [];
    return <div></div>;
};

export default MovieDetailPage;
