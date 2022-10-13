import React from "react";

const Button = ({
    onClick,
    className = "",
    full = false,
    type = "button",
    bgColor = "primary",
    children,
    ...props
}) => {
    let bgClassName = "bg-primary";
    switch (bgColor) {
        case "primary":
            bgClassName = #fc2872;
            break;
        case "secondary":
            bgClassName = "bg-gradient-to-r from-sky-500 to-indigo-500";
            break;
        default:
            break;
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-3 px-6 rounded-lg capitalize mt-auto ${
                full ? "w-full" : ""
            } ${bgClassName} ${className}`}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
