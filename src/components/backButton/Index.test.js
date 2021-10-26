import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";

import { createMemoryHistory } from "history";
import BackButton from "./Index.js";
let language = "en";

describe("AboutSection Component", () => {
    const { container } = render(<BackButton language={language} />);
    it("should render the backbutton correctly", () => {
        expect(container.querySelector(".back-button").innerHTML).toEqual(
            "Back"
        );
    });
    it("should render Link, that redirrct to GitHub if Click", () => {
        const history = createMemoryHistory();
        history.goBack = jest.fn();
        const { container } = render(
            <Router history={history}>
                <BackButton language={language} />
            </Router>
        );
        expect(container.querySelector(".back-button")).toBeInTheDocument();
        fireEvent.click(container.querySelector(".back-button"));

        expect(history.goBack).toHaveBeenCalled();
    });
    it("should render Zurück if language is eqaul to de", () => {
        const { container } = render(<BackButton language={"de"} />);
        expect(container.querySelector(".back-button").innerHTML).toEqual(
            "Zurück"
        );
    });
});
