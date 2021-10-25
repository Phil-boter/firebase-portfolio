import { shallow } from "enzyme";

import { BrowserRouter } from "react-router-dom";

import { render, fireEvent, waitFor } from "@testing-library/react";

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
    it("should change language in Click", async () => {
        language = "en";
        const { container } = render(
            <BrowserRouter>
                <Navigation language={language} />
            </BrowserRouter>
        );
        fireEvent.click(container.querySelector(".language-label"));
        await waitFor(() =>
            expect(
                container.querySelector(".language-label").innerHTML
            ).toEqual("de")
        );
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
});
