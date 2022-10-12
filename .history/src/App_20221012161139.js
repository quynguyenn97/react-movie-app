import { Fragment, lazy, Suspense } from "react";
import Banner from "./banner/Banner";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import MoviePage from "./pages/MoviePage";
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
                                <MovieDetailPage></MovieDetailPage>
                            }></Route>
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
}

export default App;
