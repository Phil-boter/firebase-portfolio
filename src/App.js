import "./App.css";
import { DataProvider } from "./context/DataProvider";
import { LanguageContext } from "./context/LanguageProvider";
import React, { useState } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

// -------Inintializing fireBase--------------
import firebase from "./Firebase/config";
// -------Inintializing fireBase--------------

// _______importing Routes ___________________
import Projects from "./routes/projects/Index";
import Main from "./routes/main/Index";
import Contact from "./routes/contact/Index";
import About from "./routes/about/Index";

// _______importing Routes ___________________

import Navigation from "./components/navigation/Index";
import ScrollToTopButton from "./components/scrollToTopButton/Index";

function App() {
    console.log("firebase", firebase);

    const [language, setLanguage] = useState("en");

    function toggleLanguage() {
        setLanguage((language) => (language === "en" ? "de" : "en"));
    }
    return (
        <BrowserRouter>
            <Switch>
                <LanguageContext.Provider
                    value={{ language, setLanguage, toggleLanguage }}
                >
                    <DataProvider>
                        <Navigation />
                        <Route exact path="/" render={() => <Main />} />
                        <Route path="/projects" render={() => <Projects />} />
                        <Route path="/contact" render={() => <Contact />} />
                        <Route path="/about" render={() => <About />} />
                        <ScrollToTopButton />
                    </DataProvider>
                </LanguageContext.Provider>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
