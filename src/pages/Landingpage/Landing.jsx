import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState } from "react";

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Contact />
            <Footer />
        </>
    );
}
export default Landing;