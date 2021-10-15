import { useHistory } from "react-router-dom";
import "./style.css";
const BackButton = () => {
    const history = useHistory();
    return (
        <div className="singleproject-button-container">
            <button
                onClick={() => history.goBack()}
                className="button singleproject-button"
            >
                back
            </button>
        </div>
    );
};
export default BackButton;
