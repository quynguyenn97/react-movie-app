import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });
    return (
        <header
            className={
                navbar
                    ? "navbar active fixed z-10 w-full bg-[#141414]"
                    : "navbar fixed z-10 w-full"
            }>
            <div className="flex items-center  flex-wrap sm:flex-nowrap">
                <div className="w-[250px] h-[50px] sm:w-[130px] sm:h-[60px] mx-auto sm:mx-0 mt-4 sm:mt-0 sm:ml-6">
                    <img
                        src="https://netflix-clone-ebon-nu.vercel.app/f4070143e1f521da82a119eb78b434d0.png"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex items-center  gap-x-2 md:gap-x-5 text-[#e5e5e5] py-5 sm:py-5 text-xl sm:text-[15px] sm:ml-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-white" : "text-white"
                        }>
                        <span className="hover:text-[#b3b3b3]">Home</span>
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }>
                        <span className="hover:text-[#b3b3b3]">Movies</span>
                    </NavLink>
                    <NavLink
                        to="/shows"
                        className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }>
                        <span className="hover:text-[#b3b3b3]">TV Shows</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
