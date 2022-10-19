import React from "react";

const Button = ({
    onClick,
    className = "",
    full = false,
    type = "button",
    children,
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            }
            {...props}>
            {children}
        </button>
    );
};

export default Button;
