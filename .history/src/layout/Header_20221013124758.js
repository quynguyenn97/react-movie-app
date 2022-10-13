import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-between">
                <div className="w-[150px] h-[50px] ">
                    <img
                        src="https://lh3.googleusercontent.com/PKN1FnJI47uq4ALS20FPwOTh9uuSUzF07Z7jSYa9QWQsnyYYf9CjOssx85nS2nu3aQC5=w220-rw"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="header flex items-center justify-end mr-5 gap-x-5 text-white py-10  text-2xl font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "text-white"
                        }
                        px-4 py-2 border border-[#22d3ee] rounded-md>
                        Home
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                        }>
                        Movies
                    </NavLink>
                    <NavLink
                        to="/shows"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                        }>
                        TV Shows
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
