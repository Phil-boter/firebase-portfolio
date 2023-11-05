import React, { useEffect, useState} from "react";
import axios from "axios";


export const DataContext = React.createContext();

export function DataProvider({ children }) {
    const [projectsData, setCurrentProjectData] = useState();
    const [loading, setLoading] = useState(true);

    async function getProjects() {
        try {
            let projects = [];
            const response = await axios.get("http://localhost:3500/v1/projects/allProjects");
            if(response) {
                projects = response.data.rows;
                setCurrentProjectData(projects);
                setLoading(false);
            }
        }
        catch(err) {
            throw new Error(
                `This is an HTTP error: The status is ${err}`
              );
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    const value = {
        projectsData,
    };

    return (
        <DataContext.Provider value={value}>
            {!loading && children}
        </DataContext.Provider>
    );
}
