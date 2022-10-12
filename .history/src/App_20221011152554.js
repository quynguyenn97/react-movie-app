import { Fragment } from "react";
import Banner from "./banner/Banner";
import "swiper/scss";

import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
function App() {
    return (
        <Fragment>
            <Routes>
                <Route element={<Main></Main>}>
                    <Route path="/" element={<HomePage></HomePage>}></Route>

                    <Route path="/" element={<HomePage></HomePage>}></Route>
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
