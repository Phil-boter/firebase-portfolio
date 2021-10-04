import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageProvider";

import "./style.css";

const SingleProject = ({ project }) => {
    return (
        <div className="singleproject-main-container">
            <Link to={`/singleProject/${project.projectId}`}>
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

export default function ProjectsOverview({ projects }) {
    const { language, setLanguage, toggleLanguage } =
        useContext(LanguageContext);
    if (!projects || projects.projectsData.length === 0) {
        return <p>Loadig...</p>;
    }

    return (
        <div className="projects-main-container">
            {language === "en" ? (
                <h1>{"find out more".toUpperCase()}</h1>
            ) : (
                <h1>{"finde mehr heraus".toUpperCase()}</h1>
            )}

            {projects &&
                projects.projectsData.map((project, index) => (
                    <SingleProject key={index} project={project} />
                ))}
        </div>
    );
}
