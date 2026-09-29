import Background from "../components/Background";
import AnswerBtn from "../components/AnswerButton";
import { useState } from "react"
import "../App.css"

let questionAnswer = [
    {
        category: "Culture generale",
        Difficulty: "easy",
        question: "Quelle est la capitale du Cameroun ?",
        answers: ["Yaounde", "Douala", "Bafoussam", "Edea"],
        correctAnswer: "Yaoude"
    },

    {
        category: "Anime",
        Difficulty: "Medium",
        question: "Quel anime kiffes tu en ce moment ?",
        answers: ["One Piece", "Love Unseen", "Mariage Toxin", "Bleach"],
        correctAnswer: "Bleach"
    },

    {
        category: "Objectif",
        Difficulty: "Hard",
        question: "C'est quoi ton objectif pour 2027?'",
        answers: ["Atteindre le petit brice", "Voyager", "Devenir riche", "Juste prendre du poids"],
        correctAnswer: "Atteindre le petit brice"
    }
]



function useIndex() {
    const [currentIndex, setCurrentIndex] = useState(0)

    return { currentIndex, setCurrentIndex }
}




function Quiz() {
    const { currentIndex, setCurrentIndex } = useIndex(),
        [hasChosen, setHasChosen] = useState(false),
        [score, SetScore] = useState(0)


    let currentQuestionAnswer = questionAnswer[currentIndex]

    console.log(currentQuestionAnswer.question);

    let answer = currentQuestionAnswer.answers.map(answer => {
        return (
            <AnswerBtn answer={answer} onclick={makeChoice} />
        )
    })


    function displayQuestionAnswer() {
        if (currentIndex < questionAnswer.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function makeChoice() {
        let selected_answer
        const answerBtn = document.querySelectorAll('.answer-btn'),
            correctAnswer = [...answerBtn].find(element => {
                return element.textContent === currentQuestionAnswer.correctAnswer
            })?.textContent

        if (hasChosen === false) {
            answerBtn.forEach(element => {
                () => {
                    selected_answer = element.textContent
                    if (selected_answer === correctAnswer) {
                        element.classList.add('correct_one')
                        setHasChosen(true)
                        SetScore(score + 1)
                    }
                }
            })
        }

        return (
            <>
                <div className='app'>
                    <Background />
                    <div className='content'>
                        <div id="quiz-div">
                            <div id="question">{currentQuestionAnswer.question}</div>
                            <div id="cover-answer"></div>
                            <div id="answer">{answer}</div>

                            <div id="next-btn-div">
                                <button id='unusable-next-btn' onClick={displayQuestionAnswer}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Quiz