import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { tmdbAPI } from "../config";
import "./Banner.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Banner = () => {
    const { data } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
    const movies = data?.results || [];
    return (
        <section className="banner h-[700px] mb-10 md:h-[600px] lg:h-[800px] ">
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}
                preventClicksPropagation={true}
                preventClicks={true}>
                {movies &&
                    movies.length > 0 &&
                    movies.map((item, index) => {
                        return (
                            <SwiperSlide key={`index-${index}`}>
                                <BannerItem item={item}></BannerItem>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </section>
    );
};
function BannerItem({ item }) {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full relative flex">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.8)] "></div>
            <img
                src={tmdbAPI.imageOriginal(item.poster_path)}
                alt="poster"
                className="w-full h-full object-cover"
            />
            <>
                <div className="sm:block w-[200px] h-[400px] rounded-3xl z-10 hidden absolute right-[10%] top-[10%] md:w-[250px] md:h-[400px] md:top-[15%] lg:w-[300px] lg:h-[500px] lg:top-[12%] xl:w-[400px] xl:h-[600px]">
                    <img
                        className="w-full h-full object-cover rounded-3xl"
                        alt=""
                        src={tmdbAPI.imageOriginal(item.backdrop_path)}
                    />
                </div>
                <div className="absolute left-[10%] top-[30%] w-[300px] sm:left-[5%] md:w-[350px] lg:w-[500px] xl:w-[600px]   text-white ">
                    <h2 className="font-bold mb-5  text-4xl lg:text-6xl text-4xl">
                        {item.title}
                    </h2>
                    <p className="text-md lg:text-xl mb-5 break-normal">
                        {item.overview}
                    </p>
                    <div className="flex lg:items-center lg:gap-x-3 lg:items-center flex-wrap gap-y-5">
                        <button
                            onClick={() => navigate(`/movie/${item.id}`)}
                            className="btn-banner btn-banner-play flex items-center gap-x-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                class="w-10 h-10">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                />
                            </svg>
                            <span>Play</span>
                        </button>
                        <button className="btn-banner btn-banner-info flex items-center gap-x-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                class="w-10 h-10">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                />
                            </svg>
                            More Info
                        </button>
                    </div>
                </div>
            </>
        </div>
    );
}
export default Banner;
