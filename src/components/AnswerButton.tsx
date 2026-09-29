import '../App.css'

interface AnswerBtnProps {
    answer: string;
    onclick: () => void;
}



function AnswerBtn({ answer, onclick }: AnswerBtnProps) {
    return (
        <>
            <button className='answer-btn' onClick={onclick}>
                {answer}
            </button >
        </>
    )
}


export default AnswerBtn