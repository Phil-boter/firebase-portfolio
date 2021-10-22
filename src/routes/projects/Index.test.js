import React from "react";

import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
import Project from "./Index";
import ProjectsOverview from "../../components/projects/projectsOverview/Index";

describe("Project Route", () => {
    const wrapper = shallow(<Project />);

    it("should render the AboutSection", () => {
        expect(wrapper.find(ProjectsOverview).length).toBe(1);
    });
});
