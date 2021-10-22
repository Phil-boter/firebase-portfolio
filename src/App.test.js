import React from "react";

import { shallow, mount, render } from "enzyme";
// import toJson from "enzyme-to-json";

import App from "./App";

const wrapped = render(<App />);

describe("App", () => {
    it("should render App component correctly", () => {
        expect(wrapped).toMatchSnapshot();
    });
});
