import QuestionBoard from './QuestionBoard'
import NavigationBar from './NavigationBar';
import {useState} from 'react'
import "./../index.css"

const QuizPage = ({username}) => {
    const [totalQues, setTotalQues] = useState([])
    const [quesNum, setQuesNum] = useState(0)
    const [showReport, setShowReport] = useState(false)
    return (
        
        <div className='quiz-page'>
            {!showReport && 
            <NavigationBar totalQues={totalQues} setQuesNum={setQuesNum} quesNum={quesNum} />}
            <QuestionBoard setTotalQues={setTotalQues} totalQues={totalQues} 
            setQuesNum={setQuesNum} quesNum={quesNum} setShowReport={setShowReport} showReport={showReport} username={username}/>
        </div>
    )
}
export default QuizPage;