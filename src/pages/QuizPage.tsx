import Background from "../components/Background";
import AnswerBtn from "../components/AnswerButton";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import NextScoreBtn from "../components/NextScoreBtn"
import QuitBtn from "../components/QuitBtn"
import QuestionSection from "../components/QuestionSection"
import "../App.css"

let questionAnswer = [
    {
        category: "Culture generale",
        Difficulty: "easy",
        question: "Quelle est la capitale du Cameroun ?",
        answers: ["Yaounde", "Douala", "Bafoussam", "Edea"],
        correctAnswer: "Yaounde"
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
    },

    {
        category: "Objectif",
        Difficulty: "Hard",
        question: "Quelle business envisage tu de faire ?",
        answers: ["Videos IA", "Dropshipping", "Dealer", "Vente de croquettes"],
        correctAnswer: "Dropshipping"
    }
]



function useIndex() {
    const [currentIndex, setCurrentIndex] = useState(0)

    return { currentIndex, setCurrentIndex }
}




function Quiz() {
    const { currentIndex, setCurrentIndex } = useIndex(),
        [hasChosen, setHasChosen] = useState(false),
        [score, setScore] = useState(0),
        [selectAnswer, setSelectAnswer] = useState<string | null>(null),
        navigate = useNavigate(),
        effect = useEffect(() => {
            console.log(score);
        }, [score])

    let currentQuestionAnswer = questionAnswer[currentIndex]


    const correctAnswer = currentQuestionAnswer.correctAnswer

    console.log(currentQuestionAnswer.question);



    function displayQuestionAnswer() {
        if (currentIndex < questionAnswer.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setHasChosen(false)
        }

    }

    function verifyIndex() {
        if (currentIndex === questionAnswer.length - 1) {
            return true;
        } else {
            return false;
        }
    }



    function makeChoice(answer: string) {

        if (hasChosen) {
            return
        }

        setSelectAnswer(answer);
        setHasChosen(true);

        if (answer === correctAnswer) {
            setScore(score + 1)
            console.log("Bonne reponse")
            console.log(answer);
            effect
            console.log(hasChosen);
        } else {
            console.log("Mauvaise reponse")
            console.log(score);
            effect
            console.log(answer);
            console.log(hasChosen);
        }


    }
    let answerBtn = currentQuestionAnswer.answers.map(answer => {
        return (
            <AnswerBtn key={answer} answer={answer} onclick={() => makeChoice(answer)}
                incorrect={selectAnswer === answer}
                correct={answer === correctAnswer}
                hasChosen={hasChosen} />
        )
    })


    return (
        <>
            <div className='app'>
                <Background />
                <div className='content'>
                    <div id="quiz-div">
                        <QuestionSection question={currentQuestionAnswer.question} />
                        <div id="answer">{answerBtn}</div>

                        <div id="next-quit-div">
                            <QuitBtn onclick={() => navigate("/")} />
                            <NextScoreBtn functionProp={displayQuestionAnswer} hasChosen={hasChosen} questionAnswerLength={verifyIndex()} score={score} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz