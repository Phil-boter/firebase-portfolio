import React from "react";

import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
import About from "./Index";
import AboutSection from "../../components/aboutSection";

describe("About Route", () => {
    const wrapper = shallow(<About />);

    it("should render the AboutSection", () => {
        expect(wrapper.find(AboutSection).length).toBe(1);
    });
});
