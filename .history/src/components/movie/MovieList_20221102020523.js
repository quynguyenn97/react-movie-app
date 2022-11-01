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
            {isLoading && <></>}
            {!isLoading && (
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    tvShow>
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
