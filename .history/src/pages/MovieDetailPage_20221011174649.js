import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import { apiKey } from "../config";
const MovieDetailPage = () => {
    const { movieId } = useParams();
    const { backdrop_path } = data;
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
        fetcher
    );
    console.log(data);
    const movies = data?.results || [];
    return (
        <>
            <div className="w-full h-[600px] relative mb-10">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div
                    className="w-full h-full bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
                    }}></div>
            </div>
            ;
        </>
    );
};

export default MovieDetailPage;
