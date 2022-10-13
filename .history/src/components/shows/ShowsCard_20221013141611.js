import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import LoadingSkeleton from "../loading/LoadingSkeleton";
const ShowCard = ({ item }) => {
    const { name, vote_average, first_air_date, poster_path, id } = item;
    const navigate = useNavigate();
    return (
        <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 h-full text-white select-none">
            <img
                src={tmdbAPI.image500(poster_path)}
                alt=""
                className="w-full h-full object-cover rounded-3xl mb-2"
            />
            <div className="flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg">{name}</h3>
                <div className="flex items-center justify-between text-sm  mb-3 text-white font-bold">
                    <span className="opacity-50">
                        {new Date(first_air_date).getFullYear()}
                    </span>
                    <div className="flex gap-1">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 text-yellow-500">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>
                        </span>
                        <span className="text-yellow-500">
                            {Math.ceil(vote_average)}
                        </span>
                    </div>
                </div>
                <Button
                    className="btn-custom"
                    onClick={() => navigate(`/show/${id}`)}>
                    Watch now
                </Button>
            </div>
        </div>
    );
};
export default ShowCard;
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
