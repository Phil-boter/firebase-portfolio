import React, { useEffect, useState } from "react";

import { getFirestore, collection, query, getDocs } from "firebase/firestore";

export const DataContext = React.createContext();

export function DataProvider({ children }) {
    const [projectsData, setCurrentProjectData] = useState();
    const [loading, setLoading] = useState(true);

    const db = getFirestore();
    // const analytics = getAnalytics(app);

    async function getProjects() {
        try {
            let projects = [];
            const q = query(collection(db, "projects"));
            const querySnapshot = await getDocs(q);
            await querySnapshot.forEach((doc, index) => {
                const data = doc.data();
                projects.push(data);
            });
            setCurrentProjectData(projects);
            setLoading(false);
        } catch (error) {
            console.log(error);
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
