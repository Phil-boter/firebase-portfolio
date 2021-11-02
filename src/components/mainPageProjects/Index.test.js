import { shallow } from "enzyme";

import { BrowserRouter, Router } from "react-router-dom";

import { createMemoryHistory } from "history";

import { fireEvent, render } from "@testing-library/react";

import MainPageProjects from "./Index.js";

let language = "en";
const projects = {
    projectsData: [
        {
            projectId: "12345",
            images: [
                "/assets/test2.png",
                "/assets/test3.png",
                "/assets/test4.png",
            ],
            date: {
                seconds: 1634767200,
                nanoseconds: 0,
            },
            tech_de: "tech-de",
            desc_en: "desc-en",
            title: "test1",
            title_second: "test2",
            tech_en: "tech-en",
            link: "https://github.com/Phil-boter/social-network",
            image: "/assets/test1.png",
            desc_de: "desc-de",
        },
    ],
};

describe("MainPageProjects Component", () => {
    const wrapper = shallow(
        <MainPageProjects language={language} projects={projects} />
    );

    it("should render MainPageProjects correctly and match snapshot", () => {
        const { container } = render(
            <BrowserRouter>
                <MainPageProjects language={language} projects={projects} />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });

    it("should render MainPageProjects correctly", () => {
        expect(wrapper.find(".section-main-about").length).toBe(1);
    });
    it("should have a header  'You want to explore more?'  to uppercase", () => {
        expect(wrapper.find("h1").text()).toEqual(
            "YOU WANT TO EXPLORE MORE?More Projects"
        );
    });
    it("should render MainPageProjects main image with src and alt", () => {
        wrapper.find("#main-page-image-test");
        expect(wrapper.find("#main-page-image-test").length).toBe(1);
        expect(wrapper.find("#main-page-image-test").prop("src")).toEqual(
            "/assets/test1.png"
        );
        expect(wrapper.find("#main-page-image-test").prop("alt")).toEqual(
            "test1"
        );
    });
    it("should render button, that redirect to projects overview when Clicked", async () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        const { container } = render(
            <Router history={history}>
                <MainPageProjects language={language} projects={projects} />
            </Router>
        );

        fireEvent.click(container.querySelector("#main-page-redirect-test"));
        expect(history.push).toHaveBeenCalledWith("/projects");
    });
    it("should link, that redirect to single project with specific id when Clicked", async () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        const { container } = render(
            <Router history={history}>
                <MainPageProjects language={language} projects={projects} />
            </Router>
        );

        fireEvent.click(container.querySelector("#main-page-projects-link"));
        expect(history.push).toHaveBeenCalledWith("/singleProject/12345");
    });
    it("should render the header in german if language is de and all to upperCase", () => {
        const wrapper = shallow(
            <MainPageProjects language={"de"} projects={projects} />
        );
        expect(wrapper.find("h1").text()).toEqual(
            "DU MÖCHTEST MEHR ERFAHREN?Mehr Projekte"
        );
    });
});
