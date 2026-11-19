import "../App.css"

interface NextScoreBtnProps {
    onclick: () => void;
    hasChosen: boolean;
}


function ScoreBtn({
    onclick,
    hasChosen
}: NextScoreBtnProps) {
    let className = "unusable-btn"

    if (hasChosen) {
        className = "btn-usable"
    }

    return (
        <>
            <button className={className} onClick={() =>
                onclick()
            }
                disabled={!hasChosen}>
                Score
            </button >
        </>
    )
}

export default ScoreBtn