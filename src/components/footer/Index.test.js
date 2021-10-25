import React from "react";
import { LanguageContext } from "../../context/LanguageProvider";

import Footer from "./Index";
import { MemoryRouter } from "react-router-dom";

import { render, fireEvent, cleanup } from "@testing-library/react";

let location = {
    hash: "",
    path: "/",
    search: "",
    state: undefined,
    key: "x774kd",
};
let language = "en";

afterEach(cleanup);

describe("Footer component", () => {
    const { container } = render(
        <MemoryRouter location={location}>
            <LanguageContext.Provider value={{ language }}>
                <Footer language={language} />
            </LanguageContext.Provider>
        </MemoryRouter>
    );
    it("should render the Footer", () => {
        expect(container.querySelector(".footer-article")).toBeInTheDocument();
    });

    it("should render button, that redirrct to about if Click", async () => {
        const clickToSpy = jest.fn();
        global.open = clickToSpy;
        const { container } = render(
            <MemoryRouter location={location}>
                <LanguageContext.Provider value={{ language }}>
                    <Footer language={language} />
                </LanguageContext.Provider>
            </MemoryRouter>
        );

        fireEvent.click(container.querySelector(".GIT"));
        expect(clickToSpy).toHaveBeenCalled();
        expect(window.open).toBeCalledWith("https://github.com/Phil-boter");

        fireEvent.click(container.querySelector(".LINKEDIN"));
        expect(clickToSpy).toHaveBeenCalled();
        expect(window.open).toBeCalledWith(
            "https://www.linkedin.com/in/philipp-dawid-759793206/"
        );
    });
});
