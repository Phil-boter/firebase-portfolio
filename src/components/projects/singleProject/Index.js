import { useEffect, useState, useContext} from "react";
import { useHistory, useParams } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";

import "./style.css";

import SingleProjectSection from "../singleProjectSection/Index";

export default function SingleProjectComponent({language }) {
    const history = useHistory();
    const  {projectsData } = useContext(DataContext);
    const {id} = useParams();
    
    const [project, setProject] = useState({});
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 2000);
        history.goBack();
    };

    const getData = async () => {
        try {
            if (projectsData) {
                setProject(projectsData[Number(id) -1]);
            }
        } catch (err) {
            handleError();
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getData()
    }, []);

    return (
        <div className="single-project-main-container">
            <div className="single-project-main-inner-container">
                <SingleProjectSection
                    projectId={id}
                    project={project}
                    language={language}
                />
            </div>

            {error && <h2>It must be here somewhere...</h2>}
        </div>
    );
}
