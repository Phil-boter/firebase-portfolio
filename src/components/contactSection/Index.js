import { useState, useContext, useEffect } from "react";

import { ResizeContext } from "../../context/ResizeContext";
import useIsDesktopHook from "../../hooks/useIsDesktopHook";

import EmailComponent from "../email/Index";

import "./style.css";

export default function ContactSection({ language }) {
    const [click, setClick] = useState(false);

    const { dimensions } = useContext(ResizeContext);
    const [desktop, renderImage] = useIsDesktopHook(true);

    const handleClick = async (e) => {
        e.preventDefault();

        console.log("click");
        setClick(true);
        console.log(click);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        renderImage(dimensions);
    }, [dimensions, desktop, renderImage]);

    return (
        <>
            <section className="section ">
                {desktop && (
                    <div className="section-image">
                        <img
                            className="section-inner-image"
                            src="/assets/denise-jans-p0QUpDUX8X8-unsplashsmall.jpg"
                            alt=""
                        />
                    </div>
                )}

                <div className="section-article">
                    <div className="main-header contact-header header-before">
                        <h1>
                            {language === "en"
                                ? "get in contact".toUpperCase()
                                : "kontakt".toUpperCase()}{" "}
                        </h1>
                    </div>
                    <article>
                        {language === "en"
                            ? "Find my code and my latest projects on"
                            : "Schaue dir meinen Code und meine Projekte auf"}{" "}
                        <span>
                            <a
                                href="https://github.com/Phil-boter"
                                target="blank"
                                rel="noreferrer"
                                className="link-github"
                            >
                                Github
                            </a>
                        </span>{" "}
                        {language === "de" ? "an." : ". "}
                    </article>
                    <br></br>
                    <article>
                        {language === "en" ? (
                            <p>
                                When you are interested in my educational
                                background and professional experience visit my
                            </p>
                        ) : (
                            <p>
                                Wenn Du an meiner Ausbildung und meinem
                                professionellem Werdegang interessiert bist?
                                Dann schaue doch auf meinem
                            </p>
                        )}
                        <a
                            className="link-linkedIn"
                            href="https://www.linkedin.com/in/philipp-dawid-759793206/"
                            target="blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        {language === "en"
                            ? " profile or download my "
                            : " Profil vorbei oder lade gleich hier meinen "}{" "}
                        <a
                            href="/assets/CV-ENG.pdf"
                            target="blank"
                            type="download"
                            rel="noreferrer"
                            className="link-CV"
                        >
                            {language === "en" ? "here" : " hier "}
                        </a>
                        {language === "en"
                            ? " or scan the QR-Code below."
                            : " oder scanne einfach den QR-Code. "}
                    </article>
                    <br></br>
                    <article>
                        {language === "en" ? (
                            <p>
                                Interested in working with me? Feel free to{" "}
                                <span
                                    className="link-mailto mail-link"
                                    onClick={(e) => handleClick(e)}
                                >
                                    reach out.
                                </span>
                            </p>
                        ) : (
                            <p>
                                Daran interessiert mit mir zu arbeiten?<br></br>{" "}
                                Dann{" "}
                                <span
                                    className="link-mailto mail-link"
                                    onClick={(e) => handleClick(e)}
                                >
                                    schreibe
                                </span>{" "}
                                mir doch eine E-Mail.
                            </p>
                        )}{" "}
                    </article>
                    <br></br>
                    <article className="qr-code-container">
                        <img
                            src="/assets/qrcode_philipp-dawid-portfolio.web.app.png"
                            alt="qr-code to download cv"
                            className="qr-code"
                        />
                    </article>
                </div>
            </section>
            {/* make section bottom curvy */}
            {/* <div className="border-bottom"></div> */}
            <div className={click ? "email-modal active-modal" : "email-modal"}>
                <EmailComponent setClick={setClick} />
            </div>
        </>
    );
}
