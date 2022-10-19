import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { tmdbAPI } from "../config";
import ReactPlayer from "react-player";


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
        <Fragment>
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                className="header__video"
                url="https://vimeo.com/384025132"
            />
        <div className="w-full h-full rounded-3xl relative flex">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.8)] rounded-lg"></div>
            <img
                src={tmdbAPI.imageOriginal(item.poster_path)}
                alt=""
                className="w-full h-full object-cover rounded-lg "
            />
            <>
                <div className="md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[500px] xl:w-[400px] xl:h-[600px] w-[200px] h-[400px] absolute right-[10%] top-[10%] md:top-[30%] lg:top-[20%] rounded-3xl z-10 hidden sm:block">
                    <img
                        className="w-full h-full object-cover rounded-3xl"
                        alt=""
                        src={tmdbAPI.imageOriginal(item.backdrop_path)}
                    />
                </div>
                <div className="absolute left-5 top-[30%] w-[250px]  md:w-[350px] lg:w-[500px] xl:w-[600px]  text-white">
                    <h2 className="font-bold text-4xl lg:text-6xl mb-5 text-xl">
                        {item.title}
                    </h2>
                    <p className="text-sm lg:text-xl mb-5 break-normal">
                        {item.overview}
                    </p>
                    <div className="flex items-center gap-x-3 ">
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
