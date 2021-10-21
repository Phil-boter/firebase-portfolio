import { useHistory } from "react-router-dom";
import "./style.css";
const BackButton = ({ language }) => {
    const history = useHistory();
    return (
        <div className="singleproject-button-container">
            <button
                onClick={() => history.goBack()}
                className="button singleproject-button"
            >
                {language === "en" ? "Back" : "Zurück"}
            </button>
        </div>
    );
};
export default BackButton;
