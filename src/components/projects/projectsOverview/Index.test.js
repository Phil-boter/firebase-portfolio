import React from "react";

import { fireEvent, render } from "@testing-library/react";

import { ResizeProvider } from "../../../context/ResizeContext.js";

import { BrowserRouter, Router } from "react-router-dom";

import { createMemoryHistory } from "history";
import ProjectsOverview from "./Index.js";

let language = "en";

const projects = {
    projectsData: [
        {
            title: "test-title1",
            title_second: "test-title2",
            desc_en: "test-desc-en",
            desc_de: "test-desc-de",
            tech_en: "test-tech-en",
            tech_de: "test-tech-de",
            projectId: "12345",
            image: "/assets/test1.png",
            link: "test-link",
            host: "test-host",
            images: [
                "/assets/test2.png",
                "/assets/test3.png",
                "/assets/test4.png",
            ],
        },
    ],
};

describe("ProjectsOverView Component", () => {
    it("should render ProjectsOverview", () => {
        const { container } = render(
            <BrowserRouter>
                <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                    <ProjectsOverview language={language} projects={projects} />
                </ResizeProvider>
            </BrowserRouter>
        );
        expect(
            container.querySelector(".section-projectoverview")
        ).toBeInTheDocument();
    });
    it("should render the 1 project image in the overview", () => {
        const { container } = render(
            <BrowserRouter>
                <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                    <ProjectsOverview language={language} projects={projects} />
                </ResizeProvider>
            </BrowserRouter>
        );
        expect(container.querySelectorAll(".singleproject-image")).toHaveLength(
            1
        );
    });
    it("should have an image with an headline in uppercase", () => {
        const { container } = render(
            <BrowserRouter>
                <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                    <ProjectsOverview language={language} projects={projects} />
                </ResizeProvider>
            </BrowserRouter>
        );
        expect(
            container.querySelector(".singleproject-title").innerHTML
        ).toEqual("TEST-TITLE1");
        expect(container.querySelector(".title2").innerHTML).toEqual(
            "TEST-TITLE2"
        );
    });
    it("should render Link Button, that redirect to single project", () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        const { container } = render(
            <Router history={history}>
                <ResizeProvider dimensions={{ height: 1000, widht: 1300 }}>
                    <ProjectsOverview language={language} projects={projects} />
                </ResizeProvider>
            </Router>
        );
        expect(
            container.querySelector("#project-overview-link-test")
        ).toBeInTheDocument();
        fireEvent.click(container.querySelector("#project-overview-link-test"));

        expect(history.push).toHaveBeenCalledWith("/singleProject/12345");
    });
});
