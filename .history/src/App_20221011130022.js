import { Fragment } from "react";
function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>
            <section className="banner h-[400px] page-container mb-10">
                <div className="w-full h-full rounded-lg relative">
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                    <img
                        src="https://nextphim.com/wp-content/uploads/2019/03/vince-gilligan-why-ended-breaking-bad-compressed.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute left-5 bottom-5 w-full text-white">
                        <h2 className="font-bold text-3xl mb-5">
                            Breaking Bad
                        </h2>
                        <div className="flex items-center gap-x-3">
                            <span className="px-4 py-2 border border-white rounded-md">
                                Adventure
                            </span>
                            <span className="px-4 py-2 border border-white rounded-md">
                                Adventure
                            </span>
                            <span className="px-4 py-2 border border-white rounded-md">
                                Adventure
                            </span>
                            <button className="px-6 py-3 rounded-lg bg-primary font-medium text-white">
                                Watch Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="movies-layout page-container-fluid">
                <h2>Now playing</h2>
            </section>
        </Fragment>
    );
}

export default App;
