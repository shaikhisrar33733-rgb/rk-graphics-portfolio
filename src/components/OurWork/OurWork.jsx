import React from "react";
import "./OurWork.css";
import bill from "../../assets/bill1.png";
import banner from "../../assets/banner2.png";
import id from "../../assets/id3.png";
import tshirt from "../../assets/tshirt4.png";
import graphic from "../../assets/graphic5.png";
import  marraige from "../../assets/marraige6.png";
import  diary from "../../assets/diary7.png";
import  ua from "../../assets/ua8.png";
const portfolioItems = [
    {
        id: 1,
        image: bill,
        title: "Bill Design",
    },
    {
        id: 2,
        image: banner,
        title: "banner",
    },
    {
        id: 3,
        image: id,
        title: "id",
    },
    {
        id: 4,
        image: tshirt,
        title: "tshirt",
    },
    {
        id: 5,
        image: graphic,
        title: "graphic",
    },
    {
        id: 6,
        image: marraige,
        title: "marraige",
    },
    {
        id: 7,
        image: diary,
        title: "diary",
    },
    {
        id: 8,
        image: ua,
        title: "ua",
    },
];

const OurWork = () => {
    return (
        <div className="portfolio-page">

            {/* =================================
                PORTFOLIO HERO
            ================================= */}

            <section className="portfolio-section"
            id="our-work">

                <div className="portfolio-overlay"></div>

                <div className="portfolio-hero-content">

                    <h1>Our Portfolio</h1>

                    <div className="portfolio-breadcrumb">

                        <span className="home-icon">
                            ⌂
                        </span>

                        <span>
                            Home
                        </span>

                        <span className="breadcrumb-arrow">
                            →
                        </span>

                        <span>
                            Portfolio
                        </span>

                    </div>

                </div>

            </section>


            {/* =================================
                PORTFOLIO WORKS
            ================================= */}

            <section className="portfolio-section">

                <div className="portfolio-container">

                    <div className="portfolio-grid">

                        {portfolioItems.map((item) => (

                            <div
                                className="portfolio-card"
                                key={item.id}
                            >

    <img
    src={item.image}
    alt={item.title || "Portfolio Work"}
/>

                                <button
                                    className="portfolio-arrow"
                                    type="button"
                                    aria-label="View portfolio work"
                                >
                                    ↗
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>
    );
};

export default OurWork;