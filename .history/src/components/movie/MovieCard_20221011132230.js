import React from "react";
const MovieCard = () => {
    return (
        <div className="movie-card rounded-lg p-3 bg-slate-800 ">
            <img
                src="https://nextphim.com/wp-content/uploads/2019/03/vince-gilligan-why-ended-breaking-bad-compressed.jpg"
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-white font-bold text-lg">Prison Break</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                <span>2017</span>
                <span>7.4</span>
            </div>
            <button className="px-6 py-3 rounded-lg bg-primary font-medium text-white w-full">
                Watch Now
            </button>
        </div>
    );
};
export default MovieCard;
