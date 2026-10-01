import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
    FiPhone,
    FiMail,
    FiClock,
    FiMapPin,
    FiEdit3,
    FiGift,
    FiHome
} from "react-icons/fi";

const Contact = () => {
    const [activePanel, setActivePanel] = useState(null);
    const [sending, setSending] = useState(false);
    const [formMessage, setFormMessage] = useState("");
    const [formStatus, setFormStatus] = useState("");

    const togglePanel = (panel) => {
        setActivePanel(activePanel === panel ? null : panel);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        try {
            setSending(true);
            setFormMessage("");
            setFormStatus("");

            await emailjs.sendForm(
                "service_3vs5syp",
                "template_oap11p4",
                form,
                {
                    publicKey: "eCNU-4qH_050upj7_"
                }
            );

            setFormStatus("success");
            setFormMessage("Message sent successfully!");

            form.reset();
        } catch (error) {
            console.error("EmailJS error:", error);

            setFormStatus("error");
            setFormMessage(
                "Sorry, your message could not be sent. Please try again."
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            {/* LEFT FLOATING CONTACT / SOCIAL TABS */}

            <div className="floating-contact-wrapper">
                <button
                    type="button"
                    className="floating-contact-tab contact-tab"
                    onClick={() => togglePanel("contact")}
                >
                    <span className="contact-tab-icon">✉</span>
                    <span>Contact Us</span>
                </button>

                <button
                    type="button"
                    className="floating-contact-tab facebook-tab"
                    onClick={() => togglePanel("facebook")}
                    aria-label="Facebook"
                >
                    f
                </button>

                <button
                    type="button"
                    className="floating-contact-tab instagram-tab"
                    onClick={() => togglePanel("instagram")}
                    aria-label="Instagram"
                >
                    ◎
                </button>
            </div>

            {/* CONTACT FORM PANEL */}

            <div
                className={`floating-panel contact-floating-panel ${
                    activePanel === "contact" ? "open" : ""
                }`}
            >
                <button
                    type="button"
                    className="floating-panel-close"
                    onClick={() => setActivePanel(null)}
                    aria-label="Close Contact Form"
                >
                    ×
                </button>

                <h3>Contact Form</h3>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoComplete="name"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        autoComplete="tel"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                    ></textarea>

                    {formMessage && (
                        <p
                            role="status"
                            aria-live="polite"
                            style={{
                                color:
                                    formStatus === "success"
                                        ? "#2eaa62"
                                        : "#ff6b6b",
                                fontSize: "14px",
                                margin: "10px 0"
                            }}
                        >
                            {formMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="floating-form-submit"
                        disabled={sending}
                    >
                        {sending ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>

            {/* FACEBOOK PANEL */}

            <div
                className={`floating-panel social-floating-panel facebook-floating-panel ${
                    activePanel === "facebook" ? "open" : ""
                }`}
            >
                <button
                    type="button"
                    className="floating-panel-close"
                    onClick={() => setActivePanel(null)}
                    aria-label="Close Facebook"
                >
                    ×
                </button>

                <div className="social-panel-icon facebook-panel-icon">
                    f
                </div>

                <h3>Facebook</h3>
                <p>Follow us on Facebook</p>

                <a
                    href="https://www.facebook.com/share/1F4coo3gac/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-panel-button facebook-panel-button"
                >
                    Visit Facebook
                </a>
            </div>

            {/* INSTAGRAM PANEL */}

            <div
                className={`floating-panel social-floating-panel instagram-floating-panel ${
                    activePanel === "instagram" ? "open" : ""
                }`}
            >
                <button
                    type="button"
                    className="floating-panel-close"
                    onClick={() => setActivePanel(null)}
                    aria-label="Close Instagram"
                >
                    ×
                </button>

                <div className="social-panel-icon instagram-panel-icon">
                    ◎
                </div>

                <h3>Instagram</h3>
                <p>Follow us on Instagram</p>

                <a
                    href="https://www.instagram.com/rk_graphics_67?stkn=MTB1NzI1bjJnODZuNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-panel-button instagram-panel-button"
                >
                    Visit Instagram
                </a>
            </div>

            {/* CONTACT SECTION */}

            <section className="contact-section" id="contact">
                {/* CONTACT HERO */}

                <div className="contact-hero">
                    <div className="contact-hero-content">
                        <div className="contact-small-title">
                            Get In Touch
                        </div>

                        <h1>Contact Us</h1>

                        <div className="contact-breadcrumb">
                            <FiHome />
                            <span>Home</span>
                            <span className="arrow">→</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>

                {/* CONTACT INFORMATION CARDS */}

                <div className="contact-info-grid">
                    <div className="contact-info-card">
                        <div className="contact-icon">
                            <FiPhone />
                        </div>

                        <h3>+91-9137975989</h3>
                        <p>+91-7304454553</p>
                        <span>Phone Number</span>
                    </div>

                    <div className="contact-info-card">
                        <div className="contact-icon">
                            <FiMail />
                        </div>

                        <h3>rgraphics67@gmail.com</h3>
                        <span>Email Address</span>
                    </div>

                    <div className="contact-info-card">
                        <div className="contact-icon">
                            <FiClock />
                        </div>

                        <h3>Mon - sun: 9am - 7pm</h3>
                        <br />
                        <p>Business Hour</p>
                    </div>

                    <div className="contact-info-card">
                        <div className="contact-icon">
                            <FiMapPin />
                        </div>

                        <h3>Santosh Nagar Market</h3>
                        <p>
                            Goregaon East
                            <br />
                            Mumbai 400065
                        </p>
                        <span>Office Address</span>
                    </div>
                </div>

                {/* YELLOW CTA BAR */}

                <div className="contact-cta">
                    <div className="cta-item">
                        <FiEdit3 className="cta-icon" />
                        <h3>View Our Services</h3>
                    </div>

                    <div className="cta-item">
                        <FiClock className="cta-icon" />
                        <h3>Contact Us 24/7</h3>
                    </div>

                    <div className="cta-item">
                        <FiGift className="cta-icon" />
                        <h3>Special Offers!</h3>
                    </div>
                </div>

                {/* GOOGLE MAP */}

                <div className="contact-map-section">
                    <iframe
                        title="Universal Academy Location"
                        src="https://www.google.com/maps?q=Universal%20Academy%2C%20Santosh%20Nagar%2C%20Goregaon%20East%2C%20Mumbai%2C%20Maharashtra%20400065&output=embed"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default Contact;