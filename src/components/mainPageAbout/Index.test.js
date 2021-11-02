import { shallow } from "enzyme";

import { Router, BrowserRouter } from "react-router-dom";

import { createMemoryHistory } from "history";

import { render, fireEvent } from "@testing-library/react";

import MainPageAbout from "./Index.js";

let language = "en";

describe("MainPageAbout Component", () => {
    it("should render correctly and match snapshot", () => {
        const { container } = render(
            <BrowserRouter>
                <MainPageAbout language={language} />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
    it("should render MainPageAbout correctly", () => {
        const wrapper = shallow(<MainPageAbout language={language} />);
        expect(wrapper.find(".section-main-about").length).toBe(1);
    });
    it("should have a header GET TO KNOW ME uppercase", () => {
        const wrapper = shallow(<MainPageAbout language={language} />);
        expect(wrapper.find("h1").text()).toEqual("GET TO KNOW ME!");
    });
    it("should render about page main image", () => {
        const wrapper = shallow(<MainPageAbout language={language} />);
        wrapper.find(".section-inner-image");
        expect(wrapper.find(".section-inner-image").length).toBe(1);
        expect(wrapper.find(".section-inner-image").prop("src")).toEqual(
            "/assets/content-pixie-iXRVqQtBa_8-unsplash.jpg"
        );
    });
    it("should render button, that redirect to about if Clicked", async () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        const { container } = render(
            <Router history={history}>
                <MainPageAbout language={language} />
            </Router>
        );
        fireEvent.click(container.querySelector(".main-page-about-link"));

        expect(history.push).toHaveBeenCalledWith("/about");
    });
});
