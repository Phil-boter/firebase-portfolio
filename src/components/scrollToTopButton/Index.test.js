import React from "react";

import { shallow, render } from "enzyme";

import ScrollToTopButton from "./Index";

const showScroll = true;

describe("ScrollToTopButton component", () => {
    let wrapper = shallow(<ScrollToTopButton showScroll={showScroll} />);
    it("should render ScrollToTopButton correctly and match snapshot", () => {
        const { container } = render(<ScrollToTopButton />);
        expect(container).toMatchSnapshot();
    });

    it("should render the ScrollToTop Button container", () => {
        expect(wrapper.find(".scroll-top-button").length).toBe(1);
    });
    it("should not render the ScrollToTopButton when offset < 400", () => {
        let offWrapper = shallow(<ScrollToTopButton showScroll={false} />);
        expect(offWrapper.find(".scroll-top-button").length).toBe(0);
    });
    it("scrolls to position top:0 when button is clicked", () => {
        const scrollToSpy = jest.fn();
        global.scrollTo = scrollToSpy;
        wrapper.find(".scroll-top-button").simulate("click");
        expect(scrollToSpy).toHaveBeenCalled();
        expect(window.scrollTo).toBeCalledWith({ top: 0, behavior: "smooth" });
    });
});
