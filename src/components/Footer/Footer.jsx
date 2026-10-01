import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            {/* =========================
                TOP CONTACT BOX
            ========================= */}

            <div className="footer-contact-box">

                {/* CALL */}
                <div className="footer-contact-item">

                    <div className="footer-contact-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                            19.79 19.79 0 0 1-8.63-3.07
                            19.5 19.5 0 0 1-6-6
                            19.79 19.79 0 0 1-3.07-8.67
                            A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
                            12.84 12.84 0 0 0 .7 2.81
                            2 2 0 0 1-.45 2.11L8.09 9.91
                            a16 16 0 0 0 6 6l1.27-1.27
                            a2 2 0 0 1 2.11-.45
                            12.84 12.84 0 0 0 2.81.7
                            A2 2 0 0 1 22 16.92z"
                            />
                            <path d="M15 2a7 7 0 0 1 7 7" />
                            <path d="M15 6a3 3 0 0 1 3 3" />
                        </svg>
                    </div>

                    <div className="footer-contact-text">
                        <h3>Call For Inquiry</h3>

                        <p>
                            +91 7304454553&nbsp;
                            +91 9137975989&nbsp;
                            
                        </p>
                    </div>

                </div>


                {/* EMAIL */}
                <div className="footer-contact-item">

                    <div className="footer-contact-icon">

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <rect
                                x="3"
                                y="5"
                                width="18"
                                height="14"
                                rx="1"
                            />

                            <path d="m3 7 9 6 9-6" />

                        </svg>

                    </div>

                    <div className="footer-contact-text">

                        <h3>Email For Inquiry</h3>

                        <p>
                            rgraphics67@gmail.com
                        
                        </p>

                    </div>

                </div>


                {/* BUTTON */}
                <div className="footer-contact-button-wrap">

                    <button className="footer-contact-button">

                        <span>
                            Contact Now
                        </span>

                        <span className="footer-button-arrow">
                            ↗
                        </span>

                    </button>

                </div>

            </div>


            {/* =========================
                FOOTER CONTENT
            ========================= */}

            <div className="footer-container">

                {/* ABOUT */}
                <div className="footer-column footer-about">

                    <p>
                    RK Graphic Designs is a creative design studio based in Goregaon, Mumbai, providing professional graphic design and printing solutions. From logos and branding to social media creatives, posters, banners and business materials, we turn your ideas into eye-catching designs.
                    </p>

                </div>


                {/* NAVIGATION */}
                <div className="footer-column footer-navigation">

                    <a href="#home">
                        <span>↗</span>
                        Home
                    </a>

                    <a href="#about">
                        <span>↗</span>
                        About Us
                    </a>

                    <a href="#services">
                        <span>↗</span>
                        Services
                    </a>

                    <a href="#our-work">
                        <span>↗</span>
                        OurWork
                    </a>

                    <a href="#contact">
                        <span>↗</span>
                        Contact Us
                    </a>

                </div>


                {/* CONTACT DETAILS */}
                <div className="footer-column footer-details">

                    <div className="footer-detail-row">

                        <div className="footer-detail-icon">

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />

                                <circle
                                    cx="12"
                                    cy="9"
                                    r="2.2"
                                />
                            </svg>

                        </div>

                        <p>
                            Santosh Nagar Market 
                            <br />
                            Goregaon East
                            <br />
                            Mumbai 400065-INDIA
                        </p>

                    </div>


                    <div className="footer-detail-row">

                        <div className="footer-detail-icon">

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <rect
                                    x="3"
                                    y="5"
                                    width="18"
                                    height="14"
                                    rx="1"
                                />

                                <path d="m3 7 9 6 9-6" />

                            </svg>

                        </div>

                        <p>
                        rgraphics67@gmail.com
                        
                        </p>

                    </div>


                    <div className="footer-detail-row">

                        <div className="footer-detail-icon">

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                                19.79 19.79 0 0 1-8.63-3.07
                                19.5 19.5 0 0 1-6-6
                                19.79 19.79 0 0 1-3.07-8.67
                                A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
                                12.84 12.84 0 0 0 .7 2.81
                                2 2 0 0 1-.45 2.11L8.09 9.91
                                a16 16 0 0 0 6 6l1.27-1.27
                                a2 2 0 0 1 2.11-.45
                                12.84 12.84 0 0 0 2.81.7
                                A2 2 0 0 1 22 16.92z"
                                />

                            </svg>

                        </div>

                        <p>
                            +91-7304454553
                        
                            <br />
                            +91-9137975989
                        </p>

                    </div>

                </div>

    
{/* SOCIAL */}
<div className="footer-social">

    <a href="https://www.facebook.com/share/1F4coo3gac/" className="facebook-icon" aria-label="Facebook">
        f
    </a>

    <a href="https://www.instagram.com/rk_graphics_67?stkn=MTB1NzI1bjJnODZuNw==" className="instagram-icon" aria-label="Instagram">
        <span className="instagram-camera">◎</span>
    </a>

</div>


            </div>


            {/* =========================
                COPYRIGHT
            ========================= */}

            <div className="footer-bottom">

                <p>
                    Copyright © 2026 RK Graphics. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
};

export default Footer;