import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import "../App.css"

function Home() {
    const navigate = useNavigate()

    return (
        <div className='app'>
            <Background />
            <div className='logo'>

            </div>

            <div className='bestScore'>

            </div>
            <div className='content'>
                <div className='startButton'>
                    <button onClick={() => navigate("/ConfigurationGame")}>
                        Commencer
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;