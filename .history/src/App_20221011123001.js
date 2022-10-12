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
                </div>
            </section>
        </Fragment>
    );
}

export default App;
