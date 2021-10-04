import { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

export default function ContactSection({ initialState }) {
    const { language, setLanguage, toggleLanguage } =
        useContext(LanguageContext);
    // const [show, setSendMail] = useState(false);
    // const showEmailForm = (e) => {
    //     e.preventDefault();
    //     setSendMail(true);
    // };
    return (
        <>
            <section className="section">
                <article className="about contact">
                    <h1 className="article-headline">
                        {language === "en"
                            ? "contact".toUpperCase()
                            : "kontakt".toUpperCase()}{" "}
                    </h1>
                    <article>
                        {language === "en"
                            ? "Find my code and my latest projects on"
                            : "Schaue dir meinen Code und meine ProjeKte auf"}{" "}
                        <span className="link-github">
                            <a
                                href="https://github.com/Phil-boter"
                                target="blank"
                                rel="noreferrer"
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
                                Dann schaue doch mal auf meinem
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
                            ? " profile or download my"
                            : " Profil vorbei oder lade gleich hier meinen "}{" "}
                        <a
                            href="/assets/CV-ENG.pdf"
                            target="blank"
                            type="download"
                            rel="noreferrer"
                        >
                            CV
                        </a>
                        {language === "de" ? " herunter." : ". "}
                    </article>
                    <br></br>
                    <article>
                        {language === "en" ? (
                            <p>
                                Interested in working with me? Feel free to{" "}
                                <span className="link-mailto">reach out.</span>
                            </p>
                        ) : (
                            <p>
                                Daran interessiert mit mir zu arbeiten? Dann{" "}
                                <a href="/" className="link-mailto">
                                    schreibe
                                </a>{" "}
                                mir doch eine E-Mail.
                            </p>
                        )}{" "}
                    </article>
                </article>
            </section>
            {/* {show && <SendMail setSendMail={setSendMail} />} */}
        </>
    );
}
