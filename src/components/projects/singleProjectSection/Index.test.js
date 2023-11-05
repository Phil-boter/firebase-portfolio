import React from "react";

import { fireEvent, render } from "@testing-library/react";
import { shallow } from "enzyme";

import { LanguageContext } from "../../../context/LanguageProvider.js";
import SingleProjectSection from "./Index.js";
import { BrowserRouter, Router } from "react-router-dom";

import { createMemoryHistory } from "history";

let language = "en";
const projectId = "DtwV1g82I9yuKZn4YCra";
const project = {
    title: "test-title1",
    title_second: "test-title2",
    desc_en: "test-desc-en",
    desc_de: "test-desc-de",
    tech_en: "test-tech-en",
    tech_de: "test-tech-de",
    projectId: "DtwV1g82I9yuKZn4YCra",
    image: "/assets/monkey1.png",
    link: "test-link",
    host: "test-host",
    images: [
        "/assets/monkey2.png",
        "/assets/monkey3.png",
        "/assets/monkey4.png",
    ],
};
const imageArray = [
    "/assets/monkey2.png",
    "/assets/monkey3.png",
    "/assets/monkey4.png",
];

const { container } = render(
    <BrowserRouter>
        <LanguageContext.Provider value={language}>
            <SingleProjectSection
                language={language}
                projectId={projectId}
                project={project}
                imageArray={imageArray}
            />
        </LanguageContext.Provider>
    </BrowserRouter>
);

describe("SingleProjectSection Component", () => {
    // console.log(container.debug());
    it("should render SingleProjectSection", () => {
        const wrapper = container;
        expect(
            wrapper.querySelector(".singleproject-main-section")
        ).toBeInTheDocument();
    });
    it("should render Link Button, that redirect to project overview", () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        const { container } = render(
            <Router history={history}>
                <LanguageContext.Provider value={language}>
                    <SingleProjectSection
                        language={language}
                        projectId={projectId}
                        project={project}
                        imageArray={imageArray}
                    />
                </LanguageContext.Provider>
            </Router>
        );
        expect(container.querySelector(".LINKOVERVIEW")).toBeInTheDocument();
        fireEvent.click(container.querySelector(".LINKOVERVIEW"));

        expect(history.push).toHaveBeenCalledWith("/projects");
    });

    it("should render main Image", () => {
        const { container } = render(
            <BrowserRouter>
                <LanguageContext.Provider value={language}>
                    <SingleProjectSection
                        language={language}
                        projectId={projectId}
                        project={project}
                        imageArray={imageArray}
                    />
                </LanguageContext.Provider>
            </BrowserRouter>
        );
        expect(
            container.querySelector(".singleproject-main-image")
        ).toBeInTheDocument();
    });
    it("should render the try it section and that in upperCase", () => {
        const { container } = render(
            <BrowserRouter>
                <LanguageContext.Provider value={language}>
                    <SingleProjectSection
                        language={language}
                        projectId={projectId}
                        project={project}
                        imageArray={imageArray}
                    />
                </LanguageContext.Provider>
            </BrowserRouter>
        );

        expect(
            container.querySelector(".second-singleproject-article-header")
        ).toBeInTheDocument();
        expect(container.querySelector(".TRY").innerHTML).toEqual("TRY IT");
    });
    it("should render a Link to the project website", () => {
        const { container } = render(
            <BrowserRouter>
                <LanguageContext.Provider value={language}>
                    <SingleProjectSection
                        language={language}
                        projectId={projectId}
                        project={project}
                        imageArray={imageArray}
                    />
                </LanguageContext.Provider>
            </BrowserRouter>
        );
        expect(container.querySelector("#here").getAttribute("href")).toBe(
            "test-host"
        );
    });

    it("should render the GITHUB with h2 section and that in upperCase", () => {
        const { container } = render(
            <BrowserRouter>
                <LanguageContext.Provider value={language}>
                    <SingleProjectSection
                        language={language}
                        projectId={projectId}
                        project={project}
                        imageArray={imageArray}
                    />
                </LanguageContext.Provider>
            </BrowserRouter>
        );
        expect(container.querySelector(".GITHUB").innerHTML).toEqual("GITHUB");
    });
    it("should render a Link to the project githubpage", () => {
        const { container } = render(
            <BrowserRouter>
                <LanguageContext.Provider value={language}>
                    <SingleProjectSection
                        language={language}
                        projectId={projectId}
                        project={project}
                        imageArray={imageArray}
                    />
                </LanguageContext.Provider>
            </BrowserRouter>
        );
        expect(container.querySelector("#GitHub").getAttribute("href")).toBe(
            "test-link"
        );
    });
    it("should render the project  title and that in upperCase", () => {
        const wrapper = shallow(
            <SingleProjectSection
                language={language}
                projectId={projectId}
                project={project}
                imageArray={imageArray}
            />
        );
        expect(wrapper.find(".title1").text()).toEqual("TEST-TITLE1");
    });
    it("should render the project title_second and that in upperCase", () => {
        const wrapper = shallow(
            <SingleProjectSection
                language={language}
                projectId={projectId}
                project={project}
                imageArray={imageArray}
            />
        );
        expect(wrapper.find(".title2").text()).toEqual("TEST-TITLE2");
    });
    it("should render the 3 project content images", () => {
        const { container } = render(
            <BrowserRouter>
                <LanguageContext.Provider value={language}>
                    <SingleProjectSection
                        language={language}
                        projectId={projectId}
                        project={project}
                        imageArray={imageArray}
                    />
                </LanguageContext.Provider>
            </BrowserRouter>
        );
        expect(container.querySelectorAll(".content-image")).toHaveLength(3);
    });
});
