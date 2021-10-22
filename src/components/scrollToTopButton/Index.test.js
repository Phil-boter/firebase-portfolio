import React from "react";

import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
import ScrollToTopButton from "./Index";

const showScroll = true;

let wrapper = shallow(<ScrollToTopButton showScroll={showScroll} />);
describe("ScrolltoTpop component", () => {
    it("should render the ScrollToTop Button", () => {
        expect(wrapper.find(".scroll-top-button").length).toBe(1);
    });
});
