import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-between page-container">
                <div className="w-[80px] h-[50px] sm:w-[150px] sm:h-[100px] inline-block">
                    <img
                        src="https://i0.wp.com/www.downloadfonts.io/wp-content/uploads/2021/09/Netflix-Logo-Font.png?fit=1024%2C581&ssl=1"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="header flex items-center justify-end mr-0 md:mr-5 gap-x-2 md:gap-x-5 text-white py-10  text-md sm:text-2xl font-bold">
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
