import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import { Autoplay, Pagination, Navigation } from "swiper";
import { tmdbAPI } from "../../config";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const MovieList = ({ type = "now_playing" }) => {
    const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
    const isLoading = !data && !error;
    const movie = data?.results || [];
    return (
        <div className="movie-list">
            {isLoading && (
                <>
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={true}></Swiper>
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
                </>
            )}
            {!isLoading && (
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    preventClicksPropagation={true}
                    preventClicks={true}
                    loop={true}>
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
