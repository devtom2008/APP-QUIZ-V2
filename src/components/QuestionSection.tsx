type QuestionProps = {
    question: string
}

function QuestionSection({
    question
}: QuestionProps) {


    return (
        <div id="question">
            {question}
        </div>
    )
}

export default QuestionSection