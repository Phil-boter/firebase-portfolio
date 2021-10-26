import { Link } from "react-router-dom";

import { useContext, useEffect } from "react";

import { ResizeContext } from "../../../context/ResizeContext";
import useIsDesktopHook from "../../../hooks/useIsDesktopHook";

import "./style.css";

const SingleProject = ({ project }) => {
    return (
        <div className="singleproject-main-container">
            <Link
                to={`/singleProject/${project.projectId}`}
                id="project-overview-link-test"
            >
                <article className="singleproject-inner-container">
                    <img
                        className="singleproject-image"
                        id="singleproject-image"
                        src={project.image}
                        alt={project.title}
                    />

                    <div className="singleproject-header">
                        <h2 className="singleproject-title">
                            {project.title.toUpperCase()}
                        </h2>
                        {project.title_second ? (
                            <h2 className="singleproject-title title2">
                                {project.title_second.toUpperCase()}
                            </h2>
                        ) : (
                            <></>
                        )}
                    </div>
                </article>
            </Link>
        </div>
    );
};

export default function ProjectsOverview({ projects, language }) {
    const { dimensions } = useContext(ResizeContext);
    const [desktop, renderImage] = useIsDesktopHook(true);

    useEffect(() => {
        renderImage(dimensions);
    }, [dimensions, desktop, renderImage]);

    if (!projects || projects.projectsData.length === 0) {
        return <p>Loadig...</p>;
    }
    return (
        <>
            <section className="section section-projectoverview">
                {desktop && (
                    <div className="section-image section-image-project">
                        <img
                            className="section-inner-image"
                            src="/assets/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg"
                            alt="laptop in front of a window and a lamp at the right side"
                        />
                    </div>
                )}
                <div className="main-header projects-main-header">
                    {language === "en" ? (
                        <h1>{"find out more".toUpperCase()}</h1>
                    ) : (
                        <h1>{"finde mehr heraus".toUpperCase()}</h1>
                    )}

                    <div className="projects-main-container">
                        {projects &&
                            projects.projectsData.map((project, index) => (
                                <SingleProject key={index} project={project} />
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}
