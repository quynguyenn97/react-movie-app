import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed z-10 w-full">
            <div className="flex items-center  flex-wrap sm:flex-nowrap">
                <div className="w-[250px] h-[50px] sm:w-[130px] sm:h-[60px] mx-auto sm:mx-0 mt-4 sm:mt-0 sm:ml-6">
                    <img
                        src="https://netflix-clone-ebon-nu.vercel.app/f4070143e1f521da82a119eb78b434d0.png"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="header flex items-center sm:justify-end  md:mr-5 gap-x-2 md:gap-x-5 text-white py-5 sm:py-5  text-xl sm:text-sm font-bold mx-auto">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-white" : "text-white"
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
