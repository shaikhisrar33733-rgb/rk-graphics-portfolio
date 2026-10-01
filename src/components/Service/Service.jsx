import React from "react";
import "./Service.css";

import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import service7 from "../../assets/service7.png";
import service8 from "../../assets/service8.png";


const services = [
    {
        number: "01",
        title: "Digital\nPrinting",
        description:
            "We use the latest technology coupled with the finest papers to create the highest quality images for our clients. Brilliant color, rich hues, intriguing",
        image: service1
    },
    {
        number: "02",
        title: "Brand Identity",
        description:
        "We create strong and memorable brand identities with professional logos, colors, typography, and visual elements that give your business a unique and consistent identity.",
        image: service2
    },
    {
        number: "03",
        title: "Graphic Design",
        description:
            "From creative concepts to professional designs, we create eye-catching graphics for logos, brochures, social media, banners, posters, and all your business needs.",
        image: service3
    },
    {
        number: "04",
        title: "Web Development",
        description:
        "Our web development services deliver fast, responsive, and modern websites with clean design, smooth performance, and a professional online presence for your business.",
        image: service4
    },
    {
        number: "05",
        title: "Wedding Card",
        description:
        "We design elegant and beautiful wedding invitations with premium printing, creative details, and stunning finishes that make your special occasion truly memorable.",
        image: service5
    },
    {
        number: "06",
        title: "Business Card",
        description:
        "We create professional and eye-catching business cards with premium printing, creative designs, and quality finishes that leave a lasting impression on your clients.",
        image: service6
    },
    {
        number: "07",
        title: "Bill Book",
        description:
        "We provide high-quality bill book printing with clear layouts, durable paper, and professional finishing to meet your business billing and record-keeping needs.",
        image: service7
    },
    {
        number: "08",
        title: "Premium t-shirt print",
        description:
        "We create premium custom T-shirts with high-quality fabrics, vibrant prints, and professional finishing, perfect for brands, events, teams, and special occasions.",
        image: service8
    }
];


const Service = () => {
    return (
        <section className="service" id="services">

            <div className="service-container">

                {/* =========================
                    SERVICE TOP
                ========================= */}

                <div className="service-top">

                    <div className="service-heading">

                        <div className="service-label">
                            <span></span>
                            <p>Services</p>
                            <span></span>
                        </div>

                        <h2>
                            Tired Of Settling For Subpar
                            <br />
                            Prints That Drain Your Wallet?
                        </h2>

                    </div>


                    <div className="service-top-right">

                        <p>
                            Your business is too important to rely on beginner design
                        </p>

                        <button className="service-main-btn">
                            <span>More Services</span>

                            <span className="service-main-arrow">
                                ↗
                            </span>
                        </button>

                    </div>

                </div>


                {/* =========================
                    SERVICE GRID
                ========================= */}

                <div className="service-grid">

                    {services.map((service, index) => (

                        <div
                            className="service-card"
                            key={index}
                        >

                            {/* CARD TOP */}

                            <div className="service-card-top">

                                <h3>
                                    {service.title.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < service.title.split("\n").length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>

                                <span className="service-number">
                                    {service.number}
                                </span>

                            </div>


                            {/* DIVIDER */}

                            <div className="service-divider"></div>


                            {/* DESCRIPTION */}

                            <p className="service-description">
                                {service.description}
                            </p>


                            {/* IMAGE */}

                            <div className="service-image">

                                <img
                                    src={service.image}
                                    alt={service.title.replace("\n", " ")}
                                />

                            </div>


                            {/* ROUND ARROW */}

                            <div className="service-arrow">
                                ↗
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Service;