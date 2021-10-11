import { Link } from "react-router-dom";
import { useState } from "react";

import SendMail from "../email/Index";

import "./style.css";

export default function Footer() {
    const [email, setSendMail] = useState(false);

    return (
        <>
            <section className="footer-container">
                <article className="footer-article">
                    <span
                        className="link-linkedIn"
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
                        className="link-linkedIn"
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
                        className="link-linkedIn"
                        onClick={() =>
                            // window.open("mailto:philipp_dawid@web.de")
                            setSendMail(true)
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
                    <button>get in Contact</button>
                </Link>
            </section>
        </>
    );
}
