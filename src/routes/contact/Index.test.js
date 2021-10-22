import React from "react";

import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
import Contact from "./Index";
import ContactSection from "../../components/contactSection/Index";

describe("Contact Route", () => {
    const main = shallow(<Contact />);
    it("should render the ContactSection", () => {
        expect(main.find(ContactSection).length).toBe(1);
    });
});
