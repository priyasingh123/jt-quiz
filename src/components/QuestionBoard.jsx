
import { useEffect, useState } from 'react'
import './QuestionBoard.css'


const QuestionBoard = ({setTotalQues, totalQues}) => {
    const [questionBank, setQuestionBank] = useState([])
    const [quesNum, setQuesNum] = useState(0)

    useEffect(() => {
        async function fetchData() {
          const data = await fetch('https://opentdb.com/api.php?amount=15')
          const response = await data.json()
        //   console.log (response)
          setQuestionBank(response?.results)
          const arr = Array(response?.results?.length).fill({visited: false, attempted:""})
          setTotalQues(arr)
        }
        fetchData();
      }, []);


    return (
        <>
            {questionBank.length > 0 && 
                <>
                <Question
                //todo try to avoid making quesNum as state
                    index={quesNum}
                    question={questionBank[quesNum].question}
                    correct_answer={questionBank[quesNum].correct_answer}
                    incorrect_answers={questionBank[quesNum].incorrect_answers} 
                    setTotalQues={setTotalQues}
                    totalQues={totalQues}
                />
                <button disabled={quesNum === 0? true:false} onClick={()=>setQuesNum((quesNum) => quesNum-1)}>&larr; PREVIOUS</button>
                <button disabled={quesNum === questionBank.length-1? true:false} onClick={()=>setQuesNum((quesNum) => quesNum+1)}>NEXT &rarr;</button>
                </>
            }
        </>
    )
}

const Question = ({question, correct_answer, incorrect_answers, index, totalQues, setTotalQues}) => {
    const options = [...incorrect_answers, correct_answer]
    //todo: put random logic for options
    console.log (totalQues)
    const handleChange = (e) => {
        const updatedTotalQues = totalQues.map ((ques, ind) => 
            ind === index ? {...ques, attempted: e.target.value, visited: true}: ques
        )
        setTotalQues(updatedTotalQues)
    }
    return (
        <div className="question">
            <p>{`${index+1}. ${question}`}</p>

            {options.map ((option) => {
                return (
                    <div key={option} className='option'>
                        {console.log (`${index}-${option === totalQues[index].attempted}`)}
                        <label ><input type="radio" name={`${question}-${index+1}`} value={option} checked={option === totalQues[index].attempted? true: false} onChange={handleChange} />{option}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default QuestionBoard

// const Option = ({option, index, setTotalQues, totalQues}) => {
//     const handleChange = (e) => {
//         console.log (e)
//     }

//     return (
//         <div className='option'>
//             <label ><input type="radio" id="option" name="option" value={totalQues[index].attempted} onChange={handleChange} />{option}</label>
//         </div>
//     )
// }