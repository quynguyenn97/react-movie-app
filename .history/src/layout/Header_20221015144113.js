import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="flex items-center sm:justify-between page-container flex-wrap sm:flex-nowrap">
                <div className="w-[250px] h-[50px] sm:w-[150px] sm:h-[100px] mx-auto sm:mx-0 mt-4 sm:mt-0">
                    <img
                        src="https://i0.wp.com/www.downloadfonts.io/wp-content/uploads/2021/09/Netflix-Logo-Font.png?fit=1024%2C581&ssl=1"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="header flex items-center sm:justify-end  md:mr-5 gap-x-2 md:gap-x-5 text-white py-5 sm:py-10  text-xl sm:text-2xl font-bold mx-auto">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-[#facc15]" : "text-white"
                        }>
                        <span className="hover:text-[#facc15]">Home</span>
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                        }>
                        <span className="hover:text-primary">Movies</span>
                    </NavLink>
                    <NavLink
                        to="/shows"
                        className={({ isActive }) =>
                            isActive ? "text-[#52851b]" : ""
                        }>
                        <span className="hover:text-[#52851b]">TV Shows</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
