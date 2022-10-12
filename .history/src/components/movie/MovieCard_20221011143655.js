import React from "react";
const MovieCard = ({ item }) => {
    const { title, vote_average, release_date, poster_path, id } = item;
    return (
        <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 h-full text-white">
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <div className="flex items-center justify-between text-sm opacity-50 mb-10 text-white font-bold">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>
                <button className="px-6 py-3 rounded-lg bg-primary font-medium text-white w-full">
                    Watch Now
                </button>
            </div>
        </div>
    );
};
export default MovieCard;
