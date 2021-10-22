import React from "react";
import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
import Main from "./Index";
import MainPageAbout from "../../components/mainPageAbout/Index";
import MainPageProjects from "../../components/mainPageProjects/Index";
import EmailComponent from "../../components/email/Index";

describe("Main", () => {
    const main = shallow(<Main />);

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
        expect(main.find(MainPageProjects).length).toBe(1);
    });
    it("should render Email Component", () => {
        expect(main.find(EmailComponent).length).toBe(1);
    });
});
