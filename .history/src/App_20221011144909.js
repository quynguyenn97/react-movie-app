import { Fragment } from "react";

import MovieList from "./components/MovieList";
function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>
            <section className="banner h-[500px] page-container mb-10">
                <div className="w-full h-full rounded-lg relative">
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                    <img
                        src="https://nextphim.com/wp-content/uploads/2019/03/vince-gilligan-why-ended-breaking-bad-compressed.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute left-5 bottom-5 w-full text-white">
                        <h2 className="font-bold text-3xl mb-5">
                            Breaking Bad
                        </h2>
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
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-white capitalize mb-10 text-3xl font-bold">
                    Now playing
                </h2>
                <MovieList></MovieList>
                <div className="movie-list grid grid-cols-4 gap-10"></div>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-white capitalize mb-10 text-3xl font-bold">
                    Top Rated
                </h2>
                <MovieList type="top_rated"></MovieList>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-white capitalize mb-10 text-3xl font-bold">
                    Trending
                </h2>
                <div className="movie-list grid grid-cols-4 gap-10">
                    <div className="movie-card rounded-lg p-3 bg-slate-800 ">
                        <img
                            src="https://nextphim.com/wp-content/uploads/2019/03/vince-gilligan-why-ended-breaking-bad-compressed.jpg"
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />
                        <h3 className="text-white font-bold text-lg">
                            Prison Break
                        </h3>
                        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                            <span>2017</span>
                            <span>7.4</span>
                        </div>
                        <button className="px-6 py-3 rounded-lg bg-primary font-medium text-white w-full">
                            Watch Now
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default App;
