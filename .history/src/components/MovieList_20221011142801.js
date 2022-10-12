import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "./movie/MovieCard";

const MovieList = () => {
    const [movie, setMovie] = useState();
    const { data, error } = useSWR(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5b6bd71d2eb24fb649d55629a64802ff",
        fetcher
    );
    useEffect(() => {
        if (data && data.results) {
            setMovie(data.results);
        }
    }, [data]);
    console.log("check movie", movie);
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
