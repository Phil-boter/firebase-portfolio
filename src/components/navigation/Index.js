import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageProvider";
import "./style.css";

export default function Navigation() {
    const { language, toggleLanguage } = useContext(LanguageContext);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const style1 = {
        transform: "rotate(45deg) translate(10.5px, 7.5px)",
    };
    const style2 = {
        opacity: 0,
    };
    const style3 = {
        transform: "rotate(-45deg) translate(7.5px, -5px)",
    };

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container" onClick={closeMobileMenu}>
                    <Link to="/">
                        <p className="logo-last">Dawid</p>
                        <p className="logo-first" data-end="P">
                            HILIP
                        </p>
                    </Link>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/Contact" className="bg_slider link">
                            {language === "en"
                                ? "Contact".toUpperCase()
                                : "Kontakt".toUpperCase()}
                        </Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/about" className="bg_slider link">
                            {language === "en" ? (
                                "About".toUpperCase()
                            ) : (
                                <span
                                    className="link"
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    {`über mich`.toUpperCase()}
                                </span>
                            )}
                        </Link>
                    </li>

                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/projects" className="bg_slider link">
                            {language === "en"
                                ? "projects".toUpperCase()
                                : "projekte".toUpperCase()}
                        </Link>
                    </li>
                </ul>
            </div>
            {
                <label
                    onClick={() => toggleLanguage()}
                    className="language-label"
                >
                    {language}
                </label>
            }
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <span className="menu-icon navigation-burger">
                        <div
                            style={style1}
                            className="change burger bar1"
                        ></div>
                        <div
                            style={style2}
                            className="change burger bar2"
                        ></div>
                        <div
                            style={style3}
                            className="change burger bar3"
                        ></div>
                    </span>
                ) : (
                    <span className="navigation-burger">
                        <div className="bar1"></div>
                        <div className="bar3"></div>
                        <div className="bar3"></div>
                    </span>
                )}
            </div>
        </div>
    );
}
