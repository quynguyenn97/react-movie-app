import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import ShowsList from "../components/shows/ShowsList";
import Footer from "../layout/Footer";
const HomePage = () => {
    return (
        <Fragment>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-[#e5e5e5] capitalize text-2xl sm:text-3xl font-bold">
                    Now playing
                </h2>
                <MovieList></MovieList>
                <div className="movie-list grid grid-cols-4 gap-10"></div>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-[#e5e5e5] capitalize mb-5 text-2xl sm:text-3xl font-bold">
                    Top Rated
                </h2>
                <MovieList type="top_rated"></MovieList>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-[#e5e5e5] capitalize  text-2xl sm:text-3xl font-bold">
                    Trending Now
                </h2>
                <MovieList type="popular"></MovieList>
            </section>

            <section className="movies-layout page-container pb-20">
                <h2 className="text-[#e5e5e5] capitalizetext-2xl sm:text-3xl font-bold">
                    TV Shows
                </h2>
                <ShowsList></ShowsList>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-[#e5e5e5] capitalize mb-5 text-2xl sm:text-3xl font-bold">
                    TV Popular
                </h2>
                <ShowsList type="popular"></ShowsList>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-[#e5e5e5] capitalize mb-5 text-2xl sm:text-3xl font-bold">
                    TV On The Air
                </h2>
                <ShowsList type="on_the_air"></ShowsList>
            </section>
            <Footer />
        </Fragment>
    );
};

export default HomePage;
