import { Fragment } from "react";
import Banner from "./banner/Banner";
import "swiper/scss";

import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
            </Routes>
        </Fragment>
    );
}

export default App;
