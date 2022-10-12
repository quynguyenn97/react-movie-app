import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
const MovieDetailPage = () => {
    const { movieId } = useParams();
    return <div></div>;
};

export default MovieDetailPage;
