import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header flex items-center justify-end mr-5 gap-x-5 text-white py-10 mb-5 text-xl">
            <div className="w-[150px]">
                <img src="https://myflix.ctgoz.com/uploads/cache/slide_thumb_web/uploads/png/67907260e7b98063d1203d6d033d0bc3.png" />
            </div>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white"
                }>
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? "text-primary" : "")}>
                Movies
            </NavLink>
            <NavLink
                to="/shows"
                className={({ isActive }) => (isActive ? "text-primary" : "")}>
                TV Shows
            </NavLink>
        </header>
    );
};

export default Header;
