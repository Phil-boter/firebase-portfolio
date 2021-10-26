import { shallow } from "enzyme";

import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

import { fireEvent, render } from "@testing-library/react";

import MainPageProjects from "./Index.js";

let language = "en";
const projects = {
    projectsData: [
        {
            projectId: "DtwV1g82I9yuKZn4YCra",
            images: [
                "/assets/monkey2.png",
                "/assets/monkey3.png",
                "/assets/monkey4.png",
            ],
            date: {
                seconds: 1634767200,
                nanoseconds: 0,
            },
            tech_de:
                "Meine Social Network App basiert im Frontend auf React.js. Für das State-Management kommt Redux zum Einsatz. Im Backend basiert die App auf Node.js/Express und für die Datenbank habe ich postgreSQL verwendet.  Um die Echtzeit-Chat-Funktionalität zu implementieren, habe ich Socket.io verwendet. Außerdem habe ich den AWS Cloud Service genutzt, um zwei weitere Features zu realisieren. Zum einen die Möglichkeit, das User-Passwort zurückzusetzen, die auf AWS SES basiert. Und zum anderen den Bild-Upload für den Benutzer-Account, der auf AWS S3 basiert.Für das Unit-Testing im Frontend habe ich Jest.js verwendet.",
            desc_en:
                "I builded this project during my attendance to the Coding Bootcamp at Spiced Academy's in Berlin. Users can sign up, sign in, logout. With AWS SES the user is able to reset the password. Signed-in the user is possible to upload a profile picture with the help of AWS s3 and edit the profile. There is also the possibility to write wallposts and attach pictures to them, other users can read them when they call up the profile. The user can also make friend-request, accept or ignore them, watch already accepted requests and delete existing friendships. The  There is also a build in search function to search for new frienships. With socket.io there is also a real time chat implemented. Users can also send private messages, if they are friends. Tests are made with Jest.js. ",
            title: "Social",
            title_second: "Network",
            tech_en:
                "My social network app is based on React.js in the frontend. For state-management Redux comes in place. In the backend the app is based on Node.js/Express and for the database I used postgreSQL. To implement the real time chat functionalty I used socket.io. I also used AWS cloud service to realise two more features. On the one hand the possibilty to reset the user-password, which is based on AWS SES. And on the other hand the image upload for the user-account, which is based on AWS S3. For unit-testing in the frontend I used Jest.js.",
            link: "https://github.com/Phil-boter/social-network",
            image: "/assets/monkey1.png",
            desc_de:
                "Ich habe dieses Projekt während meiner Teilnahme am Coding Bootcamp der Spiced Academy in Berlin entwickelt. Benutzer können sich anmelden, einloggen und abmelden. Mit AWS SES kann der Benutzer das Passwort zurücksetzen. Angemeldet kann der Nutzer mit Hilfe von AWS s3 ein Profilbild hochladen und das Profil bearbeiten. Es besteht auch die Möglichkeit, Wallposts zu schreiben und Bilder anzuhängen, die andere Nutzer lesen können, wenn sie das Profil aufrufen. Der Nutzer kann auch Freundschaftsanfragen stellen, diese annehmen oder ignorieren, bereits angenommene Anfragen ansehen und bestehende Freundschaften löschen. Es gibt auch eine eingebaute Suchfunktion, um nach neuen Freundschaften zu suchen.Mit Socket.io ist auch ein Echtzeit-Chat implementiert.  Benutzer können auch private Nachrichten senden, wenn sie befreundet sind. Unittests wurden mit Jest.js durchgeführt. ",
        },
    ],
};

describe("MainPageProjects Component", () => {
    const wrapper = shallow(
        <MainPageProjects language={language} projects={projects} />
    );

    it("should render MainPageProjects correctly", () => {
        expect(wrapper.find(".section-main-about").length).toBe(1);
    });
    it("should have a header  'You want to explore more?'  to uppercase", () => {
        expect(wrapper.find("h1").text()).toEqual(
            "YOU WANT TO EXPLORE MORE?More Projects"
        );
    });
    it("should render MainpageProjects main image with src and alt", () => {
        wrapper.find("#main-page-image-test");
        expect(wrapper.find("#main-page-image-test").length).toBe(1);
        expect(wrapper.find("#main-page-image-test").prop("src")).toEqual(
            "/assets/monkey1.png"
        );
        expect(wrapper.find("#main-page-image-test").prop("alt")).toEqual(
            "Social"
        );
    });
    it("should render button, that redirect to projects overview when Clicked", async () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        const { container } = render(
            <Router history={history}>
                <MainPageProjects language={language} projects={projects} />
            </Router>
        );

        fireEvent.click(container.querySelector("#main-page-redirect-test"));
        expect(history.push).toHaveBeenCalledWith("/projects");
    });
    it("should link, that redirect to single project when Clicked", async () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        const { container } = render(
            <Router history={history}>
                <MainPageProjects language={language} projects={projects} />
            </Router>
        );

        fireEvent.click(container.querySelector("#main-page-projects-link"));
        expect(history.push).toHaveBeenCalledWith(
            "/singleProject/DtwV1g82I9yuKZn4YCra"
        );
    });
    it("should render the header in german if language is de and all to upperCase", () => {
        const wrapper = shallow(
            <MainPageProjects language={"de"} projects={projects} />
        );
        expect(wrapper.find("h1").text()).toEqual(
            "DU MÖCHTEST MEHR ERFAHREN?Mehr Projekte"
        );
    });
});
