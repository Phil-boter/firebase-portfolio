import React from "react";

// -------Inintializing fireBase--------------
import firebase from "../../Firebase/config";
// -------Inintializing fireBase--------------

import { shallow, mount } from "enzyme";
// import toJson from "enzyme-to-json";
import Main from "./Index";
import MainPageAbout from "../../components/mainPageAbout/Index";

describe("Main", () => {
    const main = shallow(<Main />);
    console.log(main.debug());

    it("should render first title Philipp Dawid", () => {
        expect(main.find(".scrollHeader").length).toBe(1);
    });
    it("should render second title JFSD", () => {
        expect(main.find(".scrollPortfolio").length).toBe(1);
    });
    it("should render MainPageAbout Component", () => {
        expect(main.find(MainPageAbout).length).toBe(1);
    });
    it("should render MainPageProject Component", () => {
        expect(main.find(MainPageAbout).length).toBe(1);
    });
    it("should render Email Component", () => {
        expect(main.find(MainPageAbout).length).toBe(1);
    });
});
