import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { tmdbAPI } from "../config";

const Banner = () => {
    const { data } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
    const movies = data?.results || [];
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
        <div className="w-full h-full rounded-3xl relative flex">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.8)] rounded-lg"></div>
            <img
                src={tmdbAPI.imageOriginal(item.poster_path)}
                alt=""
                className="w-full h-full object-cover rounded-lg "
            />
            <>
                <div className="md:w-[300px] md:h-[500px] xl:w-[400px] xl:h-[600px] w-[200px] h-[400px] absolute right-[10%] top-[10%] rounded-3xl z-10">
                    <img
                        className="w-full h-full object-cover rounded-3xl"
                        alt=""
                        src={tmdbAPI.imageOriginal(item.backdrop_path)}
                    />
                </div>
                <div className="absolute left-5 top-[30%] lg:top-[30%] md:w-[500px] xl:w-[600px] w-[200px] text-white">
                    <h2 className="font-bold text-6xl mb-5">{item.title}</h2>
                    <p className="text-xl mb-5">{item.overview}</p>
                    <div className="flex items-center gap-x-3">
                        <Button
                            onClick={() => navigate(`/movie/${item.id}`)}
                            className="btn"
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
