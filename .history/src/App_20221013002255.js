import { Fragment, lazy, Suspense } from "react";
import Banner from "./banner/Banner";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import ShowPage from "./pages/ShowPage";
import ShowDetailsPage from "./pages/ShowDetailPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));

function App() {
    return (
        <Fragment>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route element={<Main></Main>}>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Banner></Banner>
                                    <HomePage></HomePage>
                                </>
                            }></Route>
                        <Route
                            path="/movies"
                            element={<MoviePage></MoviePage>}></Route>
                        <Route
                            path="/movie/:movieId"
                            element={
                                <MovieDetailsPage></MovieDetailsPage>
                            }></Route>
                        <Route
                            path="/shows"
                            element={<ShowPage></ShowPage>}></Route>
                        <Route
                            path="/show/:showId"
                            element={
                                <ShowDetailsPage></ShowDetailsPage>
                            }></Route>
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
}

export default App;
