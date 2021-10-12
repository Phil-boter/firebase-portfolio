import { Link } from "react-router-dom";

import "./style.css";
export default function MainPageProjects({ projects, language }) {
    let translation = {};
    if (language === "en") {
        translation = {
            header: "You want to explore more?",
            loading: "project are loading!",
            button: "More Projects",
        };
    } else {
        translation = {
            header: "Du möchtest mehr erfahren?",
            loading: "Projekte werdern geladen!",
            button: "Mehr Projekte",
        };
    }

    return (
        <>
            {" "}
            <div className="main-header main-project-header">
                {translation.header.toUpperCase()}
            </div>
            <div className="section-main-my-projects-wrapper">
                <section className="section-main-my-projects">
                    {!projects || projects.projectsData.length === 0 ? (
                        <p>{translation.loading.toUpperCase()}</p>
                    ) : (
                        projects &&
                        projects.projectsData.map((project, index) => (
                            <div
                                key={index}
                                className="project-short-inner-container "
                            >
                                <figure>
                                    <Link
                                        to={`/singleProject/${project.projectId}`}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    </Link>
                                    <figcaption>
                                        <h4>
                                            {`${project.title}`.toUpperCase()}
                                        </h4>
                                        {project.title_second && (
                                            <h4>
                                                {`${project.title_second}`.toUpperCase()}
                                            </h4>
                                        )}
                                    </figcaption>
                                </figure>
                            </div>
                        ))
                    )}
                </section>
            </div>
            <div className="button-container">
                <Link to="/projects">
                    <button className="button button-project-short">
                        {translation.button}
                    </button>
                </Link>
            </div>
        </>
    );
}
