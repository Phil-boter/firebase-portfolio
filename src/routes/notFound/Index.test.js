import React from "react";

import { render } from "enzyme";

import NotFound from "./Index";

let language = "en";
describe("About Route", () => {
    const wrapper = render(<NotFound language={language} />);

    it("should render the NotFoundPage and match Snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should have an h1 headerline with text 'Sorry!' to upperCase if language is en", () => {
        expect(wrapper.find("h1").text()).toEqual("SORRY!");
    });

    it("should have an h1 headerline with text 'ENTSCHULDIGE!' to upperCase if language is de", () => {
        language = "de";
        const wrapper = render(<NotFound language={language} />);
        expect(wrapper.find("h1").text()).toEqual("ENTSCHULDIGE!");
    });
});
