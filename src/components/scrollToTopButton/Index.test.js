import React from "react";

import { shallow } from "enzyme";

import ScrollToTopButton from "./Index";

const showScroll = true;

describe("ScrolltoTpop component", () => {
    let wrapper = shallow(<ScrollToTopButton showScroll={showScroll} />);
    it("should render the ScrollToTop Button", () => {
        expect(wrapper.find(".scroll-top-button").length).toBe(1);
    });
    it("should not render the ScrollToTop Button when offset < 400", () => {
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