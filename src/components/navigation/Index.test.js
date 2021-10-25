import { shallow } from "enzyme";

import { BrowserRouter, Router } from "react-router-dom";

import { createMemoryHistory } from "history";

import { render, fireEvent, screen } from "@testing-library/react";

import Navigation from "./Index.js";

let language = "en";

describe("Navigation Component", () => {
    const wrapper = shallow(<Navigation language={language} />);

    it("should render Navigation correctly", () => {
        expect(wrapper.find(".header").length).toBe(1);
    });

    it("should render language corectly en if language en", () => {
        let label = wrapper.find(".language-label");
        expect(label.text()).toEqual("en");
    });

    it("should render language corectly de if language de", () => {
        language = "de";
        const wrapper = shallow(<Navigation language={language} />);
        let label = wrapper.find(".language-label");
        expect(label.text()).toEqual("de");
    });

    it("should open mobile menue when clicked", () => {
        const { container } = render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        expect(wrapper.find(".mobile-menu").length).toBe(1);
        fireEvent.click(container.querySelector(".mobile-menu"));
        expect(container.querySelector(".bar1")).toHaveStyle(
            "transform: rotate(45deg) translate(10.5px, 7.5px)"
        );
    });

    it("should render the navigation link contact which redirect to matching contact route", () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        render(
            <Router history={history}>
                <Navigation language={language} />
            </Router>
        );

        fireEvent.click(screen.getByTestId("contact"));
        expect(history.push).toHaveBeenCalledWith("/contact");
    });

    it("should render the navigation link about which redirect to matching about route", () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        render(
            <Router history={history}>
                <Navigation language={language} />
            </Router>
        );

        fireEvent.click(screen.getByTestId("about"));
        expect(history.push).toHaveBeenCalledWith("/about");
    });

    it("should render the navigation link project which redirect to projects route", () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        render(
            <Router history={history}>
                <Navigation language={language} />
            </Router>
        );

        fireEvent.click(screen.getByTestId("project"));
        expect(history.push).toHaveBeenCalledWith("/projects");
    });
});
