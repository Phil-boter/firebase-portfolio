import "./style.css";

import { useHistory } from "react-router";
import { useEffect } from "react";

export default function NotFound({ language }) {
    const history = useHistory();
    useEffect(() => {
        const goToHome = () => {
            history.push("/");
        };
        setTimeout(() => {
            goToHome();
        }, 2000);
    }, [history]);
    return (
        <>
            {language === "en" ? (
                <div className="notfound-container">
                    <section className="notfound-section">
                        <h1>{"Sorry".toUpperCase()}!</h1>
                        <article>
                            <p>
                                The page you have requested seems not to exist.
                                You will be redirected to Mainpage
                            </p>
                        </article>
                    </section>
                </div>
            ) : (
                <div className="notfound-container">
                    <section className="notfound-section">
                        <h1>{"Entschuldige".toUpperCase()}!</h1>
                        <article>
                            <p>
                                Die Seite die du aufgerufen hast scheint nicht
                                zu existieren. Du wirst gleich auf die
                                Hauptseite zurückgebracht
                            </p>
                        </article>
                    </section>
                </div>
            )}
        </>
    );
}
