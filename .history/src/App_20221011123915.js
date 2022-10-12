import { Fragment } from "react";
function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>
            <section className="banner h-[400px] page-container">
                <div className="w-full h-full rounded-lg relative">
                    <img
                        src="https://cdnmedia.thethaovanhoa.vn/Upload/3uPkfvAxvuOpUQrmKeiDaA/files/2019/04/C/12/Avengers-EndgameT.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute left-5 bottom-5 w-full text-white">
                        <h2 className="font-bold text-3xl mb-5">
                            Avengers: Endgame
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
                            <button className="p-5 rounded-lg bg-primary">
                                Watch Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default App;
