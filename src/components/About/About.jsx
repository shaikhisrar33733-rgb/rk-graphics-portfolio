import React from "react";
import "./About.css";

import storyImage from "../../assets/story.png";
import supportImage from "../../assets/support.png";

const About = () => {
    return (
        <section className="about" id="about">

            <div className="about-container">

                {/* =========================
                    LEFT SIDE
                ========================= */}
                <div className="about-left">

                    {/* Main Image */}
                    <div className="about-main-image">

                        <img
                            src={storyImage}
                            alt="Our Story"
                        />

                        {/* Our Story Card */}
                        <div className="story-card">

                            <div className="story-plus">
                                +
                            </div>

                            <h2>
                                Our Story
                            </h2>

                            <p>
                                Creative ideas. Professional designs.
                                Memorable brands. We bring your vision
                                to life through modern graphic design
                                and printing solutions.
                            </p>

                        </div>

                    </div>


                    {/* Right Small Column */}
                    <div className="about-small-column">

                        {/* Support Card */}
                        <div className="support-card">

                            <h2>
                                24/7 Support
                            </h2>

                            <div className="round-arrow">
                                ↗
                            </div>

                        </div>


                        {/* Small Image */}
                        <div className="small-image">

                            <img
                                src={supportImage}
                                alt="Creative Design"
                            />

                        </div>

                    </div>

                </div>


                {/* =========================
                    RIGHT SIDE
                ========================= */}
                <div className="about-right">

                    {/* Label */}
                    <div className="about-label">

                        <span></span>

                        <p>
                            About Us
                        </p>

                        <span></span>

                    </div>


                    {/* Heading */}
                    <h1>
                        Creative Design
                        <br />
                        Professional Quality
                        <br />
                        Your Vision.
                    </h1>


                    {/* Description */}
                    <p className="about-description">
                        RK Graphic Designs is a creative
                        design studio based in Goregaon, Mumbai,
                        providing professional graphic design
                        and printing solutions. From logos and
                        branding to social media creatives,
                        posters, banners and business materials,
                        we turn your ideas into eye-catching designs.
                    </p>


                    {/* Button */}
                    <button className="about-btn">

                        <span>
                            About Us
                        </span>

                        <span className="btn-arrow">
                            ↗
                        </span>

                    </button>

                </div>

            </div>

        </section>
    );
};

export default About;
