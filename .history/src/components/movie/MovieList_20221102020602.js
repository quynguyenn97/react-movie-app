import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCard from "./MovieCard";
import { tmdbAPI } from "../../config";

const MovieList = (props) => {
    const { type } = props;
    const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
    const isLoading = !data && !error;
    const movie = data?.results || [];
    return (
        <div className="movie-list">
            {isLoading && (
                <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 absolute z-10 left-[50%] animate-spin"></div>
            )}
            {!isLoading && (
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={10}
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
            )}
        </div>
    );
};

export default MovieList;
