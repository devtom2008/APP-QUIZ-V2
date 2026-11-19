import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import { useState, useEffect } from "react";
import CircularProgress from "../components/circleProgress";
import Comment from "../components/Comment"
import "../App.css"

function ScorePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const finalScore = location.state?.score ?? 0;
    const [displayedScore, setDisplayedScore] = useState(0);

    useEffect(() => {
        const duration = 300; // Durée : 1,5 seconde
        let animationFrame: number;
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (startTime === null) {
                startTime = currentTime;
            }
            const elapsedTime = currentTime - startTime;

            const progress = Math.min(elapsedTime / duration, 1);

            const currentScore = Math.floor(
                progress * finalScore
            );
            setDisplayedScore(currentScore);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [finalScore]);




    return (
        <div className='app'>
            <Background />
            <div className='content'>
                <CircularProgress score={displayedScore} maxScore={20} />
                <Comment displayedScore={displayedScore} />
                <div><button onClick={() => navigate("/ConfigurationGame")} className="replay-btn">replay</button></div>
            </div>
        </div>
    )
}

export default ScorePage