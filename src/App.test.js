import React from "react";

import { render, mount } from "enzyme";
import App from "./App";

describe("App", () => {
    let wrapper = render(<App />);
    it("should render App component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    wrapper = mount(<App />).find(".app-test");
    expect(wrapper.hasClass("app-test")).toEqual(true);
});
