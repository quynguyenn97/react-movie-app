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
        <div>
            <div className="flex items-center justify-between">
                <div className="w-[150px] h-[50px] ">
                    <img
                        src="https://lh3.googleusercontent.com/PKN1FnJI47uq4ALS20FPwOTh9uuSUzF07Z7jSYa9QWQsnyYYf9CjOssx85nS2nu3aQC5=w220-rw"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="header flex items-center justify-end mr-5 gap-x-5 text-white py-10  text-2xl font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary px-4 py-2 border border-[#22d3ee] rounded-md"
                                : "text-white px-4 py-2 border border-[#22d3ee] rounded-md"
                        }>
                        Home
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                        }>
                        Movies
                    </NavLink>
                    <NavLink
                        to="/shows"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                        }>
                        TV Shows
                    </NavLink>
                </div>
            </div>
            <div className="w-full h-full rounded-lg relative">
                <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                <img
                    src={tmdbAPI.imageOriginal(item.poster_path)}
                    alt=""
                    className="w-full h-full object-cover rounded-lg "
                />
                <div className="absolute left-5 bottom-5 w-full text-white ">
                    <h2 className="font-bold text-3xl mb-5">{item.title}</h2>
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
                            className="shadow-xl">
                            Watch now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;
