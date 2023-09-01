import QuestionBoard from './QuestionBoard'
import NavigationBar from './NavigationBar';
import {useState} from 'react'

const QuizPage = () => {
    const [totalQues, setTotalQues] = useState([])
    const [quesNum, setQuesNum] = useState(0)
    return (
        
        <div className='quiz-page'>
            <NavigationBar totalQues={totalQues} setQuesNum={setQuesNum} quesNum={quesNum}/>
            <QuestionBoard setTotalQues={setTotalQues} totalQues={totalQues} setQuesNum={setQuesNum} quesNum={quesNum}/>
        </div>
    )
}
export default QuizPage;