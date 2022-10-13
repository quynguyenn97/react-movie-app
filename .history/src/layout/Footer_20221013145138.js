import React from "react";

const Footer = () => {
    return (
        <div className="w-full relative page-container">
            <img
                src="https://movie-clone-sigma.vercel.app/static/media/footer-bg.67e95f05e76a8cebf7e2.jpg"
                alt=""
                className="object-cover h-[500px] w-full absolute"
            />
            <h3 className="text-white absolute text-2xl font-bold top-[40%] left-[40%]">
                Contact Me
            </h3>
        </div>
    );
};

export default Footer;
