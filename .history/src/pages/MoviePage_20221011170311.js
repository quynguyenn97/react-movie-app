import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
const MoviePage = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/popular?api_key=5b6bd71d2eb24fb649d55629a64802ff`,
        fetcher
    );
    const movies = data?.results || [];
    return (
        <div className="py-10">
            <div className="grid grid-cols-4 gap-10">
                {movies &&
                    movies.length > 0 &&
                    movies.map((item) => {
                        return (
                            <MovieCard key={item.id} item={item}></MovieCard>
                        );
                    })}
            </div>
        </div>
    );
};

export default MoviePage;
