import React from "react";
import useSWR from "swr";
import MovieCard, { MovieCardSkeleton } from "components/movie/MovieCard";
import { fetcher, tmdbAPI } from "apiConfig/config";
import useDebounce from "hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";
const itemsPerPage = 20;
const MoviePage = () => {
    return <div>Lore m</div>;
};

export default MoviePage;
