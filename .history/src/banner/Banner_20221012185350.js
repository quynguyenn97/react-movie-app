import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

const Banner = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=5b6bd71d2eb24fb649d55629a64802ff`,
        fetcher
    );
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
        <div className="w-full h-full rounded-lg relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-lg "
            />
            <div className="absolute left-5 bottom-5 w-full text-white px-4 py-2 border border-[#22d3ee] rounded-md">
                <h2 className="font-bold text-3xl mb-5">{item.title}</h2>
                <div className="flex items-center gap-x-3">
                    <span className="px-4 py-2 border border-[#22d3ee] rounded-md">
                        Adventure
                    </span>
                    <span className="px-4 py-2 border border-[#22d3ee] rounded-md">
                        Adventure
                    </span>
                    <span className="px-4 py-2 border border-[#22d3ee] rounded-md">
                        Adventure
                    </span>
                    <Button
                        onClick={() => navigate(`/movie/${item.id}`)}
                        className="shadow-xl">
                        Watch now
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default Banner;
