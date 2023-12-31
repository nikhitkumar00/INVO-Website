import React from "react";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Navbar from "../components/Navbar";

const Content = () => {
    return (
        <>
            <div className="flex h-dvh flex-col">
                <Navbar />
                <Body />
            </div>
            <Footer />
        </>
    );
};

export default Content;
