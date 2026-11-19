import "../App.css"
import { useNavigate } from "react-router-dom";
import ScoreBtn from "./ScoreBtn";
import NextBtn from "./NextBtn";

interface NextScoreBtnProps {
    functionProp: () => void
    hasChosen: boolean;
    questionAnswerLength: boolean;
    score: number;
}


function NextScoreBtn({
    functionProp,
    hasChosen,
    questionAnswerLength,
    score
}: NextScoreBtnProps) {
    const navigate = useNavigate()

    if (questionAnswerLength) {
        return (
            <>
                <ScoreBtn onclick={() => navigate("/ScorePage", { state: { score: score } })} hasChosen={hasChosen} />
            </>
        )
    } else {
        return (
            <>
                <NextBtn onclick={() => functionProp()} hasChosen={hasChosen} />
            </>
        )
    }


}

export default NextScoreBtn