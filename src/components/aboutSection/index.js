import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ResizeContext } from "../../context/ResizeContext";
import useIsDesktopHook from "../../hooks/useIsDesktopHook";
import "./style.css";

export default function AboutSection({ language }) {
    const { dimensions } = useContext(ResizeContext);
    const [desktop, renderImage] = useIsDesktopHook(true);
    useEffect(() => {
        window.scrollTo(0, 0);
        renderImage(dimensions);
    }, [dimensions, desktop, renderImage]);

    return (
        <>
            <section className="section about">
                {desktop && (
                    <div className="section-image">
                        <img
                            className="section-inner-image"
                            src="/assets/content-pixie-iXRVqQtBa_8-unsplash.jpg"
                            alt="book with title story of my life and laptop"
                        />
                    </div>
                )}

                <article className="section-article">
                    <div className="main-header about-header">
                        <h1>
                            {language === "en"
                                ? "about me".toUpperCase()
                                : "Über mich".toUpperCase()}{" "}
                        </h1>
                    </div>
                    <div>
                        {language === "en" ? (
                            <p>
                                I am a junior full stack developer with a
                                background in the food industry and automotive
                                service. I started my professional career with
                                an apprenticeship as a brewer and maltster.
                                After finishing the apprenticeship as the best
                                apprentice in Lower Bavaria, I started my
                                education at the Technical University of Berlin
                                to obtain a diploma as a master brewer, which I
                                successfully completed in 2008
                                <br />
                                <p></p>
                                <br />
                                After that I worked for the ARWE Group, until
                                then europe's largest company in automotive
                                service, as team leader and later on as quality
                                manager.
                                <br />
                                When the group went bankrupt during the Corona
                                crisis, I was now able to consistently realise
                                my long-held wish for a reorientation. To
                                realise my long-cherished wish I had already
                                gained my first experience of coding at
                                CodeCademy.com and was sure that coding would be
                                my future. <br />
                                When I was offered the chance to attend a
                                bootcamp at Spiced Academy to become a full
                                stack web developer, I took it.
                                <br />
                                <p></p>
                                <br />
                                In this intensive 12 week course I dived into
                                the depths of JavaScript. At Spiced Academy I
                                built my first full stack web applications using
                                third party APIs, frontend frameworks like
                                React.js and Vue.js and backend like Express.
                                After graduating from the Spiced Academy, I
                                completed the web development career path at
                                CodeCademy. <br />
                                Since I personally want to develop myself
                                further and development for mobile devices is
                                becoming more and more important, I started
                                developing my first apps with react-native and
                                Google Firebase. So feel free to have a look at
                                some of my code on
                            </p>
                        ) : (
                            <p>
                                {" "}
                                Ich bin ein Junior Full Stack Developer mit
                                einem Hintergrund in der Lebensmittelindustrie
                                und im Automobil-Service. Meine berufliche
                                Laufbahn begann ich mit einer Ausbildung zum
                                Brauer und Mälzer. Nachdem ich die Ausbildung
                                als Ausbildungsbester Niederbayern abschlossen
                                hatte, begann ich an der Technischen Universität
                                Berlin meine Ausbildung zum Diplom Braumeister,
                                die ich 2008 erfolgreich abschloss.
                                <br />
                                <p></p>
                                <br />
                                Danach war ich bei der ARWE Group, dem bis dahin
                                größten europäischen Unternehmen im
                                Automobil-Service, als Teamleiter und später als
                                Qualitätsmanager tätig. <br />
                                Als der Konzern während der Corona-Krise in die
                                Insolvenz ging, konnte ich nun meinen lang
                                gehegten Wunsch nach einer Neuorientierung
                                konsequent umsetzen. Um meinen lang gehegten
                                Wunsch zu verwirklichen, hatte ich bereits bei
                                CodeCademy.com erste Erfahrungen mit dem Coding
                                gesammelt und war mir sicher, dass das Coding
                                meine Zukunft sein würde. Als mir die Chance
                                geboten wurde, an einem Bootcamp der SPICED
                                Academy teilzunehmen, um ein Full Stack
                                Developer zu werden, habe ich sie ergriffen.{" "}
                                <br />
                                <p></p>
                                <br />
                                In diesem 12-wöchigen Intensivkurs tauchte ich
                                in die Tiefen von JavaScript ein. An der SPICED
                                Academy habe ich meine ersten
                                Full-Stack-Webanwendungen entwickelt, wobei ich
                                APIs von Drittanbietern, Frontend-Frameworks wie
                                React.js und Vue.js und Backend-Anwendungen wie
                                Express verwendet habe. Nach meinem Abschluss an
                                der Spiced Academy habe ich den
                                Webentwicklungs-Karrierepfad bei CodeCademy
                                absolviert. Da ich mich persönlich
                                weiterentwickeln möchte und die Entwicklung für
                                mobile Geräte immer wichtiger wird, habe ich
                                begonnen, meine ersten Apps mit React-Native und
                                Google Firebase zu entwickeln. Schauen Sie sich
                                also gerne einen Teil meines Codes auf{" "}
                            </p>
                        )}
                        <span
                            className="link-github contact-section-link"
                            onClick={() =>
                                window.open("https://github.com/Phil-boter")
                            }
                        >
                            <p>Github.</p>
                        </span>
                    </div>
                </article>
            </section>
            {/* make section bottom curvy */}
            <div className="border-bottom"></div>
        </>
    );
}
