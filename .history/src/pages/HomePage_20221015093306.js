import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import ShowsList from "../components/shows/ShowsList";
import Footer from "../layout/Footer";
const HomePage = () => {
    return (
        <Fragment>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-primary capitalize mb-5 text-2xl sm:text-3xl font-bold">
                    Now playing
                </h2>
                <MovieList></MovieList>
                <div className="movie-list grid grid-cols-4 gap-10"></div>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-primary capitalize mb-5 text-3xl font-bold">
                    Top Rated
                </h2>
                <MovieList type="top_rated"></MovieList>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-primary capitalize mb-5 text-3xl font-bold">
                    Trending
                </h2>
                <MovieList type="popular"></MovieList>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-[#88d13a] capitalize mb-5 text-3xl font-bold">
                    TV Shows
                </h2>
                <ShowsList type="popular"></ShowsList>
            </section>
            <Footer />
        </Fragment>
    );
};

export default HomePage;
