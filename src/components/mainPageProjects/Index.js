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
            <div className="main-header main-project-header">
                <h1>{translation.header.toUpperCase()}</h1>
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
                                <Link
                                    to={`/singleProject/${project.projectId}`}
                                >
                                    <figure>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                        />

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
                                </Link>
                            </div>
                        ))
                    )}
                </section>
            </div>
            <div className="button-container" id="scroll-point">
                <Link to="/projects">
                    <button className="button button-project-short">
                        {translation.button}
                        <img
                            src="/assets/arrow1.png"
                            alt="arrow points right"
                        />
                    </button>
                </Link>
            </div>
        </>
    );
}
