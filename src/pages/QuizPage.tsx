import { useState } from "react";
import Background from "../components/Background";
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

const quizDiv = document.getElementById('quiz-div'),
    questionQuizDiv = document.getElementById('question'),
    answerQuizDiv = document.getElementById('answer'),
    coverAnswer = document.getElementById('cover-answer'),
    nextbutton = document.getElementById('unusable-next-btn'),
    nextBtnDiv = document.getElementById('next-btn-div')


function useIndex() {
    const [currentIndex, setCurrentIndex] = useState(0)

    return { currentIndex, setCurrentIndex }
}

function displayQuestionAnswer() {
    const { currentIndex, setCurrentIndex } = useIndex()

    let currentQuestionAnswer = questionAnswer[currentIndex]
    questionQuizDiv.textContent = currentQuestionAnswer.question

    console.log();


    answerQuizDiv.innerHTML = currentQuestionAnswer.answers.map(answer => {
        return (
            `<button class='answer-btn'>${answer}</button>`
        )
    }).join("")


}
displayQuestionAnswer


function Quiz() {


    return (
        <>
            <div style={{ color: "red" }}>{questionAnswer[0].question}</div>
            <div className='app'>
                <Background />
                <div className='content'>
                    <div id="quiz-div">
                        <div id="question">salut</div>
                        <div id="cover-answer"></div>
                        <div id="answer"></div>

                        <div id="next-btn-div">
                            <button id='unusable-next-btn'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz