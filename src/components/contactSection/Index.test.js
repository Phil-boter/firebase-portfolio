import React from "react";

import { render } from "@testing-library/react";

import { ResizeProvider } from "../../context/ResizeContext.js";
import { LanguageContext } from "../../context/LanguageProvider.js";
import ContactSection from "./Index.js";

let language = "en";

describe("MainPageAbout Component", () => {
    it("should render correctly and match snapshot", () => {
        const { container } = render(
            <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                <LanguageContext.Provider value={language}>
                    <ContactSection language={language} />
                </LanguageContext.Provider>
            </ResizeProvider>
        );
        expect(container).toMatchSnapshot();
    });

    it("should render ContactSection", () => {
        const { container } = render(
            <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                <LanguageContext.Provider value={language}>
                    <ContactSection language={language} />
                </LanguageContext.Provider>
            </ResizeProvider>
        );
        expect(container.querySelector(".section")).toBeInTheDocument();
    });
    it("should render Link, that redirect to GitHub if Click", () => {
        const clickToSpy = jest.fn();
        global.open = clickToSpy;
        const { container } = render(
            <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                <LanguageContext.Provider value={language}>
                    <ContactSection language={language} />
                </LanguageContext.Provider>
            </ResizeProvider>
        );
        expect(
            container.querySelector(".link-github").getAttribute("href")
        ).toBe("https://github.com/Phil-boter");

        expect(
            container.querySelector(".link-linkedIn").getAttribute("href")
        ).toBe("https://www.linkedin.com/in/philipp-dawid-759793206/");
    });
});
