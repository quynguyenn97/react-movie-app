import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { tmdbAPI } from "../config";

const Banner = () => {
    const { data } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
    const movies = data?.results || [];
    console.log(movies);
    return (
        <section className="banner h-[800px] page-container mb-10">
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}>
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
        <div className="w-full h-full rounded-3xl relative">
            <div>
                <img
                    className="w-[400px] h-[400px] absolute right-[15%] top-[20%] rounded-3xl"
                    src={tmdbAPI.imageOriginal(item.poster_path)}
                />
            </div>
            <>
                <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                <img
                    src={tmdbAPI.imageOriginal(item.poster_path)}
                    alt=""
                    className="w-full h-full object-cover rounded-lg "
                />
                <div className="absolute left-5 top-[50%] w-full text-white ">
                    <h2 className="font-bold text-6xl mb-5">{item.title}</h2>
                    <div className="flex items-center gap-x-3">
                        <span className="px-4 py-2 border border-[#22d3ee] rounded-md">
                            Adventure
                        </span>
                        <span className="px-4 py-2 border border-[#22d3ee] rounded-md">
                            Comedy
                        </span>
                        <span className="px-4 py-2 border border-[#22d3ee] rounded-md">
                            Romantic
                        </span>
                        <Button
                            onClick={() => navigate(`/movie/${item.id}`)}
                            className="shadow-xl"
                            bgColor="bg-primary">
                            Watch now
                        </Button>
                    </div>
                </div>
            </>
        </div>
    );
}
export default Banner;
