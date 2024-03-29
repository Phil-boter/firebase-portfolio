import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

import ProjectsOverview from "../../components/projects/projectsOverview/Index";

export default function Projects({ language }) {
    const projects = useContext(DataContext); 
    
    return (
        <>
            <ProjectsOverview projects={projects} language={language} />
        </>
    );
}
