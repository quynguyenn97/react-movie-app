import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-[500px] relative page-container">
            <img
                src="https://movie-clone-sigma.vercel.app/static/media/footer-bg.67e95f05e76a8cebf7e2.jpg"
                alt=""
                className="object-cover h-[500px] w-full absolute"
            />
            <h3 className="text-[#fc2872] absolute text-2xl font-bold bottom-[45%] left-[25%] sm:left-[45%] contact">
                <a href="https://www.facebook.com/nguyenhoangtrongquy/">
                    Contact Me
                </a>
            </h3>
        </div>
    );
};

export default Footer;
