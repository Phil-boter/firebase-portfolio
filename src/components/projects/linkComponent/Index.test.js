import React from "react";
import { shallow, render } from "enzyme";

import LinkComponent from "./Index.js";

let link = "test-link";
let text = "test-text";
let styling = "test-class";

describe("LinkComponent component", () => {
    it("should render LinkComponent correctly to match snapshot", () => {
        let wrapper = render(<LinkComponent />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should have a span with className='test-class'", () => {
        const wrapper = shallow(
            <LinkComponent link={link} text={text} styling={styling} />
        );
        expect(wrapper.find("span").hasClass("test-class")).toBe(true);
    });
    it("should have an a href='test-link'", () => {
        const wrapper = shallow(
            <LinkComponent link={link} text={text} styling={styling} />
        );
        expect(wrapper.find("a").props()).toEqual({
            children: "test-text",
            href: "test-link",
            id: "test-text",
            rel: "noreferrer",
            target: "_blank",
        });
        expect(wrapper.find("a").prop("id")).toEqual("test-text");
    });
});
