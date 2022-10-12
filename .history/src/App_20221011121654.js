import { Fragment } from "react";
function App() {
    return (
        <Fragment>
            <header className="header flex items-conter justify-center gap-x-5 text-white py-10 mb-10">
                <span>Home</span>
                <span>Movies</span>
            </header>
            <section className="banner h-[300px] page-container">
                <div className="w-full h-full rounded-lg bg-white"></div>
            </section>
        </Fragment>
    );
}

export default App;
