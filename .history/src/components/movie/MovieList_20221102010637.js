import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import { tmdbAPI } from "../../config";

const MovieList = (props) => {
    const { tvShow, type } = props;
    const tvShowApi = useSWR(tmdbAPI.getTVList(type), fetcher);
    const movieApi = useSWR(tmdbAPI.getMovieList(type), fetcher);
    const { data, error } = tvShow === true ? tvShowApi : movieApi;
    const isLoading = !data && !error;
    const movie = data?.results || [];
    console.log(movie);
    return (
        <div className="movie-list">
            {isLoading && (
                <>
                    <Swiper
                        grabCursor={"true"}
                        spaceBetween={40}
                        slidesPerView={"auto"}>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                    </Swiper>
                </>
            )}
            {!isLoading && (
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    tvShow>
                    {movie &&
                        movie.length > 0 &&
                        movie.map((item, index) => {
                            return (
                                <SwiperSlide key={`movie-${item.id}`} tvShow>
                                    <MovieCard
                                        item={item}
                                        tvShow=></MovieCard>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            )}
        </div>
    );
};

export default MovieList;
