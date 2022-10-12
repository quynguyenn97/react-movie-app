import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from "./movie/MovieCard";

const MovieList = () => {
    return (
        <div className="movie-list">
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MovieList;
