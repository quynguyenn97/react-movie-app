import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-between page-container">
                <div className="w-[300px] h-[300px] ">
                    <img
                        src="https://i.pinimg.com/564x/cc/65/02/cc6502d1c561faf3e2e5e1d8978110b4.jpg"
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
