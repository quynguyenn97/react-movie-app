import { Fragment } from "react";
import Banner from "./banner/Banner";
import "swiper/scss";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import MoviePage from "./pages/MoviePage";
function App() {
    return (
        <Fragment>
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
                        path="/movies/:movieId"
                        element={<MovieDetailPage></MovieDetailPage>}></Route>
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
