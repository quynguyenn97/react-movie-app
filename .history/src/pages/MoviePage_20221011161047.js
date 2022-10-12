import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";

const MoviePage = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/popular?api_key=5b6bd71d2eb24fb649d55629a64802ff`,
        fetcher
    );
    const movies = data?.results || [];
    return (
        <div className="py-10 page-container">
            <div className="flex ">
                <div className="flex-1">
                    <input
                        type="text"
                        className="w-full p-4 bg-transparent"
                        placeholder="Type here to search..."
                        // onChange={handleFilterChange}
                    />
                </div>
                <button className=" bg-primary text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
                <div className="grid grid-cols-4 gap-10">
                    {movies &&
                        movies.length > 0 &&
                        movies.map((item) => {
                            return (
                                <MovieCard
                                    key={item.id}
                                    item={item}></MovieCard>
                            );
                        })}
                </div>
            </div>
            {/* {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )} */}
            {/* {loading && (
                <div className="grid grid-cols-4 gap-10">
                    {new Array(itemsPerPage).fill(0).map(() => (
                        <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
                    ))}
                </div>
            )}
            <div className="grid grid-cols-4 gap-10">
                {!loading &&
                    movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
            </div>
            <div className="mt-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="pagination"
                />
            </div> */}
        </div>
    );
};

export default MoviePage;
