import { useHistory } from "react-router-dom";
import "./style.css";
const BackButton = ({ language }) => {
    const history = useHistory();
    return (
        <div className="back-button-container">
            <button
                onClick={() => history.goBack()}
                className="button back-button"
            >
                {language === "en" ? "Back" : "Zurück"}
            </button>
        </div>
    );
};
export default BackButton;
