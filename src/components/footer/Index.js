import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import EmailComponent from "../email/Index";

import "./style.css";

export default function Footer({ language }) {
    const location = useLocation();

    const [click, setClick] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        if (location.pathname === "/") {
            document.getElementById("scroll-point").scrollIntoView();
        } else {
            setClick(true);
            window.scrollTo(0, 0);
        }
    };

    return (
        <>
            <div className={click ? "email-modal active-modal" : "email-modal"}>
                <EmailComponent setClick={setClick} />
            </div>

            <section className="footer-container">
                <article className="footer-article">
                    <span
                        className="link-linkedIn GIT"
                        onClick={() =>
                            window.open("https://github.com/Phil-boter")
                        }
                    >
                        <img
                            className="arrow slide-footer"
                            src="/assets/git.png"
                            alt="github"
                        />
                    </span>

                    <span
                        className="link-linkedIn LINKEDIN"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/philipp-dawid-759793206/"
                            )
                        }
                    >
                        <img
                            className="arrow slide-footer"
                            src="/assets/linkedIn.png"
                            alt="linkedIn"
                        />
                    </span>

                    <span
                        className="link-linkedIn MAILTO"
                        onClick={(e) =>
                            // window.open("mailto:philipp_dawid@web.de")
                            handleClick(e)
                        }
                    >
                        <img
                            className="arrow slide-footer"
                            src="/assets/mail.png"
                            alt="mail"
                        />
                    </span>
                </article>

                <Link to="/contact">
                    <button className="button">
                        {language === "en" ? "Get in Contact" : "Kontakt"}
                    </button>
                </Link>
            </section>
        </>
    );
}
