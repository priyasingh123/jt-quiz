
import { useEffect, useState, useRef } from 'react'
import Report from './Report'
import Question from './Question'
import Timer from './Timer'
import ShimmerUI from './ShimmerUI'
import "./../index.css"
import _ from 'lodash'


const QuestionBoard = ({ setTotalQues, totalQues, quesNum, setQuesNum, setShowReport, showReport, username }) => {
    //todo: dont set questionBank as state
    const [questionBank, setQuestionBank] = useState([]);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        async function fetchData() {
            try {
                const data = await fetch('https://opentdb.com/api.php?amount=15')
                const response = await data.json()
                const questionBankData = response?.results;


                setQuestionBank(questionBankData)

                const arr = questionBankData.map((ques) => {
                    return { visited: false, attempted: '', mcq: shuffleOptions([...ques.incorrect_answers, ques.correct_answer]) }
                })
                setTotalQues(arr)

            }
            catch (error) {
                // todo: show error page 
                console.log('Error ', error)
            }
        }
        fetchData();
        hasFetched.current = true;
    }, []);


    const handleSubmit = () => {
        console.log('SUBMIT ', totalQues)
        setShowReport(true)
    }

    return (
        <>  {!showReport ?
            (questionBank?.length > 0 ?
                <div className='question-group'>

                    <div className='question-timer'>

                        <Question
                            //todo try to avoid making quesNum as state
                            index={quesNum}
                            question={questionBank[quesNum].question}
                            setTotalQues={setTotalQues}
                            totalQues={totalQues}
                        />
                        <Timer setShowReport={setShowReport} />
                    </div>

                    {/* todo: disabled make addition in class to show disabled */}
                    <div className="buttons">
                        <button className="btn" disabled={quesNum === 0 ? true : false} onClick={() => setQuesNum((quesNum) => quesNum - 1)}>&larr; PREVIOUS</button>
                        <button className="btn" disabled={quesNum === questionBank?.length - 1 ? true : false} onClick={() => setQuesNum((quesNum) => quesNum + 1)}>NEXT &rarr;</button>
                    </div>
                    <div className="buttons">
                        <button className="btn" onClick={handleSubmit}>SUBMIT</button>
                    </div>
                </div> :
                <ShimmerUI />
            ) :
            (showReport && <Report username={username} questionBank={questionBank} totalQues={totalQues} />)
        }
        </>
    )
}

const shuffleOptions = (arr) => {
    const shuffledOptions = [...arr];
    shuffledOptions.sort(() => Math.random() - 0.5)
    return shuffledOptions;
};



export default QuestionBoard