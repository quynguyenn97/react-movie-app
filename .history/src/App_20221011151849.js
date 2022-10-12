import { Fragment } from "react";
import Banner from "./banner/Banner";
import "swiper/scss";

import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
function App() {
    return (
        <Fragment>
            <Header></Header>
            <Banner></Banner>
            <HomePage></HomePage>
        </Fragment>
    );
}

export default App;
