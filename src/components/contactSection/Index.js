import { useState, useContext, useEffect } from "react";

import { ResizeContext } from "../../context/ResizeContext";
import useIsDesktopHook from "../../hooks/useIsDesktopHook";

import EmailComponent from "../email/Index";

import "./style.css";

export default function ContactSection({ language }) {
    const { dimensions } = useContext(ResizeContext);
    const [desktop, renderImage] = useIsDesktopHook(true);

    const [click, setClick] = useState(false);

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
            <section className="section">
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
                        {language === "en" ? (
                            <p>Find my code and my latest projects on</p>
                        ) : (
                            <p>Schaue dir meinen Code und meine Projekte auf</p>
                        )}{" "}
                        <span>
                            <a
                                href="https://github.com/Phil-boter"
                                target="blank"
                                rel="noreferrer"
                                className="link-github"
                                data-testid="link-github"
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
                            data-testid="link-linkedin"
                        >
                            LinkedIn
                        </a>
                        {language === "en"
                            ? " profile or download my CV"
                            : " Profil vorbei oder lade gleich"}{" "}
                        {language === "en" ? 
                        // eslint-disable-next-line jsx-a11y/anchor-has-content
                        <a
                            href="/assets/CV-ENG.pdf"
                            target="blank"
                            type="download"
                            rel="noreferrer"
                            className="link-CV"
                        >here</a> : 
                        // eslint-disable-next-line jsx-a11y/anchor-has-content
                        <a
                            href="/assets/CV-DE.pdf"
                            target="blank"
                            type="download"
                            rel="noreferrer"
                            className="link-CV"
                        >hier</a>
                        }
                 
                      
                        {language === "en"
                            ? " or scan the QR-Code below."
                            : " meinen CV herunter oder scanne einfach den QR-Code. "}
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
                        {language === "en" ? 
                            <img
                                src="/assets/qrcode_EN_portfolio-philipp-dawid.web.app.png"
                                alt="qr-code to download cv"
                                className="qr-code"
                             />
                        :
                            <img
                                src="/assets/qrcode_DE_portfolio-philipp-dawid.web.app.png"
                                alt="qr-code to download cv"
                                className="qr-code"
                            />    
                        }    
                    </article>
                </div>
            </section>

            <div className={click ? "email-modal active-modal" : "email-modal"}>
                <EmailComponent setClick={setClick} />
            </div>
        </>
    );
}
