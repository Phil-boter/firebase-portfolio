import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

import ProjectsOverview from "../../components/projects/projectsOverview/Index";

export default function Projects() {
    const projects = useContext(DataContext);
    console.log("projects in route", projects.projectData);
    return (
        <>
            <ProjectsOverview projects={projects} />
        </>
    );
}
