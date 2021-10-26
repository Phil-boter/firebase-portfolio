import React from "react";

import { render, fireEvent } from "@testing-library/react";

import { ResizeProvider } from "../../context/ResizeContext.js";
import { LanguageContext } from "../../context/LanguageProvider.js";
import AboutSection from "./index.js";

let language = "en";

describe("AboutSection Component", () => {
    it("should render AboutSection", () => {
        const { container } = render(
            <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                <LanguageContext.Provider value={language}>
                    <AboutSection language={language} />
                </LanguageContext.Provider>
            </ResizeProvider>
        );
        expect(container.querySelector(".about")).toBeInTheDocument();
    });
    it("should render Link, that redirrct to GitHub if Click", () => {
        const clickToSpy = jest.fn();
        global.open = clickToSpy;
        const { container } = render(
            <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                <LanguageContext.Provider value={language}>
                    <AboutSection language={language} />
                </LanguageContext.Provider>
            </ResizeProvider>
        );
        expect(container.querySelector(".link-github")).toBeInTheDocument();
        fireEvent.click(container.querySelector(".link-github"));
        expect(clickToSpy).toHaveBeenCalled();
        expect(window.open).toBeCalledWith("https://github.com/Phil-boter");
    });
});
