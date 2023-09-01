
import { useEffect, useState } from 'react'
import Report from './Report'
import Timer from './Timer'
import './QuestionBoard.css'


const QuestionBoard = ({setTotalQues, totalQues, quesNum, setQuesNum}) => {
    //todo: dont set questionBank as state
    const [questionBank, setQuestionBank] = useState([])
    const [showReport, setShowReport] = useState(false)

    useEffect(() => {
        async function fetchData() {
          const data = await fetch('https://opentdb.com/api.php?amount=15')
          const response = await data.json()
        //   console.log (response)
          setQuestionBank(response?.results)
        //   const arr = Array(response?.results?.length).fill({visited: false, attempted:""})
            const arr = Array.from ({length:response?.results?.length }, ()=> ({visited: false, attempted: ''}))
          setTotalQues(arr)
        }
        fetchData();
      }, []);


      const handleSubmit = () => {
        // console.log ('SUBMIT ',totalQues)
        setShowReport(true)
      }
    return (
        <>  
            {questionBank.length > 0 && !showReport && 
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
                <Timer setShowReport={setShowReport}/>
                {/* todo: disabled make addition in class to show disabled */}
                <div>
                <button className="btn" disabled={quesNum === 0? true:false} onClick={()=>setQuesNum((quesNum) => quesNum-1)}>&larr; PREVIOUS</button>
                <button className="btn" disabled={quesNum === questionBank.length-1? true:false} onClick={()=>setQuesNum((quesNum) => quesNum+1)}>NEXT &rarr;</button>
                <button className="btn" onClick={handleSubmit}>SUBMIT</button>
                </div>
                </>
            }
            {showReport && <Report questionBank={questionBank} totalQues={totalQues}/>}
        </>
    )
}

const Question = ({question, correct_answer, incorrect_answers, index, totalQues, setTotalQues}) => {
    const options = [...incorrect_answers, correct_answer]
    //todo: put random logic for options
    // console.log (totalQues)

    useEffect(() => {
        // console.log ('index',index)
        const visitedTotalQues = totalQues.map ((ques, ind) => 
            ind === index ? {...ques, visited: true}: ques
        )
        setTotalQues(visitedTotalQues)
    },[index])

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
                    <div key={`${index}-${option}`} className='option'>
                        {/* {console.log (`${index}-${option === totalQues[index].attempted}`)} */}
                        <label ><input type="radio" name={`${question}-${index+1}`} value={option} checked={option === totalQues[index].attempted? true: false} onChange={handleChange} />{option}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default QuestionBoard