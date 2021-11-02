import "./App.css";
import { DataProvider } from "./context/DataProvider";
import { LanguageContext } from "./context/LanguageProvider";
import { ResizeProvider } from "./context/ResizeContext";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// -------Inintializing fireBase--------------
import firebase from "./Firebase/config";
// -------Inintializing fireBase--------------

// _______importing Routes ___________________
import Projects from "./routes/projects/Index";
import Main from "./routes/main/Index";
import Contact from "./routes/contact/Index";
import About from "./routes/about/Index";
import SingleProject from "./routes/singleProject/Index";
import NotFound from "./routes/notFound/Index";

// _______importing Routes ___________________

import Navigation from "./components/navigation/Index";
import ScrollToTopButton from "./components/scrollToTopButton/Index";
import Footer from "./components/footer/Index";

export default function App() {
    const [language, setLanguage] = useState("en");

    const [showScroll, setShowScroll] = useState(false);

    function toggleLanguage() {
        setLanguage((language) => (language === "en" ? "de" : "en"));
    }
    return (
        <div className="app-test">
            <BrowserRouter>
                <ResizeProvider>
                    <LanguageContext.Provider
                        value={{ language, toggleLanguage }}
                    >
                        <DataProvider>
                            <Navigation
                                language={language}
                                toggleLanguage={toggleLanguage}
                                setLanguage={setLanguage}
                            />
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => <Main language={language} />}
                                />
                                <Route
                                    path="/projects"
                                    render={() => (
                                        <Projects language={language} />
                                    )}
                                />
                                <Route
                                    path="/contact"
                                    render={() => (
                                        <Contact language={language} />
                                    )}
                                />
                                <Route
                                    path="/about"
                                    render={() => <About language={language} />}
                                />
                                <Route
                                    path="/singleProject/:id"
                                    render={(props) => (
                                        <SingleProject
                                            projectId={props.match.params.id}
                                            language={language}
                                        />
                                    )}
                                />
                                <Route
                                    path="*"
                                    render={() => (
                                        <NotFound language={language} />
                                    )}
                                />
                            </Switch>
                            <Footer language={language} />
                            <ScrollToTopButton
                                showScroll={showScroll}
                                setShowScroll={setShowScroll}
                            />
                        </DataProvider>
                    </LanguageContext.Provider>
                </ResizeProvider>
            </BrowserRouter>
        </div>
    );
}
