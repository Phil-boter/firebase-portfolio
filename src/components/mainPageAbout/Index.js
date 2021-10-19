import { Link } from "react-router-dom";
import "./style.css";

export default function MainPageAbout({ language }) {
    let translation = {};
    if (language === "en") {
        translation = {
            header: "get to know me!",
            article:
                "Do you want to know more about me or professional background? Then have a look at my about page.",
            button: "Visit About",
        };
    } else {
        translation = {
            header: "Lerne mich kennen!",
            article:
                'Möchtest Du mehr über mich und meinen Hintergrund erfahren? Dann schaue doch einfach auf meiner "Über mich" Seite vorbei',
            button: "Über mich",
        };
    }

    return (
        <>
            <section className="section-main-about">
                <div className="main-about-article-wrapper">
                    <div className="main-header">
                        <h1>{translation.header.toUpperCase()}</h1>
                    </div>
                    <article className="about-article">
                        <p>{translation.article}</p>

                        <div className="about-button-container">
                            <Link to="/about">
                                <button className="button about-button">
                                    {translation.button}

                                    <img
                                        src="/assets/arrow1.png"
                                        alt="arrow points right"
                                    />
                                </button>
                            </Link>
                        </div>
                    </article>
                </div>
                <div className="section-image">
                    <img
                        className="section-inner-image"
                        src="/assets/content-pixie-iXRVqQtBa_8-unsplash.jpg"
                        alt=""
                    />
                </div>
            </section>
        </>
    );
}
