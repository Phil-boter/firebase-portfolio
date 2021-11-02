import React from "react";
import { shallow, render } from "enzyme";

import ArticleHeader from "./Index.js";

let header = "test-header";
let styling = "test-class";

describe("Articleheader component", () => {
    it("should render Articleheader correctly and match snapshot", () => {
        let wrapper = render(
            <ArticleHeader header={header} styling={styling} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should render H2 with classname='test-class'", () => {
        const wrapper = shallow(
            <ArticleHeader header={header} styling={styling} />
        );
        expect(wrapper.find("h2").hasClass("test-class")).toBe(true);
    });
    it("should render H2 with classname='test-header'.toUpperCase()", () => {
        const wrapper = shallow(
            <ArticleHeader header={header} styling={styling} />
        );
        expect(wrapper.find("h2").hasClass("TEST-HEADER")).toBe(true);
    });
    it("should render H2 with title test-header", () => {
        const wrapper = shallow(
            <ArticleHeader header={header} styling={styling} />
        );
        expect(wrapper.find("h2").text()).toEqual("test-header");
    });
});
