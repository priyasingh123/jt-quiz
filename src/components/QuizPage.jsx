import QuestionBoard from './QuestionBoard'
import NavigationBar from './NavigationBar';
import {useState} from 'react'

const QuizPage = () => {
    const [totalQues, setTotalQues] = useState([])
    const [quesNum, setQuesNum] = useState(0)
    const [showReport, setShowReport] = useState(false)
    return (
        
        <div className='quiz-page'>
            {!showReport && 
            <NavigationBar totalQues={totalQues} setQuesNum={setQuesNum} quesNum={quesNum} />}
            <QuestionBoard setTotalQues={setTotalQues} totalQues={totalQues} setQuesNum={setQuesNum} quesNum={quesNum} setShowReport={setShowReport} showReport={showReport}/>
        </div>
    )
}
export default QuizPage;