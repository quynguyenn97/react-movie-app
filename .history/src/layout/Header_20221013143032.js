import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-between page-container">
                <div className="w-[300px] h-[300px] ">
                    <img
                        src="https://i.pinimg.com/564x/11/5a/3f/115a3fc998f6dc36976133427db2d926.jpg"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="header flex items-center justify-end mr-5 gap-x-5 text-white py-10  text-2xl font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }>
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
                            isActive ? "text-[#52851b]" : ""
                        }>
                        TV Shows
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
