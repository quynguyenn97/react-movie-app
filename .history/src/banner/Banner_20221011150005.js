import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
const Banner = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=5b6bd71d2eb24fb649d55629a64802ff`,
        fetcher
    );
    const movies = data?.results || [];
    console.log(movies);
    return (
        <section className="banner h-[500px] page-container mb-10"></section>
    );
};
function BannerItem() {
    return (
        <div className="w-full h-full rounded-lg relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img
                src="https://nextphim.com/wp-content/uploads/2019/03/vince-gilligan-why-ended-breaking-bad-compressed.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-5">Breaking Bad</h2>
                <div className="flex items-center gap-x-3">
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                    <button className="px-6 py-3 rounded-lg bg-primary font-medium text-white">
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Banner;
