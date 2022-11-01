import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import ShowsList from "../components/shows/ShowsList";
import Footer from "../layout/Footer";
const HomePage = () => {
    return (
        <Fragment>
            <section className="movies-layout px-5 pb-5">
                <h2 className="text-[#e5e5e5] capitalize text-2xl  sm:text-2xl font-bold">
                    Now playing
                </h2>
                <MovieList type="now_playing"></MovieList>
                <div className="movie-list grid grid-cols-4 gap-10 px-5"></div>
            </section>
            <section className="movies-layout px-5 pb-5">
                <h2 className="text-[#e5e5e5] capitalize  text-2xl sm:text-2xl font-bold">
                    Top Rated
                </h2>
                <MovieList type="top_rated"></MovieList>
            </section>
            <section className="movies-layout px-5 pb-5">
                <h2 className="text-[#e5e5e5] capitalize text-2xl sm:text-2xl font-bold">
                    Trending Now
                </h2>
                <MovieList type="popular"></MovieList>
            </section>

            {/* TV SHOW */}

            <section className="movies-layout px-5 pb-5">
                <h2 className="text-[#e5e5e5] capitalize text-2xl sm:text-2xl font-bold">
                    TV Shows
                </h2>
                <MovieList type="top_rated" tvShow={true}></MovieList>
            </section>
            <section className="movies-layout px-5 pb-5">
                <h2 className="text-[#e5e5e5] capitalize text-2xl sm:text-2xl font-bold">
                    TV Popular
                </h2>
                <MovieList type="popular" tvShow={true}></MovieList>
            </section>
            <section className="movies-layout px-5 pb-5">
                <h2 className="text-[#e5e5e5] capitalize text-2xl sm:text-2xl font-bold">
                    TV On The Air
                </h2>
                <MovieList type="on_the_air" tvShow={true}></MovieList>
            </section>

            {/* <section className="movies-layout px-5 pb-5">
                <h2 className="text-[#e5e5e5] capitalizetext-2xl sm:text-2xl font-bold">
                    TV Shows
                </h2>
                <ShowsList></ShowsList>
            </section>
            <section className="movies-layout px-5 pb-5">
                <h2 className="text-[#e5e5e5] capitalize text-2xl sm:text-2xl font-bold">
                    TV Popular
                </h2>
                <ShowsList type="popular"></ShowsList>
            </section>
            <section className="movies-layout px-5 pb-20">
                <h2 className="text-[#e5e5e5] capitalize text-2xl sm:text-2xl font-bold">
                    TV On The Air
                </h2>
                <ShowsList type="on_the_air"></ShowsList>
            </section> */}
            <Footer />
        </Fragment>
    );
};

export default HomePage;
