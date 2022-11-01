import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { tmdbAPI } from "../../config";
import ShowsCard from "./ShowsCard";

const ShowList = ({ type = "top_rated" }) => {
    const { data, error } = useSWR(tmdbAPI.getTVList(type), fetcher);
    const isLoading = !data && !error;
    const show = data?.results || [];
    return (
        <div className="movie-list">
            {isLoading && <></>}
            {!isLoading && (
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={40}
                    slidesPerView={"auto"}>
                    {show &&
                        show.length > 0 &&
                        show.map((item) => {
                            return (
                                <SwiperSlide key={`movie-${item.id}`}>
                                    <ShowsCard item={item}></ShowsCard>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            )}
        </div>
    );
};

export default ShowList;
