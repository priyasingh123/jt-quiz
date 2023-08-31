
import { useEffect, useState } from 'react'
import './QuestionBoard.css'


const QuestionBoard = ({setTotalQues}) => {
    const [questionBank, setQuestionBank] = useState([])
    useEffect(() => {
        async function fetchData() {
          const data = await fetch('https://opentdb.com/api.php?amount=15')
          const response = await data.json()
          console.log (response)
          setQuestionBank(response.results)
          const arr = Array(response.results.length).fill({visited: false, attempted:0})
          setTotalQues(arr)
        }
        fetchData();
      }, []);


    return (
        <>
        <div>Question Bank</div>
        {questionBank.map ((question, index) => {
            console.log ('index', index)
            return <Question key={index} index={index} question={question.question} correct_answer={question.correct_answer} incorrect_answers={question.incorrect_answers}/>
        })}
        </>
    )
}

const Question = ({question, correct_answer, incorrect_answers, index}) => {
    return (
        <div className="question">
            <p>{`${index}: ${question}`}</p>
        </div>
    )
}

export default QuestionBoard