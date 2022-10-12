import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../config";
import { apiKey } from "../config";
import MovieCard from "./movie/MovieCard";

const MovieList = ({ type = "now_playing" }) => {
    const [movie, setMovie] = useState();
    const { data } = useSWR(
        (tmdbAPI.getMovieList(type),
        fetcher
    );
    useEffect(() => {
        if (data && data.results) {
            setMovie(data.results);
        }
    }, [data]);
    return (
        <div className="movie-list">
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}>
                {movie &&
                    movie.length > 0 &&
                    movie.map((item) => {
                        return (
                            <SwiperSlide key={`movie-${item.id}`}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
};

export default MovieList;
