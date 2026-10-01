import React, { useEffect, useState } from "react";
import "./Hero.css";

import logo from "../../assets/logo2.png";

import heroImage1 from "../../assets/image1.png";
import heroImage2 from "../../assets/image2.png";
import heroImage3 from "../../assets/image3.png";

import clientImage1 from "../../assets/client1.png";
import clientImage2 from "../../assets/client2.png";
import clientImage3 from "../../assets/client3.png";

const Hero = () => {

    const words = [
        "Design & Print",
        "Creative Agency",
        "Digital Solution"
    ];


    const heroImages = [
        heroImage1,
        heroImage2,
        heroImage3
    ];

    const clientImages = [
    clientImage1,
    clientImage2,
    clientImage3
];


    const [currentWord, setCurrentWord] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentClient, setCurrentClient] = useState(0);

    // =========================
    // HEADING TEXT ANIMATION
    // =========================

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    // =========================
    // HERO IMAGE CAROUSEL
    // =========================

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // =========================
// HAPPY CLIENT IMAGE CAROUSEL
// =========================

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentClient((prev) => (prev + 1) % clientImages.length);
    }, 3000);

    return () => clearInterval(interval);
}, []);


    return (
        <section className="hero" id="home">

            {/* =========================
                HERO TOP
            ========================= */}

            <div className="hero-top">

                {/* =========================
                    LEFT CIRCULAR TEXT
                ========================= */}

                <div className="hero-circle">

                    <svg
                        className="circle-text-svg"
                        viewBox="0 0 300 300"
                        xmlns="http://www.w3.org/2000/svg"
                    >

                        <defs>
                            <path
                                id="heroTextPath"
                                d="M 35,150 A 115,115 0 0,1 265,150"
                                fill="none"
                            />
                        </defs>

                        <text className="circle-text-svg-content">

                            <textPath
                                href="#heroTextPath"
                                startOffset="50%"
                                textAnchor="middle"
                            >
                                THE&nbsp;&nbsp;&nbsp;
                                DIGITAL&nbsp;&nbsp;&nbsp;
                                AGENCY&nbsp;&nbsp;&nbsp;
                                BUSINESS
                            </textPath>

                        </text>

                    </svg>


                    <div className="circle-arrow">

                        <svg
                            viewBox="0 0 50 80"
                            xmlns="http://www.w3.org/2000/svg"
                        >

                            <line
                                x1="25"
                                y1="5"
                                x2="25"
                                y2="55"
                            />

                            <path
                                d="M 8 42 L 25 60 L 42 42"
                            />

                        </svg>

                    </div>

                </div>


                {/* =========================
                    HEADING
                ========================= */}

                <div className="hero-content">

                    <h1>

                        Grow Your Digital

                        <br />

                        <span className="animated-word-wrapper">

                            <span
                                key={currentWord}
                                className="animated-word"
                            >
                                {words[currentWord]}
                            </span>

                        </span>

                        <br />

                        Solution

                    </h1>

                </div>


                {/* =========================
                    HERO TOP LOGO
                ========================= */}

                <div className="hero-top-image">

                    <img
                        src={logo}
                        alt="RK Graphics"
                    />

                </div>

            </div>


            {/* =========================
                HERO CARDS
            ========================= */}

            <div className="hero-bottom">

                {/* =========================
                    LEFT COLUMN
                ========================= */}

                <div className="hero-left">

                    {/* WEEKLY CARD */}

                    <div className="hero-card weekly-card">

                        <div className="target-icon">

                            <div className="target-circle">

                                <div className="target-dot"></div>

                                <div className="target-arrow">
                                    ↙
                                </div>

                            </div>

                        </div>


                        <span className="card-number">
                            01
                        </span>


                        <h3>
                            The Weekly
                        </h3>

                    </div>


                    {/* SATISFIED CLIENTS */}

                    <div className="hero-card stat-card">

                        <h2>
                            170+
                        </h2>

                        <p>
                            Satisfied Clients
                        </p>

                    </div>

                </div>


                {/* =========================
                    CENTER IMAGE CAROUSEL
                ========================= */}

                <div className="hero-image">

                <img
    key={currentImage}
    className={`hero-carousel-image image-${currentImage + 1}`}
    src={heroImages[currentImage]}
    alt="RK Graphics Design and Print"
/>

                </div>


                {/* =========================
                    RIGHT COLUMN
                ========================= */}

                <div className="hero-right">

                    {/* PROJECTS CARD */}

                    <div className="hero-card stat-card projects-card">

                        <h2>
                            200+
                        </h2>

                        <p>
                            Complete Projects
                        </p>

                    </div>


                    {/* HAPPY CLIENT */}

                    <div className="hero-card happy-card">

                        <div className="client-images">

                            <div className="client-circle">
                                <img
                                    src={clientImage1}
                                    alt="Happy Client"
                                />
                            </div>

                            <div className="client-circle">
                                <img
                                    src={clientImage2}
                                    alt="Happy Client"
                                />
                            </div>

                            <div className="client-circle">
                                <img
                                    src={clientImage3}
                                    alt="Happy Client"
                                />
                            </div>

                        </div>


                        <span>
                            Happy Client
                        </span>

                    </div>


                    {/* GET IN TOUCH */}

                    <a
                        href="#contact"
                        className="hero-get-touch"
                    >

                        <span>
                            Get In Touch
                        </span>

                        <div className="hero-arrow">
                            ↗
                        </div>

                    </a>

                </div>

            </div>

        </section>
    );
};

export default Hero;