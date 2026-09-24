import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import "../App.css"

function ConfigurationGame() {
    const navigate = useNavigate()

    return (
        <div className='app'>
            <Background />
            <div className='content'>
                <button onClick={() => navigate("/quiz")}>
                    Commencer
                </button>
            </div>
        </div>
    )
}

export default ConfigurationGame;