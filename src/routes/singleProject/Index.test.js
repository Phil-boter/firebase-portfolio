import React from "react";

import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
// -------Inintializing fireBase--------------
import firebase from "../../Firebase/config";
// -------Inintializing fireBase--------------

import SingleProject from "./Index";
import SingleProjectComponent from "../../components/projects/singleProject/Index";

const projectId = "DtwV1g82I9yuKZn4YCra";
const language = "wn";

describe("Project Route", () => {
    const wrapper = shallow(
        <SingleProject projectId={projectId} language={language} />
    );

    it("should render the SinglePorjectComponent", () => {
        expect(wrapper.find(SingleProjectComponent).length).toBe(1);
    });
});
