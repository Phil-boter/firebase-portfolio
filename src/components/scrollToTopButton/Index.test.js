import React from "react";

import { shallow } from "enzyme";

// import toJson from "enzyme-to-json";
import ScrollToTopButton from "./Index";

const showScroll = true;
global.scrollTo = jest.fn();
const windowOff = (window.pageYOffset = 401);

let wrapper = shallow(<ScrollToTopButton showScroll={showScroll} />);
describe("ScrolltoTpop component", () => {
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
