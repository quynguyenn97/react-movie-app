import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import LoadingSkeleton from "../loading/LoadingSkeleton";
const MovieCard = ({ item }) => {
    const { name, vote_average, first_air_date, poster_path, id } = item;
    const navigate = useNavigate();
    return (
        <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 h-full text-white select-none">
            <img
                src={tmdbAPI.image500(poster_path)}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg">{name}</h3>
                <div className="flex items-center justify-between text-sm opacity-50 mb-10 text-white font-bold">
                    <span>{new Date(first_air_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>
                <Button
                    bgColor="secondary"
                    onClick={() => navigate(`/movie/${id}`)}>
                    Watch now
                </Button>
            </div>
        </div>
    );
};
export default MovieCard;
export const MovieCardSkeleton = () => {
    return (
        <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
            <LoadingSkeleton
                width="100%"
                height="250px"
                radius="8px"
                className="mb-5"></LoadingSkeleton>
            <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">
                    <LoadingSkeleton
                        width="100%"
                        height="20px"></LoadingSkeleton>
                </h3>
                <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                    <span>
                        <LoadingSkeleton
                            width="50px"
                            height="10px"></LoadingSkeleton>
                    </span>
                    <span>
                        <LoadingSkeleton
                            width="30px"
                            height="10px"></LoadingSkeleton>
                    </span>
                </div>
                <LoadingSkeleton
                    width="100%"
                    height="45px"
                    radius="6px"></LoadingSkeleton>
            </div>
        </div>
    );
};
