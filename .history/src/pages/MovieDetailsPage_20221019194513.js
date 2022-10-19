import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";
import { tmdbAPI } from "../config";
const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
    if (!data) return null;
    const {
        backdrop_path,
        poster_path,
        title,
        genres,
        overview,
        release_date,
        vote_average,
    } = data;
    return (
        <div className="py-10">
            <div className="w-full h-[300px] sm:h-[600px] relative mb-10">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div
                    className="w-full h-full bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${tmdbAPI.imageOriginal(
                            backdrop_path
                        )})`,
                    }}></div>
            </div>
            <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
                <img
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    className="w-full h-full object-cover rounded-xl"
                    alt=""
                />
            </div>
            <h1 className="text-center sm:text-4xl text-xl font-bold text-white mb-10">
                {title}
            </h1>
            {genres.length > 0 && (
                <div className="flex items-center justify-center sm:gap-x-5 gap-x-2 mb-10">
                    {genres.map((item) => (
                        <span
                            className="py-2 px-4 border-primary text-primary border rounded"
                            key={item.id}>
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
            <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
                {overview}
            </p>
            <MovieMeta type="credits"></MovieMeta>
            <MovieMeta type="videos"></MovieMeta>
            <MovieMeta type="similar"></MovieMeta>
        </div>
    );
};
function MovieMeta({ type = "videos" }) {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
    if (!data) return null;
    if (type === "credits") {
        const { cast } = data;
        if (!cast || cast.length <= 0) return null;

        return (
            <div className="py-10">
                <h2 className="text-center text-3xl mb-10">Casts</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                    {cast.slice(0, 8).map((item) => (
                        <div className="cast-item" key={item.id}>
                            <img
                                src={tmdbAPI.imageOriginal(item.profile_path)}
                                className="w-full h-[350px] object-cover rounded-lg mb-3"
                                alt=""
                            />
                            <h3 className="text-xl font-medium">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        const { results } = data;
        if (!results || results.length <= 0) return null;
        if (type === "videos")
            return (
                <div className="py-10">
                    <div className="flex flex-col gap-10">
                        {results.slice(0, 3).map((item) => (
                            <div className="" key={item.id}>
                                <h3 className="mb-5 text-md sm:text-xl font-medium p-3 bg-primary inline-block">
                                    {item.name}
                                </h3>
                                <h3 className="text-white font-bold text-lg">
                                    {title}
                                </h3>
                                <div className="flex items-center gap-x-3 text-sm  mb-3 text-white font-bold">
                                    <span className="opacity-80">
                                        {new Date(release_date).getFullYear()}
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
                                <div
                                    key={item.id}
                                    className="w-full aspect-video">
                                    <iframe
                                        width="864"
                                        height="486"
                                        src={`https://www.youtube.com/embed/${item.key}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full object-fill"></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        if (type === "similar")
            return (
                <div className="py-10">
                    <h2 className="text-3xl font-medium mb-10">
                        Similar movies
                    </h2>
                    <div className="movie-list">
                        <Swiper
                            grabCursor={"true"}
                            spaceBetween={40}
                            slidesPerView={"auto"}>
                            {results.length > 0 &&
                                results.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <MovieCard item={item}></MovieCard>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            );
    }
    return null;
}

// function MovieCredits() {
//     const { movieId } = useParams();
//     const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
//     if (!data) return null;
//     const { cast } = data;
//     if (!cast && cast.length <= 0) return null;
//     return (
//         <>
//             <h2 className="text-center font-bold text-3xl mb-10">Casts</h2>
//             <div className="grid grid-cols-4 gap-5">
//                 {cast.slice(0, 4).map((item) => (
//                     <div className="cast-item" key={item.id}>
//                         <img
//                             src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
//                             className="w-full h-[350px] object-cover rounded-lg mb-3"
//                             alt=""
//                         />
//                         <h3 className="font-blod text-xl">{item.name}</h3>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }
// function MovieVideos() {
//     const { movieId } = useParams();
//     const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
//     if (!data) return null;
//     console.log(data);
//     const { results } = data;
//     if (!results && results.length <= 0) return null;
//     return (
//         <div className="py-10">
//             <div className="flex flex-col gap-5">
//                 {results.slice(0, 3).map((item) => (
//                     <div key={item.id} className="">
//                         <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block">
//                             {item.name}
//                         </h3>
//                         <div key={item.id} className="w-full aspect-video">
//                             <iframe
//                                 width="864"
//                                 height="486"
//                                 src={`https://www.youtube.com/embed/${item.key}`}
//                                 title="YouTube video player"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                                 className="w-full h-full object-fill"></iframe>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// function MovieSimilar() {
//     const { movieId } = useParams();
//     const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "similar"), fetcher);
//     if (!data) return null;
//     const { results } = data;
//     if (!results || results.length <= 0) return null;
//     return (
//         <div className="py-10">
//             <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
//             <div className="movie-list">
//                 <Swiper
//                     grabCursor={"true"}
//                     spaceBetween={40}
//                     slidesPerView={"auto"}>
//                     {results.length > 0 &&
//                         results.map((item) => (
//                             <SwiperSlide key={item.id}>
//                                 <MovieCard item={item}></MovieCard>
//                             </SwiperSlide>
//                         ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// }
export default MovieDetailsPage;
