import React, { Fragment } from "react";
import Banner from "../banner/Banner";
import MovieList from "../components/MovieList";

const HomePage = () => {
    return (
        <Fragment>
            <Banner></Banner>
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
                <MovieList type="popular"></MovieList>
            </section>
        </Fragment>
    );
};

export default HomePage;
