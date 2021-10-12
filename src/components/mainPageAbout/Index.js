import { Archive } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./style.css";

export default function MainPageAbout({ language }) {
    let translation = {};
    if (language === "en") {
        translation = {
            header: "get to know me!",
            article:
                " Do you want to know more about me? Then have a look at my about page.",
            button: "Visit About",
        };
    } else {
        translation = {
            header: "Lerne mich kennen!",
            article:
                'Möchtest Du mehr über mich erfahren? Dann schaue doch einfach auf meiner "Über mich" Seite vorbei',
            button: "Über mich",
        };
    }

    return (
        <>
            <section className="section-main-about">
                <h1 className="main-header">
                    {translation.header.toUpperCase()}
                </h1>

                <article className="about-article">
                    <p>{translation.article}</p>
                    <div className="about-button-container">
                        <Link to="/about">
                            <label className="button about-button">
                                {translation.button}

                                <img
                                    src="/assets/arrow1.png"
                                    alt="arrow points right"
                                />
                            </label>
                        </Link>
                    </div>
                </article>
            </section>
        </>
    );
}
