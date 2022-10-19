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
                    ? "navbar active fixed z-10 w-full bg-[#141414] px-10"
                    : "navbar fixed z-10 w-full px-10"
            }>
            <div className="flex items-center  flex-wrap sm:flex-nowrap">
                <div className="w-[250px] h-[50px] sm:w-[130px] sm:h-[60px] mx-auto sm:mx-0 mt-4 sm:mt-0 ">
                    <img
                        src="https://netflix-clone-ebon-nu.vercel.app/f4070143e1f521da82a119eb78b434d0.png"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex items-center  gap-x-2 md:gap-x-5 text-[#e5e5e5] py-5 sm:py-5 text-xl sm:text-[15px] sm:ml-6">
                    <NavLink
                        end
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : ""
                        }>
                        <span className="hover:text-[#b3b3b3]">Home</span>
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : ""
                        }>
                        <span className="hover:text-[#b3b3b3]">Movies</span>
                    </NavLink>
                    <NavLink
                        to="/shows"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold" : ""
                        }>
                        <span className="hover:text-[#b3b3b3]">TV Shows</span>
                    </NavLink>
                </div>
                <div className="sm:flex sm:ml-auto sm:gap-x-6 sm:items-center sm:relative hidden">
                    <div className="flex itesm-center left ">
                        <input
                            className="left-input"
                            type="text"
                            placeholder="Title, genres, people"
                        />
                        <span className="disabled absolute search">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 ">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </span>
                    </div>

                    <span className="logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                        </svg>
                    </span>
                    <div className="flex items-center gap-x-1 logo">
                        <div className="w-[35px] h-[35px] bg-white rounded-md"></div>
                        <span className="logo">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                class="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
