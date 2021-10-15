import SingleProjectComponent from "../../components/projects/singleProject/Index";
import "./style.css";

const SingleProject = ({ projectId, language }) => {
    return (
        <>
            <SingleProjectComponent projectId={projectId} language={language} />
        </>
    );
};
export default SingleProject;
