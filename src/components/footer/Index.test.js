import React from "react";

import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
import Footer from "./Index";
import { MemoryRouter } from "react-router";

let click;

const mockUseLocationValue = {
    pathname: "/",
    search: "",
    hash: "",
    state: null,
};
jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useLocation: jest.fn().mockImplementation(() => {
        return mockUseLocationValue;
    }),
}));

describe("Footer component", () => {
    mockUseLocationValue.pathname = "/contact";
    const wrapper = shallow(<Footer />);
    click = false;
    it("should render the Footer", () => {
        expect(wrapper.find(".footer-article").length).toBe(1);
    });

    // it("scrolls to position top:0 when button is clicked", () => {
    //     const scrollToSpy = jest.fn();
    //     global.scrollTo = scrollToSpy;
    //     wrapper.find(".scroll-top-button").simulate("click");
    //     expect(scrollToSpy).toHaveBeenCalled();
    //     expect(window.scrollTo).toBeCalledWith({ top: 0, behavior: "smooth" });
    // });
});
