
interface AnswerBtnProps {
    answer: string;
    onclick: (answer: string) => void;
    incorrect: boolean;
    correct: boolean;
    hasChosen: boolean;
}



function AnswerBtn({ answer,
    onclick,
    incorrect,
    correct,
    hasChosen
}: AnswerBtnProps) {
    let className = "answer-btn";
    if (hasChosen && correct) {
        className = "correct"
    } else if (incorrect) {
        className = "incorrect"
    }

    return (
        <>
            <button className={className} onClick={() =>
                onclick(answer)
            }
                disabled={hasChosen}>
                {answer}
            </button >
        </>
    )
}


export default AnswerBtn