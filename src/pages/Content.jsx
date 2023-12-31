import React from "react";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Navbar from "../components/Navbar";

const Content = () => {
    return (
        <>
            <div className="flex flex-col">
                <Navbar />
                <Body />
                <Footer />
            </div>
        </>
    );
};

export default Content;
