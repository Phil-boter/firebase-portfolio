import React, { useEffect, useState} from "react";


export const DataContext = React.createContext();

export function DataProvider({ children }) {
    const [projectsData, setCurrentProjectData] = useState();
    const [loading, setLoading] = useState(true);

    async function getProjects() {
            let projects = [];
            fetch("http://localhost:3500/v1/projects/allProjects")
            .then((response) => {
                if (!response.ok) {
                  throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                  );
                }
                return response.json();
              })
              .then((data)=> {
                console.log("data", data)
                    projects = data.rows;
                    setCurrentProjectData(projects);
                    setLoading(false);
                
        })
    }

    useEffect(() => {
        console.log("use effect")
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
